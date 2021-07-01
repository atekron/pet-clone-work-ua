-- vacancies

CREATE TABLE vacancies (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  created DATE DEFAULT CURRENT_DATE NOT NULL,
  position VARCHAR(100),
  salary_min INT,
  salary_max INT,
  employer VARCHAR(50) NOT NULL,
  job_location VARCHAR(50) NOT NULL,
  tags VARCHAR(100),
  job_description TEXT NOT NULL
);

INSERT INTO vacancies (position, salary_min, salary_max, employer, job_location, tags, job_description)
VALUES
('manager', 10000, 30000, 'big boss', 'lviv', '10 years of expirience', 'we are very good');