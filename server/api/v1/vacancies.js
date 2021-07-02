const express = require("express");
const service = require("../../services/vacanciesService");
const data = require("../../models/vacanciesData");

const router = express.Router();

router.get("/", async (req, res) => {
  const vacancies = await service.get(data);
  res.status(200).send(vacancies);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const vacancy = await service.getById(id, data);
  res.status(200).send(vacancy);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await service.deleteById(id, data);
  res.status(200).send(result);
});
router.patch("/:id", () => service.updateById());
router.post("/", () => service.create());

module.exports = router;
