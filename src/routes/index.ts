import { Router } from "express";
import { userRouter } from "./users/users.routes";
import { patientRouter } from "./patients/patients.routes";
import { authRouter } from "./auth/auth.routes";

const router = Router()

router.use("/auth", authRouter)
router.use("/User", userRouter)
router.use("/User", patientRouter)


export { router }