const db = require("../config/db");

const get = async () => {
  try {
    const result = await db.query("SELECT * FROM vacancies");
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

const getById = async (id) => {
  try {
    const result = await db.query("SELECT * FROM vacancies WHERE id = $1", [
      id,
    ]);
    return result.rows[0];
  } catch (error) {
    console.log(error);
  }
};

const deleteById = async (id) => {
  try {
    const result = await db.query("DELETE FROM vacancies WHERE id = $1", [id]);
    return `vacancy with ID: ${id} was deleted`;
  } catch (error) {
    return `error ${error}`;
  }
};

module.exports = {
  get,
  getById,
  deleteById,
};
