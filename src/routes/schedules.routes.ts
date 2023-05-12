import { Router } from "express";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { scheduleRequest } from "../schemas/schedules.schemas";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createSchedulesController } from "../controllers/schedules.controller";

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddleware(scheduleRequest),
  createSchedulesController
);
schedulesRoutes.get("/realEstate/:id");

export default schedulesRoutes;
