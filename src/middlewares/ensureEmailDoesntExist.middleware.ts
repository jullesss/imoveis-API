import { NextFunction, Request, Response } from "express";
import { userRepo } from "../data-source";
import { AppError } from "../error";
import User from "../entities/users.entity";

const ensureEmailDoesntExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.email) {
    const findEmail: User | null = await userRepo.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (findEmail) {
      throw new AppError("Email already exists", 409);
    }
  }

  return next();
};

export default ensureEmailDoesntExist;
