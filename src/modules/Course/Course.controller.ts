import { Course } from "@prisma/client";
import { Request, Response } from "express";
import CourseService from "./Course.service";

class CourseController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const body: Course = req.body;
      body.order = Number(body.order);
      const course = await CourseService.create(body);
      res.json(course);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    try {
      const courses = await CourseService.findAll();
      res.json(courses);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findAllByIdUnit(req: Request, res: Response): Promise<void> {
    try {
      const { idUnit } = req.params;
      const courses = await CourseService.findAllByIdUnit(Number(idUnit));
      res.json(courses);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findAllInfoBasic(_req: Request, res: Response): Promise<void> {
    try {
      const courses = await CourseService.findAllInfoBasic();
      res.json(courses);
    } catch (error) {
      res.json(error);
    }
  }

  async findAllUnitiesByIdCourse(req: Request, res: Response): Promise<void> {
    try {
      const { idUnit } = req.params;
      const courses = await CourseService.findAllUnitiesByIdCourse(
        Number(idUnit)
      );
      res.json(courses);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findOne(req: Request, res: Response): Promise<void> {
    try {
      const { idCourse } = req.params;
      const course = await CourseService.findOne(Number(idCourse));
      res.json(course);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { idCourse } = req.params;
      const course = await CourseService.delete(Number(idCourse));
      res.json(course);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { idCourse } = req.params;
      const body = req.body;
      body.order = Number(body.order);
      const course = await CourseService.update(Number(idCourse), body);
      res.json(course);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

export default new CourseController();
