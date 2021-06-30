require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("work.ua clone"));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is up and running on http://localhost:${port}  ...`);
});
