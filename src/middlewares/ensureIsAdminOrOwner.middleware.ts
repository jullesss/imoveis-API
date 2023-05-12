import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const ensureIsAdminOrOwner = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { admin, id } = res.locals;
  const idParams = req.params.id;

  if (!admin && Number(id) !== Number(idParams)) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default ensureIsAdminOrOwner;
