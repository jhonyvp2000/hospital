import {
    FileText, Activity, Pill, Calendar, Clock, CreditCard, Shield,
    MapPin, Users, BookOpen, MessageSquare, Building, Scale, Newspaper,
    Briefcase, GraduationCap, Link
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
                    { title: "Resultados de Exámenes", href: "/resultados", icon: Activity },
                    { title: "Mi Historia Clínica", href: "/historia", icon: FileText },
                    { title: "Mis Recetas", href: "/recetas", icon: Pill }, // Using Pill as proxy for prescription
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
                    { title: "Staff Médico", href: "/medicos", icon: Users },
                    { title: "Guía de Procedimientos", href: "/procedimientos", icon: BookOpen },
                    { title: "Mapa del Hospital", href: "/mapa", icon: MapPin },
                    { title: "Derechos y Deberes", href: "/derechos", icon: Scale },
                ]
            }
        ]
    },
    {
        label: "INSTITUCIONAL",
        type: "dropdown",
        items: [
            { title: "Quiénes Somos / Historia", href: "/nosotros", icon: Building },
            { title: "Dirección Ejecutiva", href: "/direccion", icon: Users },
            { title: "Documentos de Gestión", href: "/gestion", icon: FileText },
            { title: "Transparencia Estándar", href: "/transparencia", icon: FileText },
            { title: "Sala de Prensa / Noticias", href: "/noticias", icon: Newspaper },
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

// Re-export specific icons for usage if needed, but they are embedded in data usually.
// Note: 'users' lowercase might be a typo in my thought process, should be Users. Fixed in object.
