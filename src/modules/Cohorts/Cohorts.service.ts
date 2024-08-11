import { Cohort } from "@prisma/client";
import CohortsRepository from "./Cohorts.repository";

class CohortsServices {
  async findOne(id: number) {
    try {
      const cohort = await CohortsRepository.findOne(id);
      return cohort;
    } catch (error) {
      throw new Error(`Error al buscar el cohort con ID ${id}: ${error}`);
    }
  }

  async findAll() {
    try {
      const cohorts = await CohortsRepository.findAll();

      return cohorts;
    } catch (error) {
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
    }
  }

  async create(data: Cohort) {
    try {
      const newCohort = await CohortsRepository.create(data);
      return newCohort;
    } catch (error) {
      throw new Error(`Error al crear el cohort: ${error}`);
    }
  }

  async update(id: number, data: Partial<Cohort>) {
    try {
      const updatedCohort = await CohortsRepository.update(id, data);
      return updatedCohort;
    } catch (error) {
      throw new Error(`Error al actualizar el cohort con ID ${id}: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      const deletedCohort = await CohortsRepository.delete(id);
      return deletedCohort;
    } catch (error) {
      throw new Error(`Error al eliminar el cohort con ID ${id}: ${error}`);
    }
  }

  async findAllCohortUnitByIdCohort(idCohort: number) {
    try {
      const cohorts = await CohortsRepository.findAllCohortUnitByIdCohort(
        idCohort
      );

      return cohorts;
    } catch (error) {
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
    }
  }
  async findAllCohortCourseByIdCohort(idCohort: number) {
    try {
      const cohorts = await CohortsRepository.findAllCohortCourseByIdCohort(
        idCohort
      );

      return cohorts;
    } catch (error) {
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
    }
  }
  async findAllCohortModuleByIdCohort(idCohort: number) {
    try {
      const cohorts = await CohortsRepository.findAllCohortModuleByIdCohort(
        idCohort
      );

      return cohorts;
    } catch (error) {
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
    }
  }
  async findAllCohortTeacherByIdCohort(idCohort: number) {
    try {
      const cohorts = await CohortsRepository.findAllCohortTeacherByIdCohort(
        idCohort
      );

      return cohorts;
    } catch (error) {
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
    }
  }
  async findAllCohortStudentByIdCohort(idCohort: number) {
    try {
      const cohorts = await CohortsRepository.findAllCohortStudentByIdCohort(
        idCohort
      );

      return cohorts;
    } catch (error) {
      throw new Error(`Error al buscar todos los cohorts: ${error}`);
    }
  }

  // Métodos específicos para asignación de entidades
  async assignTeacherToCohort(idCohort: number, idTeacher: number) {
    try {
      const updatedTeacher = await CohortsRepository.assignTeacherToCohort(
        idCohort,
        idTeacher
      );
      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar Teacher con el ID ${idTeacher} al Cohort con ID ${idCohort}: ${error}`
      );
    }
  }

  async assignStudentToCohort(idCohort: number, idStudent: number) {
    try {
      const updatedTeacher = await CohortsRepository.assignStudentToCohort(
        idCohort,
        idStudent
      );

      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar Student con el ID ${idStudent} al Cohort con ID ${idCohort}: ${error}`
      );
    }
  }

  async assignUnitToCohort(idCohort: number, idUnit: number) {
    try {
      const updatedTeacher = await CohortsRepository.assignUnitToCohort(
        idCohort,
        idUnit
      );

      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar Unit con el ID ${idUnit} al Cohort con ID ${idCohort}: ${error}`
      );
    }
  }

  async assignCourseToCohort(idCohort: number, idCourse: number) {
    try {
      const updatedTeacher = await CohortsRepository.assignCourseToCohort(
        idCohort,
        idCourse
      );

      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar Course con el ID ${idCohort} al Cohort con ID ${idCohort}: ${error}`
      );
    }
  }

  async assignModuleToCohort(idCohort: number, idModule: number) {
    try {
      const updatedTeacher = await CohortsRepository.assignModuleToCohort(
        idCohort,
        idModule
      );

      return updatedTeacher;
    } catch (error) {
      throw new Error(
        `Error al asignar Module con el ID ${idModule} al Cohort con ID ${idCohort}: ${error}`
      );
    }
  }
}

export default new CohortsServices();
