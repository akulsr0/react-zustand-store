import React from "react";
import { useStore } from "../store";

function Header() {
  const { number, updateName } = useStore();

  return (
    <div style={{ background: "red" }}>
      <h1>Number: {number}</h1>
      <input onChange={(e) => updateName(e.target.value)} placeholder="Name" />
    </div>
  );
}

export default Header;
