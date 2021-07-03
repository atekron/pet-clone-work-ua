const get = async (data) => {
  const vacancies = await data.get();
  return vacancies.rows;
};

const getById = async (id, data) => {
  const vacancy = await data.getById(id);
  return vacancy.rows[0];
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
