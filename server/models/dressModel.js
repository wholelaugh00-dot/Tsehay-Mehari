const pool = require("../config/db");


// Get all dresses/products
const getAllDresses = async () => {
    const result = await pool.query(
        "SELECT * FROM products"
    );

    return result.rows;
};


// Get one dress/product
const getDressById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM products WHERE id = $1",
        [id]
    );

    return result.rows[0];
};


// Create dress/product
const createDress = async (product) => {

    const {
        category_id,
        product_name,
        description,
        purchase_price,
        rental_price,
        stock,
        featured,
        image_url,
        size,
        color
    } = product;


    const result = await pool.query(
        `INSERT INTO products
        (
            category_id,
            product_name,
            description,
            purchase_price,
            rental_price,
            stock,
            featured,
            image_url,
            size,
            color
        )
        VALUES
        ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
        RETURNING *`,
        [
            category_id,
            product_name,
            description,
            purchase_price,
            rental_price,
            stock,
            featured,
            image_url,
            size,
            color
        ]
    );

    return result.rows[0];
};


// Update dress/product
const updateDress = async (id, product) => {

    const {
        category_id,
        product_name,
        description,
        purchase_price,
        rental_price,
        stock,
        featured,
        image_url,
        size,
        color
    } = product;


    const result = await pool.query(
        `UPDATE products
        SET
            category_id=$1,
            product_name=$2,
            description=$3,
            purchase_price=$4,
            rental_price=$5,
            stock=$6,
            featured=$7,
            image_url=$8,
            size=$9,
            color=$10
        WHERE id=$11
        RETURNING *`,
        [
            category_id,
            product_name,
            description,
            purchase_price,
            rental_price,
            stock,
            featured,
            image_url,
            size,
            color,
            id
        ]
    );

    return result.rows[0];
};


// Delete dress/product
const deleteDress = async (id) => {

    const result = await pool.query(
        "DELETE FROM products WHERE id=$1 RETURNING *",
        [id]
    );

    return result.rows[0];
};


// Search, filter, sort
const searchDresses = async (
    search,
    category_id,
    sort
) => {

    let query = "SELECT * FROM products WHERE 1 = 1 ";
    let values = [];
    let index = 1;


    if (search) {
        query += ` AND product_name ILIKE $${index}`;
        values.push(`%${search}%`);
        index++;
    }


    if (category_id) {
        query += ` AND category_id = $${index}`;
        values.push(category_id);
        index++;
    }


    if (sort === "price_asc") {
        query += " ORDER BY rental_price ASC";
    }


    if (sort === "price_desc") {
        query += " ORDER BY rental_price DESC";
    }


    const result = await pool.query(
        query,
        values
    );

    return result.rows;
};


module.exports = {
    getAllDresses,
    getDressById,
    createDress,
    updateDress,
    deleteDress,
    searchDresses
};