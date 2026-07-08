const pool = require("../config/db");

const createPayment = async (orderId, paymentMethod, amount) => {
    const result = await pool.query(
        `INSERT INTO payments
        (order_id, payment_method, amount)
        VALUES ($1, $2, $3)
        RETURNING *`,
        [orderId, paymentMethod, amount]
    );

    return result.rows[0];
};


const getPayments = async () => {
    const result = await pool.query(
        "SELECT * FROM payments"
    );

    return result.rows;
};


module.exports = {
    createPayment,
    getPayments
};