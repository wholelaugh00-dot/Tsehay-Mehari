const wishlistModel = require("../models/wishlistModel");

const addWishlist = async (req,res)=>{
    const {userId,productId}=req.body;

    const item=await wishlistModel.addWishlist(userId,productId);

    res.status(201).json(item);
};

const getWishlist = async (req,res)=>{
    const items=await wishlistModel.getWishlist(req.params.userId);

    res.json(items);
};

module.exports={
    addWishlist,
    getWishlist
};