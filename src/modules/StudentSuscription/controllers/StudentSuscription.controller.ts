import { StudentSuscription } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { StudentSuscriptionService } from "../services";

class StudentSuscriptionController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body: StudentSuscription = req.body;
      const newStudentSuscript = await StudentSuscriptionService.create(body);
      res.json(newStudentSuscript);
    } catch (error) {
      console.log("Error", error);
      next(error)
    }
  }

  async findAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const studentSuscriptions = await StudentSuscriptionService.findAll();
      res.json(studentSuscriptions);
    } catch (error) {
      next(error)
    }
  }
  async findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idStudent, idSuscription } = req.params;
      const studentSuscription = await StudentSuscriptionService.findOne(
        Number(idStudent),
        Number(idSuscription)
      );
      res.json(studentSuscription);
    } catch (error) {
      next(error)
    }
  }
}

export default new StudentSuscriptionController();
