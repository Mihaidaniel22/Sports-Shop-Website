import { footballProductModel } from "../models/footballProductModel.js";
import express from "express";

export const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const footballProducts = await footballProductModel.find();
    response.json(footballProducts);
  } catch (error) {
    response.send(error);
  }
});

router.post("/",async (request, response) => {
    const footballProduct = new footballProductModel({
        name:request.body.name,
        price:request.body.price,
        image:request.body.image,
        category:request.body.category,
    }) 
  try {
    const res = await footballProduct.save();
    response.json(res);
  } catch (error) {
    response.send(error);
  }  
})