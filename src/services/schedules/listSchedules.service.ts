import { realEstateRepo, scheduleRepo } from "../../data-source";
import { RealEstate, Schedule } from "../../entities";
import { AppError } from "../../error";

const listSchedulesService = async (
  realEstateId: number,
  isAdmin: boolean
): Promise<any> => {
  if (!isAdmin) {
    throw new AppError("Insufficient permission", 403);
  }

  const realEstate: RealEstate | null = await realEstateRepo.findOne({
    where: {
      id: realEstateId,
    },
    relations: ["schedules", "address", "category"],
  });

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const schedules: Schedule[] | null = await scheduleRepo.find({
    where: {
      realEstate: true,
    },
    relations: { user: true },
  });

  const returnObj = {
    address: {
      city: realEstate.address.city,
      id: realEstate.address.id,
      number: realEstate.address.number,
      state: realEstate.address.state,
      street: realEstate.address.street,
      zipCode: realEstate.address.zipCode,
    },
    category: {
      id: realEstate.category.id,
      name: realEstate.category.name,
    },
    createdAt: realEstate.createdAt,
    id: realEstate.id,
    schedules: schedules,
    size: realEstate.size,
    sold: realEstate.sold,
    updatedAt: realEstate.updatedAt,
    value: realEstate.value,
  };
  return returnObj;
};

export default listSchedulesService;
