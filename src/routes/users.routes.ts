import { Router } from "express";
import {
  createUsersController,
  destroyUsersController,
  listUsersController,
  updateUsersController,
} from "../controllers/users.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import {
  usersSchemaRequest,
  usersSchemaUpdateRequest,
} from "../schemas/users.schemas";
import ensureEmailDoesntExist from "../middlewares/ensureEmailDoesntExist.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureIsAdminOrOwner from "../middlewares/ensureIsAdminOrOwner.middleware";
import ensureUserExists from "../middlewares/ensureUserExists.middleware";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(usersSchemaRequest),
  ensureEmailDoesntExist,
  createUsersController
);
usersRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureIsAdminOrOwner,
  listUsersController
);
usersRoutes.patch(
  "/:id",
  ensureUserExists,
  ensureDataIsValidMiddleware(usersSchemaUpdateRequest),
  ensureTokenIsValidMiddleware,
  ensureIsAdminOrOwner,
  ensureEmailDoesntExist,
  updateUsersController
);
usersRoutes.delete(
  "/:id",
  ensureUserExists,
  ensureTokenIsValidMiddleware,
  ensureIsAdminOrOwner,
  destroyUsersController
);

export default usersRoutes;
