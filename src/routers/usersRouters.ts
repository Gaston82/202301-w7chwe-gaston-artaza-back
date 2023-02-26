import { check } from "express-validator";
import { Router } from "express";
import { getUsers, registerUser } from "../controllers/userControllers.js";
import { checkFields } from "../middlewares/checkFields.js";
import image from "../middlewares/uploadImage.js";
import avatar from "../middlewares/uploadImage.js";
import multer from "multer";
import upload from "../middlewares/uploadImage.js";

const usersRouter = Router();

usersRouter.post(
  "/register",
  [
    upload.single("image"),
    check("username", "Username is required").not().isEmpty(),
    check("password", "Password is required").not().isEmpty(),
    check("password", "Password should have 6 characters minimun").isLength({
      min: 6,
    }),
    check("email", "Email not valid").isEmail(),
    checkFields,
  ],
  registerUser
);
usersRouter.get("/", getUsers);

export default usersRouter;
