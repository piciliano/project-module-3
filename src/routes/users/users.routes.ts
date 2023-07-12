import { Router } from "express";
import { UserModule } from "../../app/users/UserModule";
import { EnsureAuthenticate } from "../../common/middlewares/authenticate";

const userRouter = Router()

const userController = UserModule.build().controller;
userRouter.post("/", userController.create.bind(userController))
userRouter.patch("/:id", EnsureAuthenticate.excute, userController.update.bind(userController))
userRouter.delete("/:id", EnsureAuthenticate.excute, userController.delete.bind(userController))

export { userRouter }