import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { router as footballRouter } from "../backend/routes/footballProductRoutes.js";
import { router as basketRouter } from "../backend/routes/basketProductRoutes.js";
import { router as skiRouter } from "../backend/routes/skiProductRoutes.js";
import { router as tennisRouter } from "../backend/routes/tennisProductRoutes.js";
import { router as cartRouter } from "../backend/routes/cartRoutes.js";

const PORT = 3010;
const dbUrl = "mongodb://127.0.0.1:27017/sports-shop";
const server = express();
server.use(cors());

mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("open", () => {
  console.log("database connected");
});

server.use(express.json());
server.use("/football", footballRouter);
server.use("/basket", basketRouter);
server.use("/tennis", tennisRouter);
server.use("/ski", skiRouter);
server.use("/cart", cartRouter);

server.listen(PORT, () => {
  console.log(`server started listening at http://localhost:${PORT}`);
});
