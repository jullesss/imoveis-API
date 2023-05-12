import { Request, Response } from "express";
import {
  TCategoriesResponse,
  TCategory,
  TCategoryRequest,
} from "../interfaces/categories.interfaces";
import createCategoryService from "../services/categories/createCategories.service";
import listCategoriesService from "../services/categories/listCategories.service";
import listRealEstateByCategoryService from "../services/categories/listRealEstatesByCategory.service";

const createCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryData: TCategoryRequest = req.body;

  const newCategory = await createCategoryService(categoryData);

  return res.status(201).json(newCategory);
};

const listCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories: TCategoriesResponse = await listCategoriesService();
  return res.json(categories);
};

const listRealEstateByCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryId: number = Number(req.params.id);

  const listedRealEstates: TCategory = await listRealEstateByCategoryService(
    categoryId
  );

  return res.status(200).json(listedRealEstates);
};

export {
  createCategoriesController,
  listCategoriesController,
  listRealEstateByCategoryController,
};
