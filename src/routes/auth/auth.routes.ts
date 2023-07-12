import { Router } from "express"
import { AuthModule } from "../../app/users/auth/AuthModule";


const authRouter = Router();
const controller = AuthModule.build().controller;

authRouter.post('/', controller.login.bind(controller))

export { authRouter }