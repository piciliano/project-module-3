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

    async findByTimelineByPatientId(pacient_id: string) {
        try {
            
            return this.repository.findByPatientId(pacient_id)
        } catch (error) {
            
            return {
                error: true,
                message: "Internal server error",
                status: 500,
            }
        }
    }

    async findIdTimeline(id: string) {
        try {
            return this.repository.findByid(id)
        } catch (error) {
            return {
                error: true,
                message: "Internal server error",
                status: 500,
            }
        }
    }

    async uptadeTimelineID(id: string, payload: CreateTimelineDTO) {
        try {
          const TimelineUpdated = await this.repository.updateTimeline(id, payload);
    
          return {
            message: "Timeline updated",
            statusCode: 200,
            data: TimelineUpdated,
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
            return this.repository.deleteTimeline(id)
        } catch (error) {
            return { error: true, message: "Internal server error", status: 500 }
        }
      }
}

export { TimelineService }