import { CreatePatientDTO } from "../dtos/CreatePatientDto";
import { PatientModel } from "../entities/Patient";

class PatientRepository {
    constructor(private model: typeof PatientModel) {}

    async create(patient: CreatePatientDTO){
        return this.model.create(patient)
    }
}

export { PatientRepository }