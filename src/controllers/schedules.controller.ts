import { Request, Response } from "express";
import { TScheduleRequest } from "../interfaces/schedules.interfaces";
import createSchedulesService from "../services/schedules/createSchedules.service";

const createSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const schedulesData: TScheduleRequest = req.body;
  const id: number = res.locals.id;

  const newSchedules = await createSchedulesService(schedulesData, id);

  return res.status(201).json(newSchedules);
};

/* const listSchedulessController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Scheduless: TSchedulessResponse = await listSchedulessService();
  return res.json(Scheduless);
}; */

export { createSchedulesController /* , listSchedulessController */ };
