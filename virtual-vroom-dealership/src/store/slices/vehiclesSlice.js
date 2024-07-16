import { createSlice } from "@reduxjs/toolkit";
import { cars } from "../../data/cars";

const initialVehiclesState = {
  vehicles: cars,
  totalQuantity: cars.length,
};

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: initialVehiclesState,
  reducers: {
    addVehicle(state, action) {
      const {
        make,
        model,
        year,
        price,
        imageUrl,
        color,
        mileage,
        type,
        gearboxType,
        fuelType,
      } = action.payload;

      state.vehicles.push({
        id: state.vehicles.length + 1,
        make,
        model,
        year,
        price: parseFloat(price),
        imageUrl,
        color,
        mileage,
        type,
        gearboxType,
        fuelType,
      });
      state.totalQuantity++;
    },
    updateVehicle(state, action) {
      console.log(action.payload);
      const { id, vehicle } = action.payload;
      const {
        make,
        model,
        year,
        price,
        imageUrl,
        color,
        mileage,
        type,
        gearboxType,
        fuelType,
      } = vehicle;

      const existingVehicle = state.vehicles.find((v) => v.id === id);
      if (existingVehicle) {
        existingVehicle.make = make;
        existingVehicle.model = model;
        existingVehicle.year = year;
        existingVehicle.price = parseFloat(price);
        existingVehicle.imageUrl = imageUrl;
        existingVehicle.color = color;
        existingVehicle.mileage = mileage;
        existingVehicle.type = type;
        existingVehicle.gearboxType = gearboxType;
        existingVehicle.fuelType = fuelType;
      }
    },
    removeVehicle(state, action) {
      const id = action.payload;
      const existingVehicle = state.vehicles.find((v) => v.id === id);
      if (existingVehicle) {
        state.vehicles = state.vehicles.filter((v) => v.id !== id);
        state.totalQuantity--;
      }
    },
  },
});

export const vehiclesActions = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
