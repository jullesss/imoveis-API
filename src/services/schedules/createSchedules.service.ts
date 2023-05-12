import { scheduleRepo, userRepo } from "../../data-source";
import { Schedule, User } from "../../entities";
import {
  TScheduleRequest,
  TScheduleResponse,
} from "../../interfaces/schedules.interfaces";

const createSchedulesService = async (
  schedulesData: TScheduleRequest,
  id: number
): Promise<TScheduleResponse> => {
  const schedule: Schedule = scheduleRepo.create(schedulesData);
  await scheduleRepo.save(schedule);

  const finalObj: TScheduleResponse = {
    ...schedule,
    userId: id,
  };

  return finalObj;
};

export default createSchedulesService;
