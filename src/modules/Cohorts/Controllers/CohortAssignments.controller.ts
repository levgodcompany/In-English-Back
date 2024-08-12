import { Request, Response } from "express";
import { CohortAssignmentsService } from "../Services";

class CohortAssignmentsController {
  async assignTeacherToCohort(req: Request, res: Response): Promise<void> {
    try {
      const { idCohort, idTeacher } = req.params;
      const teacher = await CohortAssignmentsService.assignTeacherToCohort(
        Number(idCohort),
        Number(idTeacher)
      );
      res.json(teacher);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async assignStudentToCohort(req: Request, res: Response): Promise<void> {
    try {
      const { idCohort, idStudent } = req.params;
      const teacher = await CohortAssignmentsService.assignStudentToCohort(
        Number(idCohort),
        Number(idStudent)
      );
      res.json(teacher);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async assignUnitToCohort(req: Request, res: Response): Promise<void> {
    try {
      const { idCohort, idUnit } = req.params;
      const teacher = await CohortAssignmentsService.assignUnitToCohort(
        Number(idCohort),
        Number(idUnit)
      );
      res.json(teacher);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async assignCourseToCohort(req: Request, res: Response): Promise<void> {
    try {
      const { idCohort, idCourse } = req.params;
      const teacher = await CohortAssignmentsService.assignCourseToCohort(
        Number(idCohort),
        Number(idCourse)
      );
      res.json(teacher);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async assignModuleToCohort(req: Request, res: Response): Promise<void> {
    try {
      const { idCohort, idModule } = req.params;
      const teacher = await CohortAssignmentsService.assignModuleToCohort(
        Number(idCohort),
        Number(idModule)
      );
      res.json(teacher);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

export default new CohortAssignmentsController();
