const paymentModel = require("../models/paymentModel");


const createPayment = async (req, res) => {
    try {
        const {
            orderId,
            paymentMethod,
            amount
        } = req.body;

        const payment = await paymentModel.createPayment(
            orderId,
            paymentMethod,
            amount
        );

        res.status(201).json(payment);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


const getPayments = async (req, res) => {
    try {
        const payments = await paymentModel.getPayments();

        res.json(payments);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


module.exports = {
    createPayment,
    getPayments
};