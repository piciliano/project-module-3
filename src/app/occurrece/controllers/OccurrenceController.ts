import { Response, Request } from "express";
import { OccurrenceService } from "../services/OccurrenceService";
import { makeCreateOccurrenceSchema } from "../schemas/CreateOccurrenceSchema";

class OccurrenceController {
    constructor(private service: OccurrenceService) {}

    async create(req: Request, res: Response) {
        const {
            body,
            params: { timeline_id }
        } = req

        try {
            await makeCreateOccurrenceSchema().validate(body)
        } catch (error: any) {
            return res.status(400).json({
                erros: error.erros
            })
        }
        const result = await this.service.create({
            ...body,
            timeline_id: timeline_id,
        }) 

        if ("error" in result) {
            return res.status(result.status).json(result)
        }
        return res.status(201).json(result)
    }
}

export { OccurrenceController }