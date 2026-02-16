"use client";

import React from 'react';
import {
    MessageSquare, BookOpen, UserCheck, Phone, Mail,
    MapPin, AlertCircle, FileText, ArrowRight, ShieldCheck, Heart
} from 'lucide-react';
import Link from 'next/link';

export default function PAUSPage() {
    return (
        <main className="min-h-screen bg-hospital-bg pb-20">

            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-16 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-bottom-left"></div>
                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm border border-blue-400/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        <ShieldCheck className="w-4 h-4" /> Plataforma de Atención al Usuario en Salud
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">Estamos aquí para escucharte</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
                        Tu opinión nos ayuda a mejorar. Gestionamos tus consultas, reclamos y sugerencias para garantizar la protección de tus derechos en salud.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 -mt-10 relative z-20">

                {/* Main Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

                    {/* Libro de Reclamaciones */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-red-500 transform hover:-translate-y-1 transition-all group">
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full uppercase">Oficial</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Libro de Reclamaciones en Salud</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Si tuviste algún inconveniente con la atención recibida, puedes presentar tu reclamo o queja formalmente aquí. Tienes derecho a una respuesta en un plazo máximo de 30 días hábiles.
                        </p>
                        <Link href="/libro-reclamaciones" className="w-full block text-center bg-red-500 text-white py-4 rounded-xl font-bold hover:bg-red-600 transition-colors shadow-md hover:shadow-lg">
                            Registrar Reclamo Virtual
                        </Link>
                        <p className="text-xs text-gray-400 text-center mt-4">
                            Conforme al D.S. N° 002-2019-SA y normativa vigente de SUSALUD.
                        </p>
                    </div>

                    {/* Consultas y Sugerencias */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-hospital-blue transform hover:-translate-y-1 transition-all group">
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-hospital-blue group-hover:bg-hospital-blue group-hover:text-white transition-colors">
                                <MessageSquare className="w-8 h-8" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Consultas y Sugerencias</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            ¿Tienes dudas sobre nuestros servicios o alguna propuesta de mejora? Nuestro equipo PAUS está listo para orientarte y recibir tus aportes.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <a href="https://wa.me/51999999999" target="_blank" className="flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-sm">
                                <Phone className="w-5 h-5" /> WhatsApp PAUS
                            </a>
                            <a href="mailto:paus@hospitaltarapoto.gob.pe" className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                                <Mail className="w-5 h-5" /> Enviar Correo
                            </a>
                        </div>
                        <p className="text-xs text-gray-400 text-center mt-4">
                            Horario de atención digital: Lun - Sab 7:00 a.m. - 7:00 p.m.
                        </p>
                    </div>
                </div>

                {/* Rights and Duties Section */}
                <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 mb-16">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-50 text-yellow-600 rounded-full mb-4">
                            <UserCheck className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Tus Derechos en Salud</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Según la Ley N° 29414, todo usuario tiene derechos fundamentales que garantizamos y respetamos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {RIGHTS.map((right, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
                                <div className="w-12 h-12 bg-blue-100 text-hospital-blue rounded-full flex items-center justify-center mb-4">
                                    <right.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-gray-800 mb-2">{right.title}</h3>
                                <p className="text-sm text-gray-600">{right.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/derechos" className="inline-flex items-center text-hospital-blue font-bold hover:underline">
                            Ver lista completa de Derechos y Deberes <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </section>

                {/* Módulo Físico Info */}
                <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Visita nuestro Módulo PAUS</h3>
                        <p className="text-gray-400 max-w-xl">
                            Si prefieres atención presencial, nuestro personal te espera en el hall principal del hospital. Identifícanos por los chalecos celestes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 mt-6">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-hospital-light" />
                                <span>Jr. Ángel Delgado Morey, Tarapoto</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 text-hospital-light" />
                                <span>Hall de Ingreso Principal</span>
                            </div>
                        </div>
                    </div>
                    <div className="shrink-0 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                        <p className="text-center font-bold text-sm uppercase tracking-widest text-hospital-light mb-1">Horario Presencial</p>
                        <p className="text-2xl font-bold">Lunes a Sábado</p>
                        <p className="text-center opacity-80">07:00 a.m. - 01:00 p.m.</p>
                    </div>
                </div>

            </div>
        </main>
    );
}

const RIGHTS = [
    {
        title: "Acceso a la Información",
        desc: "A recibir información clara, oportuna y veraz sobre tu estado de salud y tratamiento.",
        icon: FileText
    },
    {
        title: "Atención y Recuperación",
        desc: "A ser atendido con respeto, sin discriminación y recibir tratamiento inmediato en emergencias.",
        icon: Heart
    },
    {
        title: "Consentimiento Informado",
        desc: "A aceptar o rechazar pruebas o intervenciones médicas de forma libre y voluntaria.",
        icon: UserCheck
    }
];
