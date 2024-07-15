import { createSlice } from "@reduxjs/toolkit";
import { cars } from "../../data/cars";

const initialVehiclesState = {
  vehicles: cars,
  totalQuantity: 0,
};

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: initialVehiclesState,
  reducers: {
    addVehicle(state, action) {
      const vehicle = action.payload;
      const existingVehicle = state.vehicles.find((v) => v.id === vehicle.id);
      if (!existingVehicle) {
        state.vehicles.push({
          id: vehicle.id,
          make: vehicle.make,
          model: vehicle.model,
          imageUrl: vehicle.imageUrl,
          price: parseFloat(vehicle.price),
        });
        state.totalQuantity++;
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
