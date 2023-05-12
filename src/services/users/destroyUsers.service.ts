import { userRepo } from "../../data-source";
import { TUser } from "../../interfaces/users.interfaces";

export const destroyUsersService = async (foundUser: TUser): Promise<void> => {
  await userRepo.softRemove(foundUser);

  return;
};

export default destroyUsersService;
