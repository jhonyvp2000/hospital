'use client';

import React, { useState } from 'react';
import { Pill, Activity, Shield, AlertTriangle, CheckCircle, Clock, Heart, Lock, Stethoscope, ChevronRight, Info } from 'lucide-react';
import Link from 'next/link';

export default function TbcVihPage() {
    const [activeTab, setActiveTab] = useState<'tbc' | 'vih'>('tbc');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-transparent z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop')" }}
                />
                <div className="container mx-auto px-4 py-24 relative z-20">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm mb-6 border border-blue-400/20">
                            Estrategia Sanitaria Nacional
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Prevención y Control de TBC y VIH
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Brindamos atención integral, gratuita y confidencial. Nuestro compromiso es garantizar el diagnóstico oportuno y el tratamiento adecuado para mejorar tu calidad de vida.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => setActiveTab('tbc')}
                                className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${activeTab === 'tbc' ? 'bg-blue-600 text-white shadow-lg ring-2 ring-blue-400/50' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                            >
                                <Stethoscope className="w-5 h-5" />
                                Programa de Tuberculosis
                            </button>
                            <button
                                onClick={() => setActiveTab('vih')}
                                className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${activeTab === 'vih' ? 'bg-rose-600 text-white shadow-lg ring-2 ring-rose-400/50' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                            >
                                <Heart className="w-5 h-5" />
                                Programa de VIH / ITS
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 -mt-8 relative z-30">

                {/* Main Content Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px]">
                    {activeTab === 'tbc' ? (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="bg-blue-50 p-8 border-b border-blue-100 flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-800">Control de Tuberculosis (TBC)</h2>
                                    <p className="text-slate-600">Juntos por un Perú sin Tuberculosis</p>
                                </div>
                            </div>

                            <div className="p-8 md:p-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-amber-500" />
                                            ¿Cuándo sospechar de TBC?
                                        </h3>
                                        <p className="text-slate-600 mb-4">
                                            Si presentas <strong>tos con flema por 15 días o más</strong>, eres un "Sintomático Respiratorio". Otros síntomas incluyen:
                                        </p>
                                        <ul className="space-y-3">
                                            <ListItem>Pérdida de peso sin causa aparente</ListItem>
                                            <ListItem>Sudoración nocturna</ListItem>
                                            <ListItem>Fiebre y cansancio constante</ListItem>
                                            <ListItem>Dolor de pecho o espalda</ListItem>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                        <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5" />
                                            Nuestros Servicios Gratuitos
                                        </h3>
                                        <ul className="space-y-4">
                                            <ServiceItem
                                                title="Despistaje de TBC"
                                                desc="Prueba de baciloscopía rápida y gratuita."
                                            />
                                            <ServiceItem
                                                title="Prueba Molecular (GeneXpert)"
                                                desc="Diagnóstico de alta precisión en menos de 2 horas."
                                            />
                                            <ServiceItem
                                                title="Tratamiento DOTS"
                                                desc="Entrega de medicamentos supervisada por personal de salud."
                                            />
                                            <ServiceItem
                                                title="Control de Contactos"
                                                desc="Evaluación gratuita a familiares y convivientes."
                                            />
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-blue-600">
                                    <h4 className="font-bold text-slate-800 mb-2">Importante:</h4>
                                    <p className="text-slate-600">
                                        La tuberculosis tiene cura si se detecta a tiempo y se completa el tratamiento. No abandones tu medicación.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="bg-rose-50 p-8 border-b border-rose-100 flex items-center gap-4">
                                <div className="w-12 h-12 bg-rose-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-rose-600/20">
                                    <Heart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-800">Programa de VIH e ITS</h2>
                                    <p className="text-slate-600">Atención integral, humana y libre de estigma</p>
                                </div>
                            </div>

                            <div className="p-8 md:p-12">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                                    <div className="lg:col-span-2">
                                        <h3 className="text-xl font-bold text-slate-800 mb-6">Servicios de la Estrategia</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <FeatureCard
                                                icon={Shield}
                                                title="Pruebas Rápidas"
                                                desc="Diagnóstico de VIH, Sífilis y Hepatitis B en 20 minutos. Confidencial y sin cita previa."
                                                color="rose"
                                            />
                                            <FeatureCard
                                                icon={Pill}
                                                title="Tratamiento TARGA"
                                                desc="Tratamiento Antirretroviral de Gran Actividad gratuito para asegurar tu bienestar."
                                                color="rose"
                                            />
                                            <FeatureCard
                                                icon={Info}
                                                title="Consejería y Prevención"
                                                desc="Información sobre métodos de barrera (condones) y salud sexual responsable."
                                                color="rose"
                                            />
                                            <FeatureCard
                                                icon={Activity}
                                                title="Profilaxis (PrEP / PEP)"
                                                desc="Prevención Pre y Post exposición para personas en riesgo."
                                                color="rose"
                                            />
                                        </div>
                                    </div>

                                    {/* Sidebar Info */}
                                    <div className="bg-rose-50 rounded-xl p-6 h-fit border border-rose-100">
                                        <h3 className="font-bold text-rose-800 mb-4 flex items-center gap-2">
                                            <Lock className="w-5 h-5" />
                                            Confidencialidad
                                        </h3>
                                        <p className="text-rose-900/70 text-sm mb-6 leading-relaxed">
                                            Tu privacidad es nuestra prioridad. Todos los diagnósticos y consultas están protegidos por la Ley N° 29737. Nadie sabrá tus resultados sin tu consentimiento.
                                        </p>
                                        <div className="space-y-3">
                                            <Link href="/citas" className="block w-full text-center py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold transition-colors">
                                                Agendar Consejería
                                            </Link>
                                            <button className="block w-full text-center py-3 bg-white border border-rose-200 text-rose-700 hover:bg-rose-50 rounded-lg font-bold transition-colors">
                                                Folleto Informativo
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* FAQ Section */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">Preguntas Frecuentes</h2>
                    <div className="space-y-4">
                        <FAQItem question="¿El tratamiento tiene algún costo?" answer="No. Tanto para TBC como para VIH, el diagnóstico y tratamiento son completamente gratuitos en todos los establecimientos del MINSA." />
                        <FAQItem question="¿Necesito sacar cita para una prueba de VIH?" answer="No es obligatorio, puedes acudir al consultorio de la Estrategia de ITS/VIH para una prueba rápida disponible de inmediato." />
                        <FAQItem question="¿Qué debo hacer si convivo con alguien con TBC?" answer="Acercarte al establecimiento de salud para un descarte gratuito. Todos los contactos deben ser evaluados para prevenir el contagio." />
                    </div>
                </div>

            </div>
        </div>
    );
}

function ListItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-start gap-3 text-slate-700">
            <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
            <span>{children}</span>
        </li>
    );
}

function ServiceItem({ title, desc }: { title: string, desc: string }) {
    return (
        <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
                <strong className="block text-slate-800">{title}</strong>
                <span className="text-sm text-slate-600">{desc}</span>
            </div>
        </li>
    );
}

function FeatureCard({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) {
    return (
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${color === 'rose' ? 'bg-rose-100 text-rose-600' : 'bg-blue-100 text-blue-600'}`}>
                <Icon className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-800 mb-2">{title}</h4>
            <p className="text-sm text-slate-600">{desc}</p>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
            >
                <span className="font-semibold text-slate-800">{question}</span>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
            </button>
            {isOpen && (
                <div className="p-5 pt-0 text-slate-600 border-t border-gray-100 bg-gray-50/50">
                    {answer}
                </div>
            )}
        </div>
    );
}
