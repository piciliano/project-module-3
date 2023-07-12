import { Router } from "express"
import { PatientModule } from "../../app/patient/PatientModule";

const patientRouter = Router();

const patientController = PatientModule.build().controller;

patientRouter.post("/:user_id/Patient", patientController.create.bind(patientController))

export { patientRouter }