import { Request, Response } from "express";
import { makeCreatePatientSchema } from "../schemas/createPatient";
import { PatientService } from "../services/PatientService";
import { makeDeletePatientSchema } from "../schemas/deletePatientchema";
import { CreatePatientDTO } from "../dtos/CreatePatientDto";

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
        
        const result = await this.service.create({ ...body, userId: user_id }) as any
        if("error" in result) {
            return res.status(result.status).json(result)
        }
        return res.status(201).json(result)   
    }

    async findIdPatient(req: Request, res: Response) {
        try {
            const idPatient = req.params.id

            const pacient = await this.service.findPatientById(idPatient)

            res.status(200).json(pacient)

        } catch (error) {
            res.status(500).json({
                error: true,
                message: "Internal Server Error"
            })
        }
    }

    async findByUserId(req: Request, res: Response) {
        try {
            const userId = req.params.user_id
            const patients = await this.service.findPatientByUserId(userId)
            res.status(200).json(patients)
        } catch (error) {
            res.status(500).json({
                error: true,
                message: "Internal server error",
            })
        }
    }

    async delete(req: Request, res: Response) {
        const { params } = req;
    
        try {
          await makeDeletePatientSchema().validate(params);
        } catch (error: any) {
          return res.status(400).json({ errors: error.errors });
        }
        const result = (await this.service.delete(params.id)) as any;
        if ("error" in result) {
          return res.status(result.status).json(result);
        }
        return res.status(200).json({message:"Paciente deletado!"});
      }

      async update(req: Request, res: Response) {
        const { id } = req.params;
        
        const payload: CreatePatientDTO = req.body;
      
        const result = await this.service.updateUser(id, payload);
      
        const { statusCode = 200, message, data } = result;
      
        res.status(statusCode).json({
          message,
          data
        });
      }
}

export { PatientControllers }




         