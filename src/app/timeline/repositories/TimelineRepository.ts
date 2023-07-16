import { CreateTimelineDTO } from "../dtos/CreateTimelineDto";
import { TimelineModel } from "../entities/Timeline";

class TimelineRepository {
    constructor(private model: typeof TimelineModel) {}

    async create(timeline: CreateTimelineDTO) {
        return this.model.create(timeline)
    }
}

export { TimelineRepository }