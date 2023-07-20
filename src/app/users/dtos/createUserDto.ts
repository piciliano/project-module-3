import { CreateFileDto } from "../../file/dtos/CreateFileDto";

interface CreateUserDTO {
    name: string
    email: string
    password: string
    photo?: string
}

interface CreateUserServiceDTO {
    name: string;
    nickname: string;
    email: string;
    password: string;
    photo: CreateFileDto;
  }

export { CreateUserDTO, CreateUserServiceDTO }