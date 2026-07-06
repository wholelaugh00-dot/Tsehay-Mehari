const pool = require("./config/db");
require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 3000;

pool.query("SELECT NOW()", (err, result) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ PostgreSQL Connected!");
    console.log(result.rows[0]);
  }
});
app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
});