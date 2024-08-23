type StatusT = {
    key: string;
    value: string;
};

export const Status: StatusT[] = [
    // Estados generales para estudiantes
    {
        key: "001",
        value: "Active"        // El estudiante está inscrito y participando activamente en el sistema.
    },
    {
        key: "002",
        value: "Inactive"      // El estudiante está inscrito pero no está participando actualmente.
    },
    {
        key: "003",
        value: "Suspended"     // El estudiante ha sido temporalmente suspendido por alguna razón administrativa o disciplinaria.
    },
    {
        key: "004",
        value: "Graduated"     // El estudiante ha completado todos los requisitos y ha terminado el programa o curso.
    },
    {
        key: "005",
        value: "Pending"       // El estudiante está en espera de ser admitido o de completar el proceso de inscripción.
    },
    {
        key: "006",
        value: "Failed"        // El estudiante ha fallado en completar los requisitos necesarios y no ha aprobado el curso o nivel.
    },
    {
        key: "007",
        value: "Withdrawn"     // El estudiante ha decidido dejar el programa o curso antes de completarlo.
    },
    {
        key: "008",
        value: "In Progress"   // El estudiante está actualmente participando en el curso o nivel y avanzando en el programa.
    },
    {
        key: "009",
        value: "Temporary Leave" // El estudiante ha tomado un descanso temporal del programa o curso.
    },
    {
        key: "010",
        value: "Re-enrolled"    // El estudiante ha sido reinscrito después de haber estado inactivo o haber sido dado de baja.
    },

    // Estados adicionales relacionados con el registro y pagos
    {
        key: "011",
        value: "Pre-Registered" // El estudiante ha iniciado el registro pero no ha completado el proceso.
    },
    {
        key: "012",
        value: "Payment Pending" // El estudiante ha iniciado el registro pero no ha realizado el pago.
    },
    {
        key: "013",
        value: "Payment Completed" // El estudiante ha completado el pago y está oficialmente inscrito.
    },
    {
        key: "014",
        value: "Registration Completed" // El estudiante ha completado el proceso de inscripción.
    },
    {
        key: "015",
        value: "Account Locked" // La cuenta del estudiante está bloqueada, posiblemente por falta de pago u otras razones.
    }
];

