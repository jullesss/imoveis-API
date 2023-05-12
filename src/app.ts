import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErros } from "./error";
import usersRoutes from "./routes/users.routes";
import loginRoute from "./routes/login.route";
import categoriesRoutes from "./routes/categories.routes";
import realEstateRoutes from "./routes/realEstate.routes";
import schedulesRoutes from "./routes/schedules.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoute);
app.use("/categories", categoriesRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/schedules", schedulesRoutes);

app.use(handleErros);

export default app;
