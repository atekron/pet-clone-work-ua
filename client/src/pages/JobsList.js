import React from "react";
import { useParams } from "react-router-dom";

const JobsList = () => {
  const { location } = useParams();
  return (
    <div className="bg-blue-900 h-screen">
      <h1 className="text-white text-center text-5xl">
        Hello {location || "Ukraine"}!
      </h1>
    </div>
  );
};

export default JobsList;
