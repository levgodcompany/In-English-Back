export class ErrorClass extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class ValidationError extends ErrorClass {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError"; // Error para validaciones
  }
}

export class ConflictError extends ErrorClass {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError"; // Error para validaciones
  }
}

export class CreationError extends ErrorClass {
  constructor(message: string) {
    super(message);
    this.name = "CreationError"; // Error si no se pudo crear
  }
}

export class UnauthorizedError extends ErrorClass {
  constructor(message: string) {
    super(message);
    this.name = "UnauthorizedError"; // No autorizado
  }
}

// Error personalizado para errores de autorización
export class AuthorizationError extends ErrorClass {
  constructor(message: string) {
    super(message);
    this.name = "AuthorizationError";
  }
}

// Error personalizado para errores de autenticación
export class AuthenticationError extends ErrorClass {
  constructor(message: string) {
    super(message);
    this.name = "AuthenticationError";
  }
}

// Error personalizado para errores de recurso no encontrado
export class NotFoundError extends ErrorClass {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

// Error personalizado para errores de acceso prohibido
export class ForbiddenError extends ErrorClass {
  constructor(message: string) {
    super(message);
    this.name = "ForbiddenError";
  }
}


export class CustomError extends Error {
  statusCode: number;
  message: string;

  constructor(message: string, statusCode: number) {
    super(`${message}`);
    this.statusCode = statusCode;
    this.message = `${message}`
    Error.captureStackTrace(this, this.constructor);
  }
}