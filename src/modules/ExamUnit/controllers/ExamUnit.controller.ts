import { ExamUnit } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { ExamUnitServices } from "../services";

class ExamUnitController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const exam: ExamUnit = req.body;
      const newExam = await ExamUnitServices.create(exam);
      res.json(newExam);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async findAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const exams = await ExamUnitServices.findAll();
      res.json(exams);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idExam } = req.params;
      const exams = await ExamUnitServices.findOne(Number(idExam));
      res.json(exams);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idExam } = req.params;
      const exam = await ExamUnitServices.delete(Number(idExam));
      res.json(exam);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idExam } = req.params;
      const body = req.body;
      const exam = await ExamUnitServices.update(Number(idExam), body);
      res.json(exam);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
}

export default new ExamUnitController();
