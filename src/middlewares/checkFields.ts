import { type NextFunction, type Request, type Response } from "express";

import { validationResult } from "express-validator";

export const checkFields = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  next();
};
