import { z } from "zod";
import {
  arrayUsersSchemaResponse,
  usersSchemaRequest,
  usersSchemaResponse,
} from "../schemas/users.schemas";
import User from "../entities/users.entity";
import { DeepPartial } from "typeorm";

export type TUser = User;
export type TUserRequest = z.infer<typeof usersSchemaRequest>;
export type TUserResponse = z.infer<typeof usersSchemaResponse>;
export type TUsersResponse = z.infer<typeof arrayUsersSchemaResponse>;
export type TUserUpdateRequest = DeepPartial<TUserRequest>;
