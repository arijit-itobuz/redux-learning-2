import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cakeActions } from "./cakeSlice";

export default function CakeView() {
  const numberOfCakes = useSelector((state) => {
    return state.cake.numberOfCakes;
  });
  const dispatch = useDispatch();
  return (
    <>
      <h2>Number of Cakes : {numberOfCakes}</h2>
      <button onClick={() => dispatch(cakeActions.ordered())}>Order Cakes</button>
      <button onClick={() => dispatch(cakeActions.restocked(5))}>Restock Cakes</button>
    </>
  );
}
