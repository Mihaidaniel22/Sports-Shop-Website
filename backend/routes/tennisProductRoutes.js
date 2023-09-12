import { tennisProductModel } from "../models/tennisProductModel.js";
import express from "express";

export const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const tennisProducts = await tennisProductModel.find();
    response.json(tennisProducts);
  } catch (error) {
    response.send(error);
  }
});

router.post("/", async (request, response) => {
  const tennisProduct = new tennisProductModel({
    name: request.body.name,
    price: request.body.price,
    image: request.body.image,
    category: request.body.category,
  });
  try {
    const res = await tennisProduct.save();
    response.json(res);
  } catch (error) {
    response.send(error);
  }
});
