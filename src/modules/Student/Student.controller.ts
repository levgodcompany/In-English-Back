import { Student } from "@prisma/client";
import { Request, Response } from "express";
import { studentService } from "./Student.service";

class StudentController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const student: Student = req.body;
            const newStudent = await studentService.create(student);
            res.json(newStudent)
        } catch (error) {
            res.json(error)
        }
    }

    async findOne(req: Request, res: Response): Promise<void> {
        try {

            const {id} = req.params;
            const newStudent = await studentService.findOne(Number(id));
            res.json(newStudent)
        } catch (error) {
            res.json(error)
        }
    }

    async findAll(req: Request, res: Response): Promise<void> {
        try {
            const newStudent = await studentService.findAll();
            res.json(newStudent)
        } catch (error) {
            res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {

            const {id} = req.params;
            const newStudent = await studentService.delete(Number(id))
            res.json(newStudent)
        } catch (error) {
            res.json(error)
        }
    }

    async assignLevelToStudent(req: Request, res: Response): Promise<void> {
        try {

            const {idStudent, idLevel} = req.params;
            const newStudent = await studentService.assignLevelToStudent(Number(idStudent), Number(idLevel));
            res.json(newStudent)
        } catch (error) {
            console.log("Error", error)
            res.json(error)
        }
    }

    async assignUnitToStudent(req: Request, res: Response): Promise<void> {
        try {

            const {idStudent, idUnit} = req.params;
            const newStudent = await studentService.assignUnitToStudent(Number(idStudent), Number(idUnit));
            res.json(newStudent)
        } catch (error) {
            console.log("Error", error)
            res.json(error)
        }
    }

    async assignCourseToStudent(req: Request, res: Response): Promise<void> {
        try {

            const {idStudent, idCourse} = req.params;
            const newStudent = await studentService.assignCourseToStudent(Number(idStudent), Number(idCourse));
            res.json(newStudent)
        } catch (error) {
            console.log("Error", error)
            res.json(error)
        }
    }

    async assignModuleToStudent(req: Request, res: Response): Promise<void> {
        try {

            const {idStudent, idModule} = req.params;
            const newStudent = await studentService.assignModuleToStudent(Number(idStudent), Number(idModule));
            res.json(newStudent)
        } catch (error) {
            console.log("Error", error)
            res.json(error)
        }
    }


    async removeLevelFromStudent(req: Request, res: Response): Promise<void> {
        try {

            const {idStudent, idLevel} = req.params;
            const newStudent = await studentService.removeLevelFromStudent(Number(idStudent), Number(idLevel));
            res.json(newStudent)
        } catch (error) {
            console.log("Error", error)
            res.json(error)
        }
    }
}

export const studentController = new StudentController()