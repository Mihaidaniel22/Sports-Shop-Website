import { basketProductModel } from "../models/basketProductModel.js";
import express from "express";

export const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const basketProducts = await basketProductModel.find();
    response.json(basketProducts);
  } catch (error) {
    response.send(error);
  }
});

router.post("/",async (request, response) => {
    const basketProduct = new basketProductModel({
        name:request.body.name,
        price:request.body.price,
        image:request.body.image,
        category:request.body.category,
    }) 
  try {
    const res = await basketProduct.save();
    response.json(res);
  } catch (error) {
    response.send(error);
  }  
})