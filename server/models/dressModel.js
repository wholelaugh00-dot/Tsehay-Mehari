const pool = require("../config/db");

const getAllDresses = async () => {
    const result = await pool.query(
        "SELECT * FROM products ORDER BY id ASC"
    );
    return result.rows;
};

const getDressById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM products WHERE id = $1",
        [id]
    );
    return result.rows[0];
};

const createDress = async (dress) => {
    const {
        name,
        description,
        price,
        rental_price,
        stock,
        image_url
    } = dress;

    const result = await pool.query(
        `INSERT INTO products
        (name, description, price, rental_price, stock, image_url)
        VALUES ($1,$2,$3,$4,$5,$6)
        RETURNING *`,
        [
            name,
            description,
            price,
            rental_price,
            stock,
            image_url
        ]
    );

    return result.rows[0];
};

const updateDress = async (id, dress) => {
    const {
        name,
        description,
        price,
        rental_price,
        stock,
        image_url
    } = dress;

    const result = await pool.query(
        `UPDATE products
         SET
         name=$1,
         description=$2,
         price=$3,
         rental_price=$4,
         stock=$5,
         image_url=$6
         WHERE id=$7
         RETURNING *`,
        [
            name,
            description,
            price,
            rental_price,
            stock,
            image_url,
            id
        ]
    );

    return result.rows[0];
};

const deleteDress = async (id) => {
    await pool.query(
        "DELETE FROM products WHERE id=$1",
        [id]
    );
};

module.exports = {
    getAllDresses,
    getDressById,
    createDress,
    updateDress,
    deleteDress
};