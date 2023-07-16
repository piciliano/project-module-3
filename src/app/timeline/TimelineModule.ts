import { PatientModule } from "../patient/PatientModule";
import { TimelineController } from "./controllers/TimelineControllers";
import { TimelineModel } from "./entities/Timeline";
import { TimelineRepository } from "./repositories/TimelineRepository";
import { TimelineService } from "./services/TimelineService";

class TimelineModule {
    static build() {
        const repository = new TimelineRepository(TimelineModel)
        const service = new TimelineService(
            repository,
            PatientModule.build().repository
        )
        const controller = new TimelineController(service)
        return { repository, service, controller }
    }
}

export { TimelineModule }