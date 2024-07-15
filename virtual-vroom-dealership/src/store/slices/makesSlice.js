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
      const make = action.payload;
      const existingMake = state.makes.find((m) => m.id === make.id);
      if (!existingMake) {
        state.makes.push({
          id: make.id,
          name: make.name,
        });
        state.totalQuantity++;
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
