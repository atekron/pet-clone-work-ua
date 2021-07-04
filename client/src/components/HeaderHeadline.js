import React from "react";

const HeaderHeadline = () => {
  const vacanciesTotal = 92828;
  return (
    <div>
      <h1>Ukraine's #1 job site</h1>
      <p>
        We currently have <span>{vacanciesTotal}</span> new jobs.
      </p>
    </div>
  );
};

export default HeaderHeadline;
