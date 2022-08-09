import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";

const initialState = {
  numberOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIcecream--;
    },
    restocked: (state, action) => {
      state.numberOfIcecream += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numberOfIcecream--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numberOfIcecream--;
    });
  },
});

const icecreamReducer = icecreamSlice.reducer;
const icecreamActions = icecreamSlice.actions;

export { icecreamReducer, icecreamActions };
