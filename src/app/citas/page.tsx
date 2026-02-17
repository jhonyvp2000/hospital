'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, User, Users, Calendar, ArrowRight, MessageCircle, Phone, Info } from 'lucide-react';

export default function CitasPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <section className="bg-hospital-blue text-white py-12 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Gestión de Citas y Referencias</h1>
                    <p className="text-xl opacity-90 font-light">
                        Seleccione su situación para orientarlo correctamente.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 -mt-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Opción 1: Paciente con Referencia (Prioridad) */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 transform hover:-translate-y-1 transition-all duration-300">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-hospital-blue mb-6">
                            <FileText className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tengo una Hoja de Referencia</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Si usted ha sido derivado desde un Centro de Salud (Posta) con una hoja de referencia vigente (REFCON) hacia nuestro hospital.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg mb-6 text-sm text-blue-800 flex gap-2">
                            <Info className="w-4 h-4 shrink-0 mt-0.5" />
                            <span>Podrá adjuntar su referencia y solicitar su cita digitalmente.</span>
                        </div>
                        <Link href="/admision" className="block w-full bg-hospital-blue text-white text-center font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                            Solicitar Cita Referenciada <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Opción 2: Paciente Continuador (Control) */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 transform hover:-translate-y-1 transition-all duration-300">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                            <User className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Soy Paciente Continuador</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Si ya tiene historia clínica en el hospital y necesita una cita de control o seguimiento en su especialidad.
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                            <a href="tel:042522133" className="flex items-center justify-center gap-2 w-full border border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <Phone className="w-4 h-4" /> Central: (042) 522-133
                            </a>
                            <a href="#" className="flex items-center justify-center gap-2 w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-colors">
                                <MessageCircle className="w-4 h-4" /> WhatsApp de Citas
                            </a>
                        </div>
                    </div>

                    {/* Opción 3: Paciente Nuevo (Sin Referencia) */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 transform hover:-translate-y-1 transition-all duration-300 bg-gray-50">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mb-6">
                            <Users className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Soy Paciente Nuevo</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Si es la primera vez que se atiende y <strong>NO tiene hoja de referencia</strong>.
                        </p>
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6">
                            <h4 className="font-bold text-amber-800 text-sm mb-1">Primero acuda a su Posta</h4>
                            <p className="text-amber-700 text-sm">
                                Por normativa MINSA, debe atenderse primero en el Centro de Salud más cercano a su domicilio. Ellos evaluarán si necesita ser referido al hospital.
                            </p>
                        </div>
                        <Link href="/directorio" className="block w-full text-hospital-blue text-center font-bold py-3 hover:underline">
                            Ver Directorio de Redes de Salud
                        </Link>
                    </div>

                </div>

                <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-hospital-blue" />
                            Horario de Admisión Presencial
                        </h3>
                        <p className="text-gray-600">Lunes a Sábado de 06:00 a.m. a 06:00 p.m.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
