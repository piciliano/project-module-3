import { Router } from "express";
import { userRouter } from "./users/users.routes";
import { patientRouter } from "./patients/patients.routes";
import { authRouter } from "./auth/auth.routes";
import { timelineRouter } from "./timeline/timelines.routes";
import { occurrenceRouter } from "./occurrence/occurrence.routes";

const router = Router()

router.use("/auth", authRouter)
router.use("/User", userRouter)
router.use("/Patient", patientRouter)
router.use("/Timelines", timelineRouter)
router.use("/Occurrence", occurrenceRouter)


export { router }