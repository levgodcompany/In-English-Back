import { NextFunction, Request, Response } from "express";
import { AuthStudentService } from "../services";
import { Student } from "@prisma/client";
import { login } from "../dto/AuthDto";
import { HttpStatus } from "../../../utilities";
import { CustomError } from "../../../utilities/Errors";

class AuthStudentController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const body: login = req.body;
      const student = await AuthStudentService.login(body.email, body.password);
      res.json(student);
    } catch (error) {
      next(error)
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const body: Student = req.body;
      body.status = '014';
      body.password = '';
      body.password = `${body.dni}`;
      body.birthDate = new Date(body.birthDate)
      const student = await AuthStudentService.register(body);
      res.status(HttpStatus.CREATED).json(student);
    } catch (error) {
      if(error instanceof CustomError) {
        next(error)
      }else {
        res.json("non custom")
      }
    }
  }
}

export default new AuthStudentController();
