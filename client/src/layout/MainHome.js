import React from "react";
import MainSearchOptions from "../components/MainSearchOptions";
import MainEmployers from "../components/MainEmployers";
import MainPostResume from "../components/MainPostResume";
import MainAverageSalary from "../components/MainAverageSalary";

const MainHome = () => {
  return (
    <div className="bg-gray-100 ">
      <MainSearchOptions />
      <MainEmployers />
      <MainPostResume />
      <MainAverageSalary />
    </div>
  );
};

export default MainHome;
