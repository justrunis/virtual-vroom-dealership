import { useSelector } from "react-redux";
import Pager from "../UI/Pager";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../UI/SearchBar";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import MakeModal from "./MakeModal";
import ConfirmationModal from "../UI/ConfirmationModal";
import { useDispatch } from "react-redux";
import { makesActions } from "../../store/slices/makesSlice";

export default function MakesTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allCarMakes = useSelector((state) => state.makes.makes);
  const allCars = useSelector((state) => state.vehicles.vehicles);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [searchQuery, setSearchQuery] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editMake, setEditMake] = useState(null);

  const [isDeleting, setIsDeleting] = useState(false);

  const makesPerPage = 8;

  const indexOfLastMake = currentPage * makesPerPage;
  const indexOfFirstMake = indexOfLastMake - makesPerPage;

  let currentMakes = allCarMakes;

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
    setCurrentPage(1);
  };

  const filteredMakes = currentMakes.filter((make) =>
    make.make.toLowerCase().includes(searchQuery)
  );

  const sortedMakes = () => {
    if (sortConfig.key) {
      filteredMakes.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortConfig.direction === "ascending"
            ? aValue - bValue
            : bValue - aValue;
        } else {
          return sortConfig.direction === "ascending"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
      });
    }
    return filteredMakes.slice(indexOfFirstMake, indexOfLastMake);
  };

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  let totalPages = 0;
  if (filteredMakes.length > 0) {
    totalPages = Math.ceil(filteredMakes.length / makesPerPage);
  }

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? (
        <FaSortUp />
      ) : (
        <FaSortDown />
      );
    }
    return <FaSort />;
  };

  function getCarCountForMake(make) {
    return allCars.filter((car) => car.make === make).length;
  }

  function handleMakeModal(make) {
    if (make) {
      setEditMake(make);
    }
    setShowModal(true);
  }

  function handleHideForm() {
    setShowModal(false);
  }

  function showMakeRemoveModal(make) {
    setEditMake(make);
    setIsDeleting(true);
  }

  function handleMakeRemove() {
    dispatch(makesActions.removeMake(editMake.id));
    setIsDeleting(false);
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} placeholder="Search Makes" />
      {showModal && (
        <MakeModal open={showModal} make={editMake} onClose={handleHideForm} />
      )}
      {isDeleting && (
        <ConfirmationModal
          open={isDeleting}
          onClose={() => setIsDeleting(false)}
          onConfirm={handleMakeRemove}
          message={`Are you sure you want to delete ${editMake.make}?`}
        />
      )}
      <button onClick={handleMakeModal} className="btn btn-success">
        Add Make
      </button>
      <div className="overflow-x-auto">
        <table className="table-xs sm:table-sm md:table-md lg:table w-full table-zebra table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>Image</th>
              <th onClick={() => requestSort("id")} className="cursor-pointer">
                ID {getSortIcon("id")}
              </th>
              <th
                onClick={() => requestSort("make")}
                className="cursor-pointer"
              >
                Make {getSortIcon("make")}
              </th>
              <th>Car Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedMakes().map((make) => (
              <tr key={make.id}>
                <td>
                  <img
                    className="w-10 h-5 lg:w-20 lg:h-10 object-contain rounded-lg"
                    src={make.imageUrl}
                    alt={make.make}
                  />
                </td>
                <td>{make.id}</td>
                <td>{make.make}</td>
                <td>{getCarCountForMake(make.make)}</td>
                <td className="flex flex-col lg:flex-row gap-1 lg:gap-2">
                  <button
                    onClick={() =>
                      navigate(`/models/${make.make.toLowerCase()}`)
                    }
                    className="btn btn-sm md:btn-md btn-primary"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleMakeModal(make)}
                    className="btn btn-xs md:btn-md btn-warning"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => showMakeRemoveModal(make)}
                    className="btn btn-xs md:btn-md btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center gap-4 m-5">
        <Pager
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
