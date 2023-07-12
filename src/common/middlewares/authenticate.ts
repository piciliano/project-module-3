import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  userId?: string;
}

class EnsureAuthenticate {
  static async excute(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { authorization = null } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: "Token não informado" });
    }

    const [, token] = authorization.split(" ");

    try {
      const decodedToken = JWT.verify(
        token,
        process.env.JWT_SECRET_KEY as string
      );

      const userId = (decodedToken as { id: string }).id;
      
      if (req.params.id && req.params.id !== userId) {
        return res.status(401).json({ error: "Invalid token" });
      }

      req.userId = userId;

      next();
    } catch (error: any) {
      return res.status(401).json({ error });
    }
    
  }
}
export { EnsureAuthenticate }
