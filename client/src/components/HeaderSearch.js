import React from "react";

const HeaderSearch = () => {
  return (
    <div className="mt-5">
      <form className="flex justify-between items-center">
        <input
          className="mr-3 py-1 flex-grow pl-5 text-xl font-semibold placeholder-gray-500 placeholder-opacity-50"
          type="text"
          name="job_title"
          id="job_title"
          placeholder="Keyword or job title"
        />
        <input
          className="mr-3 py-1 w-80 pl-5 text-xl font-semibold placeholder-gray-500 placeholder-opacity-50"
          type="text"
          name="region"
          id="region"
          placeholder="City"
        />
        <button
          className="py-1 w-40 h-full bg-red-500 font-semibold text-lg rounded-md"
          type="submit"
        >
          Find jobs
        </button>
      </form>
      <div className="flex pt-3 justify-between text-lg opacity-80">
        <p>
          For example:{" "}
          <span className="underline cursor-pointer hover:no-underline">
            accountant
          </span>
          ,{" "}
          <span className="underline cursor-pointer hover:no-underline">
            sales
          </span>
          , etc.
        </p>
        <p className="cursor-pointer underline hover:no-underline">
          Advanced search
        </p>
      </div>
    </div>
  );
};

export default HeaderSearch;
