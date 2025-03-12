import express from 'express';
import userController from './controller.js';

const userRouter = express.Router();

userRouter.post("/", userController.CreateUser);
userRouter.get("/", userController.GetAllUsers);
userRouter.get("/:id", userController.GetUserById);
userRouter.put("/:id", userController.UpdateUser);
userRouter.delete("/:id", userController.DeleteUser);

export default userRouter;