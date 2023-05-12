import { Router } from "express";
import {
  createRealEstateController,
  listRealEstatesController,
} from "../controllers/realEstate.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureIsAdminOrOwner from "../middlewares/ensureIsAdminOrOwner.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { realEstateSchemaRequest } from "../schemas/realEstate.schemas";
import ensureAddressDoesntExist from "../middlewares/ensureAddressDoesntExist.middleware";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureIsAdminOrOwner,
  ensureDataIsValidMiddleware(realEstateSchemaRequest),
  ensureAddressDoesntExist,
  createRealEstateController
);
realEstateRoutes.get("", listRealEstatesController);

export default realEstateRoutes;
