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

    async findOccurrenceByTimelineId(timeline_id: string) {
        try {
            return this.repository.findByTimelineId(timeline_id)
        } catch (error) {
            return { error: true, message: "Internal server error", status: 500 }
        }
    }

    async findIdOccurrence(id: string) {
        try {
          return this.repository.findById(id);
        } catch (error) {
          return {
            error: true,
            message: "Internal server error",
            status: 500,
          };
        }
      }

      async updateOccurrenceId(id: string, payload: CreateOccurrenceDTO) {
        try {
          const OccurrenceUpdated = await this.repository.updateOccurrence(id, payload);
    
          return {
            message: "Occurrence updated",
            statusCode: 200,
            data: OccurrenceUpdated,
          };
        } catch (error: any) {
          return {
            message: error.message || "Internal server error",
            statusCode: error.message ? 400 : 500,
            data: null,
          };
        }
      }

      async delete(id: string) {
        try {
          return this.repository.deleteOccurrence(id);
        } catch (error) {
          return { error: true, message: "Internal server error", status: 500 };
        }
      }
    
}

export { OccurrenceService }