'use client';

import React from 'react';
import { Baby, HeartPulse, Stethoscope, Calendar, Clock, Shield, Info, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function MaternoNeonatalPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-teal-600 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-600/80 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555252333-9f8e92e65df4?q=80&w=2574&auto=format&fit=crop')" }}
                />
                <div className="container mx-auto px-4 py-20 relative z-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/30 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-teal-400/30">
                            <Baby className="w-4 h-4" />
                            <span>Programa Estratégico</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Programa Materno Neonatal
                        </h1>
                        <p className="text-xl text-teal-50 mb-8 leading-relaxed">
                            Cuidamos de ti y de tu bebé desde el primer momento. Atención integral, especializada y humanizada para garantizar un embarazo seguro y un nacimiento saludable.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/citas"
                                className="bg-white text-teal-700 px-6 py-3 rounded-lg font-bold hover:bg-teal-50 transition-colors flex items-center gap-2 shadow-lg"
                            >
                                <Calendar className="w-5 h-5" />
                                Agendar Control Prenatal
                            </Link>
                            <Link
                                href="/staff-medico"
                                className="bg-teal-700/50 text-white border border-teal-400/30 px-6 py-3 rounded-lg font-semibold hover:bg-teal-700/70 transition-colors backdrop-blur-sm"
                            >
                                Conoce a nuestros especialistas
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Objectives / Intro */}
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestro Compromiso</h2>
                    <p className="text-gray-600 text-lg">
                        El Programa Materno Neonatal tiene como objetivo principal reducir los riesgos asociados al embarazo y parto, brindando una atención de calidad centrada en la familia y promoviendo el desarrollo saludable del recién nacido.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <ServiceCard
                        icon={Stethoscope}
                        title="Control Prenatal Reenfocado"
                        description="Monitoreo periódico para identificar riesgos. Incluye exámenes de laboratorio, ecografías y suplementación con hierro y ácido fólico."
                    />
                    <ServiceCard
                        icon={HeartPulse}
                        title="Parto Humanizado"
                        description="Respetamos tus decisiones y tiempos. Fomentamos el parto con acompañante y el contacto piel a piel inmediato."
                    />
                    <ServiceCard
                        icon={Baby}
                        title="Atención del Recién Nacido"
                        description="Cuidados inmediatos, tamizaje neonatal, vacunas y seguimiento del crecimiento y desarrollo (CRED)."
                    />
                    <ServiceCard
                        icon={Shield}
                        title="Planificación Familiar"
                        description="Consejería y acceso a métodos anticonceptivos modernos para que decidas cuándo y cuántos hijos tener."
                    />
                    <ServiceCard
                        icon={Clock}
                        title="Emergencias Obstétricas"
                        description="Atención de urgencia las 24 horas del día. Sala de operaciones equipada para cesáreas y complicaciones."
                    />
                    <ServiceCard
                        icon={Info}
                        title="Psicoprofilaxis y Estimulación"
                        description="Talleres de preparación para el parto y estimulación prenatal para fortalecer el vínculo madre-bebé."
                    />
                </div>

                {/* Warning Signs Section */}
                <div className="bg-red-50 rounded-2xl p-8 border border-red-100 mb-16">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="md:w-1/3">
                            <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-2">
                                <div className="p-2 bg-red-100 rounded-lg">
                                    <Shield className="w-6 h-6 text-red-600" />
                                </div>
                                Signos de Alarma
                            </h3>
                            <p className="text-red-800/80 mb-6">
                                Si presentas alguno de estos síntomas durante el embarazo, acude inmediatamente al servicio de Emergencia.
                            </p>
                            <Link
                                href="/emergencia"
                                className="inline-flex items-center gap-2 text-red-700 font-bold hover:underline"
                            >
                                Ver tiempos de espera en Emergencia <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <AlarmItem text="Sangrado vaginal o pérdida de líquido" />
                            <AlarmItem text="Dolor de cabeza intenso o visión borrosa" />
                            <AlarmItem text="Zumbido de oídos" />
                            <AlarmItem text="Hinchazón de pies, manos o cara" />
                            <AlarmItem text="Disminución de movimientos del bebé" />
                            <AlarmItem text="Fiebre alta o dolor abdominal fuerte" />
                        </div>
                    </div>
                </div>

                {/* Call to Action Footer */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 text-center">
                    <Baby className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        ¿Estás embarazada o planeas estarlo?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Acércate a nuestros consultorios de Gineco-Obstetricia para iniciar tus controles. Tu salud y la de tu bebé son nuestra prioridad.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/citas"
                            className="bg-hospital-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                        >
                            Reservar Cita
                        </Link>
                        <Link
                            href="/contacto"
                            className="px-8 py-3 rounded-lg font-bold text-gray-600 hover:bg-gray-100 transition-colors border border-gray-200"
                        >
                            Contactar al Hospital
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ServiceCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
                {description}
            </p>
        </div>
    );
}

function AlarmItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-red-100">
            <CheckCircle className="w-5 h-5 text-red-500 shrink-0" />
            <span className="text-gray-700 font-medium">{text}</span>
        </div>
    );
}
