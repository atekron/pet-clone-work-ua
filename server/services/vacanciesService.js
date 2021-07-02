const get = async (data) => {
  const vacancies = await data.get();
  return vacancies;
};
const getById = async (id, data) => {
  const vacancy = await data.getById(id);
  return vacancy;
};

const deleteById = async (id, data) => {
  const result = await data.deleteById(id);
  return result;
};

const create = () => {};
const updateById = () => {};

module.exports = {
  get,
  getById,
  create,
  updateById,
  deleteById,
};
