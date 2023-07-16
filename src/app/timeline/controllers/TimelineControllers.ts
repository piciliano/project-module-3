import { Request, Response } from "express";
import { TimelineService } from "../services/TimelineService";
import { makeCreateTimelineSchema } from "../schemas/CreateTimelineSchema";

class TimelineController {
    constructor(private service: TimelineService) {}
        async create(req: Request, res: Response) {
            const {
                body,
                params: { pacient_id },
            } = req;
            try {
                await makeCreateTimelineSchema().validate(body)
            } catch (error: any) {
                return res.status(400).json({
                    errors: error.errors,
                })
            }
            const result = await this.service.create({
                ...body,
                pacient_id: pacient_id,
            })
            if("error" in result) {
                return res.status(result.status).json(result)
            }
            return res.status(201).json(result)
        }
}

export { TimelineController }