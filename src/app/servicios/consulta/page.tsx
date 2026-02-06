"use client";

import React from 'react';
import {
    Stethoscope, Heart, Brain, Baby, Bone, Eye, Activity,
    Scissors, Thermometer, Accessibility, Smile, Microscope,
    Users, Phone, Calendar, Clock, ArrowRight, User
} from 'lucide-react';
import Link from 'next/link';

// Data Structure for Specialties
const SPECIALTIES = [
    {
        category: "Medicina Interna y Especialidades Clínicas",
        items: [
            { name: "Medicina Interna", icon: Stethoscope, desc: "Atención integral de adultos." },
            { name: "Cardiología", icon: Heart, desc: "Enfermedades del corazón." },
            { name: "Neumología", icon: Activity, desc: "Salud respiratoria." },
            { name: "Infectología", icon: Thermometer, desc: "Enfermedades infecciosas." },
            { name: "Gastroenterología", icon: Activity, desc: "Sistema digestivo." }, // Using Activity as generic internal med
            { name: "Nefrología", icon: Activity, desc: "Salud renal." },
            { name: "Neurología", icon: Brain, desc: "Sistema nervioso." },
            { name: "Reumatología", icon: Accessibility, desc: "Articulaciones y tejidos." },
        ]
    },
    {
        category: "Cirugía y Procedimientos",
        items: [
            { name: "Cirugía General", icon: Scissors, desc: "Intervenciones quirúrgicas." },
            { name: "Traumatología", icon: Bone, desc: "Huesos y lesiones." },
            { name: "Urología", icon: Activity, desc: "Aparato urinario." },
            { name: "Oftalmología", icon: Eye, desc: "Salud visual." },
            { name: "Otorrinolaringología", icon: User, desc: "Oído, nariz y garganta." }, // Using User as generic head/neck
            { name: "Neurocirugía", icon: Brain, desc: "Cirugía del sistema nervioso." },
            { name: "Cirugía Plástica", icon: Smile, desc: "Reconstructiva y estética." },
        ]
    },
    {
        category: "Salud Materno-Infantil",
        items: [
            { name: "Ginecología", icon: Users, desc: "Salud de la mujer." },
            { name: "Obstetricia", icon: Baby, desc: "Maternidad y parto." },
            { name: "Pediatría", icon: Baby, desc: "Salud infantil." },
            { name: "Cirugía Pediátrica", icon: Scissors, desc: "Cirugía en niños." },
        ]
    },
    {
        category: "Apoyo Clínico y Otros",
        items: [
            { name: "Psiquiatría", icon: Brain, desc: "Salud mental." },
            { name: "Psicología", icon: Smile, desc: "Apoyo emocional." },
            { name: "Nutrición", icon: Activity, desc: "Alimentación saludable." },
            { name: "Odontología", icon: Smile, desc: "Salud bucal." },
            { name: "Medicina Física", icon: Accessibility, desc: "Rehabilitación." },
        ]
    }
];

export default function ConsultaExternaPage() {
    return (
        <main className="min-h-screen bg-hospital-bg pb-20">

            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-16 px-4">
                <div className="container mx-auto max-w-5xl text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm border border-blue-400/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        <Stethoscope className="w-4 h-4" /> Cartera de Servicios
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">Consulta Externa</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
                        Contamos con más de 25 especialidades médicas a tu disposición, brindadas por un equipo de profesionales altamente calificados.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 -mt-8 relative z-10">

                {/* Info Bar */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-50 text-hospital-blue rounded-full flex items-center justify-center">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">Horario de Atención</h3>
                            <p className="text-gray-500 text-sm">Lunes a Sábado: 7:00 a.m. - 7:00 p.m.</p>
                        </div>
                    </div>
                    <div className="h-px md:h-12 w-full md:w-px bg-gray-100"></div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">Reserva de Citas</h3>
                            <p className="text-gray-500 text-sm">Presencial o vía web</p>
                        </div>
                    </div>
                    <Link href="/como-solicitar-cita" className="w-full md:w-auto bg-hospital-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                        Solicitar Cita <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Specialties Grid by Category */}
                <div className="space-y-16">
                    {SPECIALTIES.map((section, idx) => (
                        <div key={idx}>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 border-l-4 border-hospital-blue pl-4">
                                {section.category}
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {section.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group cursor-default">
                                        <div className="w-12 h-12 bg-gray-50 text-hospital-blue rounded-lg flex items-center justify-center mb-4 group-hover:bg-hospital-blue group-hover:text-white transition-colors">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-gray-800 mb-1 group-hover:text-hospital-blue transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
