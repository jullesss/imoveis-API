import { z } from "zod";
import { loginUserSchemaRequest } from "../schemas/login.schema";

export type TLoginRequest = z.infer<typeof loginUserSchemaRequest>;
