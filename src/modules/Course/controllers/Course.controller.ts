import { Course } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { CourseCrudService, CourseUnitService } from "../services";

class CourseController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body: Course = req.body;
      body.order = Number(body.order);
      const course = await CourseCrudService.create(body);
      res.json(course);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async findAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const courses = await CourseCrudService.findAll();
      res.json(courses);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async findAllByIdUnit(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idUnit } = req.params;
      const courses = await CourseUnitService.findAllByIdUnit(Number(idUnit));
      res.json(courses);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async findAllInfoBasic(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const courses = await CourseUnitService.findAllInfoBasic();
      res.json(courses);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async findAllUnitiesByIdCourse(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idUnit } = req.params;
      const courses = await CourseUnitService.findAllUnitiesByIdCourse(
        Number(idUnit)
      );
      res.json(courses);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async findAllCourseByIdUnitAndIdStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idUnit, idStudent } = req.params;
      const courses = await CourseUnitService.findAllCourseByIdUnitAndIdStudent(
        Number(idUnit),
        Number(idStudent)
      );
      res.json(courses);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idCourse } = req.params;
      const course = await CourseCrudService.findOne(Number(idCourse));
      res.json(course);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idCourse } = req.params;
      const course = await CourseCrudService.delete(Number(idCourse));
      res.json(course);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idCourse } = req.params;
      const body = req.body;
      body.order = Number(body.order);
      const course = await CourseCrudService.update(Number(idCourse), body);
      res.json(course);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
}

export default new CourseController();
