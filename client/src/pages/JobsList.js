import React from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  useAddVacancyMutation,
  useDeleteVacancyMutation,
  useGetVacancyByIdQuery,
} from "../redux/services/vacancies";

const JobsList = () => {
  const { location } = useParams();
  const history = useHistory();
  const { data, isLoading, error } = useGetVacancyByIdQuery(location);
  const [addNewVacancy] = useAddVacancyMutation();
  const [deleteVacancy] = useDeleteVacancyMutation();

  const newVacancy = {
    position: "Vacancy From React",
    salary_min: 12000,
    salary_max: 20000,
    employer: "Best Employer",
    job_location: "Lviv",
    tags: "react, redux",
    job_description: "we need front-end developer",
  };

  const createHandler = async () => {
    const addResult = await addNewVacancy(newVacancy);
    console.log(addResult.data.id);
    history.push(`/jobs/${addResult.data.id}`);
  };

  const deleteHandler = async () => {
    await deleteVacancy(720);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>OMG!, oh NO! an error occured!!!</div>;
  }
  return data.data === null ? (
    "No vacancy with such id"
  ) : (
    <div className="flex flex-col max-w-screen-sm mx-auto mt-10 p-5 text-lg">
      <h1 className="text-3xl">Hello {location || "Ukraine"}!</h1>
      <div className="mb-10" key={data.data.id}>
        <h2>{data.data.position}</h2>
        <p>{data.data.created.slice(0, 10)}</p>
        <p>
          <span>{data.data.salary_min}</span> -{" "}
          <span>{data.data.salary_max}</span>
        </p>
        <p>{data.data.employer}</p>
        <p>{data.data.job_location}</p>
        <p>{data.data.tags}</p>
        <p>{data.data.job_description}</p>
      </div>
      <button
        className="bg-blue-500 p-5 rounded-lg text-xl text-white mb-5"
        onClick={createHandler}
      >
        Create Vacancy
      </button>
      <button
        className="bg-red-500 p-5 rounded-lg text-xl text-white"
        onClick={deleteHandler}
      >
        Delete Vacancy
      </button>
    </div>
  );
};

export default JobsList;
