import { z } from "zod";
import { categorySchema } from "./categories.schemas";

const realEstateSchema = z.object({
  id: z.number(),
  value: z.string().or(z.number().positive()).default(0),
  size: z.number().int().positive(),
  address: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).nullish(),
    city: z.string().max(20),
    state: z.string().max(2),
  }),
  categoryId: z.number().int(),
  sold: z.boolean().default(false),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

const realEstateSchemaRequest = realEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  updatedAt: true,
});

const realEstateSchemaResponse = realEstateSchema
  .omit({ categoryId: true })
  .extend({ category: categorySchema.nullish() });

const arrayRealEstateSchemaResponse = z.array(realEstateSchemaResponse);

export {
  realEstateSchema,
  realEstateSchemaRequest,
  realEstateSchemaResponse,
  arrayRealEstateSchemaResponse,
};
