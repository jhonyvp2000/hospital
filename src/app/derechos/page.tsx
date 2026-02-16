"use client";

import React from 'react';
import {
    ShieldCheck, Heart, Eye, FileText, UserCheck,
    AlertCircle, MessageSquare, Scale, Users, CheckCircle, HelpCircle
} from 'lucide-react';
import Link from 'next/link';

export default function DerechosPage() {
    return (
        <main className="min-h-screen bg-hospital-bg pb-20">

            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-16 px-4">
                <div className="container mx-auto max-w-5xl text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm border border-blue-400/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        <Scale className="w-4 h-4" /> Ley N° 29414
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">Tus Derechos son nuestra prioridad</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
                        Conoce los 4 pilares fundamentales que garantizan una atención digna, transparente y de calidad para ti y tu familia.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 -mt-10 relative z-10">

                {/* 1. Acceso y Atencion */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="w-40 h-40 bg-blue-50 rounded-full flex items-center justify-center text-hospital-blue">
                            <Heart className="w-20 h-20" />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 bg-hospital-blue text-white rounded-full flex items-center justify-center text-sm">1</span>
                            Acceso y Atención Inmediata
                        </h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            Tu salud no espera. Tienes derecho a recibir atención médica oportuna sin barreras burocráticas o económicas, especialmente en situaciones críticas.
                        </p>
                        <ul className="space-y-3">
                            <RightItem text="Atención de Emergencia obligatoria sin pago previo." />
                            <RightItem text="Elección libre del médico (según disponibilidad)." />
                            <RightItem text="Recibir medicamentos e insumos necesarios." />
                        </ul>
                    </div>
                </div>

                {/* 2. Informacion */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row-reverse gap-8 items-center">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="w-40 h-40 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                            <FileText className="w-20 h-20" />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                            Información y Decisión
                        </h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            Tú eres el dueño de tu cuerpo. Tienes derecho a entender qué tienes, cómo se cura y a decidir si aceptas el tratamiento.
                        </p>
                        <ul className="space-y-3">
                            <RightItem text="Explicación clara sobre diagnóstico y tratamiento." />
                            <RightItem text="Consentimiento Informado por escrito para riesgos." />
                            <RightItem text="Acceso a tu Historia Clínica y Segunda Opinión." />
                        </ul>
                    </div>
                </div>

                {/* 3. Privacidad */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="w-40 h-40 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
                            <ShieldCheck className="w-20 h-20" />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                            Privacidad y Trato Digno
                        </h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            Tu bienestar emocional es tan importante como el físico. Mereces un trato respetuoso y que tus datos sean confidenciales.
                        </p>
                        <ul className="space-y-3">
                            <RightItem text="Respeto a tu dignidad y creencias, sin discriminación." />
                            <RightItem text="Confidencialidad absoluta de tu diagnóstico." />
                            <RightItem text="Estar acompañado por un familiar de confianza." />
                        </ul>
                    </div>
                </div>

                {/* Duties Section */}
                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200 mb-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Tus Deberes como Paciente</h2>
                        <p className="text-gray-500">
                            La salud es una responsabilidad compartida. Ayúdanos a cuidarte mejor.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DutyItem title="Información Veraz" desc="Brindar datos reales sobre tus síntomas y antecedentes." />
                        <DutyItem title="Respeto Mutuo" desc="Tratar con respeto al personal de salud y otros pacientes." />
                        <DutyItem title="Cumplimiento" desc="Seguir las indicaciones médicas y normas del hospital." />
                        <DutyItem title="Cuidado de Bienes" desc="Cuidar las instalaciones y equipos que sirven a todos." />
                    </div>
                </div>

                {/* CTA Protection */}
                <div className="bg-gradient-to-r from-blue-900 to-hospital-blue rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                            <AlertCircle className="w-6 h-6 text-yellow-400" />
                            ¿Sientes que tus derechos fueron vulnerados?
                        </h3>
                        <p className="opacity-90 max-w-xl">
                            No te quedes callado. La ley te protege y nosotros te escuchamos. Registra tu caso en nuestra Plataforma de Atención al Usuario.
                        </p>
                    </div>
                    <Link href="/paus" className="whitespace-nowrap bg-white text-hospital-blue px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg">
                        <MessageSquare className="w-5 h-5" />
                        Ir al Libro de Reclamaciones
                    </Link>
                </div>

            </div>
        </main>
    );
}

function RightItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
            <span className="text-gray-700 font-medium">{text}</span>
        </li>
    );
}

function DutyItem({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="bg-white p-5 rounded-xl border border-gray-100 flex items-start gap-4">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                <UserCheck className="w-5 h-5" />
            </div>
            <div>
                <h4 className="font-bold text-gray-800">{title}</h4>
                <p className="text-sm text-gray-500">{desc}</p>
            </div>
        </div>
    )
}
