import { createSlice } from "@reduxjs/toolkit";

const initialFavoriteVehiclesSlice = {
  favoriteVehicles: [],
  totalQuantity: 0,
};

const favoriteVehiclesSlice = createSlice({
  name: "favoriteVehicles",
  initialState: initialFavoriteVehiclesSlice,
  reducers: {
    addFavorite(state, action) {
      const vehicle = action.payload;
      const existingVehicle = state.favoriteVehicles.find(
        (v) => v.id === vehicle.id
      );
      if (!existingVehicle) {
        state.favoriteVehicles.push({
          id: vehicle.id,
          make: vehicle.make,
          model: vehicle.model,
          imageUrl: vehicle.imageUrl,
          price: parseFloat(vehicle.price),
        });
        state.totalQuantity++;
      }
    },
    removeFavorite(state, action) {
      const id = action.payload;
      const existingVehicle = state.favoriteVehicles.find((v) => v.id === id);
      if (existingVehicle) {
        state.favoriteVehicles = state.favoriteVehicles.filter(
          (v) => v.id !== id
        );
        state.totalQuantity--;
      }
    },
  },
});

export const favoriteVehiclesActions = favoriteVehiclesSlice.actions;

export default favoriteVehiclesSlice.reducer;
