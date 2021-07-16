import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { NameContext, ColorContext } from "../App";

const ComponentB = () => {
  const user = useContext(NameContext);
  const color = useContext(ColorContext);
  return (
    <div>
      <div>Component B</div>
      <ComponentC />
      <div>Name:{user}, Color: {color}</div>
    </div>
  );
};

export default ComponentB;
