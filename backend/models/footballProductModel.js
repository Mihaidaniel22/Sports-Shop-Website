import mongoose from "mongoose";

const footballProductSchema = new mongoose.Schema({
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

export const footballProductModel = mongoose.model("FootballProduct",footballProductSchema,"football");