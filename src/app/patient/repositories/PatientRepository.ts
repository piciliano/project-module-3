import { CreatePatientDTO } from "../dtos/CreatePatientDto";
import { PatientModel } from "../entities/Patient";

class PatientRepository {
  constructor(private model: typeof PatientModel) {}

  async create(patient: CreatePatientDTO) {
    return this.model.create(patient);
  }

  async findById(id: string) {
    return this.model.findById(id);
  }

  async findByUserId(userId: string) {
    return this.model.find({ userId: userId });
  }

  async delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }

  async updateUser(id: string, payload: CreatePatientDTO) {
    return this.model.findByIdAndUpdate(id, payload, { new: true });
  }

  async pushTimeline(patient_id: string, timeline_id: string) {
    return this.model
      .findByIdAndUpdate(
        patient_id,
        {
          $push: {
            timelines: timeline_id,
          },
        },
        { new: true }
      )
      .populate("timelines");
  }
}

export { PatientRepository };
