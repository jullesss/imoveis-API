import { realEstateRepo } from "../../data-source";
import { RealEstate } from "../../entities";
import { TRealEstatesResponse } from "../../interfaces/realEstate.interfaces";

const listRealEstatesService = async (): Promise<TRealEstatesResponse> => {
  const realEstates: RealEstate[] | null = await realEstateRepo.find({
    relations: { address: true },
  });

  return realEstates;
};

export default listRealEstatesService;
