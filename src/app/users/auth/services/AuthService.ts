import JWT from "jsonwebtoken";
import { CreateLoginDTO } from "../dtos/createLoginDto";
import { makeError } from "../../../../utils/error-handle";
import { Crypt } from "../../../../utils/crypt";
import { UserRepository } from "../../repositories/UserRepositories";

class AuthService {
  constructor(private userRepository: UserRepository) {}

  async login(body: CreateLoginDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(body.email);

    if (!userAlreadyExists) {
      console.log("Usuário não encontrado");
      return makeError("E-mail", 400);
    }

    const passwordIsValid = Crypt.compare(
      body.password,
      userAlreadyExists.password
    );
  
    if (!passwordIsValid) {
      return makeError("senha inválidos", 400);
    }

    const payload = {
      id: userAlreadyExists.id,
      email: userAlreadyExists.email,
    }

    const secret = process.env.JWT_SECRET_KEY as string;

    const options = { expiresIn: "1h" };

    const token = JWT.sign(payload, secret, options);

    return { token, user: userAlreadyExists };
  }
}

export { AuthService };