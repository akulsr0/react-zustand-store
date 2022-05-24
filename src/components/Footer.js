import React from "react";
import { useStore } from "../store";

function Footer() {
  const { increaseNumber, decreaseNumber, name } = useStore();
  return (
    <div style={{ backgroundColor: "green" }}>
      <button onClick={increaseNumber}>Increase Number</button>
      <button onClick={decreaseNumber}>Decrease Number</button>
      <h1>{name}</h1>
    </div>
  );
}

export default Footer;
