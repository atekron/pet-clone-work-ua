import React from "react";

const SearchOption = ({ icon, text }) => {
  return (
    <div className="bg-white flex-grow border-2 border-blue-100 p-5 flex items-start">
      <div className="px-5 text-gray-400">{icon}</div>
      <p className="text-lg text-blue-500 w-28 ">{text}</p>
    </div>
  );
};

export default SearchOption;
