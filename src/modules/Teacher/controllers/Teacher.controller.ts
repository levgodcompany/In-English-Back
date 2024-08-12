import { Teacher } from "@prisma/client";
import { Request, Response } from "express";
import { TeacherService } from "../services";

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
}

export default new TeacherController();
