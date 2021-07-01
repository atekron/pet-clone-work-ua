const express = require("express");
const service = require("../../services/vacanciesService");
const data = require("../../models/vacanciesData");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("hello");
  const vacancies = await service.get(data);
  res.status(200).send(vacancies);
});
router.get("/:id", () => service.getById());
router.delete("/:id", () => service.deleteById());
router.patch("/:id", () => service.updateById());
router.post("/", () => service.create());

module.exports = router;
