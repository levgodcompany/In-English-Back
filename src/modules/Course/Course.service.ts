import { Course } from "@prisma/client";
import { prisma } from "../../../prisma";

class CourseService {
    async create(data: Course) {
        const course = await prisma.course.create({
            data
        })

        return course;
    }

    async findAll() {
        const courses = await prisma.course.findMany({
            include: {
                students: true
            }
        });

        return courses;
    }
}

export const courseService = new CourseService()