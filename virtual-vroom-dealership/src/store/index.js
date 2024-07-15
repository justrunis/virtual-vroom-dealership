import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import favoriteVehiclesReducer from "./slices/favoriteVehiclesSlice";
import vehiclesReducer from "./slices/vehiclesSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favoriteVehicles: favoriteVehiclesReducer,
    vehicles: vehiclesReducer,
  },
});

export default store;
