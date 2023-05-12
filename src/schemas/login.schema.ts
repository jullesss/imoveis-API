import { z } from "zod";

const loginUserSchemaRequest = z.object({
  email: z.string().email(),
  password: z.string(),
});

/* const loginUserResponse = z.object({
  token: z.string(),
}); */

export { loginUserSchemaRequest /* loginUserResponse */ };
