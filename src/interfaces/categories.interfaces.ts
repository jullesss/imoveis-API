import { z } from "zod";
import Category from "../entities/categories.entity";
import {
  arrayCategorySchemaResponse,
  categorySchema,
  categorySchemaRequest,
} from "../schemas/categories.schemas";

export type TCategory = Category;
export type TCategoryRequest = z.infer<typeof categorySchemaRequest>;
export type TCategoryResponse = z.infer<typeof categorySchema>;
export type TCategoriesResponse = z.infer<typeof arrayCategorySchemaResponse>;
