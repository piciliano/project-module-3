import { CreateOccurrenceDTO } from "../dtos/CreateOccurrence";
import { OccurrenceModel } from "../entities/Occurrence";

class OccurrenceRepository {
    constructor(private model: typeof OccurrenceModel) {}

    async create(occurrence: CreateOccurrenceDTO) {
        return this.model.create(occurrence)
    }

    async findByTimelineId(timeline_id: string) {
        return this.model.find({ timeline_id: timeline_id})
    }

    async findById(id: string) {
        return this.model.findById(id)
    }

    async updateOccurrence(id: string, payload: any) {
        return this.model.findByIdAndUpdate(id, payload, { new: true })
    }

    async deleteOccurrence(id: string) {
        return this.model.findByIdAndDelete(id)
    }

}



export { OccurrenceRepository }