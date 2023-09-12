import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
});

export const cartModel = mongoose.model("Cart",cartSchema,"cart");