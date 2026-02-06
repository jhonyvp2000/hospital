'use client';

import React from 'react';
import { Bug, AlertTriangle, Shield, CheckCircle, Droplet, Thermometer, UserX, Trash2, Home, ArrowRight, Info } from 'lucide-react';
import Link from 'next/link';

export default function MetaxenicasPage() {
    return (
        <div className="min-h-screen bg-amber-50/30">
            {/* Hero Section */}
            {/* Hero Section */}
            <div className="relative bg-[#004d40] text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#004d40] to-[#0f766e]/90 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533616688419-b7a585564be6?q=80&w=2670&auto=format&fit=crop')" }}
                />
                <div className="container mx-auto px-4 py-20 relative z-20">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400 text-teal-900 rounded-full font-bold text-sm mb-6">
                            <AlertTriangle className="w-4 h-4" />
                            Alerta Epidemiológica
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-md">
                            ¡Hazle el pare al Dengue!
                        </h1>
                        <p className="text-xl text-teal-50 mb-8 leading-relaxed drop-shadow-sm font-medium">
                            El Dengue, Zika y Chikungunya son enfermedades graves pero prevenibles. La mejor defensa es eliminar los criaderos del zancudo en tu hogar.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#prevencion"
                                className="bg-yellow-400 text-teal-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
                            >
                                <Shield className="w-5 h-5" />
                                ¿Cómo prevenir?
                            </Link>
                            <Link
                                href="/citas"
                                className="bg-white/20 backdrop-blur-md text-white border border-white/40 px-8 py-3 rounded-lg font-bold hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
                            >
                                Tengo síntomas
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">

                {/* Symptom Comparison */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Conoce las diferencias</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Aunque son transmitidos por el mismo mosquito (<i>Aedes aegypti</i>), cada enfermedad tiene características específicas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <DiseaseCard
                            title="Dengue"
                            color="bg-red-50 border-red-100"
                            titleColor="text-red-700"
                            icon={Bug}
                            symptoms={[
                                "Fiebre alta repentina",
                                "Dolor detrás de los ojos",
                                "Dolor muscular y articular",
                                "Sarpullido",
                                "Náuseas y vómitos"
                            ]}
                            warning="¡Peligro! Puede complicarse con sangrado."
                        />
                        <DiseaseCard
                            title="Chikungunya"
                            color="bg-orange-50 border-orange-100"
                            titleColor="text-orange-700"
                            icon={UserX}
                            symptoms={[
                                "Fiebre alta",
                                "Dolor articular SEVERO",
                                "Dolor de espalda",
                                "Erupciones en la piel",
                                "Cansancio extremo"
                            ]}
                            warning="El dolor articular puede durar meses."
                        />
                        <DiseaseCard
                            title="Zika"
                            color="bg-purple-50 border-purple-100"
                            titleColor="text-purple-700"
                            icon={Bug}
                            symptoms={[
                                "Fiebre leve o ausente",
                                "Ojos rojos (sin pus)",
                                "Sarpullido con picazón",
                                "Dolor de cabeza",
                                "Dolor articular leve"
                            ]}
                            warning="Riesgo grave durante el embarazo."
                        />
                    </div>
                </div>

                {/* Prevention Section */}
                <div id="prevencion" className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-20">
                    <div className="bg-teal-600 text-white p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Sin criaderos no hay zancudos</h2>
                        <p className="text-teal-100 text-lg">Dedica 10 minutos a la semana para revisar tu casa y elimina los riesgos.</p>
                    </div>
                    <div className="p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <PreventionItem
                                icon={Droplet}
                                title="Lava y Escobilla"
                                desc="Recipientes donde almacenas agua, tápalos herméticamente."
                            />
                            <PreventionItem
                                icon={Trash2}
                                title="Elimina Inservibles"
                                desc="Llantas, botellas o latas que puedan acumular agua de lluvia."
                            />
                            <PreventionItem
                                icon={Home}
                                title="Cambia el Agua"
                                desc="De los bebederos de mascotas diariamente y floreros por arena húmeda."
                            />
                            <PreventionItem
                                icon={Shield}
                                title="Protégete"
                                desc="Usa repelente, ropa de manga larga y mosquiteros al dormir."
                            />
                        </div>
                    </div>
                </div>

                {/* Warning Signs - Red Banner */}
                <div className="bg-red-600 rounded-2xl p-8 md:p-12 text-white shadow-lg">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                                <AlertTriangle className="w-8 h-8 text-yellow-400" />
                                Signos de Alarma
                            </h2>
                            <p className="text-red-100 text-lg mb-6">
                                Si tú o un familiar presenta alguno de estos síntomas, acude <strong>INMEDIATAMENTE</strong> por Emergencia:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-yellow-400" /> Dolor abdominal intenso y continuo</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-yellow-400" /> Vómitos persistentes</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-yellow-400" /> Sangrado de mucosas (encías, nariz)</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-yellow-400" /> Somnolencia o irritabilidad</li>
                            </ul>
                        </div>
                        <div className="shrink-0 text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                            <Thermometer className="w-12 h-12 mx-auto mb-3 text-white" />
                            <p className="font-bold text-xl mb-4">No te automediques</p>
                            <Link
                                href="/emergencia"
                                className="inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                            >
                                Ir a Emergencia
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function DiseaseCard({ title, color, titleColor, icon: Icon, symptoms, warning }: any) {
    return (
        <div className={`rounded-xl border p-6 ${color} transition-transform hover:-translate-y-1 duration-300`}>
            <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-white/50 ${titleColor}`}>
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className={`text-2xl font-bold ${titleColor}`}>{title}</h3>
            </div>
            <ul className="space-y-3 mb-6">
                {symptoms.map((symptom: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-60 shrink-0`} />
                        <span className="text-sm font-medium">{symptom}</span>
                    </li>
                ))}
            </ul>
            <div className="flex items-start gap-2 text-xs font-bold text-gray-500 bg-white/60 p-3 rounded-lg">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                {warning}
            </div>
        </div>
    );
}

function PreventionItem({ icon: Icon, title, desc }: any) {
    return (
        <div className="text-center group">
            <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
                {desc}
            </p>
        </div>
    );
}
