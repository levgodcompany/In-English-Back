import { Teacher } from "@prisma/client";
import TeacherRepository from "./Teacher.repository";

class TeacherService {
    // Métodos CRUD para el Teacher

    async findOne(id: number) {
        try {
            return TeacherRepository.findOne(id)
        } catch (error) {
            throw new Error(`Error al buscar el Teacher con ID ${id}: ${error.message}`);
        }
    }

    async findAll() {
        try {
            return TeacherRepository.findAll()
        } catch (error) {
            throw new Error(`Error al buscar todos los Teachers: ${error.message}`);
        }
    }

    async create(data: Teacher) {
        try {
            return TeacherRepository.create(data)
        } catch (error) {
            throw new Error(`Error al crear el Teacher: ${error.message}`);
        }
    }

    async update(id: number, data: Partial<Teacher>) {
        try {
            return TeacherRepository.update(id, data)
        } catch (error) {
            throw new Error(`Error al actualizar el Teacher con ID ${id}: ${error.message}`);
        }
    }

    async delete(id: number) {
        try {
            return TeacherRepository.delete(id)
        } catch (error) {
            throw new Error(`Error al eliminar el Teacher con ID ${id}: ${error.message}`);
        }
    }

    // Métodos específicos para asignación de entidades
    assignLevelToTeacher(idTeacher: number, idLevel: number) {
        return TeacherRepository.assignLevelToTeacher(idTeacher, idLevel)
    }

    assignUnitToTeacher(idTeacher: number, idUnit: number) {
        return TeacherRepository.assignUnitToTeacher(idTeacher, idUnit)
    }

    assignCourseToTeacher(idTeacher: number, idCourse: number) {
        return TeacherRepository.assignCourseToTeacher(idTeacher, idCourse)
    }

    assignModuleToTeacher(idTeacher: number, idModule: number) {
        return TeacherRepository.assignModuleToTeacher(idTeacher, idModule)
    }
}

export default new TeacherService()