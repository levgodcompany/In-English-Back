import { NextFunction, Request, Response } from "express";
import { ModuleRelation } from "../services";

class ModuleRelationController {
  async assigStudentToModule(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { idStudent, idModule, idCourse } = req.params;
      console.log(idStudent, idModule, idCourse)
      const module = await ModuleRelation.assigStudentToModule(
        Number(idStudent),
        Number(idModule),
        Number(idCourse)
      );
      res.json(module);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async findAllStudentToModule(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { idStudent } = req.params;
      const module = await ModuleRelation.findAllStudentToModule(
        Number(idStudent)
      );
      res.json(module);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default new ModuleRelationController();
