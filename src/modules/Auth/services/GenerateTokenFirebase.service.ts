import * as admin from "firebase-admin";

class GenerateTokenFirebaseService {
  constructor() {
    // Inicializa Firebase Admin SDK con las credenciales de administrador
    const FIREBASE_ADMIN_CREDENTIALS =
      process.env.FIREBASE_ADMIN_CREDENTIALS || "";
    const serviceAccount = JSON.parse(FIREBASE_ADMIN_CREDENTIALS);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  async generarTokenPersonalizado(uid: string): Promise<string> {
    try {
      // Genera un token personalizado para el usuario autenticado
      const customToken = await admin.auth().createCustomToken(uid);
      return customToken; // Este token será enviado al cliente para autenticarse en Firebase
    } catch (error) {
      console.error("Error al generar token personalizado:", error);
      throw new Error("Error generando token personalizado");
    }
  }
}

export default new GenerateTokenFirebaseService();
