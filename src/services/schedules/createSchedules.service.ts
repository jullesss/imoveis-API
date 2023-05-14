import { realEstateRepo, scheduleRepo } from "../../data-source";
import { RealEstate, Schedule } from "../../entities";
import { AppError } from "../../error";
import { TScheduleRequest } from "../../interfaces/schedules.interfaces";

interface IReturnMessage {
  message: string;
}

const createSchedulesService = async (
  schedulesData: TScheduleRequest,
  id: number
): Promise<IReturnMessage> => {
  const realEstateFound: RealEstate | null = await realEstateRepo.findOne({
    where: {
      id: schedulesData.realEstateId,
    },
  });

  if (!realEstateFound) {
    throw new AppError("RealEstate not found", 404);
  }
  const scheduleCheckRealEstate = await scheduleRepo
    .createQueryBuilder("schedules")
    .select("schedules")
    .where("schedules.realEstateId = :realEstateId", {
      realEstateId: schedulesData.realEstateId,
    })
    .andWhere("schedules.hour = :hour", { hour: schedulesData.hour })
    .andWhere("schedules.date = :date", { date: schedulesData.date })
    .getOne();

  if (scheduleCheckRealEstate) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }
  const scheduleCheck = await scheduleRepo
    .createQueryBuilder("schedules")
    .select("schedules")
    .where("schedules.userId = :userId", { userId: id })
    .andWhere("schedules.hour = :hour", { hour: schedulesData.hour })
    .andWhere("schedules.date = :date", { date: schedulesData.date })
    .getOne();

  if (scheduleCheck) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const hour = Number(schedulesData.hour.split(":")[0]);

  if (hour < 8 || hour >= 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  const receivedDate = new Date(schedulesData.date);
  const weekDay = receivedDate.getDay();

  if (weekDay >= 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  const schedule: Schedule = scheduleRepo.create({
    date: schedulesData.date,
    hour: schedulesData.hour,
    user: {
      id,
    },
    realEstate: {
      id: schedulesData.realEstateId,
    },
  });
  await scheduleRepo.save(schedule);

  return { message: "Schedule created" };
};

export default createSchedulesService;
