import React from "react";
import { useGetAllVacanciesQuery } from "../redux/services/vacancies";

const HeaderHeadline = ({ headline }) => {
  const { data, isLoading, error } = useGetAllVacanciesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured!</div>;
  }

  return (
    <div className="text-white text-opacity-80 mt-5">
      <h1 className="text-3xl font-bold ">{headline}</h1>
      <p>
        We currently have <span className="font-bold">{data.results}</span> new
        jobs.
      </p>
    </div>
  );
};

export default HeaderHeadline;
