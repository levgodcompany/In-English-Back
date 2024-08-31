import {
  CourseRelationService,
  CourseUnitService,
} from "../../Course/services";
import StudentRelationsService from "../../Student/services/StudentRelations.service";
import { ModuleRelation } from "../repositories/";

class ModuleRelationService {
  async assigStudentToModule(
    idStudent: number,
    idModule: number,
    idCourse: number
  ) {
    const module = await ModuleRelation.assigStudentToModule(
      idStudent,
      idModule
    );
    const totalCourse = await CourseUnitService.totalModuleTuCourse(
      idCourse,
      idStudent
    );
    const totalStudent = await StudentRelationsService.totalModuleToCourse(
      idCourse,
      idStudent
    );
    
    if (totalCourse[0].total == totalStudent[0].total) {
      await CourseRelationService.assigStudentToCourse(idStudent, idCourse);
    }

    return module;
  }

  async findAllStudentToModule(idStudent: number) {
    const module = await ModuleRelation.findAllStudentToModule(idStudent);
    return module;
  }
}

export default new ModuleRelationService();
