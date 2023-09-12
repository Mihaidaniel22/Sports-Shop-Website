import mongoose from "mongoose";

const skiProductSchema = new mongoose.Schema({
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

export const skiProductModel = mongoose.model("SkiProduct",skiProductSchema,"ski");