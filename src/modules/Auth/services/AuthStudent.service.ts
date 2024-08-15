import { Student } from "@prisma/client";
import AuthService from "./Auth.service";
import { StudentCRUDService } from "../../Student/services/index";
import { Rol, TokenExpiryOptions } from "../../../utilities";

class AuthStudentService extends AuthService<Student> {
  constructor() {
    const jwt = process.env.JWT_SECRET || "secret";
    super(jwt, TokenExpiryOptions.hours.oneHour, Rol.STUDENT);
  }

  async register(data: Student) {
    try {
      const hashedPassword = await this.hashPassword(data.password);
      const newStudent = await StudentCRUDService.create({
        ...data,
        password: hashedPassword,
      });

      const token = this.generateToken(newStudent.id);
      return {
        user: {
          id: newStudent.id,
          name: newStudent.name,
          lastName: newStudent.lastName,
          email: newStudent.email,
        },
        token: token,
      };
    } catch (error) {
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      const student = await StudentCRUDService.findOneByEmail(email);

      if (
        !student ||
        !(await this.comparePasswords(password, student.password))
      ) {
        throw new Error("Invalid email or password");
      }

      const token = this.generateToken(student.id);

      return {
        user: {
          id: student.id,
          name: student.name,
          lastName: student.lastName,
          email: student.email,
        },
        token,
      };
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthStudentService();
