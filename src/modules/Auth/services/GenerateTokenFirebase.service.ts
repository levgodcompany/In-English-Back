import * as admin from "firebase-admin";

class GenerateTokenFirebaseService {
  constructor() {
    // Inicializa Firebase Admin SDK con las credenciales de administrador
    admin.initializeApp({
      credential: admin.credential.cert(
        "jsons/in-house-c77a1-firebase-adminsdk-2jrbm-9899cb26c4.json"
      ),
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
