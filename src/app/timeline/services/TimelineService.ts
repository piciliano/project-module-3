import { PatientRepository } from "../../patient/repositories/PatientRepository";
import { CreateTimelineDTO } from "../dtos/CreateTimelineDto";
import { TimelineRepository } from "../repositories/TimelineRepository";

class TimelineService {
    constructor(private repository: TimelineRepository,
    private patientRepository: PatientRepository) {}

    async create(timeline: CreateTimelineDTO) {
        try {

           const timelineCreated = await this.repository.create(timeline)

            const pushTimeline = await this.patientRepository.pushTimeline(
            timeline.pacient_id as string,
            timelineCreated.id
           )

           if(!pushTimeline) {
            return { error: true, message: "Bad Request", status: 400}
           }
           return pushTimeline
        } catch (error) {
            return {
                error: true,
                message: "Internal server error",
                status: 500,
            }
        }
    }
}

export { TimelineService }