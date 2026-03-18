const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const router = require("./routes/routes");
const port = process.env.SERVER_PORT || 3000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("", router);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
