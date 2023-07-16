import { CreateUserDTO } from "../dtos/createUserDto";
import { UserModel } from "../entities/User";

class UserRepository {
  constructor(private model: typeof UserModel) {}
  async create(user: CreateUserDTO) {
    return this.model.create(user)
  }
  
 async pushPatient(userId: string, patientId: string) {
      return this.model.findByIdAndUpdate(userId,
        {
          $push: {
            patient: patientId,
          },
        }, { new: true }).populate('patient')
  }
  
   async findByEmail(email: string) {
    return this.model.findOne({ email });
  }

  async updateUser(id: string, payload: CreateUserDTO) {
    return this.model.findByIdAndUpdate(id, payload, { new: true });
  }
  

  async delete(id: string) {
    return this.model.findByIdAndDelete( id )
  }
}

export { UserRepository }
