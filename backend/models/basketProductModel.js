import mongoose from "mongoose";

const basketProductSchema = new mongoose.Schema({
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

export const basketProductModel = mongoose.model("BasketProduct",basketProductSchema,"basket");