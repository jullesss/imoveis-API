import { userRepo } from "../../data-source";
import User from "../../entities/users.entity";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { hash } from "bcryptjs";
import { usersSchemaResponse } from "../../schemas/users.schemas";

const createUsersService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  userData.password = await hash(userData.password, 10);

  const user: User = userRepo.create(userData);
  await userRepo.save(user);

  const returnUser: TUserResponse = usersSchemaResponse.parse(user);

  return returnUser;
};

export default createUsersService;
