import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { icecreamActions } from "./icecreamSlice";

export default function IcecreamView() {
  const numberOfIcecream = useSelector((state) => {
    return state.icecream.numberOfIcecream;
  });
  const dispatch = useDispatch();
  const [value, setvalue] = useState(1)
  return (
    <>
      <h2>Number of Ice creams : {numberOfIcecream}</h2>
      <button onClick={() => dispatch(icecreamActions.ordered())}>Order Ice creams</button>
      <input onChange={(e) => setvalue(parseInt(e.target.value))} type="number" value={value} />
      <button onClick={() => dispatch(icecreamActions.restocked(value))}>Restock Ice creams</button>
    </>
  );
}
