import {
    FileText, Activity, Pill, Calendar, Clock,
    MapPin, Users, BookOpen, Building, Scale, Newspaper,
    Briefcase, GraduationCap, Link, HeartPulse, Stethoscope, Microscope,
    Heart, TestTube,
    Baby, Siren, Info, MessageSquare, HelpCircle, ClipboardCheck, Shield
} from 'lucide-react';
import React from 'react';

export type MenuItem = {
    title: string;
    icon?: React.ElementType;
    href: string;
    description?: string;
};

export type MenuSection = {
    title: string;
    items: MenuItem[];
};

export type MenuCategory = {
    label: string;
    href?: string;
    columns?: MenuSection[]; // For Mega Menu A
    items?: MenuItem[]; // For simple dropdowns B & C
    type: 'mega' | 'dropdown' | 'link';
};

export const MENU_DATA: MenuCategory[] = [
    {
        label: "INICIO",
        type: "link",
        href: "/"
    },
    {
        label: "USUARIOS",
        type: "mega",
        columns: [
            /* 
            {
                title: "Mi Salud 🩺",
                items: [
                    { title: "Resultados de Exámenes", href: "/portal/resultados", icon: Activity, description: "Consulta y descarga" },
                    { title: "Mi Historia Clínica", href: "/portal/historia", icon: FileText, description: "Tu historial médico" },
                    { title: "Mis Recetas", href: "/portal/recetas", icon: Pill, description: "Medicamentos pendientes" },
                    { title: "Próximos Pasos", href: "/portal/indicaciones", icon: Link, description: "Indicaciones médicas" },
                ]
            }, 
            */
            {
                title: "Guía del Paciente 📖",
                items: [
                    { title: "Staff Médico", href: "/staff-medico", icon: Users, description: "Nuestros especialistas" },
                    { title: "Guía de Procedimientos", href: "/procedimientos", icon: BookOpen, description: "Preparación y detalles" },

                    { title: "Derechos y Deberes", href: "/derechos", icon: Scale, description: "Conoce tus derechos" },
                ]
            },
            {
                title: "Atención Rápida ⚡",
                items: [
                    { title: "Citas y Referencias", href: "/citas", icon: Calendar, description: "Solicitud y Orientación" },
                    { title: "Telesalud", href: "/telesalud", icon: Activity, description: "Teleorientación y Teleinterconsulta" },
                    { title: "Semáforo de Emergencia", href: "/emergencia", icon: Clock, description: "Tiempo de espera actual" },
                ]
            },
            {
                title: "Te Escuchamos 👂",
                items: [
                    { title: "Plataforma PAUS", href: "/paus", icon: MessageSquare, description: "Reclamos y Consultas" },
                    { title: "Preguntas Frecuentes", href: "/faq", icon: HelpCircle, description: "Respuestas directas" },
                    { title: "Encuesta de Satisfacción", href: "/encuesta", icon: ClipboardCheck, description: "Ayúdanos a mejorar" },
                ]
            }
        ]
    },
    {
        label: "INSTITUCIONAL",
        type: "mega",
        columns: [
            {
                title: "Nuestra Identidad 🏥",
                items: [
                    { title: "Quiénes Somos", href: "/nosotros", icon: Building, description: "Historia, Misión y Visión" },

                    { title: "Organigrama", href: "/organigrama", icon: Activity, description: "Estructura interna" },
                    { title: "Directorio Institucional", href: "/directorio", icon: Users, description: "Altos funcionarios" },
                    { title: "Ubicación y Contacto", href: "/contacto", icon: MapPin, description: "Cómo llegar" },
                ]
            },
            {
                title: "Gestión y Transparencia 📋",
                items: [
                    { title: "Portal de Transparencia", href: "/transparencia", icon: Shield, description: "Acceso a información pública" },
                    { title: "Contrataciones", href: "https://www.transparencia.gob.pe/contrataciones/pte_transparencia_contrataciones.aspx?id_entidad=145&id_tema=34&ver=D", icon: Briefcase, description: "Adquisiciones y compras del Estado" },
                    { title: "Documentos de Gestión", href: "/gestion", icon: FileText, description: "ROF, MOF, Plan Estratégico" },
                    { title: "Inteligencia Sanitaria", href: "/epidemiologia", icon: Activity, description: "Indicadores y Epidemiología" },
                    { title: "Normatividad", href: "/normatividad", icon: Scale, description: "Leyes y reglamentos" },
                    { title: "Sala de Prensa", href: "/sala-de-prensa", icon: Newspaper, description: "Noticias y comunicados" },
                ]
            },
            {
                title: "Cartera de Servicios 💉",
                items: [
                    { title: "Consulta Externa", href: "/servicios/consulta", icon: Stethoscope, description: "Especialidades médicas" },
                    { title: "Emergencia y UCI", href: "/servicios/emergencia", icon: Siren, description: "Atención 24/7" },
                    { title: "Centro Quirúrgico", href: "/servicios/cirugia", icon: HeartPulse, description: "Salas de operaciones" },
                    { title: "Ayuda al Diagnóstico", href: "/servicios/diagnostico", icon: Microscope, description: "Laboratorio, Rayos X" },
                ]
            },
            {
                title: "Programas Estratégicos 🎗️",
                items: [
                    { title: "Materno Neonatal", href: "/programas/materno", icon: Baby, description: "Cuidado mamá y bebé" },
                    { title: "TBC y VIH", href: "/programas/tbc-vih", icon: Pill, description: "Prevención y control" },
                    { title: "Enfermedades Metaxénicas", href: "/programas/dengue", icon: Info, description: "Dengue, Zika, Chikungunya" },
                    { title: "Salud Mental", href: "/programas/salud-mental", icon: Activity, description: "Bienestar emocional" },
                ]
            }
        ]
    },
    {
        label: "COLABORADORES",
        type: "dropdown",
        items: [
            { title: "Convocatorias Laborales", href: "/convocatorias", icon: Briefcase, description: "CAS y otros regímenes" },
            { title: "Docencia e Investigación", href: "/docencia", icon: GraduationCap, description: "Internado y residentado" },
            { title: "Banco de Sangre", href: "/banco-sangre", icon: Heart, description: "Donación y stock" },
            { title: "Laboratorio Referencial", href: "/laboratorio", icon: TestTube, description: "Pruebas especializadas" }
        ]
    }
];
