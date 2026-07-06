const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Test Route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Tsehay Mehari API",
        status: "Server is running successfully"
    });
});

module.exports = app;