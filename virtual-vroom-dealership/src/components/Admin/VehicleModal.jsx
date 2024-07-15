import Modal from "../UI/Modal";
import { useState } from "react";
import Input from "../UI/Input";
import { useSelector } from "react-redux";
import Select from "../UI/Select";

export default function VehicleModal({ open, onClose, vehicle = null }) {
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

  return (
    <Modal open={open} onClose={onClose} className="w-1/2">
      <h2 className="text-2xl font-bold">
        {vehicle?.make ? "Edit Vehicle" : "Add Vehicle"}
      </h2>
      <form>
        <Select
          label="Make"
          className="input input-primary"
          labelClass="my-3"
          value={vehicle.make}
          options={allCarMakes}
          renderOption={(option) => option.make}
        />

        <Input
          label="Model"
          className="input input-primary"
          labelClass="my-3"
          value={vehicleData.model}
          onChange={(event) =>
            setVehicleData({ ...vehicleData, model: event.target.value })
          }
        />
        <Input
          label="Year"
          className="input input-primary"
          labelClass="my-3"
          value={vehicleData.year}
          onChange={(event) =>
            setVehicleData({ ...vehicleData, year: event.target.value })
          }
        />
        <Input
          label="Price"
          className="input input-primary"
          labelClass="my-3"
          value={vehicleData.price}
          onChange={(event) =>
            setVehicleData({ ...vehicleData, price: event.target.value })
          }
        />
        <Input
          label="Image URL"
          className="input input-primary"
          labelClass="my-3"
          value={vehicleData.imageUrl}
          onChange={(event) =>
            setVehicleData({ ...vehicleData, imageUrl: event.target.value })
          }
        />
        <Input
          label="Color"
          className="input input-primary"
          labelClass="my-3"
          value={vehicleData.color}
          onChange={(event) =>
            setVehicleData({ ...vehicleData, color: event.target.value })
          }
        />
        <Input
          label="Mileage"
          className="input input-primary"
          labelClass="my-3"
          value={vehicleData.mileage}
          onChange={(event) =>
            setVehicleData({ ...vehicleData, mileage: event.target.value })
          }
        />
        <Input
          label="Type"
          className="input input-primary"
          labelClass="my-3"
          value={vehicleData.type}
          onChange={(event) =>
            setVehicleData({ ...vehicleData, type: event.target.value })
          }
        />
        <Input
          label="Gearbox Type"
          className="input input-primary"
          labelClass="my-3"
          value={vehicleData.gearboxType}
          onChange={(event) =>
            setVehicleData({ ...vehicleData, gearboxType: event.target.value })
          }
        />
        <Input
          label="Fuel Type"
          className="input input-primary"
          labelClass="my-3"
          value={vehicleData.fuelType}
          onChange={(event) =>
            setVehicleData({ ...vehicleData, fuelType: event.target.value })
          }
        />
        <div className={`flex justify-start gap-4 mt-4`}>
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}
