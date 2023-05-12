import { NextFunction, Request, Response } from "express";
import { addressRepo, categoryRepo, realEstateRepo } from "../data-source";
import { AppError } from "../error";
import { Address, Category, RealEstate } from "../entities";

const ensureAddressDoesntExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body.address;

  const findAddress: Address | null = await addressRepo.findOneBy({
    ...body,
    number: body.number || "",
  });

  if (findAddress) {
    throw new AppError("Address already exists", 409);
  }

  return next();
};

export default ensureAddressDoesntExist;
