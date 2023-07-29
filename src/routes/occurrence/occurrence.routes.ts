import { Router } from "express";
import { OccurrenceModule } from "../../app/occurrece/Occurrence.Module";
import { EnsureAuthenticate } from "../../common/middlewares/authenticate";

const occurrenceRouter = Router();
const OccurrenceController = OccurrenceModule.build().controller;

occurrenceRouter.get("/Timelines/:timeline_id", EnsureAuthenticate.excute, OccurrenceController.findByTimelineId.bind(OccurrenceController));
occurrenceRouter.get("/:id", EnsureAuthenticate.excute, OccurrenceController.findById.bind(OccurrenceController));
occurrenceRouter.patch("/:id", EnsureAuthenticate.excute, OccurrenceController.update.bind(OccurrenceController));
occurrenceRouter.delete("/:id", EnsureAuthenticate.excute, OccurrenceController.delete.bind(OccurrenceController));

export { occurrenceRouter };
