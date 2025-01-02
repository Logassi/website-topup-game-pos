import React from "react";
import UpperContainer from "./components/header.upper.container";
import LowerContainer from "./components/header.lower.container";

export default function Header() {
  return (
    <div className="bg-custom-gray">
      <UpperContainer />
      <LowerContainer />
    </div>
  );
}
