import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { makeCreateUserSchema } from "../schemas/createUserSchema";
import { makeDeleteUserSchema } from "../schemas/deleteUserSchema";
import { CreateUserDTO } from "../dtos/createUserDto";

class UserController {
  constructor(private service: UserService) {}

  async create(req: Request, res: Response) {
    const { body } = req;

    try {
      await makeCreateUserSchema().validate(body);
    } catch (error: any) {
      return res.status(400).json({errors: error.errors});
    }
    const result = await this.service.create(body) as any;
    if ("error" in result) {
      return res.status(result.status).json(result);
    }
    return res.status(201).json(result);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const payload: CreateUserDTO = req.body;
  
    const result = await this.service.updateUser(id, payload);
  
    const { statusCode = 200, message, data } = result;
  
    res.status(statusCode).json({
      message,
      data
    });
  }
  
  async delete(req: Request, res: Response) {
    const { params } = req;

    try {
      await makeDeleteUserSchema().validate(params);
    } catch (error: any) {
      return res.status(400).json({ errors: error.errors });
    }
    const result = (await this.service.delete(params.id)) as any;
    if ("error" in result) {
      return res.status(result.status).json(result);
    }
    return res.status(200).json({message:"Usuário deletado!"});
  }
}

export { UserController };
