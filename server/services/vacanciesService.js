const get = async (data) => {
  const vacancies = await data.get();
  console.log(vacancies.push("hello from .."));
  return vacancies;
};
const getById = () => {};
const create = () => {};
const updateById = () => {};
const deleteById = () => {};

module.exports = {
  get,
  getById,
  create,
  updateById,
  deleteById,
};
