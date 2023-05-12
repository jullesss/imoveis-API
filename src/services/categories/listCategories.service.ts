import { categoryRepo } from "../../data-source";
import {
  TCategoriesResponse,
  TCategory,
} from "../../interfaces/categories.interfaces";
import { arrayCategorySchemaResponse } from "../../schemas/categories.schemas";

const listCategoriesService = async (): Promise<TCategoriesResponse> => {
  const categories: TCategory[] | null = await categoryRepo.find();

  const returnUsers: TCategoriesResponse =
    arrayCategorySchemaResponse.parse(categories);

  return returnUsers;
};

export default listCategoriesService;
