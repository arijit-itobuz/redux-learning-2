const { createSlice } = require("@reduxjs/toolkit");
const { cakeActions } = require("../cake/cakeSlice");

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
       state.numberOfIcecream--
    });
  },
});

module.exports.icecreamReducer = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
