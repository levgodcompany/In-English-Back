import { Student } from "@prisma/client";
import { Request, Response } from "express";
import { StudentCRUDService } from "../services";
class StudentCRUD {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const student: Student = req.body;
      const newStudent = await StudentCRUDService.create(student);
      res.json(newStudent);
    } catch (error) {
      console.log("Error", error);
      res.json(error);
    }
  }

  async findOne(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const newStudent = await StudentCRUDService.findOne(Number(id));
      res.json(newStudent);
    } catch (error) {
      res.json(error);
    }
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    try {
      const newStudent = await StudentCRUDService.findAll();
      res.json(newStudent);
    } catch (error) {
      res.json(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const newStudent = await StudentCRUDService.delete(Number(id));
      res.json(newStudent);
    } catch (error) {
      res.json(error);
    }
  }
}

export default new StudentCRUD();
