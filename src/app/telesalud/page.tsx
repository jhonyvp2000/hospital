"use client";

import React from 'react';
import {
    Monitor, Phone, Calendar, Video, Heart,
    Stethoscope, MessageCircle, Users, CheckCircle,
    Smartphone, Mail
} from 'lucide-react';
import Link from 'next/link';

export default function TelesaludPage() {
    return (
        <main className="min-h-screen bg-hospital-bg pb-20">

            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-16 px-4 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm border border-blue-400/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                            <Monitor className="w-4 h-4" /> Transformación Digital
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Salud a un clic de distancia
                        </h1>
                        <p className="text-xl opacity-90 font-light leading-relaxed mb-8">
                            Accede a nuestros especialistas sin salir de casa. El Hospital Tarapoto pone
                            a tu disposición la tecnología para cuidarte donde estés.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#contacto" className="bg-white text-hospital-blue px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all flex items-center gap-2">
                                <Phone className="w-5 h-5" /> Contáctanos Ahora
                            </a>
                            <a href="#servicios" className="bg-blue-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-all border border-blue-500">
                                Ver Servicios
                            </a>
                        </div>
                    </div>

                    {/* Hero Illustration (Simulated with div) */}
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-500/20 rounded-full animate-pulse absolute -top-4 -left-4"></div>
                            <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-8 relative z-10 transform rotate-3 hover:rotate-0 transition-all cursor-pointer">
                                <Video className="w-32 h-32 text-hospital-blue" />
                                <div className="absolute inset-x-0 bottom-0 bg-gray-50 p-4 text-center rounded-b-3xl">
                                    <p className="font-bold text-gray-800">Conexión Segura</p>
                                    <p className="text-xs text-green-500 flex items-center justify-center gap-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div> En línea
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 py-16" id="servicios">

                {/* Services Grid */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Servicios Digitales</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Diseñados para brindarte atención oportuna, segura y de calidad. Elige la opción que necesitas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

                    {/* Teleorientación */}
                    <ServiceCard
                        icon={MessageCircle}
                        title="Teleorientación"
                        desc="Consejería y asesoría en salud. Ideal para resolver dudas, consultas preventivas y seguimiento leve."
                        target="Para Pacientes"
                        color="blue"
                    >
                        <ul className="text-sm text-gray-600 space-y-2 mb-4">
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Medicina General</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Nutrición y Psicología</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Planificación Familiar</li>
                        </ul>
                    </ServiceCard>

                    {/* Telemonitoreo */}
                    <ServiceCard
                        icon={Heart}
                        title="Telemonitoreo"
                        desc="Seguimiento a distancia de pacientes crónicos o continuadores. No pierdas tu control médico."
                        target="Pacientes Crónicos"
                        color="green"
                    >
                        <ul className="text-sm text-gray-600 space-y-2 mb-4">
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Hipertensión y Diabetes</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Control Post-Alta</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> TBC y VIH</li>
                        </ul>
                    </ServiceCard>

                    {/* Teleinterconsulta */}
                    <ServiceCard
                        icon={Stethoscope}
                        title="Teleinterconsulta"
                        desc="Exclusivo para IPRESS. Conectamos médicos de postas con nuestros especialistas para resolver casos complejos."
                        target="Solo Personal de Salud"
                        color="purple"
                    >
                        <div className="bg-purple-50 p-3 rounded-lg text-xs text-purple-800 mb-4">
                            Requiere referencia digital y coordinación previa entre establecimientos.
                        </div>
                    </ServiceCard>

                </div>

                {/* Specialties Marquee (Static simulation) */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
                    <h3 className="text-xl font-bold text-center mb-8">Especialidades Disponibles en Telesalud</h3>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70">
                        {['Cardiología', 'Dermatología', 'Pediatría', 'Psiquiatría', 'Neumología', 'Ginecología', 'Neurología', 'Infectología', 'Urología'].map((spec) => (
                            <span key={spec} className="bg-gray-100 px-4 py-2 rounded-full font-medium text-gray-700 hover:bg-hospital-blue hover:text-white transition-colors cursor-default">
                                {spec}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Contact & Hours */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="contacto">

                    {/* Contact Channels */}
                    <div className="bg-hospital-blue text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">Canales de Atención</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Central Telefónica</p>
                                        <p className="text-xl">(042) 52-0012</p>
                                        <p className="text-sm opacity-80">Anexo 1055 (Oficina Telesalud)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                        <Smartphone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">WhatsApp Oficial</p>
                                        <p className="text-xl">946 874 027</p>
                                        <p className="text-sm opacity-80">Solo mensajes de texto</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Correo Electrónico</p>
                                        <p className="text-sm md:text-base break-all">telesalud@hospitaltarapoto.gob.pe</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Circle Decor */}
                        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white opacity-10 rounded-full"></div>
                    </div>

                    {/* Schedule & Steps */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Horarios de Atención</h3>

                        <div className="space-y-4 mb-8">
                            <ScheduleItem day="Lunes a Sábado" hours="Mañanas" service="Teleorientación" />
                            <ScheduleItem day="Lunes a Sábado" hours="Mañanas y Tardes" service="Telemonitoreo" />
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Monitor className="w-5 h-5 text-hospital-blue" />
                                Cómo solicitar tu cita:
                            </h4>
                            <ol className="space-y-3 relative border-l-2 border-gray-200 ml-2 pl-6">
                                <StepItem n="1" text="Escribe al WhatsApp o llama al anexo indicado." />
                                <StepItem n="2" text="Brinda tu DNI y motivo de consulta." />
                                <StepItem n="3" text="El personal te agendará una fecha y hora." />
                                <StepItem n="4" text="Recibirás la llamada del especialista." />
                            </ol>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}

function ServiceCard({ icon: Icon, title, desc, target, color, children }: any) {
    const colors = {
        blue: 'bg-blue-50 text-blue-600 border-blue-100',
        green: 'bg-green-50 text-green-600 border-green-100',
        purple: 'bg-purple-50 text-purple-600 border-purple-100',
    };
    // @ts-ignore
    const theme = colors[color];

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:translate-y-[-5px] transition-transform">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${theme}`}>
                <Icon className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">{target}</span>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
                {desc}
            </p>
            {children}
        </div>
    )
}

function ScheduleItem({ day, hours, service }: any) {
    return (
        <div className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0">
            <div>
                <span className="block font-bold text-gray-700">{day}</span>
                <span className="text-xs text-gray-500">{service}</span>
            </div>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">{hours}</span>
        </div>
    )
}

function StepItem({ n, text }: any) {
    return (
        <li className="relative">
            <span className="absolute -left-[33px] top-0 w-6 h-6 bg-hospital-blue text-white rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">
                {n}
            </span>
            <p className="text-sm text-gray-700">{text}</p>
        </li>
    )
}
