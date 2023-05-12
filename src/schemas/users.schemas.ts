import { z } from "zod";

const usersSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z.string(),
  admin: z.boolean().default(false),

  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const usersSchemaRequest = usersSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const usersSchemaResponse = usersSchema /* .partial() */
  .omit({ password: true });

const arrayUsersSchemaResponse = z.array(usersSchemaResponse);

const usersSchemaUpdateRequest = usersSchemaRequest.partial().omit({
  admin: true,
});

export {
  usersSchema,
  usersSchemaRequest,
  usersSchemaResponse,
  arrayUsersSchemaResponse,
  usersSchemaUpdateRequest,
};
