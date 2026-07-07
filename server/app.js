const authRoutes = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const homeRoutes = require("./routes/homeRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api/auth", authRoutes);

app.use("/", homeRoutes);

module.exports = app;