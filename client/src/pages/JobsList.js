import React from "react";
import { useParams } from "react-router-dom";
import {
  useAddVacancyMutation,
  useGetVacancyByIdQuery,
} from "../redux/services/vacancies";

const JobsList = () => {
  const { location } = useParams();
  const { data, isLoading, error } = useGetVacancyByIdQuery(location);
  const [addVacancy] = useAddVacancyMutation();

  const newVacancy = {
    position: "Vacancy From React",
    salary_min: 12000,
    salary_max: 20000,
    employer: "Best Employer",
    job_location: "Lviv",
    tags: "react, redux",
    job_description: "we need front-end developer",
  };

  const createHandler = () => {
    addVacancy(newVacancy);
    console.log("new vacancy added");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>OMG!, oh NO! an error occured!!!</div>;
  }
  return (
    <div className="flex flex-col max-w-screen-sm mx-auto mt-10 p-5 text-lg">
      <h1 className="text-3xl">Hello {location || "Ukraine"}!</h1>
      <div className="mb-10" key={data.id}>
        <h2>{data.position}</h2>
        <p>{data.created.slice(0, 10)}</p>
        <p>
          <span>{data.salary_min}</span> - <span>{data.salary_max}</span>
        </p>
        <p>{data.employer}</p>
        <p>{data.job_location}</p>
        <p>{data.tags}</p>
        <p>{data.job_description}</p>
      </div>
      <button
        className="bg-blue-500 p-5 rounded-lg text-xl text-white"
        onClick={createHandler}
      >
        Create Post
      </button>
    </div>
  );
};

export default JobsList;
