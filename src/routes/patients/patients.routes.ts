import { Router } from "express"
import { PatientModule } from "../../app/patient/PatientModule";
import { TimelineModule } from "../../app/timeline/TimelineModule";

const patientRouter = Router();

const patientController = PatientModule.build().controller;
const timelineController = TimelineModule.build().controller

patientRouter.get("/:id", patientController.findIdPatient.bind(patientController))
patientRouter.patch("/:id", patientController.update.bind(patientController))
patientRouter.get("/user/:user_id", patientController.findByUserId.bind(patientController))
patientRouter.delete("/:id",  patientController.delete.bind(patientController))

patientRouter.post("/:pacient_id/Timelines", timelineController.create.bind(timelineController))

export { patientRouter }