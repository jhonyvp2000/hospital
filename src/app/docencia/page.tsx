'use client';

import React, { useState } from 'react';
import { GraduationCap, BookOpen, Microscope, FileText, CheckCircle, Download, ExternalLink, ChevronRight, Users, Award } from 'lucide-react';
import Link from 'next/link';

export default function DocenciaPage() {
    const [activeTab, setActiveTab] = useState<'internado' | 'residentado' | 'investigacion'>('internado');

    const requirements = [
        "Carta de Presentación de la Universidad",
        "DNI vigente (copia simple)",
        "Seguro de Salud Activo (SIS o EsSalud)",
        "Carnet de Vacunación (Hepatitis B, Tétanos, COVID-19)",
        "Certificado de Salud Física y Mental",
        "Foto tamaño carnet con uniforme",
        "Constancia de Tercio Superior (Opcional)"
    ];

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-16 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20"></div>
                <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full mb-6 border border-blue-400/30">
                            <Award className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm font-medium">Sede Docente Acreditada</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Formando el Futuro de la Salud
                        </h1>
                        <p className="text-xl text-blue-100 font-light mb-8 max-w-xl">
                            Comprometidos con la excelencia académica y la formación ética de la próxima generación de profesionales de la salud.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button onClick={() => setActiveTab('internado')} className="bg-white text-hospital-blue font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
                                <Users className="w-5 h-5" /> Soy Estudiante
                            </button>
                            <button onClick={() => setActiveTab('residentado')} className="bg-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors border border-blue-500 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5" /> Soy Médico
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto max-w-6xl px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">

                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap border-b border-gray-100">
                        <button
                            onClick={() => setActiveTab('internado')}
                            className={`flex-1 py-6 px-4 text-center font-bold text-lg transition-colors border-b-4 flex items-center justify-center gap-2 ${activeTab === 'internado' ? 'border-hospital-blue text-hospital-blue bg-blue-50/50' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            <BookOpen className="w-5 h-5" /> Internado (Pregrado)
                        </button>
                        <button
                            onClick={() => setActiveTab('residentado')}
                            className={`flex-1 py-6 px-4 text-center font-bold text-lg transition-colors border-b-4 flex items-center justify-center gap-2 ${activeTab === 'residentado' ? 'border-hospital-blue text-hospital-blue bg-blue-50/50' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            <GraduationCap className="w-5 h-5" /> Residentado (Postgrado)
                        </button>
                        <button
                            onClick={() => setActiveTab('investigacion')}
                            className={`flex-1 py-6 px-4 text-center font-bold text-lg transition-colors border-b-4 flex items-center justify-center gap-2 ${activeTab === 'investigacion' ? 'border-hospital-blue text-hospital-blue bg-blue-50/50' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            <Microscope className="w-5 h-5" /> Investigación
                        </button>
                    </div>

                    {/* Content Area */}
                    <div className="p-8 md:p-12 min-h-[400px]">

                        {/* INTERNADO TAB */}
                        {activeTab === 'internado' && (
                            <div className="animate-fadeIn space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Requisitos de Admisión</h2>
                                        <p className="text-gray-600 mb-6">
                                            Para realizar tus prácticas pre-profesionales en nuestra institución, debes presentar tu carpeta completa en la Unidad de Apoyo a la Docencia e Investigación (UADI).
                                        </p>
                                        <ul className="space-y-3">
                                            {requirements.map((req, index) => (
                                                <li key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg group hover:bg-blue-50 transition-colors">
                                                    <div className="mt-0.5 w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-hospital-blue group-hover:bg-hospital-blue flex items-center justify-center transition-all">
                                                        <CheckCircle className="w-3 h-3 text-white opacity-0 group-hover:opacity-100" />
                                                    </div>
                                                    <span className="text-gray-700 font-medium">{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-8 rounded-xl h-fit">
                                        <h3 className="font-bold text-hospital-blue text-xl mb-4">Carreras Aceptadas</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                <span className="font-semibold text-gray-800">Medicina Humana</span>
                                            </div>
                                            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                <span className="font-semibold text-gray-800">Enfermería</span>
                                            </div>
                                            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                <span className="font-semibold text-gray-800">Obstetricia</span>
                                            </div>
                                            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                <span className="font-semibold text-gray-800">Tecnología Médica</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* RESIDENTADO TAB */}
                        {activeTab === 'residentado' && (
                            <div className="animate-fadeIn space-y-8">
                                <div className="bg-hospital-blue/5 border border-hospital-blue/10 rounded-xl p-8 mb-8">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white p-3 rounded-lg shadow-sm text-hospital-blue">
                                            <GraduationCap className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Proceso de Admisión CONAREME</h2>
                                            <p className="text-gray-700 leading-relaxed">
                                                La adjudicación de plazas para el Residentado Médico se realiza exclusivamente a través del Concurso Nacional de Admisión organizado por el <strong>Consejo Nacional de Residentado Médico (CONAREME)</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                            <div className="w-1 h-6 bg-hospital-blue rounded-full"></div>
                                            Especialidades Ofertadas
                                        </h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            {['Cirugía General', 'Pediatría', 'Ginecología y Obstetricia', 'Medicina Interna', 'Anestesiología', 'Traumatología'].map((esp) => (
                                                <div key={esp} className="bg-gray-50 px-4 py-3 rounded-lg text-gray-700 font-medium border border-gray-100">
                                                    {esp}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl p-6">
                                        <h3 className="font-bold text-gray-800 mb-4">Enlaces de Interés</h3>
                                        <div className="space-y-3">
                                            <a href="https://www.conareme.org.pe/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all group">
                                                <span className="font-medium text-gray-700 group-hover:text-hospital-blue">Web Oficial CONAREME</span>
                                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-hospital-blue" />
                                            </a>
                                            <a href="#" className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all group">
                                                <span className="font-medium text-gray-700 group-hover:text-hospital-blue">Cronograma Nacional 2026</span>
                                                <Download className="w-4 h-4 text-gray-400 group-hover:text-hospital-blue" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* INVESTIGACION TAB */}
                        {activeTab === 'investigacion' && (
                            <div className="animate-fadeIn space-y-8">
                                <div className="text-center max-w-2xl mx-auto mb-12">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Investigación e Innovación</h2>
                                    <p className="text-gray-600">
                                        Fomentamos la producción científica respetando los principios éticos fundamentales.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="border border-gray-200 rounded-xl p-6 hover:border-hospital-blue transition-colors group">
                                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-hospital-blue mb-4 group-hover:bg-hospital-blue group-hover:text-white transition-colors">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Comité de Ética</h3>
                                        <p className="text-gray-600 mb-4">
                                            Encargado de revisar y aprobar los protocolos de investigación para garantizar la protección de los derechos de los participantes.
                                        </p>
                                        <button className="text-hospital-blue font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                            Ver Requisitos <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="border border-gray-200 rounded-xl p-6 hover:border-hospital-blue transition-colors group">
                                        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                            <BookOpen className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Biblioteca Virtual</h3>
                                        <p className="text-gray-600 mb-4">
                                            Acceso a bases de datos científicas y repositorio institucional para personal asistencial y administrativo.
                                        </p>
                                        <button className="text-hospital-blue font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                            Acceder <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Footer of the Card - Downloads Area */}
                    <div className="bg-gray-50 border-t border-gray-100 p-8">
                        <h4 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                            <Download className="w-5 h-5 text-hospital-light" />
                            Descargas y Documentos
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <a href="#" className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all">
                                <FileText className="w-8 h-8 text-red-500" />
                                <div>
                                    <div className="font-bold text-gray-800 text-sm">Reglamento de Internado.pdf</div>
                                    <div className="text-xs text-gray-500">2.4 MB</div>
                                </div>
                            </a>
                            <a href="#" className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all">
                                <FileText className="w-8 h-8 text-blue-500" />
                                <div>
                                    <div className="font-bold text-gray-800 text-sm">Manual de Bioseguridad.pdf</div>
                                    <div className="text-xs text-gray-500">1.8 MB</div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
