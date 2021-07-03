require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const vacancies = require("./api/v1/vacancies");

const app = express();

// app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/vacancies", vacancies);

app.get("/", (req, res) => res.send("[work.ua clone home]"));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is up and running on http://localhost:${port}  ...`);
});
