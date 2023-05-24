import { cartModel } from "../models/cartModel.js";
import express from "express";

export const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const cartProducts = await cartModel.find();
    response.json(cartProducts);
  } catch (error) {
    response.send(error);
  }
});

router.post("/",async (request, response) => {
    const cartProduct = new cartModel({
        name:request.body.name,
        price:request.body.price,
        image:request.body.image,
        category:request.body.category,
    }) 
  try {
    const res = await cartProduct.save();
    response.json(res);
  } catch (error) {
    response.send(error);
  }  
})