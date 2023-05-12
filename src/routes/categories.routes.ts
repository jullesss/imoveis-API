import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { categorySchemaRequest } from "../schemas/categories.schemas";
import ensureCategoryNameDoesntExist from "../middlewares/ensureCategoryNameDoesntExist.middleware";
import {
  createCategoriesController,
  listCategoriesController,
  listRealEstateByCategoryController,
} from "../controllers/categories.controllers";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureIsAdminOrOwner from "../middlewares/ensureIsAdminOrOwner.middleware";

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  ensureDataIsValidMiddleware(categorySchemaRequest),
  ensureTokenIsValidMiddleware,
  ensureIsAdminOrOwner,
  ensureCategoryNameDoesntExist,
  createCategoriesController
);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get("/:id/realEstate", listRealEstateByCategoryController);

export default categoriesRoutes;
