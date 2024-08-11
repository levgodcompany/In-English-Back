import { ExamLevel } from "@prisma/client";
import { Request, Response } from "express";
import ExamLevelService from "./ExamLevel.service";

class ExamLevelController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const exam: ExamLevel = req.body;
      exam.idLevel = Number(exam.idLevel);
      exam.idTeacher = Number(exam.idTeacher);
      exam.NumberAttempts = Number(exam.NumberAttempts);
      exam.passingScore = Number(exam.passingScore);
      const newExam = await ExamLevelService.create(exam);
      res.json(newExam);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    try {
      const exams = await ExamLevelService.findAll();
      res.json(exams);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findAllByIdLevel(req: Request, res: Response): Promise<void> {
    try {
      const {idLevel} = req.params
      const exams = await ExamLevelService.findAllByIdLevel(Number(idLevel));
      res.json(exams);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findOne(req: Request, res: Response): Promise<void> {
    try {
      const { idExam } = req.params;
      const exams = await ExamLevelService.findOne(Number(idExam));
      res.json(exams);
    } catch (error) {
      res.json(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { idExam } = req.params;
      const exam = await ExamLevelService.delete(Number(idExam));
      res.json(exam);
    } catch (error) {
      res.json(error);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { idExam } = req.params;
      const body = req.body;
      const exam = await ExamLevelService.update(Number(idExam), body);
      res.json(exam);
    } catch (error) {
      res.json(error);
    }
  }
}

export default new ExamLevelController();
