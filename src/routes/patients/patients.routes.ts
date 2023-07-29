import { Router } from "express"
import { PatientModule } from "../../app/patient/PatientModule";
import { TimelineModule } from "../../app/timeline/TimelineModule";
import { EnsureAuthenticate } from "../../common/middlewares/authenticate";

const patientRouter = Router();

const patientController = PatientModule.build().controller;
const timelineController = TimelineModule.build().controller

patientRouter.get("/:id", EnsureAuthenticate.excute, patientController.findIdPatient.bind(patientController))
patientRouter.patch("/:id", EnsureAuthenticate.excute, patientController.update.bind(patientController))
patientRouter.get("/user/:user_id", EnsureAuthenticate.excute, patientController.findByUserId.bind(patientController))
patientRouter.delete("/:id", EnsureAuthenticate.excute, patientController.delete.bind(patientController))

patientRouter.post("/:pacient_id/Timelines", timelineController.create.bind(timelineController))

export { patientRouter }