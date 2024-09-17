import { NextFunction, Request, Response } from "express";
import { CohortCourseService } from "../../Services";

class CohortCourseController {
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idCohort, idCourse } = req.params;
      const teacher = await CohortCourseService.delete(
        Number(idCohort),
        Number(idCourse)
      );
      res.json(teacher);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async enableCourse(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { idCohort, idCourse } = req.params;
      const body: { enabled: boolean } = req.body;
      const teacher = await CohortCourseService.enableCourse(
        Number(idCohort),
        Number(idCourse),
        body.enabled
      );
      res.json(teacher);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default new CohortCourseController();
