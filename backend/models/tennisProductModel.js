import mongoose from "mongoose";

const tennisProductSchema = new mongoose.Schema({
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

export const tennisProductModel = mongoose.model("TennisProduct",tennisProductSchema,"tennis");