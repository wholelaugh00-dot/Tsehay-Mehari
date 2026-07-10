const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const autRoutes = require("./routes/authRoutes");
const dressRoutes = require("./routes/dressRoutes");
const cartRoutes = require("./routes/cartRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/auth", authRoutes);
app.use("/api/dresses", dressRoutes);
app.use("/api/cart", cartRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


module.exports = app;