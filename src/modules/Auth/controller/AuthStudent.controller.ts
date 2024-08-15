import { Request, Response } from "express";
import { AuthStudentService } from "../services";
import { Student } from "@prisma/client";
import { login } from "../dto/AuthDto";

class AuthStudentController {
  async login(req: Request, res: Response) {
    try {
      const body: login = req.body;
      const student = await AuthStudentService.login(body.email, body.password);
      res.json(student);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async register(req: Request, res: Response) {
    try {
      const body: Student = req.body;
      const student = await AuthStudentService.register(body);
      res.json(student);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

export default new AuthStudentController();
