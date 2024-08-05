import { prisma } from "../../../prisma/index"
import { LevelStudent, Student } from "@prisma/client"
import StudentRepository from "./Student.repository";


class StudentService {


    /*
        Metodo para obtener a un Student 
     */
    async findOne(id: number) {
        return StudentRepository.findOne(id);
    }

    /*
        Metodo para obtener a un Student con sus relaciones
    */

    async findOneStudentWithRelations(id: number, relations: string[]) {
        const includeRelations = relations.reduce((acc, relation) => {
            acc[relation] = true;
            return acc;
        }, {} as Record<string, boolean>);

        const student = await this.Student().findUnique({
            where: {
                id
            },
            include: includeRelations
        });

        return student;
    }

    // Metodo para obtener todos los Students
    async findAll(): Promise<Student[]> {
        try {
            const students = await this.Student().findMany();
            return students;
            
        } catch (error) {
            console.log("Error al obtener todos los students", error)
            throw new Error("" + error)
        }

    }

    // Metodo para obtener todos los student con sus relaciones
    async findAllStudentsWithRelations(relations: string[]) {
        const includeRelations = relations.reduce((acc, relation) => {
            acc[relation] = true;
            return acc
        }, {} as Record<string, boolean>);

        let students = await this.Student().findMany({
            include: includeRelations
        });

        return students;
    }


    async create(data: Student): Promise<Student> {
        try {
            const student = await this.Student().create({ data });
            return student;

        } catch (error) {
            console.log("Error al crear student", error)
            throw new Error("" + error)
        }
    }


    async update(id: number, data: Student): Promise<Student> {
        const student = await this.Student().update({
            where: { id },
            data
        })

        return student;
    }


    async addCourseToStudent(idStudent: number, idCourse: number) {
        const course = await prisma.level.findUnique({ where: { id: idCourse } });

        if (!course) {
            throw new Error("Curso no encontrado")
        }

        const student = await prisma.student.findUnique({ where: { id: idStudent } })

        if (!student) {
            throw new Error("Estudiente no encontrado")
        }

        const updateStudent = await prisma.student.update({
            where: {
                id: idStudent
            },
            data: {
                levels: {
                    create: {
                        levelId: idCourse
                    }
                }
            },
            include: {
                courses: true
            }
        });

        return updateStudent;

    }

    async assignLevelToStudent(idStudent: number, idLevel: number) {
        try {
            return StudentRepository.assignLevelToStudent(idStudent, idLevel);
        } catch (error) {
            throw new Error(`${error}`)
        }
    }

    async removeLevelFromStudent(idStudent: number, idLevel: number){
        return StudentRepository.removeLevelFromStudent(idStudent, idLevel);
    }

    async delete(id: number): Promise<Student> {
        const deleteStudent = await this.Student().delete({ where: { id } });

        return deleteStudent;
    }


    private Student() {
        return prisma.student;
    }


}

class LevelStudentService {

    async findAll(): Promise<LevelStudent[]> {
        const levelStudent = await this.LevelsStudents().findMany();

        return levelStudent;
    }


    async create(data: LevelStudent) {


    }


    private LevelsStudents() {
        return prisma.levelStudent;
    }
}

class UnitStudentService {

}

class CourseStudentService {

}

class ModuleStudentService {

}

export const studentService = new StudentService();
export const levelStudentService = new LevelStudentService()