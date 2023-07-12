import { UserRepository } from "../../users/repositories/UserRepositories";
import { CreatePatientDTO } from "../dtos/CreatePatientDto";
import { PatientRepository } from "../repositories/PatientRepository";

class PatientService {
  constructor(private repository: PatientRepository, private userRepository: UserRepository) {}

  async create(patient: CreatePatientDTO) {

    try {
      const patientCreated = await this.repository.create(patient)
      // console.log('Patient created:', patientCreated);
      // console.log('Pushing patient: userId:', patientCreated.userId, 'patientId:', patientCreated.id);
      return this.userRepository.pushPatient(patient.userId as string, patientCreated.id)
      
    } catch (error) {
      console.log('error creating user', error)
      console.log('Error creating patient:', error)
      return { error: true, message: "Internal server error", status: 500 }
    }
  }
}

export { PatientService }
