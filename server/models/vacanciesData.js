const db = require("../config/db");

const get = async () => {
  try {
    const result = await db.query("SELECT * FROM vacancies");
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getById = async (id) => {
  try {
    const result = await db.query("SELECT * FROM vacancies WHERE id = $1", [
      id,
    ]);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const deleteById = async (id) => {
  try {
    const result = await db.query("DELETE FROM vacancies WHERE id = $1", [id]);
    return result;
  } catch (error) {
    return `error ${error}`;
  }
};

const create = async (vacancy) => {
  try {
    const result = await db.query(
      `
      INSERT INTO vacancies
      (position, salary_min, salary_max, employer, job_location, tags, job_description)
      VALUES
      ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `,
      Object.values(vacancy)
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

const update = async (id, vacancy) => {
  try {
    const updatedVacancy = Object.values(vacancy);
    updatedVacancy.push(id);
    const result = await db.query(
      `
      UPDATE vacancies SET
      position = $1,
      salary_min = $2,
      salary_max = $3,
      employer = $4,
      job_location = $5,
      tags = $6,
      job_description = $7
      WHERE id = $8
      RETURNING *
    `,
      updatedVacancy
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  get,
  getById,
  deleteById,
  create,
  update,
};
