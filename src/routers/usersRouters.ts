import { Router } from "express";
import { registerUser } from "../controllers/userControllers.js";

const usersRouter = Router();

usersRouter.post("/register", registerUser);

export default usersRouter;
