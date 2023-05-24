import { skiProductModel } from "../models/skiProductModel.js";
import express from "express";

export const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const skiProducts = await skiProductModel.find();
    response.json(skiProducts);
  } catch (error) {
    response.send(error);
  }
});

router.post("/",async (request, response) => {
    const skiProduct = new skiProductModel({
        name:request.body.name,
        price:request.body.price,
        image:request.body.image,
        category:request.body.category,
    }) 
  try {
    const res = await skiProduct.save();
    response.json(res);
  } catch (error) {
    response.send(error);
  }  
})