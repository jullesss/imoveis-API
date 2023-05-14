import { z } from "zod";

const loginUserSchemaRequest = z.object({
  email: z.string().email(),
  password: z.string(),
});

export { loginUserSchemaRequest };
