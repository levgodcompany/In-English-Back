import { Course } from "@prisma/client";
import { Request, Response } from "express";
import { courseService } from "./Course.service";

class CourseController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const course: Course = req.body;
            const newCourse = await courseService.create(course);
            res.json(newCourse)
        } catch (error) {
            res.json(error)
        }
    }

    async findAll(req: Request, res: Response): Promise<void> {
        try {
            const courses = await courseService.findAll();
            res.json(courses)
        } catch (error) {
            res.json(error)
        }
    }
}

export const courseController = new CourseController()