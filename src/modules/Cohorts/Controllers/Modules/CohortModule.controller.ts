import { NextFunction, Request, Response } from "express";
import { CohortModuleService } from "../../Services";

class CohortModuleController {
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idCohort, idModule } = req.params;
      const teacher = await CohortModuleService.delete(
        Number(idCohort),
        Number(idModule)
      );
      res.json(teacher);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async enableUnit(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { idCohort, idModule } = req.params;
      const body: boolean = req.body;
      const teacher = await CohortModuleService.enableModules(
        Number(idCohort),
        Number(idModule),
        body
      );
      res.json(teacher);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default new CohortModuleController();
