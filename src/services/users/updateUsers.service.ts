import {
  TUserResponse,
  TUserUpdateRequest,
} from "./../../interfaces/users.interfaces";
import { TUser } from "../../interfaces/users.interfaces";
import { userRepo } from "../../data-source";
import { usersSchemaResponse } from "../../schemas/users.schemas";

export const updateUserService = async (
  payload: TUserUpdateRequest,
  foundUser: TUser
): Promise<TUserResponse> => {
  const updateUser = userRepo.create({
    ...foundUser,
    ...payload,
  });

  await userRepo.save(updateUser);

  const userValid: TUserResponse = usersSchemaResponse.parse(updateUser);

  return userValid;
};

export default updateUserService;
