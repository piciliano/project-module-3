import express from "express";
import dotenv from "dotenv";
import { inicialize } from "./database/config";
import { router } from "./routes";
import path from "path";
dotenv.config();

inicialize();

const app = express();
app.use(express.static(path.resolve(__dirname, "..", "uploads")))
app.use(express.json())
app.use(router)

app.listen(process.env.PORT, () =>
  console.log("servidor rodando na porta", process.env.PORT)
);
