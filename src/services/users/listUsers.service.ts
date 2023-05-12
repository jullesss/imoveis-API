import { userRepo } from "../../data-source";
import { arrayUsersSchemaResponse } from "../../schemas/users.schemas";
import { TUser, TUsersResponse } from "../../interfaces/users.interfaces";

const listUsersService = async (): Promise<TUsersResponse> => {
  const users: TUser[] | null = await userRepo.find();

  const returnUsers: TUsersResponse = arrayUsersSchemaResponse.parse(users);

  return returnUsers;
};

export default listUsersService;
