import { Router } from "express";
import { getUsers, registerUser } from "../controllers/userControllers.js";

const usersRouter = Router();

usersRouter.post("/register", registerUser);
usersRouter.get("/", getUsers);

export default usersRouter;
