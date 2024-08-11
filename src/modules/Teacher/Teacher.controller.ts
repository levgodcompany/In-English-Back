import { Teacher } from "@prisma/client";
import { Request, Response } from "express";
import TeacherService from "./Teacher.service";

class TeacherController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const teacher: Teacher = req.body;
      const newTeacher = await TeacherService.create(teacher);
      res.json(newTeacher);
    } catch (error) {
      res.json(error);
    }
  }

  async findOne(req: Request, res: Response): Promise<void> {
    try {
      const { idTeacher } = req.params;
      const teacher = await TeacherService.findOne(Number(idTeacher));
      res.json(teacher);
    } catch (error) {
      res.json(error);
    }
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    try {
      const teachers = await TeacherService.findAll();
      res.json(teachers);
    } catch (error) {
      res.json(error);
    }
  }

  async findAllInfoBasic(_req: Request, res: Response): Promise<void> {
    try {
      const teachers = await TeacherService.findAllInfoBasic();
      res.json(teachers);
    } catch (error) {
      res.json(error);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { idTeacher } = req.params;
      const body = req.body;
      const teacher = await TeacherService.update(Number(idTeacher), body);
      res.json(teacher);
    } catch (error) {
      res.json(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { idTeacher } = req.params;
      const teacher = await TeacherService.delete(Number(idTeacher));
      res.json(teacher);
    } catch (error) {
      res.json(error);
    }
  }

  async assignLevelToTeacher(req: Request, res: Response): Promise<void> {
    try {
      const { idTeacher, idLevel } = req.params;
      const teacher = await TeacherService.assignLevelToTeacher(
        Number(idTeacher),
        Number(idLevel)
      );
      res.json(teacher);
    } catch (error) {
      res.json(error);
    }
  }

  async assignUnitToTeacher(req: Request, res: Response): Promise<void> {
    try {
      const { idTeacher, idUnit } = req.params;
      const teacher = await TeacherService.assignUnitToTeacher(
        Number(idTeacher),
        Number(idUnit)
      );
      res.json(teacher);
    } catch (error) {
      res.json(error);
    }
  }

  async assignCourseToTeacher(req: Request, res: Response): Promise<void> {
    try {
      const { idTeacher, idCourse } = req.params;
      const teacher = await TeacherService.assignCourseToTeacher(
        Number(idTeacher),
        Number(idCourse)
      );
      res.json(teacher);
    } catch (error) {
      res.json(error);
    }
  }

  async assignModuleToTeacher(req: Request, res: Response): Promise<void> {
    try {
      const { idTeacher, idModule } = req.params;
      const teacher = await TeacherService.assignModuleToTeacher(
        Number(idTeacher),
        Number(idModule)
      );
      res.json(teacher);
    } catch (error) {
      res.json(error);
    }
  }
}

export default new TeacherController();
