const pool = require("../config/db");

const addWishlist = async (userId, productId) => {
    const result = await pool.query(
        `INSERT INTO wishlist (user_id, product_id)
         VALUES ($1,$2)
         RETURNING *`,
        [userId, productId]
    );

    return result.rows[0];
};

const getWishlist = async (userId) => {
    const result = await pool.query(
        `SELECT
            wishlist.id,
            products.product_name,
            products.purchase_price
         FROM wishlist
         JOIN products
         ON wishlist.product_id = products.id
         WHERE wishlist.user_id = $1`,
        [userId]
    );

    return result.rows;
};

module.exports = {
    addWishlist,
    getWishlist
};