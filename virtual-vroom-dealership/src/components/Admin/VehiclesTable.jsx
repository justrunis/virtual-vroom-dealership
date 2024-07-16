import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import Pager from "../UI/Pager";
import { currencyFormatter } from "../../utils/formating";
import SearchBar from "../UI/SearchBar";
import VehicleModal from "./VehicleModal";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../UI/ConfirmationModal";
import { useDispatch } from "react-redux";
import { vehiclesActions } from "../../store/slices/vehiclesSlice";

export default function VehiclesTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allVehicles = useSelector((state) => state.vehicles.vehicles);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [searchQuery, setSearchQuery] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editVehicle, setEditVehicle] = useState(null);

  const [isDeleting, setIsDeleting] = useState(false);

  const vehiclesPerPage = 8;

  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;

  let currentVehicles = [...allVehicles];

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
    setCurrentPage(1);
  };

  const filteredVehicles = currentVehicles.filter(
    (vehicle) =>
      vehicle.make.toLowerCase().includes(searchQuery) ||
      vehicle.model.toLowerCase().includes(searchQuery)
  );

  const sortedVehicles = () => {
    if (sortConfig.key) {
      filteredVehicles.sort((a, b) => {
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
    return filteredVehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);
  };

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  let totalPages = 0;
  if (filteredVehicles.length > 0) {
    totalPages = Math.ceil(filteredVehicles.length / vehiclesPerPage);
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

  function handleVehicleModal(vehicle) {
    if (vehicle) {
      setEditVehicle(vehicle);
    }
    setShowModal(true);
  }

  function handleHideForm() {
    setShowModal(false);
  }

  function showVehicleRemoveModal(vehicle) {
    setEditVehicle(vehicle);
    setIsDeleting(true);
  }

  function handleVehicleRemove() {
    dispatch(vehiclesActions.removeVehicle(editVehicle.id));
    setIsDeleting(false);
  }

  return (
    <>
      <div className="overflow-x-auto">
        <SearchBar onSearch={handleSearch} placeholder="Search Vehicles" />
        {showModal && (
          <VehicleModal
            open={showModal}
            vehicle={editVehicle}
            onClose={handleHideForm}
          />
        )}
        {isDeleting && (
          <ConfirmationModal
            open={isDeleting}
            onClose={() => setIsDeleting(false)}
            onConfirm={handleVehicleRemove}
            title="Delete Vehicle"
            message={`Are you sure you want to delete ${editVehicle.make} ${editVehicle.model}?`}
          />
        )}
        <button onClick={handleVehicleModal} className="btn btn-success">
          Add Vehicle
        </button>
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
              <th
                onClick={() => requestSort("model")}
                className="cursor-pointer"
              >
                Model {getSortIcon("model")}
              </th>
              <th
                onClick={() => requestSort("year")}
                className="cursor-pointer"
              >
                Year {getSortIcon("year")}
              </th>
              <th
                onClick={() => requestSort("price")}
                className="cursor-pointer"
              >
                Price {getSortIcon("price")}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedVehicles().map((vehicle) => (
              <tr key={vehicle.id}>
                <td>
                  <img
                    src={vehicle.imageUrl}
                    alt={vehicle.make + " " + vehicle.model}
                    className="w-20 h-10 object-cover rounded-lg"
                  />
                </td>
                <th className="font-normal">{vehicle.id}</th>
                <td>{vehicle.make}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.year}</td>
                <td>{currencyFormatter.format(vehicle.price)}</td>
                <td className="flex flex-col lg:flex-row gap-1 lg:gap-2">
                  <button
                    onClick={() => navigate(`/vehicle/${vehicle.id}`)}
                    className="btn btn-sm btn-primary"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleVehicleModal(vehicle)}
                    className="btn btn-sm btn-warning"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => showVehicleRemoveModal(vehicle)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
      <div className="flex justify-center items-center gap-4 m-5">
        <Pager
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
