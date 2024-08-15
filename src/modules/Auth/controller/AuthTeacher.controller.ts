import { Request, Response } from "express";
import { AuthTeacherService } from "../services";
import { Teacher } from "@prisma/client";
import { login } from "../dto/AuthDto";

class AuthTacherController {
  async login(req: Request, res: Response) {
    try {
      const body: login = req.body;
      const teacher = await AuthTeacherService.login(body.email, body.password);
      res.json(teacher);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async register(req: Request, res: Response) {
    try {
      const body: Teacher = req.body;
      const teacher = await AuthTeacherService.register(body);
      res.json(teacher);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

export default new AuthTacherController()
