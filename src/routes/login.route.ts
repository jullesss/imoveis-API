import { Router } from "express";
import { createTokenController } from "../controllers/login.controller";

const loginRoute: Router = Router();

loginRoute.post("", createTokenController);

export default loginRoute;
