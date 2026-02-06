import {
    FileText, Activity, Pill, Calendar, Clock, CreditCard, Shield,
    MapPin, Users, BookOpen, Building, Scale, Newspaper,
    Briefcase, GraduationCap, Link, HeartPulse, Stethoscope, Microscope,
    Syringe, Baby, Siren, Info
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
        label: "USUARIOS",
        type: "mega",
        columns: [
            {
                title: "Mi Salud 🩺",
                items: [
                    { title: "Resultados de Exámenes", href: "/portal/resultados", icon: Activity },
                    { title: "Mi Historia Clínica", href: "/portal/historia", icon: FileText },
                    { title: "Mis Recetas", href: "/portal/recetas", icon: Pill },
                    { title: "Próximos Pasos", href: "/indicaciones", icon: Link },
                ]
            },
            {
                title: "Atención Rápida ⚡",
                items: [
                    { title: "Reserva de Citas", href: "/citas", icon: Calendar },
                    { title: "Telemedicina Express", href: "/telemedicina", icon: Activity },
                    { title: "Admisión Digital", href: "/admision", icon: FileText },
                    { title: "Semáforo de Emergencia", href: "/emergencia", icon: Clock, description: "Tiempo de espera actual" },
                ]
            },
            {
                title: "Transparencia 💰",
                items: [
                    { title: "Tarifario y Presupuestos", href: "/transparencia/tarifario", icon: CreditCard },
                    { title: "Cobertura de Seguros", href: "/seguros", icon: Shield },
                    { title: "Estado de Trámites", href: "/tramites", icon: FileText },
                ]
            },
            {
                title: "Guía del Paciente 📍",
                items: [
                    { title: "Staff Médico", href: "/staff-medico", icon: Users },
                    { title: "Guía de Procedimientos", href: "/procedimientos", icon: BookOpen },
                    { title: "Mapa del Hospital", href: "/mapa", icon: MapPin },
                    { title: "Derechos y Deberes", href: "/derechos", icon: Scale },
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
                    { title: "Staff Médico", href: "/staff-medico", icon: Users },
                    { title: "Organigrama", href: "/organigrama", icon: Activity },
                    { title: "Directorio Institucional", href: "/directorio", icon: Users },
                    { title: "Ubicación y Contacto", href: "/contacto", icon: MapPin },
                ]
            },
            {
                title: "Gestión y Transparencia 📋",
                items: [
                    { title: "Portal de Transparencia", href: "/transparencia", icon: Shield, description: "Acceso a información pública" },
                    { title: "Documentos de Gestión", href: "/gestion", icon: FileText, description: "ROF, MOF, Plan Estratégico" },
                    { title: "Normatividad", href: "/normatividad", icon: Scale },
                    { title: "Sala de Prensa", href: "/sala-de-prensa", icon: Newspaper },
                ]
            },
            {
                title: "Cartera de Servicios 💉",
                items: [
                    { title: "Consulta Externa", href: "/servicios/consulta", icon: Stethoscope },
                    { title: "Emergencia y UCI", href: "/servicios/emergencia", icon: Siren },
                    { title: "Centro Quirúrgico", href: "/servicios/cirugia", icon: HeartPulse },
                    { title: "Ayuda al Diagnóstico", href: "/servicios/diagnostico", icon: Microscope, description: "Laboratorio, Rayos X, Banco de Sangre" },
                ]
            },
            {
                title: "Programas Estratégicos 🎗️",
                items: [
                    { title: "Materno Neonatal", href: "/programas/materno", icon: Baby },
                    { title: "TBC y VIH", href: "/programas/tbc-vih", icon: Pill },
                    { title: "Enfermedades Metaxénicas", href: "/programas/dengue", icon: Info, description: "Dengue, Zika, Chikungunya" },
                    { title: "Salud Mental", href: "/programas/salud-mental", icon: Activity },
                ]
            }
        ]
    },
    {
        label: "OTROS / PROFESIONALES",
        type: "dropdown",
        items: [
            { title: "Convocatorias CAS", href: "/convocatorias", icon: Briefcase },
            { title: "Docencia e Investigación", href: "/docencia", icon: GraduationCap },
            { title: "Citas de Proveedores", href: "/proveedores", icon: Calendar },
            { title: "Intranet del Personal", href: "/intranet", icon: Users },
        ]
    }
];
