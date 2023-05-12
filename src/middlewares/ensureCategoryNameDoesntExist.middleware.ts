import { NextFunction, Request, Response } from "express";
import { categoryRepo } from "../data-source";
import { AppError } from "../error";
import { Category } from "../entities";

const ensureCategoryNameDoesntExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.name) {
    const findName: Category | null = await categoryRepo.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (findName) {
      throw new AppError("Category already exists", 409);
    }
  }

  return next();
};

export default ensureCategoryNameDoesntExist;
