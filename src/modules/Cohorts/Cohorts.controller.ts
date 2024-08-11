import { Cohort } from "@prisma/client";
import { Request, Response } from "express";
import CohortsService from "./Cohorts.service";

class CohortController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const body: Cohort = req.body;
      body.idLevel = Number(body.idLevel);
      const newCohort = await CohortsService.create(body);
      res.json(newCohort);
    } catch (error) {
      console.log("Error", error);
      res.json(error);
    }
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    try {
      const cohorts = await CohortsService.findAll();
      res.json(cohorts);
    } catch (error) {
      console.log(error)
      res.json(error);
    }
  }

  async findAllCohortUnitByIdCohort(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { idCohort } = req.params;
      const cohorts = await CohortsService.findAllCohortUnitByIdCohort(
        Number(idCohort)
      );
      res.json(cohorts);
    } catch (error) {
      console.log(error)
      res.json(error);
    }
  }

  async findAllCohortCourseByIdCohort(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { idCohort } = req.params;
      const cohorts = await CohortsService.findAllCohortCourseByIdCohort(
        Number(idCohort)
      );
      res.json(cohorts);
    } catch (error) {
      console.log(error)
      res.json(error);
    }
  }

  async findAllCohortModuleByIdCohort(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { idCohort } = req.params;
      const cohorts = await CohortsService.findAllCohortModuleByIdCohort(
        Number(idCohort)
      );
      res.json(cohorts);
    } catch (error) {
      console.log(error)
      res.json(error);
    }
  }

  async findAllCohortTeacherByIdCohort(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { idCohort } = req.params;
      const cohorts = await CohortsService.findAllCohortTeacherByIdCohort(
        Number(idCohort)
      );
      res.json(cohorts);
    } catch (error) {
      console.log(error)
      res.json(error);
    }
  }

  async findAllCohortStudentByIdCohort(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { idCohort } = req.params;
      const cohorts = await CohortsService.findAllCohortStudentByIdCohort(
        Number(idCohort)
      );
      res.json(cohorts);
    } catch (error) {
      console.log(error)
      res.json(error);
    }
  }

  async findOne(req: Request, res: Response): Promise<void> {
    try {
      const { idCohort } = req.params;
      const cohort = await CohortsService.findOne(Number(idCohort));
      res.json(cohort);
    } catch (error) {
      res.json(error);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const body: Cohort = req.body;
      const { idCohort } = req.params;
      const cohort = await CohortsService.update(Number(idCohort), body);
      res.json(cohort);
    } catch (error) {
      res.json(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { idCohort } = req.params;
      const cohort = await CohortsService.delete(Number(idCohort));
      res.json(cohort);
    } catch (error) {
      console.log(error)
      res.json(error);
    }
  }

  async assignTeacherToCohort(req: Request, res: Response): Promise<void> {
    try {
      const { idCohort, idTeacher } = req.params;
      const teacher = await CohortsService.assignTeacherToCohort(
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
      const teacher = await CohortsService.assignStudentToCohort(
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
      const teacher = await CohortsService.assignUnitToCohort(
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
      const teacher = await CohortsService.assignCourseToCohort(
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
      const teacher = await CohortsService.assignModuleToCohort(
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

export default new CohortController();
