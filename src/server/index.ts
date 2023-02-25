import morgan from "morgan";
import express from "express";
import cors from "cors";
import usersRouter from "../routers/usersRouters.js";

export const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);
