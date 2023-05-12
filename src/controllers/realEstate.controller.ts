import { Request, Response } from "express";
import {
  TRealEstateRequest,
  TRealEstatesResponse,
} from "../interfaces/realEstate.interfaces";
import createRealEstateService from "../services/realEstate/createRealEstate.service";
import listRealEstatesService from "../services/realEstate/listRealEstates.service";

const createRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstateData: TRealEstateRequest = req.body;

  const newRealEstate = await createRealEstateService(realEstateData);

  return res.status(201).json(newRealEstate);
};

const listRealEstatesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstates: TRealEstatesResponse = await listRealEstatesService();
  return res.json(realEstates);
};

export { createRealEstateController, listRealEstatesController };
