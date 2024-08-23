import { Request, Response, NextFunction } from "express";
import { StudentEntityAssignmentService } from "../services";

class StudentEntityAssignment {
  async assignLevelToStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idStudent, idLevel } = req.params;
      const newStudent =
        await StudentEntityAssignmentService.assignLevelToStudent(
          Number(idStudent),
          Number(idLevel)
        );
      res.json(newStudent);
    } catch (error) {
      console.log("Error", error);
      next(error)
    }
  }

  async assignUnitToStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idStudent, idUnit } = req.params;
      const newStudent =
        await StudentEntityAssignmentService.assignUnitToStudent(
          Number(idStudent),
          Number(idUnit)
        );
      res.json(newStudent);
    } catch (error) {
      console.log("Error", error);
      next(error)
    }
  }

  async assignCourseToStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idStudent, idCourse } = req.params;
      const newStudent =
        await StudentEntityAssignmentService.assignCourseToStudent(
          Number(idStudent),
          Number(idCourse)
        );
      res.json(newStudent);
    } catch (error) {
      console.log("Error", error);
      next(error)
    }
  }

  async assignModuleToStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idStudent, idModule } = req.params;
      const newStudent =
        await StudentEntityAssignmentService.assignModuleToStudent(
          Number(idStudent),
          Number(idModule)
        );
      res.json(newStudent);
    } catch (error) {
      console.log("Error", error);
      next(error)
    }
  }

  async removeLevelFromStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idStudent, idLevel } = req.params;
      const newStudent =
        await StudentEntityAssignmentService.removeLevelFromStudent(
          Number(idStudent),
          Number(idLevel)
        );
      res.json(newStudent);
    } catch (error) {
      console.log("Error", error);
      next(error)
    }
  }
}

export default new StudentEntityAssignment();
