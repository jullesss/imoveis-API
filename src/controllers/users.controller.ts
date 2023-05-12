import { Request, Response } from "express";
import {
  TUser,
  TUserRequest,
  TUserResponse,
  TUserUpdateRequest,
  TUsersResponse,
} from "../interfaces/users.interfaces";
import createUsersService from "../services/users/createUsers.service";
import listUsersService from "../services/users/listUsers.service";
import updateUserService from "../services/users/updateUsers.service";
import destroyUsersService from "../services/users/destroyUsers.service";

const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRequest = req.body;

  const newUser = await createUsersService(userData);

  return res.status(201).json(newUser);
};

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: TUsersResponse = await listUsersService();
  return res.json(users);
};

const updateUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserUpdateRequest = req.body;
  const { foundUser } = res.locals;

  const updateUser: TUserResponse = await updateUserService(
    userData,
    foundUser
  );

  return res.status(200).json(updateUser);
};

const destroyUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { foundUser } = res.locals;

  await destroyUsersService(foundUser);

  return res.status(204).send();
};

export {
  createUsersController,
  listUsersController,
  updateUsersController,
  destroyUsersController,
};
