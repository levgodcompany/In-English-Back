import { Request, Response, NextFunction } from "express";
import { StudentCRUDService, StudentRelationsService } from "../services";

class StudentRelations {
  async findAllInfoBasic(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const students = await StudentCRUDService.findAllInfoBasic();
      res.json(students);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async findAllAndLevels(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const newStudent = await StudentRelationsService.findAllAndLevels();
      res.json(newStudent);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
}

export default new StudentRelations();
