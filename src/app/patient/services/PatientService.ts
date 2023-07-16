import { UserRepository } from "../../users/repositories/UserRepositories";
import { CreatePatientDTO } from "../dtos/CreatePatientDto";
import { PatientRepository } from "../repositories/PatientRepository";

class PatientService {
  constructor(private repository: PatientRepository, private userRepository: UserRepository) {}

  async create(patient: CreatePatientDTO) {

    try {
      const patientCreated = await this.repository.create(patient)
      return this.userRepository.pushPatient(patient.userId as string, patientCreated.id)
      
    } catch (error) {
      console.log('error creating user', error)
      console.log('Error creating patient:', error)
      return { error: true, message: "Internal server error", status: 500 }
    }
  }

  async findPatientById(id: string) {
    try {
      return this.repository.findById(id)
    } catch (error) {
      return {
        error: true,
        message: "Internal server error",
        status: 500,
      }
    }
  }
  async findPatientByUserId(userId: string) {
    try {

      return this.repository.findByUserId(userId)
    } catch (error) {
      return {
        error: true,
        message: "Internal server error",
        status: 500,
      }
    }
  }
  
  async delete(id: string) {
    try {
      return this.repository.delete(id);
    } catch (error) {
      return { error: true, message: "Internal server error", status: 500 };
    }
  }

  async updateUser(id: string, payload: CreatePatientDTO) {
    try {
      const userUpdate = await this.repository.updateUser(id, payload)
      return { message: "User updated", statusCode: 200, data: userUpdate }
    } catch (error: any) {
      return { error: true, message: "Internal server error", status: 500 }
    }
  }
}

export { PatientService }
