import { CreateTimelineDTO } from "../dtos/CreateTimelineDto";
import { TimelineModel } from "../entities/Timeline";

class TimelineRepository {
    constructor(private model: typeof TimelineModel) {}

    async create(timeline: CreateTimelineDTO) {
        return this.model.create(timeline)
    }

    async pushOccurrence(timeline_id: string, occurrence_id: string) {
        return this.model.findByIdAndUpdate(
            timeline_id, 
            {
            $push: {
                ocurrences: occurrence_id,
            },
        },
            { new: true}
        ).populate("ocurrences")
    }

    async findByPatientId(pacient_id: string) {
        
        return this.model.find({ pacient_id: pacient_id })
    }

    async findByid(id: string) {
        return this.model.findById(id)
    }

    async updateTimeline(id: string, payload: any){
        return this.model.findByIdAndUpdate(id, payload, { new: true })
    }

    async deleteTimeline(id: string) {
        return this.model.findByIdAndDelete(id)
    }
}

export { TimelineRepository }