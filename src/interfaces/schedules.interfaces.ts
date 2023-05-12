import { z } from "zod";
import Schedule from "../entities/schedules.entity";
import {
  arrayScheduleResponse,
  scheduleRequest,
  scheduleResponse,
} from "../schemas/schedules.schemas";

export type TSchedule = Schedule;
export type TScheduleRequest = z.infer<typeof scheduleRequest>;
export type TScheduleResponse = z.infer<typeof scheduleResponse>;
export type TSchedulesResponse = z.infer<typeof arrayScheduleResponse>;
