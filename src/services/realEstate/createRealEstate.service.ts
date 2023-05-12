import { addressRepo, categoryRepo, realEstateRepo } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../error";
import {
  TRealEstateRequest,
  TRealEstateResponse,
} from "../../interfaces/realEstate.interfaces";

const createRealEstateService = async (
  realEstateData: TRealEstateRequest
): Promise<TRealEstateResponse> => {
  const category: Category | null = await categoryRepo.findOne({
    where: {
      id: realEstateData.categoryId,
    },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const addressData = realEstateData.address;

  const address: Address = addressRepo.create(addressData);
  await addressRepo.save(address);

  const realEstateFinal: RealEstate = realEstateRepo.create({
    value: realEstateData.value,
    size: realEstateData.size,
    address,
    category,
  });
  await realEstateRepo.save(realEstateFinal);

  return realEstateFinal;
};

export default createRealEstateService;
