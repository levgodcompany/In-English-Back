export enum HttpStatus {
  // 1xx: Informational
  CONTINUE = 100, // El servidor ha recibido la solicitud y el cliente puede continuar con la petición.
  SWITCHING_PROTOCOLS = 101, // El servidor acepta cambiar el protocolo.

  // 2xx: Success
  OK = 200, // La solicitud ha sido exitosa.
  CREATED = 201, // La solicitud ha sido exitosa y se ha creado un nuevo recurso.
  ACCEPTED = 202, // La solicitud ha sido aceptada para su procesamiento, pero no se ha completado.
  NON_AUTHORITATIVE_INFORMATION = 203, // La información devuelta no es la original del servidor.
  NO_CONTENT = 204, // La solicitud ha sido exitosa pero no devuelve contenido.
  RESET_CONTENT = 205, // La solicitud ha sido exitosa y el cliente debe reiniciar el documento de vista.
  PARTIAL_CONTENT = 206, // El servidor está enviando solo una parte del recurso.

  // 3xx: Redirection
  MULTIPLE_CHOICES = 300, // Hay múltiples opciones para el recurso solicitado.
  MOVED_PERMANENTLY = 301, // El recurso ha sido movido permanentemente a una nueva URL.
  FOUND = 302, // El recurso ha sido encontrado en una URL diferente.
  SEE_OTHER = 303, // El recurso debe ser recuperado mediante una URL diferente.
  NOT_MODIFIED = 304, // El recurso no ha sido modificado desde la última solicitud.
  TEMPORARY_REDIRECT = 307, // El recurso se encuentra temporalmente en una URL diferente.
  PERMANENT_REDIRECT = 308, // El recurso ha sido movido permanentemente a una nueva URL, sin cambios de método HTTP.

  // 4xx: Client Errors
  BAD_REQUEST = 400, // La solicitud no puede ser procesada debido a un error del cliente.
  UNAUTHORIZED = 401, // Se requiere autenticación para acceder al recurso.
  PAYMENT_REQUIRED = 402, // Reservado para uso futuro.
  FORBIDDEN = 403, // El servidor entiende la solicitud pero se niega a autorizarla.
  NOT_FOUND = 404, // El recurso solicitado no ha sido encontrado.
  METHOD_NOT_ALLOWED = 405, // El método HTTP no está permitido para el recurso solicitado.
  NOT_ACCEPTABLE = 406, // El recurso no cumple con los criterios de aceptación del cliente.
  PROXY_AUTHENTICATION_REQUIRED = 407, // Se requiere autenticación mediante un proxy.
  REQUEST_TIMEOUT = 408, // El cliente no envió la solicitud completa a tiempo.
  CONFLICT = 409, // Hay un conflicto con el estado actual del recurso.
  GONE = 410, // El recurso solicitado ya no está disponible.
  LENGTH_REQUIRED = 411, // Se requiere la cabecera Content-Length para la solicitud.
  PRECONDITION_FAILED = 412, // La condición previa de la solicitud ha fallado.
  PAYLOAD_TOO_LARGE = 413, // El cuerpo de la solicitud es demasiado grande.
  URI_TOO_LONG = 414, // La URI solicitada es demasiado larga.
  UNSUPPORTED_MEDIA_TYPE = 415, // El tipo de medio de la solicitud no es compatible.
  RANGE_NOT_SATISFIABLE = 416, // El rango especificado no es posible de satisfacer.
  EXPECTATION_FAILED = 417, // La expectativa indicada no puede ser cumplida por el servidor.
  I_AM_A_TEAPOT = 418, // Estoy siendo usado como una tetera (broma del RFC 2324).
  MISDIRECTED_REQUEST = 421, // La solicitud fue dirigida a un servidor que no puede producir una respuesta.
  UNPROCESSABLE_ENTITY = 422, // La solicitud está bien formada pero no puede ser procesada.
  LOCKED = 423, // El recurso está bloqueado.
  FAILED_DEPENDENCY = 424, // La solicitud falló debido a una falla en una solicitud anterior.
  TOO_EARLY = 425, // La solicitud fue enviada demasiado pronto.
  UPGRADE_REQUIRED = 426, // El cliente debe cambiar a un protocolo diferente.
  PRECONDITION_REQUIRED = 428, // Se requiere una condición previa para la solicitud.
  TOO_MANY_REQUESTS = 429, // El cliente ha enviado demasiadas solicitudes en un tiempo determinado.
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431, // Los campos de la cabecera de la solicitud son demasiado grandes.
  UNAVAILABLE_FOR_LEGAL_REASONS = 451, // El recurso no está disponible por razones legales.

  // 5xx: Server Errors
  INTERNAL_SERVER_ERROR = 500, // Error interno del servidor.
  NOT_IMPLEMENTED = 501, // El servidor no soporta la funcionalidad requerida para cumplir con la solicitud.
  BAD_GATEWAY = 502, // El servidor recibió una respuesta inválida del servidor ascendente.
  SERVICE_UNAVAILABLE = 503, // El servidor no está disponible temporalmente.
  GATEWAY_TIMEOUT = 504, // El servidor no recibió una respuesta a tiempo del servidor ascendente.
  HTTP_VERSION_NOT_SUPPORTED = 505, // El servidor no soporta la versión HTTP usada en la solicitud.
  VARIANT_ALSO_NEGOTIATES = 506, // El servidor tiene un error de negociación de contenido.
  INSUFFICIENT_STORAGE = 507, // El servidor no tiene suficiente espacio para completar la solicitud.
  LOOP_DETECTED = 508, // El servidor detectó un bucle infinito mientras procesaba la solicitud.
  NOT_EXTENDED = 510, // Se requiere la extensión adicional de la solicitud.
  NETWORK_AUTHENTICATION_REQUIRED = 511, // Se requiere autenticación en la red.
}
