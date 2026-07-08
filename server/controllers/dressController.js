const dressModel = require("../models/dressModel");

const getAll = async (req, res) => {
    const dresses = await dressModel.getAllDresses();
    res.json(dresses);
};

const getOne = async (req, res) => {
    const dress = await dressModel.getDressById(req.params.id);
    res.json(dress);
};

const create = async (req, res) => {
    const dress = await dressModel.createDress(req.body);
    res.status(201).json(dress);
};

const update = async (req, res) => {
    const dress = await dressModel.updateDress(
        req.params.id,
        req.body
    );
    res.json(dress);
};

const remove = async (req, res) => {
    await dressModel.deleteDress(req.params.id);

    res.json({
        message: "Dress deleted successfully."
    });
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
};