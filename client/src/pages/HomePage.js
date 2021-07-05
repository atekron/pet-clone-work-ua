import React, { useEffect } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import MainHome from "../layout/MainHome";

const HomePage = () => {
  const headline = "Ukraine's #1 job site";
  useEffect(() => {
    document.title = headline;
  }, []);

  return (
    <>
      <Header homepage={true} headline={headline} />
      <MainHome />
      <Footer />
    </>
  );
};

// import { useGetAllVacanciesQuery } from "../redux/services/vacancies";

// const HomePage = () => {
//   const { data, isLoading, error } = useGetAllVacanciesQuery();
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>OMG!, oh NO! an error occured!!!</div>;
//   }

//   return (
//     <div className="flex flex-col max-w-screen-sm mx-auto mt-10 p-5 text-lg">
//       {data.slice(0, 100).map((entry) => {
//         return (
//           <div className="mb-10" key={entry.id}>
//             <h2>{entry.position}</h2>
//             <p>{entry.created.slice(0, 10)}</p>
//             <p>
//               <span>{entry.salary_min}</span> - <span>{entry.salary_max}</span>
//             </p>
//             <p>{entry.employer}</p>
//             <p>{entry.job_location}</p>
//             <p>{entry.tags}</p>
//             <p>{entry.job_description}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export default HomePage;
