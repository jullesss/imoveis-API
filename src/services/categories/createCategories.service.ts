import { categoryRepo } from "../../data-source";
import { Category } from "../../entities";
import {
  TCategoryRequest,
  TCategoryResponse,
} from "../../interfaces/categories.interfaces";
import { categorySchema } from "../../schemas/categories.schemas";

const createCategoryService = async (
  categoryData: TCategoryRequest
): Promise<TCategoryResponse> => {
  const category: Category = categoryRepo.create(categoryData);
  await categoryRepo.save(category);

  const returnCategory = categorySchema.parse(category);

  return returnCategory;
};

export default createCategoryService;
