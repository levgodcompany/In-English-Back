import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { TokenExpiryOptions } from "../../../utilities";

abstract class AuthService<T> {
  private secretKey: string;
  private readonly SALT_ROUNDS = 10;
  private tokenExpiry = TokenExpiryOptions.hours.oneHour;

  constructor(secretKey: string, tokenExpiry: string, private role: string) {
    this.secretKey = secretKey;
    this.tokenExpiry = tokenExpiry;
  }

  protected setTokenExpiry(expiry: string): void {
    this.tokenExpiry = expiry;
  }

  protected setRole(role: string){
    this.role = role
  }

  // Método abstracto para registrar un nuevo usuario (estudiante/teacher)
  abstract register(data: T): Promise<{ user: any; token: string }>;

  // Método abstracto para autenticar un usuario (estudiante/teacher)
  abstract login(email: string, password: string): Promise<{ user: any; token: string }>;

  // Método para generar un token JWT
  protected generateToken(userId: number): string {
    return jwt.sign({ userId, role: this.role }, this.secretKey, {
      expiresIn: this.tokenExpiry,
    });
  }

  // Método para verificar un token JWT
  protected verifyToken(token: string): any {
    try {
      return jwt.verify(token, this.secretKey);
    } catch (error) {
      throw new Error("Invalid token");
    }
  }

  // Método para hashear un password
  protected async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.SALT_ROUNDS);
  }

  // Método para comparar un password con su hash
  protected async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  // Método para generar un refresh token
  protected generateRefreshToken(userId: number): string {
    return jwt.sign({ userId }, this.secretKey, {
      expiresIn: this.tokenExpiry, // Refresh tokens typically last longer
    });
  }

  // Métodos adicionales (por ejemplo, para restablecer contraseñas y verificar correos)
  protected generatePasswordResetToken(userId: number): string {
    return jwt.sign({ userId }, this.secretKey, { expiresIn: this.tokenExpiry });
  }

  protected verifyPasswordResetToken(token: string): any {
    return this.verifyToken(token);
  }

  protected generateEmailVerificationToken(userId: number): string {
    return jwt.sign({ userId }, this.secretKey, { expiresIn: this.tokenExpiry });
  }

  protected verifyEmailVerificationToken(token: string): any {
    return this.verifyToken(token);
  }
}

export default AuthService;
