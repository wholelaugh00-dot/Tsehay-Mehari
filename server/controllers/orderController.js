const orderModel = require("../models/orderModel");

const createOrder = async (req, res) => {
    try {
        const { userId, totalAmount } = req.body;

        const order = await orderModel.createOrder(
            userId,
            totalAmount
        );

        res.status(201).json(order);

    } catch(error) {
        res.status(500).json({
            message:error.message
        });
    }
};


const getOrders = async(req,res)=>{
    try{
        const orders = await orderModel.getOrders();
        res.json(orders);

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};


module.exports={
    createOrder,
    getOrders
};