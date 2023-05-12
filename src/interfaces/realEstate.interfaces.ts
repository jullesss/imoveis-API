import { z } from "zod";
import { RealEstate } from "../entities";
import {
  arrayRealEstateSchemaResponse,
  realEstateSchemaRequest,
  realEstateSchemaResponse,
} from "../schemas/realEstate.schemas";

export type TRealEstate = RealEstate;
export type TRealEstateRequest = z.infer<typeof realEstateSchemaRequest>;
export type TRealEstateResponse = z.infer<typeof realEstateSchemaResponse>;
export type TRealEstatesResponse = z.infer<
  typeof arrayRealEstateSchemaResponse
>;
