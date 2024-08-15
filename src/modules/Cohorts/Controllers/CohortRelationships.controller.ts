import { Request, Response } from "express";
import { CohortRelationshipsService } from "../Services";

class CohortRelationshipsController {
  async findAllCohortUnitByIdCohort(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { idCohort } = req.params;
      const cohorts =
        await CohortRelationshipsService.findAllCohortUnitByIdCohort(
          Number(idCohort)
        );
      res.json(cohorts);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findAllCohortCourseByIdCohort(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { idCohort } = req.params;
      const cohorts =
        await CohortRelationshipsService.findAllCohortCourseByIdCohort(
          Number(idCohort)
        );
      res.json(cohorts);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findAllCohortModuleByIdCohort(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { idCohort } = req.params;
      const cohorts =
        await CohortRelationshipsService.findAllCohortModuleByIdCohort(
          Number(idCohort)
        );
      res.json(cohorts);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findAllCohortTeacherByIdCohort(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { idCohort } = req.params;
      const cohorts =
        await CohortRelationshipsService.findAllCohortTeacherByIdCohort(
          Number(idCohort)
        );
      res.json(cohorts);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findOneAllInfo(req: Request, res: Response): Promise<void> {
    try {
      const { idCohort } = req.params;
      const cohorts = await CohortRelationshipsService.findOneAllInfo(
        Number(idCohort)
      );
      res.json(cohorts);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findAllCohortStudentByIdCohort(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { idCohort } = req.params;
      const cohorts =
        await CohortRelationshipsService.findAllCohortStudentByIdCohort(
          Number(idCohort)
        );
      res.json(cohorts);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

export default new CohortRelationshipsController();
