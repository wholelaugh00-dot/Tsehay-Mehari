const pool = require("../config/db");

const createOrder = async (userId, totalAmount) => {
    const result = await pool.query(
        `INSERT INTO orders(user_id, total_amount)
         VALUES($1, $2)
         RETURNING *`,
        [userId, totalAmount]
    );

    return result.rows[0];
};

const getOrders = async () => {
    const result = await pool.query(
        "SELECT * FROM orders"
    );

    return result.rows;
};

module.exports = {
    createOrder,
    getOrders
};