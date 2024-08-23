import { Request, Response, NextFunction } from "express";
import { TeacherAssignmentsService } from "../services";

class TeacherAssignmentsController {
  async assignLevelToTeacher(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idTeacher, idLevel } = req.params;
      const teacher = await TeacherAssignmentsService.assignLevelToTeacher(
        Number(idTeacher),
        Number(idLevel)
      );
      res.json(teacher);
    } catch (error) {
      next(error)
    }
  }

  async assignUnitToTeacher(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idTeacher, idUnit } = req.params;
      const teacher = await TeacherAssignmentsService.assignUnitToTeacher(
        Number(idTeacher),
        Number(idUnit)
      );
      res.json(teacher);
    } catch (error) {
      next(error)
    }
  }

  async assignCourseToTeacher(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idTeacher, idCourse } = req.params;
      const teacher = await TeacherAssignmentsService.assignCourseToTeacher(
        Number(idTeacher),
        Number(idCourse)
      );
      res.json(teacher);
    } catch (error) {
      next(error)
    }
  }

  async assignModuleToTeacher(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idTeacher, idModule } = req.params;
      const teacher = await TeacherAssignmentsService.assignModuleToTeacher(
        Number(idTeacher),
        Number(idModule)
      );
      res.json(teacher);
    } catch (error) {
      next(error)
    }
  }
}

export default new TeacherAssignmentsController();
