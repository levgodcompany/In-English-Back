import { NextFunction, Request, Response } from "express";
import { CohortUnitService } from "../../Services";

class CohortUnitController {
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idCohort, idUnit } = req.params;
      const teacher = await CohortUnitService.delete(
        Number(idCohort),
        Number(idUnit)
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
      const { idCohort, idUnit } = req.params;
      const body: {enabled: boolean} = req.body;
      const teacher = await CohortUnitService.enableUnit(
        Number(idCohort),
        Number(idUnit),
        body.enabled
      );
      res.json(teacher);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default new CohortUnitController();
