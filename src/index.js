import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import ImagesRouter from "./routes/image.route.js";

const server = express();
server.use(express.json());
server.use(cors());
server.use(ImagesRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server listening in PORT: ${port}`));
