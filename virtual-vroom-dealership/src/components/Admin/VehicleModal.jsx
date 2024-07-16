import Modal from "../UI/Modal";
import { useState } from "react";
import Input from "../UI/Input";
import { useSelector } from "react-redux";
import Select from "../UI/Select";
import ImagePicker from "../UI/ImagePicker";
import { colors, carTypes, gearboxTypes, fuelTypes } from "../../data/cars";
import { validateVehicle } from "../../utils/validation";
import { useDispatch } from "react-redux";
import { vehiclesActions } from "../../store/slices/vehiclesSlice";

export default function VehicleModal({ open, onClose, vehicle = null }) {
  const dispatch = useDispatch();
  const allCarMakes = useSelector((state) => state.makes.makes);

  const [vehicleData, setVehicleData] = useState({
    make: "" || vehicle.make,
    model: "" || vehicle.model,
    year: "" || vehicle.year,
    price: "" || vehicle.price,
    imageUrl: "" || vehicle.imageUrl,
    color: "" || vehicle.color,
    mileage: "" || vehicle.mileage,
    type: "" || vehicle.make ? vehicle.type : "",
    gearboxType: "" || vehicle.gearboxType,
    fuelType: "" || vehicle.fuelType,
  });

  const [errors, setErrors] = useState({
    make: false,
    model: false,
    year: false,
    price: false,
    imageUrl: false,
    color: false,
    mileage: false,
    type: false,
    gearboxType: false,
    fuelType: false,
  });

  function startsWith(str, prefix) {
    if (!str) return false;
    return str.slice(0, prefix.length) === prefix;
  }

  function onSubmit(e) {
    e.preventDefault();
    let imageUrl = vehicleData.imageUrl;

    if (!startsWith(vehicleData.imageUrl, "http") && vehicleData.imageUrl) {
      if (!startsWith(vehicleData.imageUrl, "blob:")) {
        // create a blob link for image if it doesn't exist already
        const blob = new Blob([vehicleData.imageUrl], {
          type: vehicleData.imageUrl.type,
        });
        imageUrl = URL.createObjectURL(blob);
      }
    }

    const formData = {
      make: vehicleData.make,
      model: vehicleData.model,
      year: vehicleData.year,
      price: vehicleData.price,
      imageUrl: imageUrl,
      color: vehicleData.color,
      mileage: vehicleData.mileage,
      type: vehicleData.type,
      gearboxType: vehicleData.gearboxType,
      fuelType: vehicleData.fuelType,
    };

    // do validation here
    const errors = validateVehicle(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      if (vehicle?.make) {
        dispatch(
          vehiclesActions.updateVehicle({ id: vehicle.id, vehicle: formData })
        );
        onClose();
      } else {
        dispatch(vehiclesActions.addVehicle(formData));
        onClose();
      }
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      className="w-half h-half overflow-y-auto"
    >
      <h2 className="text-2xl font-bold">
        {vehicle?.make ? "Edit Vehicle" : "Add Vehicle"}
      </h2>
      <form
        className="grid grid-cols-1 xl:grid-cols-2 gap-6"
        onSubmit={onSubmit}
      >
        <div className="space-y-4">
          <div className="w-full">
            <Select
              label="Make"
              className="input input-primary w-full md:w-auto"
              value={vehicleData.make}
              options={allCarMakes}
              renderOption={(option) => option.make}
              onChange={(event) =>
                setVehicleData({ ...vehicleData, make: event.target.value })
              }
            />
            {errors.make && (
              <p className="text-red-500 text-sm italic">{errors.make}</p>
            )}
          </div>
          <div className="w-full">
            <Input
              label="Model"
              className="input input-primary w-full md:w-auto"
              labelClass="block mb-1"
              value={vehicleData.model}
              onChange={(event) =>
                setVehicleData({ ...vehicleData, model: event.target.value })
              }
            />
            {errors.model && (
              <p className="text-red-500 text-sm italic">{errors.model}</p>
            )}
          </div>
          <div className="w-full">
            <Input
              label="Year"
              className="input input-primary w-full md:w-auto"
              labelClass="block mb-1"
              type="number"
              min="1900"
              max={new Date().getFullYear()}
              value={vehicleData.year}
              onChange={(event) =>
                setVehicleData({ ...vehicleData, year: event.target.value })
              }
            />
            {errors.year && (
              <p className="text-red-500 text-sm italic">{errors.year}</p>
            )}
          </div>
          <div className="w-full">
            <Input
              label="Price"
              className="input input-primary w-full md:w-auto"
              labelClass="block mb-1"
              type="number"
              value={vehicleData.price}
              onChange={(event) =>
                setVehicleData({ ...vehicleData, price: event.target.value })
              }
            />
            {errors.price && (
              <p className="text-red-500 text-sm italic">{errors.price}</p>
            )}
          </div>
          <div className="w-full">
            <ImagePicker
              label={"Vehicle Image"}
              name={"imageUrl"}
              value={vehicleData.imageUrl}
              onChange={(file) =>
                setVehicleData({ ...vehicleData, imageUrl: file })
              }
            />
            {errors.imageUrl && (
              <p className="text-red-500 text-sm italic">{errors.imageUrl}</p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="w-full">
            <Select
              label="Color"
              className="input input-primary w-full md:w-auto"
              value={vehicleData.color}
              options={colors}
              renderOption={(option) => option}
              onChange={(event) =>
                setVehicleData({ ...vehicleData, color: event.target.value })
              }
            />
            {errors.color && (
              <p className="text-red-500 text-sm italic">{errors.color}</p>
            )}
          </div>
          <div className="w-full">
            <Input
              label="Mileage"
              className="input input-primary w-full md:w-auto"
              labelClass="block mb-1"
              value={vehicleData.mileage}
              onChange={(event) =>
                setVehicleData({ ...vehicleData, mileage: event.target.value })
              }
            />
            {errors.mileage && (
              <p className="text-red-500 text-sm italic">{errors.mileage}</p>
            )}
          </div>
          <div className="w-full">
            <Select
              label="Type"
              className="input input-primary w-full md:w-auto"
              value={vehicleData.type}
              options={carTypes}
              renderOption={(option) => option}
              onChange={(event) =>
                setVehicleData({ ...vehicleData, type: event.target.value })
              }
            />
            {errors.type && (
              <p className="text-red-500 text-sm italic">{errors.type}</p>
            )}
          </div>
          <div className="w-full">
            <Select
              label="Gearbox Type"
              className="input input-primary w-full md:w-auto"
              value={vehicleData.gearboxType}
              options={gearboxTypes}
              renderOption={(option) => option}
              onChange={(event) =>
                setVehicleData({
                  ...vehicleData,
                  gearboxType: event.target.value,
                })
              }
            />
            {errors.gearboxType && (
              <p className="text-red-500 text-sm italic">
                {errors.gearboxType}
              </p>
            )}
          </div>
          <div className="w-full">
            <Select
              label="Fuel Type"
              className="input input-primary w-full md:w-auto"
              value={vehicleData.fuelType}
              options={fuelTypes}
              renderOption={(option) => option}
              onChange={(event) =>
                setVehicleData({ ...vehicleData, fuelType: event.target.value })
              }
            />
            {errors.fuelType && (
              <p className="text-red-500 text-sm italic">{errors.fuelType}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-4 md:col-span-2 mb-20">
          <button type="submit" className="btn btn-success">
            Save
          </button>
          <button onClick={onClose} type="button" className="btn btn-error">
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
