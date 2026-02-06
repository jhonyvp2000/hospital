'use client';

import React from 'react';
import { Heart, Brain, Phone, Users, Sparkles, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function SaludMentalPage() {
    return (
        <div className="min-h-screen bg-violet-50/30">
            {/* Hero Section */}
            {/* Hero Section */}
            <div className="relative bg-[#4c1d95] text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2e1065] via-[#4c1d95] to-[#5b21b6]/80 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop')" }}
                />
                <div className="container mx-auto px-4 py-24 relative z-20 text-center md:text-left">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-violet-100 border border-white/20 rounded-full font-medium text-sm mb-6 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4" />
                            Salud Mental y Cultura de Paz
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                            No estás solo.<br />
                            <span className="text-violet-200">Estamos contigo.</span>
                        </h1>
                        <p className="text-xl text-violet-50 mb-10 leading-relaxed max-w-2xl font-medium drop-shadow-md">
                            Cuidar tu mente es tan importante como cuidar tu cuerpo. Ofrecemos un espacio seguro, confidencial y humano para acompañarte en tu proceso de recuperación.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                href="/citas"
                                className="bg-white text-violet-900 px-8 py-3 rounded-lg font-bold hover:bg-violet-50 transition-colors shadow-lg"
                            >
                                Agendar Cita
                            </Link>
                            <Link
                                href="#ayuda-inmediata"
                                className="bg-white/10 text-white border border-white/30 px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors backdrop-blur-sm"
                            >
                                Necesito ayuda ahora
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">

                {/* Intro Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Un Enfoque Comunitario</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Nuestro servicio se alinea con el modelo de <strong>Centros de Salud Mental Comunitarios (CSMC)</strong> del MINSA. No buscamos solo tratar la enfermedad, sino fortalecer tus vínculos, tu comunidad y tu bienestar integral.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <ServiceCard
                        icon={Brain}
                        title="Psiquiatría y Medicina"
                        desc="Diagnóstico y tratamiento médico especializado para trastornos mentales severos y comunes."
                    />
                    <ServiceCard
                        icon={MessageCircle}
                        title="Psicología Clínica"
                        desc="Terapias individuales, de pareja y familiares para niños, adolescentes y adultos."
                    />
                    <ServiceCard
                        icon={Users}
                        title="Grupos de Apoyo"
                        desc="Espacios terapéuticos grupales para compartir experiencias y fortalecer la recuperación."
                    />
                    <ServiceCard
                        icon={Heart}
                        title="Prevención de Violencia"
                        desc="Atención especializada para víctimas de violencia familiar y de género."
                    />
                    <ServiceCard
                        icon={ShieldCheck}
                        title="Adicciones"
                        desc="Programa de intervención temprana y tratamiento para problemas de consumo de sustancias."
                    />
                    <ServiceCard
                        icon={Sparkles}
                        title="Rehabilitación Psicosocial"
                        desc="Talleres ocupacionales y de habilidades sociales para la reinserción comunitaria."
                    />
                </div>

                {/* Emergency Banner */}
                <div id="ayuda-inmediata" className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 md:p-16 text-white text-center shadow-xl">
                    <h2 className="text-3xl font-bold mb-8">Canales de Ayuda Inmediata</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <HotlineCard
                            number="113"
                            label="Opción 5"
                            desc="Línea gratuita del MINSA orientada a la salud mental y psicología."
                        />
                        <HotlineCard
                            number="100"
                            label="Ministerio de la Mujer"
                            desc="Atención gratuita para víctimas de violencia familiar y sexual."
                        />
                        <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center">
                            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Emergencia</h3>
                            <p className="text-indigo-100 mb-6">Si tú o alguien está en peligro inmediato, acude al hospital.</p>
                            <Link href="/emergencia" className="inline-flex items-center gap-2 text-white font-bold hover:underline">
                                Ver ubicación <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function ServiceCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-violet-100">
            <div className="w-14 h-14 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">
                {desc}
            </p>
        </div>
    );
}

function HotlineCard({ number, label, desc }: any) {
    return (
        <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
            <h3 className="text-5xl font-bold mb-2 tracking-tight">{number}</h3>
            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                {label}
            </div>
            <p className="text-indigo-100">
                {desc}
            </p>
        </div>
    );
}
