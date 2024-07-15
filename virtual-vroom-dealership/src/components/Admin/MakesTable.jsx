import { useSelector } from "react-redux";
import Pager from "../UI/Pager";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../UI/SearchBar";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import MakeModal from "./MakeModal";

export default function MakesTable() {
  const navigate = useNavigate();

  const allCarMakes = useSelector((state) => state.makes.makes);
  const allCars = useSelector((state) => state.vehicles.vehicles);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [searchQuery, setSearchQuery] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editMake, setEditMake] = useState(null);

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

  return (
    <div>
      <SearchBar onSearch={handleSearch} placeholder="Search by make" />
      {showModal && (
        <MakeModal open={showModal} make={editMake} onClose={handleHideForm} />
      )}
      <button onClick={handleMakeModal} className="btn btn-success">
        Add Make
      </button>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th onClick={() => requestSort("id")} className="cursor-pointer">
              ID {getSortIcon("id")}
            </th>
            <th onClick={() => requestSort("make")} className="cursor-pointer">
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
                  className="w-20 h-10 object-contain rounded-lg"
                  src={make.imageUrl}
                  alt={make.make}
                />
              </td>
              <td>{make.id}</td>
              <td>{make.make}</td>
              <td>{getCarCountForMake(make.make)}</td>
              <td className="flex gap-2">
                <button
                  onClick={() => navigate(`/models/${make.make.toLowerCase()}`)}
                  className="btn btn-sm btn-primary"
                >
                  View Cars
                </button>
                <button
                  onClick={() => handleMakeModal(make)}
                  className="btn btn-sm btn-warning"
                >
                  Edit
                </button>
                <button className="btn btn-sm btn-error">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center gap-4 mb-10">
        <Pager
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
