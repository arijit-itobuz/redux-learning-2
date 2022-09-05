import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import catSaga from "./catSaga";
import { catReducer } from "./catSlice";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cat: catReducer,
  },
  middleware: [saga],
});
saga.run(catSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
