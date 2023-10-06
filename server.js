const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routes/api/users");

dotenv.config();

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}...`);
});

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use(require("./config/checkToken"));

app.use("/api/users", userRouter);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`SERVER STARTED ON PORT ${port}...`);
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});