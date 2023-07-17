import { TimelineRepository } from "../../timeline/repositories/TimelineRepository";
import { CreateOccurrenceDTO } from "../dtos/CreateOccurrence";
import { OccurrenceRepository } from "../repositories/OccurrenceRepository";

class OccurrenceService {
    constructor(
        private repository: OccurrenceRepository,
        private timelineRepository: TimelineRepository
    ) {}

    async create(occurrence: CreateOccurrenceDTO) {
        try {
            const occurrenceCreated = await this.repository.create(occurrence)

           const pushOccurrence = await this.timelineRepository.pushOccurrence(
                occurrence.timeline_id as string,
                occurrenceCreated.id
            )

            if(!pushOccurrence) {
                return {
                    error: true,
                    message: "Bad Request",
                    status: 400,
                }
            }
            return pushOccurrence

        } catch (error) {
            console.log("erro ao atrelar", error)
            return {
                error: true,
                message: "Internal server error",
                status: 500,
            }
        }
    }
}

export { OccurrenceService }