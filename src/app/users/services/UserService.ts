import { deletePatientsAndTimelinesForUsers } from "../../../utils/delete-cascade";
import { CreateFileDto } from "../../file/dtos/CreateFileDto";
import { FilesRepository } from "../../file/repositories/FilesRepository";
import { PatientModel } from "../../patient/entities/Patient";
import { CreateUserDTO, CreateUserServiceDTO } from "../dtos/createUserDto";
import { UserRepository } from "../repositories/UserRepositories";
import bcrypt from "bcrypt";

class UserService {
  constructor(
    private repository: UserRepository,
    private filesrepository: FilesRepository
  ) {}
  async create(user: CreateUserServiceDTO) {
    try {
      const photo = await this.filesrepository.create(user.photo);

      const existingUser = await this.repository.findByEmail(user.email);
      if (existingUser) {
        return { message: "E-mail já existe!", status: 400 };
      }

      if (typeof user.password === "string" && user.password.length > 0) {
        const payload = {
          ...user,
          password: bcrypt.hashSync(user.password, 8),
          photo: photo.id,
        };
        const createdUser = await this.repository.create(payload);
        return {
          data: createdUser,
          message: "Usuário criado com sucesso!",
          status: 200,
        };
      }
    } catch (error) {
      console.log("Erro na criação de usuário", error);
      return { error: true, message: "Internal server error", status: 500 };
    }
  }
  async delete(id: string) {
    try {
      const user = await this.repository.findById(id);
      const patients = user?.patient;
      if (patients && patients.length > 0) {
        for (const patient of patients) {
          await deletePatientsAndTimelinesForUsers(user._id);
        }
        await PatientModel.deleteMany({ _id: { $in: patients } }).exec();
      }
      return this.repository.delete(id);
    } catch (error) {
      return { error: true, message: "Internal server error", status: 500 };
    }
  }
  async updateUser(id: string, payload: CreateUserDTO) {
    try {
      if (payload.password) {
        payload.password = bcrypt.hashSync(payload.password, 8);
      }
      const userUpdate = await this.repository.updateUser(id, payload);
      return { message: "User updated", statusCode: 200, data: userUpdate };
    } catch (error: any) {
      return { error: true, message: "Internal server error", status: 500 };
    }
  }
}
export { UserService };

