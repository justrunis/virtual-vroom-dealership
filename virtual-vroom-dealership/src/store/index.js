import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import favoriteVehiclesReducer from "./slices/favoriteVehiclesSlice";
import vehiclesReducer from "./slices/vehiclesSlice";
import makesReducer from "./slices/makesSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favoriteVehicles: favoriteVehiclesReducer,
    vehicles: vehiclesReducer,
    makes: makesReducer,
  },
});

export default store;
