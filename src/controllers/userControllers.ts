import { type NextFunction, type Request, type Response } from "express";
import User from "../database/models/user/User.js";
import { type UserStructure } from "./types";

export const registerUser = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, UserStructure>,
  res: Response,
  next: NextFunction
) => {
  const { username, email, password } = req.body;

  const newUser = await User.create({
    username,
    password,
    email,
  });

  res.status(201).json({ newUser, message: "The user has been created" });
};
