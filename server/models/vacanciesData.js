const db = require("../config/db");

const get = async () => {
  try {
    const result = await db.query("SELECT * FROM vacancies");
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  get,
};
