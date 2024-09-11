// DTO para Cohort
interface CohortDTO {
  id: number;
  title: string;
  enabled: boolean;
}

// DTO para Level
interface LevelDTO {
  id: number;
  title: string;
  cohorts: CohortDTO[];
}

// DTO para Student
interface StudentDTO {
  id: number;
  fullName: string;
  email: string;
  levels: LevelDTO[];
}
//
export const transformStudentData = (student: any): StudentDTO => {
  return {
    id: student.id,
    fullName: `${student.name} ${student.lastName}`,
    email: student.email,
    levels: student.levels.map((level: any) => ({
      id: level.level.id,
      title: level.level.title,
      cohorts: level.level.cohorts.filter((cohort: any) => {
        const cohortStudent = cohort.cohortStudents.find(
          (cs: any) => cs.idCohort === cohort.id
        );
        if (cohortStudent && cohortStudent.idCohort) {
          return {
            id: cohortStudent ? cohortStudent.idCohort : 0,
            title: cohort.title,
            enabled: cohortStudent ? cohortStudent.enabled : false,
          };
        }
        // return []
      }),
    })),
  };
};
