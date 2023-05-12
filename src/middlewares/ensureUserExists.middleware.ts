import { NextFunction, Request, Response } from "express";
import { TUser } from "../interfaces/users.interfaces";
import { userRepo } from "../data-source";
import { AppError } from "../error";

const ensureUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  const foundUser: TUser | null = await userRepo.findOneBy({ id: Number(id) });

  if (!foundUser) {
    throw new AppError("User not found", 404);
  }

  res.locals.foundUser = foundUser;

  return next();
};

export default ensureUserExists;
