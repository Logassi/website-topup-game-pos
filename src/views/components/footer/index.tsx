import React from "react";
import UpperContainer from "./components/footer.upper.container";
import LowerContainer from "./components/footer.lower.container";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <UpperContainer />
      <LowerContainer />
    </div>
  );
}
