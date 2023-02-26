import bcryptjs from "bcryptjs";
import { type NextFunction, type Request, type Response } from "express";
import { CustomError } from "../CustomError/CustomError.js";
import User from "../database/models/user/User.js";
import { type UserStructure } from "./types";

export const getUsers = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, UserStructure>,
  res: Response,
  next: NextFunction
) => {
  const users = await User.find();
  res.status(200).json({ users });
};

export const registerUser = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, UserStructure>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, password } = req.body;

    const hashPassword = await bcryptjs.hash(password, 10);

    const newUser = await User.create({
      username,
      password: hashPassword,
      email,
    });

    res.status(201).json({ newUser, message: "The user has been created" });
  } catch (error: unknown) {
    const registerUserError = new CustomError(
      (error as Error).message,
      409,
      "Something went grong creating a new user"
    );
    next(registerUserError);
  }
};
