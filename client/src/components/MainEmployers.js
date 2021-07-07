import React from "react";
import LogoCard from "./LogoCard";

const MainEmployers = () => {
  return (
    <div className="max-w-screen-lg mx-auto bg-white border-2 border-blue-100 grid grid-cols-6">
      {[..."*************************************************"].map((i) => (
        <LogoCard />
      ))}
    </div>
  );
};

export default MainEmployers;
