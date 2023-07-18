import { Router } from "express"
import { TimelineModule } from "../../app/timeline/TimelineModule"
import { OccurrenceModule } from "../../app/occurrece/Occurrence.Module"

const timelineRouter = Router()
const timelineController = TimelineModule.build().controller
const occurrencesController = OccurrenceModule.build().controller

timelineRouter.post("/:timeline_id/Occurrence", occurrencesController.create.bind(occurrencesController))
timelineRouter.get("/Patient/:patient_id", timelineController.findByPatientId.bind(timelineController))
timelineRouter.get("/:id", timelineController.findById.bind(timelineController))
timelineRouter.patch("/:id", timelineController.update.bind(timelineController))
timelineRouter.delete("/:id", timelineController.delete.bind(timelineController))

export { timelineRouter }