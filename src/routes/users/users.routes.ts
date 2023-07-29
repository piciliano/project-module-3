import { Router } from "express";
import { UserModule } from "../../app/users/UserModule";
import { EnsureAuthenticate } from "../../common/middlewares/authenticate";
import { PatientModule } from "../../app/patient/PatientModule";
import { upload } from "../../configs/storageConfig";


const userRouter = Router()

const patientController = PatientModule.build().controller;
const userController = UserModule.build().controller;

userRouter.post("/", upload.single("photo"), userController.create.bind(userController))
userRouter.patch("/:id", EnsureAuthenticate.excute, userController.update.bind(userController))
userRouter.delete("/:id", EnsureAuthenticate.excute, userController.delete.bind(userController))
userRouter.post("/:user_id/Patient", EnsureAuthenticate.excute, patientController.create.bind(patientController))

export { userRouter }