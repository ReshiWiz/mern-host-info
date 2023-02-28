import express from "express";
import dotenv from "dotenv";
import router from "./routers/Route.js";
import connection_DB from "./db.js";
import cors from "cors";
import bodyParser from "body-parser";

// const path = require("path");
import path from "path";
const __dirname = path.resolve();
const app = express();

dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", router);
const PORT = process.env.PORT || 8000;

// static
app.use(
  express.static(path.join(__dirname, "./firebase-app/"))
);

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./firebase-app/build/index.html"),
    function (error) {
      res.status(500).send(error);
    }
  );
});

const user_name = process.env.DB_USERNAME;
const user_password = process.env.DB_PASSWORD;
// console.log(user_name, user_password);
connection_DB(user_name, user_password);

app.listen(PORT, () => {
  console.log("port is connected to the base", PORT);
});
