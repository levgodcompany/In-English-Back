// Definición de los tipos del DTO

interface ClassOnliveDTO {
  id: number;
  title: string;
  url: string;
  description: string;
}

interface CohortTeacherRelationshipDTO {
  idTeacher: number;
  idCohort: number;
  name: string;
  lastName: string;
  email: string;
}

interface CohortStudentRelationshipDTO {
  idStudent: number;
  enabled: boolean;
  name: string;
  lastName: string;
  email: string;
}

interface CohortUnitRelationshipDTO {
  idUnit: number;
  idLevel: number;
  titleLevel: string;
  enabled: boolean;
  title: string;
}

interface CohortCourseRelationshipDTO {
  idCourse: number;
  idUnit: number;
  titleUnit: string;
  enabled: boolean;
  title: string;
}

interface CohortModuleRelationshipDTO {
  idModule: number;
  idCourse: number;
  enabled: boolean;
  title: string;
}

interface CohortDTO {
  id: number;
  title: string;
  cohortTeachers: CohortTeacherRelationshipDTO[];
  cohortStudents: CohortStudentRelationshipDTO[];
  cohortUnities: CohortUnitRelationshipDTO[];
  cohortCourses: CohortCourseRelationshipDTO[];
  cohortModules: CohortModuleRelationshipDTO[];
  classOnlives: ClassOnliveDTO[];
}

// Función de conversión para transformar el JSON en DTO

export function convertToCohortDTO(json: any): CohortDTO {
  return {
    id: json.id,
    title: json.title,
    cohortTeachers: json.cohortTeachers.map((item: any) => ({
      idTeacher: item.idTeacher,
      idCohort: item.idCohort,
      name: item.teacher.name,
      lastName: item.teacher.lastName,
      email: item.teacher.email,
    })),
    cohortStudents: json.cohortStudents.map((item: any) => ({
      idStudent: item.idStudent,
      enabled: item.enabled,
      name: item.student.name,
      lastName: item.student.lastName,
      email: item.student.email,
    })),
    cohortUnities: json.cohortUnities.map((item: any) => ({
      idUnit: item.idUnit,
      idLevel: item.unities.idLevel,
      titleLevel: item.unities.level.title,
      enabled: item.enabled,
      title: item.unities.title,
    })),
    cohortCourses: json.cohortCourses.map((item: any) => ({
      idCourse: item.idCourse,
      idUnit: item.courses.idUnit,
      enabled: item.enabled,
      title: item.courses.title,
    })),
    cohortModules: json.cohortModules.map((item: any) => ({
      idModule: item.idModule,
      idCourse: item.modules.idCourse,
      enabled: item.enabled,
      title: item.modules.title,
    })),
    classOnlives: json.classOnlives.map((item: any) => ({
      id: item.id,
      title: item.title,
      url: item.url,
      description: item.description,
    })),
  };
}
