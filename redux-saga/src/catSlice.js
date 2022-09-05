import { createSlice } from "@reduxjs/toolkit";

const catSlice = createSlice({
  name: "cat",
  initialState: {
    cats: [],
    isLoading: false,
  },
  reducers: {
    getCatsFetch: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state) => {
        state.isLoading = false;
    },
  },
});

const catActions = catSlice.actions;
const catReducer = catSlice.reducer;

export {catActions, catReducer};


