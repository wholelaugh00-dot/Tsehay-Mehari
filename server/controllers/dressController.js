const dressModel = require("../models/dressModel");


// Get all dresses
const getAll = async (req, res) => {
    try {
        const dresses = await dressModel.getAllDresses();

        res.json(dresses);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Get single dress
const getOne = async (req, res) => {
    try {
        const dress = await dressModel.getDressById(req.params.id);

        res.json(dress);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Create dress
const create = async (req, res) => {
    try {
        const dress = await dressModel.createDress(req.body);

        res.status(201).json(dress);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Update dress
const update = async (req, res) => {
    try {
        const dress = await dressModel.updateDress(
            req.params.id,
            req.body
        );

        res.json(dress);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Delete dress
const remove = async (req, res) => {
    try {
        await dressModel.deleteDress(req.params.id);

        res.json({
            message: "Dress deleted successfully."
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Search, filter, and sort dresses
const searchDresses = async (req, res) => {
    try {

        const {
            search,
            category,
            sort
        } = req.query;


        const dresses = await dressModel.searchDresses(
            search,
            category,
            sort
        );


        res.json(dresses);


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove,
    searchDresses
};