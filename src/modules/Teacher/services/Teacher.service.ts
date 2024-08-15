import { Teacher } from "@prisma/client";
import { TeacherRepository } from "../repositories";
import { TeacherInfoBasic } from "../TeacherDtos";

class TeacherService {
  // Métodos CRUD para el Teacher

  async findOne(id: number) {
    try {
      return TeacherRepository.findOne(id);
    } catch (error) {
      throw new Error(`Error al buscar el Teacher con ID ${id}: ${error}`);
    }
  }

  async findOneByEmail(email: string) {
    try {
      return TeacherRepository.findOneByEmail(email);
    } catch (error) {
      throw new Error(`Error al buscar el Teacher con Email ${email}: ${error}`);
    }
  }

  async findAll() {
    try {
      return TeacherRepository.findAll();
    } catch (error) {
      throw new Error(`Error al buscar todos los Teachers: ${error}`);
    }
  }

  async findAllInfoBasic() {
    try {
      const teachers = await TeacherRepository.findAll();

      return teachers.map((teacher) => {
        const info: TeacherInfoBasic = {
          id: teacher.id,
          fullName: `${teacher.name} ${teacher.lastName}`,
        };
        return info;
      });
    } catch (error) {
      throw new Error(`Error al buscar todos los Teachers: ${error}`);
    }
  }

  async create(data: Teacher) {
    try {
      return TeacherRepository.create(data);
    } catch (error) {
      throw new Error(`Error al crear el Teacher: ${error}`);
    }
  }

  async update(id: number, data: Partial<Teacher>) {
    try {
      return TeacherRepository.update(id, data);
    } catch (error) {
      throw new Error(`Error al actualizar el Teacher con ID ${id}: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      return TeacherRepository.delete(id);
    } catch (error) {
      throw new Error(`Error al eliminar el Teacher con ID ${id}: ${error}`);
    }
  }
}

export default new TeacherService();
