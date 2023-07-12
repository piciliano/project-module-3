import { Request, Response } from "express";
import { makeCreatePatientSchema } from "../schemas/createPatient";
import { PatientService } from "../services/PatientService";

class PatientControllers {
    constructor(
        private service: PatientService
    ) {}
    
    async create (req: Request, res: Response) {
        const { body, params:{ user_id } } = req

      try {
            await makeCreatePatientSchema().validate(body)
        } catch (error: any) {
            return res.status(400).json({
                errors: error.errors,
            })
        }
        // console.log('Creating patient:', body);
        const result = await this.service.create({ ...body, userId: user_id }) as any
        if("error" in result) {
            return res.status(result.status).json(result)
        }
        return res.status(201).json(result)   
    }
}

export { PatientControllers }




         