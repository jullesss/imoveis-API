import { z } from "zod";
import { realEstateSchemaResponse } from "./realEstate.schemas";

const schedule = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string().datetime({ precision: 3 }),
  realEstateId: z.number().int(),
  userId: z.number().int(),
});

const scheduleRequest = schedule.omit({
  id: true,
  userId: true,
});

const scheduleResponse = schedule
  .omit({ realEstateId: true })
  .extend({ realEstate: realEstateSchemaResponse });

const arrayScheduleResponse = z.array(scheduleResponse);

export { schedule, scheduleRequest, scheduleResponse, arrayScheduleResponse };
