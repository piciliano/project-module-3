import { TimelineModule } from "../timeline/TimelineModule";
import { OccurrenceController } from "./controllers/OccurrenceController";
import { OccurrenceModel } from "./entities/Occurrence";
import { OccurrenceRepository } from "./repositories/OccurrenceRepository";
import { OccurrenceService } from "./services/OccurrenceService";

class OccurrenceModule {
    static build() {
        const repository = new OccurrenceRepository(OccurrenceModel)
        const service = new OccurrenceService(repository, TimelineModule.build().repository)
        const controller = new OccurrenceController(service)

        return { repository, service, controller }
    }
    
}

export { OccurrenceModule }