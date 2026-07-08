const pool = require("../config/db");

const addToCart = async (userId, productId, quantity) => {
    const result = await pool.query(
        `INSERT INTO cart_items (user_id, product_id, quantity)
         VALUES ($1, $2, $3)
         RETURNING *`,
        [userId, productId, quantity]
    );

    return result.rows[0];
};

const getCart = async (userId) => {
    const result = await pool.query(
        `SELECT
             cart_items.id,
             products.product_name,
             products.purchase_price,
             products.image_url,
             cart_items.quantity
        FROM cart_items
        JOIN products
        ON cart_items.product_id = products.id
        WHERE cart_items.user_id = $1`,
        [userId]
    );

    return result.rows;
};

const updateQuantity = async (id, quantity) => {
    const result = await pool.query(
        `UPDATE cart_items
         SET quantity = $1
         WHERE id = $2
         RETURNING *`,
        [quantity, id]
    );

    return result.rows[0];
};

const removeItem = async (id) => {
    await pool.query(
        "DELETE FROM cart_items WHERE id = $1",
        [id]
    );
};

module.exports = {
    addToCart,
    getCart,
    updateQuantity,
    removeItem
};