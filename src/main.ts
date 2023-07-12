import express from "express";
import dotenv from "dotenv";
import { inicialize } from "./database/config";
import { router } from "./routes";
dotenv.config();

inicialize();

const app = express();
app.use(express.json())
app.use(router)

app.listen(process.env.PORT, () =>
  console.log("servidor rodando na porta", process.env.PORT)
);
