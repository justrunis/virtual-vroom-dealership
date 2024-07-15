import {
  FaWrench,
  FaCalendarAlt,
  FaRoad,
  FaCar,
  FaGasPump,
} from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { TbWheel, TbManualGearboxFilled } from "react-icons/tb";
import VehicleDetailItem from "./VehicleDetailItem";

const startDelay = 0.6;

export default function VehicleDetailsList({ car }) {
  return (
    <div className="overflow-x-auto">
      <ul className="w-full flex flex-col gap-2 p-4">
        <li className="flex flex-wrap bg-gray-100">
          <VehicleDetailItem
            icon={FaWrench}
            title="Make"
            value={car.make}
            delay={startDelay}
          />
          <VehicleDetailItem
            icon={TbWheel}
            title="Model"
            value={car.model}
            delay={startDelay + 0.2}
          />
        </li>
        <li className="flex flex-wrap">
          <VehicleDetailItem
            icon={FaCalendarAlt}
            title="Year"
            value={car.year}
            delay={startDelay + 0.4}
          />
          <VehicleDetailItem
            icon={FaRoad}
            title="Mileage"
            value={`${car.mileage.toLocaleString()} km`}
            delay={startDelay + 0.6}
          />
        </li>
        <li className="flex flex-wrap bg-gray-100">
          <VehicleDetailItem
            icon={FaCar}
            title="Type"
            value={car.type}
            delay={startDelay + 0.8}
          />
          <VehicleDetailItem
            icon={FaDroplet}
            title="Color"
            value={car.color}
            delay={startDelay + 1}
          />
        </li>
        <li className="flex flex-wrap">
          <VehicleDetailItem
            icon={FaGasPump}
            title="Fuel type"
            value={car.fuelType}
            delay={startDelay + 1.2}
          />
          <VehicleDetailItem
            icon={TbManualGearboxFilled}
            title="Transmission"
            value={car.gearboxType}
            delay={startDelay + 1.4}
          />
        </li>
      </ul>
    </div>
  );
}
