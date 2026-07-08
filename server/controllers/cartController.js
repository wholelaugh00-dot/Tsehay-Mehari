const cartModel = require("../models/cartModel");

const addToCart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        const cartItem = await cartModel.addToCart(
            userId,
            productId,
            quantity
        );

        res.status(201).json(cartItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add item to cart." });
    }
};

const getCart = async (req, res) => {
    try {
        const cart = await cartModel.getCart(req.params.userId);

        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve cart." });
    }
};

const updateQuantity = async (req, res) => {
    try {
        const { quantity } = req.body;

        const updatedItem = await cartModel.updateQuantity(
            req.params.id,
            quantity
        );

        res.json(updatedItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update cart item." });
    }
};

const removeItem = async (req, res) => {
    try {
        await cartModel.removeItem(req.params.id);

        res.json({
            message: "Item removed from cart successfully."
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to remove cart item." });
    }
};

module.exports = {
    addToCart,
    getCart,
    updateQuantity,
    removeItem
};