import { CreateUserDTO } from "../dtos/createUserDto";
import { UserRepository } from "../repositories/UserRepositories";
import bcrypt from "bcrypt"

class UserService {
  constructor(private repository: UserRepository) {}

  async create(user: CreateUserDTO) {
    try {
      const existingUser = await this.repository.findByEmail(user.email);
      if (existingUser) {
        return { message: "E-mail já existe!", status: 400 };
      }
      
      if (typeof user.password === 'string' && user.password.length > 0) {
        const payload = {
          ...user,
          password: bcrypt.hashSync(user.password, 8)
        };
        const createdUser = await this.repository.create(payload);
        return { data: createdUser, message: "Usuário criado com sucesso!", status: 200 };
      } 

    } catch (error) {
      console.log("Erro na criação de usuário", error);
      return { error: true, message: "Internal server error", status: 500 };
    }
  }
  async delete(id: string) {
    try {
      return this.repository.delete(id);
    } catch (error) {
      return { error: true, message: "Internal server error", status: 500 };
    }
  }

  async updateUser(id: string, payload: CreateUserDTO) {
    try {
      if (payload.password) {
        payload.password = bcrypt.hashSync(payload.password, 8)
      }
      const userUpdate = await this.repository.updateUser(id, payload)
      return { message: "User updated", statusCode: 200, data: userUpdate }
    } catch (error: any) {
      return { error: true, message: "Internal server error", status: 500 }
    }
  }
}
export { UserService };
