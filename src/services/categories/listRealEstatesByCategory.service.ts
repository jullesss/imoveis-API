import { categoryRepo } from "../../data-source";
import { AppError } from "../../error";
import { TCategory } from "../../interfaces/categories.interfaces";

const listRealEstateByCategoryService = async (
  categoryId: number
): Promise<TCategory> => {
  const category: TCategory | null = await categoryRepo.findOne({
    where: {
      id: categoryId,
    },
    relations: { realEstate: true },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};

export default listRealEstateByCategoryService;
