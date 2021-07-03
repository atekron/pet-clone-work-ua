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

router.post("/", async (req, res) => {
  const vacancy = req.body;
  const result = await service.create(vacancy, data);
  res.status(200).send(result);
});

router.put("/:id", async (req, res) => {
  const vacancy = req.body;
  const id = req.params.id;
  const result = await service.updateById(id, vacancy, data);
  res.status(200).send(result);
});

module.exports = router;
