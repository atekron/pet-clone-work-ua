const get = async (data) => {
  const vacancies = await data.get();
  return {
    status: "success",
    results: vacancies.rows.length,
    data: vacancies.rows,
  };
};

const getById = async (id, data) => {
  const vacancy = await data.getById(id);

  return {
    status: vacancy ? "success" : "not found",
    data: vacancy ? vacancy.rows[0] : null,
  };
};

const deleteById = async (id, data) => {
  const result = await data.deleteById(id);
  return result;
};

const create = async (vacancy, data) => {
  const result = await data.create(vacancy);
  return result.rows[0];
};

const updateById = async (id, vacancy, data) => {
  const result = await data.update(id, vacancy);
  return result.rows[0];
};

module.exports = {
  get,
  getById,
  create,
  updateById,
  deleteById,
};
