import * as fs from 'fs';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';

const doc = new Document({
    sections: [{
        properties: {},
        children: [
            new Paragraph({
                text: "INFORME AMPLIADO: CONSTRUCCIÓN DEL PORTAL WEB E INTRANET",
                heading: HeadingLevel.TITLE,
                alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
                text: "Entidad: Hospital II-2 Tarapoto",
                heading: HeadingLevel.HEADING_2,
                alignment: AlignmentType.CENTER,
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
                children: [
                    new TextRun({ text: "1. OBJETIVO DEL INFORME", bold: true, size: 28 }),
                ],
                heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({
                text: "El presente informe detalla el marco tecnológico, las arquitecturas implementadas y el desglose exhaustivo de los módulos y opciones de menú ya desarrollados y operativos dentro del nuevo ecosistema digital del Hospital Tarapoto.",
            }),
            new Paragraph({ text: "" }),

            new Paragraph({
                children: [
                    new TextRun({ text: "2. DESGLOSE DEL MAPA DE NAVEGACIÓN Y MÓDULOS DESARROLLADOS", bold: true, size: 28 }),
                ],
                heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
                text: "Para garantizar una experiencia centrada en el paciente y el colaborador, el portal web se estructuró visualmente mediante un 'Mega Menú' inteligente dividido en 3 bloques principales, de los cuales ya se ha programado su estructura Front-end funcional:",
            }),

            // USUARIOS
            new Paragraph({
                text: "A) MÓDULO: USUARIOS (Servicios al Ciudadano)",
                heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({
                children: [new TextRun({ text: "Mi Salud: ", bold: true }), new TextRun({ text: "Interfaces listas para Resultados de Exámenes, Historia Clínica, Recetas e Indicaciones Médicas." })],
                bullet: { level: 0 }
            }),
            new Paragraph({
                children: [new TextRun({ text: "Guía del Paciente: ", bold: true }), new TextRun({ text: "Páginas implementadas de Staff Médico (Directorio Inteligente), Guía de Procedimientos, y Derechos y Deberes." })],
                bullet: { level: 0 }
            }),
            new Paragraph({
                children: [new TextRun({ text: "Atención Rápida: ", bold: true }), new TextRun({ text: "Módulo Citas y Referencias (Flujos de Triaje y Seguros SIS/EsSalud), portal informativo Telesalud, y un Semáforo de Emergencia Dinámico." })],
                bullet: { level: 0 }
            }),
            new Paragraph({
                children: [new TextRun({ text: "Te Escuchamos: ", bold: true }), new TextRun({ text: "Conexión con Plataforma PAUS, sección FAQ (Preguntas Frecuentes interactiva), e interfaces para Encuesta de Satisfacción vinculadas a la calidad." })],
                bullet: { level: 0 }
            }),

            // INSTITUCIONAL
            new Paragraph({ text: "" }),
            new Paragraph({
                text: "B) MÓDULO: INSTITUCIONAL (Transparencia y Gestión)",
                heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({
                children: [new TextRun({ text: "Nuestra Identidad: ", bold: true }), new TextRun({ text: "Secciones construidas para Quiénes Somos (Misión, Visión, Historia), Organigrama, Directorio Institucional y página de Ubicación/Contacto." })],
                bullet: { level: 0 }
            }),
            new Paragraph({
                children: [new TextRun({ text: "Gestión y Transparencia: ", bold: true }), new TextRun({ text: "Portal de Transparencia, enlaces a Contrataciones OSCE, Documentos de Gestión, Indicadores de Gestión, Normatividad, Sala Situacional y la maquetación inicial de la Sala de Prensa institucional." })],
                bullet: { level: 0 }
            }),
            new Paragraph({
                children: [new TextRun({ text: "Cartera de Servicios: ", bold: true }), new TextRun({ text: "Visualizaciones informativas para Consulta Externa, Emergencia y UCI, Centro Quirúrgico, y Ayuda al Diagnóstico." })],
                bullet: { level: 0 }
            }),
            new Paragraph({
                children: [new TextRun({ text: "Programas Estratégicos: ", bold: true }), new TextRun({ text: "Despliegue de landing pages informativas para estrategias de Materno Neonatal, Prevención TBC/VIH, Enfermedades Metaxénicas (Dengue, Zika) y Salud Mental." })],
                bullet: { level: 0 }
            }),

            // COLABORADORES
            new Paragraph({ text: "" }),
            new Paragraph({
                text: "C) MÓDULO: COLABORADORES Y GESTIÓN HUMANA",
                heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({
                children: [new TextRun({ text: "Programas de Especialización: ", bold: true }), new TextRun({ text: "Módulos informativos para Docencia e Investigación, Banco de Sangre y Laboratorio Referencial." })],
                bullet: { level: 0 }
            }),
            new Paragraph({
                children: [new TextRun({ text: "Motor de Convocatorias Laborales (El Mayor Avance): ", bold: true }), new TextRun({ text: "Es el sistema más robusto construido en esta etapa. Contiene un Front-end público para que los postulantes descarguen bases, y una Intranet Administrativa cifrada." })],
                bullet: { level: 0 }
            }),

            new Paragraph({ text: "" }),
            new Paragraph({
                children: [
                    new TextRun({ text: "3. DETALLE DE GESTIÓN AVANZADA (INTRANET & NUBE)", bold: true, size: 28 }),
                ],
                heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({
                text: "Dentro del módulo de Convocatorias se construyó un Back-Office (Intranet) que no tiene precedente local, interconectado a la Nube:",
            }),
            new Paragraph({
                text: "- Arquitectura Serverless con Supabase: Los archivos PDF (de bases y resultados) ya no saturan un servidor local. Fueron programados para subir instantáneamente a un Bucket Cloud (Nube) de Supabase, cuidando recursos.",
                bullet: { level: 0 }
            }),
            new Paragraph({
                text: "- Privacidad y Visibilidad Dinámica: Se programó un control en Intranet que permite a RR.HH., con pulsar el ícono de un 'Ojo', ocultar en milisegundos documentos del público para revisión, y de igual forma desocultarlos.",
                bullet: { level: 0 }
            }),
            new Paragraph({
                text: "- Prevención de Errores Humanos: Se programó un Modo de Edición que permite corregir campos (Títulos, Vacantes, Sueldos) sin tener que destruir todo. Así mismo, si fuera obligatorio, se diseñó la 'Eliminación en Cascada', un flujo destructor con doble confirmación que va a la nube a destruir físicamente todo PDF huérfano asociado antes de borrar el registro en Base de Datos PostgreSQL.",
                bullet: { level: 0 }
            }),

            new Paragraph({ text: "" }),
            new Paragraph({
                children: [
                    new TextRun({ text: "4. ESPECIFICACIONES DE INFRAESTRUCTURA BACKEND", bold: true, size: 28 }),
                ],
                heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({
                text: "Todo el sistema fue construido en código moderno Next.js 14, enrutado dinámico en Server Components. La lógica de base de datos se maneja bajo el motor PostgreSQL proveído por Neon.Tech con ORM automatizado Drizzle y seguridad de sesiones con NextAuth. El diseño respeta al 100% patrones de accesibilidad estéticos, veloces y responsivos para cualquier dispositivo celular.",
            }),
        ],
    }],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("Informe_Avances_Portal_Hospital_Tarapoto.docx", buffer);
    console.log("¡Documento Word generado exitosamente!");
});
