import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { catActions } from "./catSlice";

function App() {
  const cats = useSelector((state) => state.cat.cats);
  const dispatch = useDispatch();

  const handleCats = () => {
    dispatch(catActions.getCatsFetch());
    
  };

  useEffect(() => {
    if (cats.length) {
      console.log(cats);
    }
  }, [cats]);

  return (
    <>
      <button onClick={handleCats}>Click Me</button>
      <div>
        {cats.map((e) => {
          return <li key={e.id}>{e.name}</li>;
        })}
      </div>
    </>
  );
}

export default App;
