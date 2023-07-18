import { Request, Response } from "express";
import { TimelineService } from "../services/TimelineService";
import { makeCreateTimelineSchema } from "../schemas/CreateTimelineSchema";
import { makeDeleteTimelineSchema } from "../schemas/DeleteTimelineSchema";

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

        async findByPatientId( req: Request, res: Response) {
            try {
                const patientId = req.params.pacient_id
                const timelines = await this.service.findByTimelineByPatientId(patientId)
                res.status(200).json(timelines)
            } catch (error) {
                res.status(500).json({
                    error: true,
                    message: "Internal server error"
                })
            }
        }

        async findById(req: Request, res: Response){
            try {
                const timelineId = req.params.id
                const timeline = await this.service.findIdTimeline(timelineId)
                res.status(200).json(timeline)
            } catch (error) {
                res.status(500).json({
                    error: true,
                    message: "Internal Server Error",
                })
            }
        }

        async update(req: Request, res: Response) {
            const { id } = req.params;
            const payload = req.body;
        
            const result = await this.service.uptadeTimelineID(id, payload);
        
            const { statusCode, message, data } = result;
        
            res.status(statusCode).json({
              message,
              data,
            });
          }

          async delete(req: Request, res: Response) {
            const { params } = req;
        
            try {
              await makeDeleteTimelineSchema().validate(params);
            } catch (error: any) {
              return res.status(400).json({ errors: error.errors });
            }
        
            const result = (await this.service.delete(params.id)) as any;
            if ("error" in result) {
              return res.status(result.status).json(result);
            }
        
            return res.status(200).json({ message: "Timeline deleted successfully" });
          }
}

export { TimelineController }