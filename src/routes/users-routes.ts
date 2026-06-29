import { UserControllers } from "@/controllers/users-controllers";
import { Router } from "express";

const userRoutes = Router();
const usersController = new UserControllers();

userRoutes.post("/", usersController.create);

export { userRoutes };
