import { Course } from "@prisma/client";
import { Request, Response } from "express";
import CourseService from "./Course.service";

class CourseController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const body: Course = req.body;
            const course = await CourseService.create(body);
            res.json(course)
        } catch (error) {
            res.json(error)
        }
    }

    async findAll(_req: Request, res: Response): Promise<void> {
        try {
            const courses = await CourseService.findAll();
            res.json(courses)
        } catch (error) {
            res.json(error)
        }
    }

    async findOne(req: Request, res: Response): Promise<void> {
        try {
            const { idCourse } = req.params
            const course = await CourseService.findOne(Number(idCourse));
            res.json(course)
        } catch (error) {
            res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { idCourse } = req.params
            const course = await CourseService.delete(Number(idCourse));
            res.json(course)
        } catch (error) {
            res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const { idCourse } = req.params
            const body = req.body
            const course = await CourseService.update(Number(idCourse), body);
            res.json(course)
        } catch (error) {
            res.json(error)
        }
    }

    async assignActivityToCourse(req: Request, res: Response): Promise<void> {
        try {
            const { idCourse, idAcivity } = req.params
            const course = await CourseService.assignActivityToCourse(Number(idCourse), Number(idAcivity));
            res.json(course)
        } catch (error) {
            res.json(error)
        }
    }

    async removeActivityToCourse(req: Request, res: Response): Promise<void> {
        try {
            const { idCourse, idAcivity } = req.params
            await CourseService.removeActivityToCourse(Number(idCourse), Number(idAcivity));
            res.json("Eliminado con exito")
        } catch (error) {
            res.json(error)
        }
    }
}

export default new CourseController()