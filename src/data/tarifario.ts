export type ServiceItem = {
    code: string;
    description: string;
    price: number;
    category: string;
};

// 50 Example items to simulate the dataset. 
// Ideally, the full list from Excel would be converted to JSON and pasted here.
export const TARIFARIO_DATA: ServiceItem[] = [
    { code: "99203", description: "CONSULTA AMBULATORIA PARA LA EVALUACIÓN Y MANEJO DE UN PACIENTE NUEVO", price: 15.00, category: "CONSULTA EXTERNA" },
    { code: "99213", description: "CONSULTA AMBULATORIA PARA LA EVALUACIÓN Y MANEJO DE UN PACIENTE CONTINUADOR", price: 12.00, category: "CONSULTA EXTERNA" },
    { code: "85027", description: "HEMOGRAMA COMPLETO", price: 8.00, category: "LABORATORIO" },
    { code: "81001", description: "EXAMEN COMPLETO DE ORINA", price: 5.00, category: "LABORATORIO" },
    { code: "80061", description: "PERFIL LIPÍDICO", price: 25.00, category: "LABORATORIO" },
    { code: "82947", description: "GLUCOSA EN SUERO", price: 6.00, category: "LABORATORIO" },
    { code: "84520", description: "UREA", price: 6.00, category: "LABORATORIO" },
    { code: "82565", description: "CREATININA", price: 6.00, category: "LABORATORIO" },
    { code: "71020", description: "RADIOGRAFÍA DE TÓRAX FRONTAL Y LATERAL", price: 35.00, category: "RAYOS X" },
    { code: "74000", description: "RADIOGRAFÍA DE ABDOMEN SIMPLE", price: 35.00, category: "RAYOS X" },
    { code: "72190", description: "RADIOGRAFÍA DE PELVIS", price: 30.00, category: "RAYOS X" },
    { code: "76700", description: "ECOGRAFÍA ABDOMINAL COMPLETA", price: 40.00, category: "ECOGRAFÍA" },
    { code: "76830", description: "ECOGRAFÍA TRANSVAGINAL", price: 40.00, category: "ECOGRAFÍA" },
    { code: "76805", description: "ECOGRAFÍA OBSTÉTRICA", price: 35.00, category: "ECOGRAFÍA" },
    { code: "90471", description: "ADMINISTRACIÓN DE VACUNA", price: 5.00, category: "ENFERMERÍA" },
    { code: "96360", description: "INFUSIÓN INTRAVENOSA, HIDRATACIÓN", price: 15.00, category: "ENFERMERÍA" },
    { code: "96372", description: "INYECCIÓN TERAPÉUTICA SUBCUTÁNEA O INTRAMUSCULAR", price: 5.00, category: "ENFERMERÍA" },
    { code: "59409", description: "PARTO VAGINAL (SOLO ATENCIÓN DEL PARTO)", price: 250.00, category: "GINECO-OBSTETRICIA" },
    { code: "59514", description: "CESÁREA (SOLO PROCEDIMIENTO)", price: 500.00, category: "GINECO-OBSTETRICIA" },
    { code: "99283", description: "CONSULTA DE EMERGENCIA, SEVERIDAD MODERADA", price: 20.00, category: "EMERGENCIA" },
    { code: "86900", description: "GRUPO SANGUÍNEO ABO", price: 8.00, category: "BANCO DE SANGRE" },
    { code: "86901", description: "FACTOR RH", price: 8.00, category: "BANCO DE SANGRE" },
    { code: "97110", description: "PROCEDIMIENTO TERAPÉUTICO, EJERCICIOS", price: 15.00, category: "MEDICINA FÍSICA" },
    { code: "98960", description: "EDUCACIÓN Y ENTRENAMIENTO PARA EL AUTOMANEJO", price: 10.00, category: "PSICOLOGÍA" },
    { code: "90791", description: "EVALUACIÓN DE DIAGNÓSTICO PSIQUIÁTRICO", price: 20.00, category: "PSICOLOGÍA" },
    { code: "D0150", description: "EXAMEN BUCAL COMPLETO", price: 15.00, category: "ODONTOLOGÍA" },
    { code: "D0210", description: "SERIE RADIOGRÁFICA INTRAORAL COMPLETA", price: 20.00, category: "ODONTOLOGÍA" },
    { code: "D1110", description: "PROFILAXIS DENTAL ADULTOS", price: 30.00, category: "ODONTOLOGÍA" },
    { code: "D2140", description: "AMALGAMA - UNA SUPERFICIE, PRIMARIO O PERMANENTE", price: 25.00, category: "ODONTOLOGÍA" },
    { code: "D2330", description: "RESINA - UNA SUPERFICIE, ANTERIOR", price: 35.00, category: "ODONTOLOGÍA" },
    { code: "D7140", description: "EXTRACCIÓN, DIENTE ERUPCIONADO O RAÍZ EXPUESTA", price: 30.00, category: "ODONTOLOGÍA" },
    { code: "92004", description: "EXAMEN OCULAR COMPLETO", price: 25.00, category: "OFTALMOLOGÍA" },
    { code: "30000", description: "DRENAJE DE ABSCESO NASAL", price: 50.00, category: "OTORRINOLARINGOLOGÍA" },
    { code: "69210", description: "EXTRACCIÓN DE CERUMEN IMPACTADO", price: 20.00, category: "OTORRINOLARINGOLOGÍA" },
    { code: "93000", description: "ELECTROCARDIOGRAMA DE RUTINA", price: 25.00, category: "CARDIOLOGÍA" },
    { code: "93307", description: "ECOCARDIOGRAFÍA TRANSTORÁCICA", price: 80.00, category: "CARDIOLOGÍA" },
    { code: "44005", description: "ENTEROLISIS (LIBERACIÓN DE ADHERENCIAS INTESTINALES)", price: 450.00, category: "CIRUGÍA" },
    { code: "44950", description: "APENDICECTOMÍA", price: 400.00, category: "CIRUGÍA" },
    { code: "49505", description: "REPARACIÓN DE HERNIA INGUINAL INICIAL", price: 350.00, category: "CIRUGÍA" },
    { code: "56300", description: "LAPAROSCOPIA, DIAGNÓSTICA", price: 300.00, category: "CIRUGÍA" },
    // More miscellaneous items to fill space for pagination testing
    { code: "MISC01", description: "CERTIFICADO DE SALUD", price: 10.00, category: "ADMINISTRATIVO" },
    { code: "MISC02", description: "INFORME MÉDICO", price: 15.00, category: "ADMINISTRATIVO" },
    { code: "MISC03", description: "DUPLICADO DE HISTORIA CLÍNICA (FOLIO)", price: 0.50, category: "ADMINISTRATIVO" },
    { code: "LAB001", description: "TEST DE EMBARAZO EN ORINA", price: 10.00, category: "LABORATORIO" },
    { code: "LAB002", description: "EXAMEN COPROLÓGICO FUNCIONAL", price: 12.00, category: "LABORATORIO" },
    { code: "LAB003", description: "REACCIÓN DE WIDAL", price: 15.00, category: "LABORATORIO" },
    { code: "IMG001", description: "TOMOGRAFÍA CEREBRAL SIN CONTRASTE", price: 120.00, category: "IMAGENOLOGÍA" },
    { code: "IMG002", description: "TOMOGRAFÍA CEREBRAL CON CONTRASTE", price: 180.00, category: "IMAGENOLOGÍA" },
    { code: "PROC01", description: "SUTURA DE HERIDA PEQUEÑA (<5cm)", price: 25.00, category: "TÓPICO" },
    { code: "PROC02", description: "CURACIÓN DE QUEMADURA LEVE", price: 20.00, category: "TÓPICO" },
    { code: "PROC03", description: "RETIRO DE PUNTOS", price: 10.00, category: "TÓPICO" },
];
