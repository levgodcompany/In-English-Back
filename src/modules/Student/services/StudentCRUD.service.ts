import { Student } from "@prisma/client";
import { StudentCRUDRepository } from "../repositories";
import { StudentInfoBasic } from "../StudentDtos";

class StudentCRUD {
  async findOne(id: number) {
    const student = await StudentCRUDRepository.findOne(id);
    if (!student) {
      return `No se encontro el Student ${id}`;
    }

    return student;
  }

  async findAll() {
    try {
      const students = await StudentCRUDRepository.findAll();
      return students;
    } catch (error) {
      throw new Error("" + error);
    }
  }

  async findAllInfoBasic() {
    try {
      const students = await StudentCRUDRepository.findAll();
      return students.map((student) => {
        const info: StudentInfoBasic = {
          id: student.id,
          fullName: `${student.name} ${student.lastName}`,
        };
        return info;
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async create(data: Student) {
    try {
      const student = await StudentCRUDRepository.create(data);
      return student;
    } catch (error) {
      throw new Error("" + error);
    }
  }

  async update(id: number, data: Student) {
    return await StudentCRUDRepository.update(id, data);
  }

  async delete(id: number) {
    return StudentCRUDRepository.delete(id);
  }
}

export default new StudentCRUD();
