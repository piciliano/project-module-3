import { Router } from "express"
import { TimelineModule } from "../../app/timeline/TimelineModule"
import { OccurrenceModule } from "../../app/occurrece/Occurrence.Module"
import { EnsureAuthenticate } from "../../common/middlewares/authenticate"

const timelineRouter = Router()
const timelineController = TimelineModule.build().controller
const occurrencesController = OccurrenceModule.build().controller

timelineRouter.post("/:timeline_id/Occurrence", EnsureAuthenticate.excute, occurrencesController.create.bind(occurrencesController))
timelineRouter.get("/Patient/:patient_id", EnsureAuthenticate.excute, timelineController.findByPatientId.bind(timelineController))
timelineRouter.get("/:id", EnsureAuthenticate.excute, timelineController.findById.bind(timelineController))
timelineRouter.patch("/:id", EnsureAuthenticate.excute, timelineController.update.bind(timelineController))
timelineRouter.delete("/:id", EnsureAuthenticate.excute, timelineController.delete.bind(timelineController))

export { timelineRouter }