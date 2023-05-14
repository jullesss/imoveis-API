import { Request, Response } from "express";
import {
  TScheduleRequest,
  TSchedulesResponse,
} from "../interfaces/schedules.interfaces";
import createSchedulesService from "../services/schedules/createSchedules.service";
import listSchedulesService from "../services/schedules/listSchedules.service";

const createSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const schedulesData: TScheduleRequest = req.body;
  const realEstateId: number = res.locals.id;

  const newSchedules = await createSchedulesService(
    schedulesData,
    realEstateId
  );

  return res.status(201).json(newSchedules);
};

const listSchedulessController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);
  const isAdmin = res.locals.admin;

  const schedules: TSchedulesResponse = await listSchedulesService(id, isAdmin);
  return res.json(schedules);
};

export { createSchedulesController, listSchedulessController };
