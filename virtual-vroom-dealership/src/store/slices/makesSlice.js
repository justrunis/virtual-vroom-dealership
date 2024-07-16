import { createSlice } from "@reduxjs/toolkit";
import { carMakes } from "../../data/cars";

const initialMakesState = {
  makes: carMakes,
  totalQuantity: carMakes.length,
};

const makesSlice = createSlice({
  name: "makes",
  initialState: initialMakesState,
  reducers: {
    addMake(state, action) {
      const { make, imageUrl } = action.payload;
      state.makes.push({ id: state.makes.length + 1, make, imageUrl });
      state.totalQuantity++;
    },
    updateMake(state, action) {
      const { id, make } = action.payload;
      const existingMake = state.makes.find((m) => m.id === id);
      if (existingMake) {
        existingMake.make = make.make || existingMake.make;
        existingMake.imageUrl =
          make.imageUrl !== undefined ? make.imageUrl : existingMake.imageUrl;
      }
    },
    removeMake(state, action) {
      const id = action.payload;
      const existingMake = state.makes.find((m) => m.id === id);
      if (existingMake) {
        state.makes = state.makes.filter((m) => m.id !== id);
        state.totalQuantity--;
      }
    },
  },
});

export const makesActions = makesSlice.actions;

export default makesSlice.reducer;
