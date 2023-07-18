import { Router } from "express";
import { OccurrenceModule } from "../../app/occurrece/Occurrence.Module";

const occurrenceRouter = Router();
const OccurrenceController = OccurrenceModule.build().controller;

occurrenceRouter.get("/Timelines/:timeline_id",OccurrenceController.findByTimelineId.bind(OccurrenceController));
occurrenceRouter.get("/:id",OccurrenceController.findById.bind(OccurrenceController));
occurrenceRouter.patch("/:id",OccurrenceController.update.bind(OccurrenceController));
occurrenceRouter.delete("/:id",OccurrenceController.delete.bind(OccurrenceController));

export { occurrenceRouter };
