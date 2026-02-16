"use client";

import React from 'react';
import { Briefcase, FileText, Calendar, CheckCircle, Clock, AlertCircle, ArrowRight } from 'lucide-react';

export default function ConvocatoriasPage() {
    return (
        <main className="min-h-screen bg-hospital-bg pb-20">

            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-16 px-4">
                <div className="container mx-auto max-w-5xl text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm border border-blue-400/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        <Briefcase className="w-4 h-4" /> Trabaja con Nosotros
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">Convocatorias Laborales</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
                        Únete a nuestro equipo. Aquí publicamos todas las oportunidades laborales vigentes bajo los regímenes CAS, 276, 728 y Suplencias.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 -mt-10 relative z-10">

                {/* Avisos Importantes */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl shadow-sm mb-12 flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-yellow-800 text-lg mb-1">Aviso a los Postulantes</h3>
                        <p className="text-yellow-700">
                            Todos los procesos de selección son gratuitos y se rigen estrictamente por el cronograma publicado.
                            La presentación de documentos falsos inhabilitará automáticamente al postulante.
                        </p>
                    </div>
                </div>

                {/* Filtros y Lista (Simulada) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Lista de Convocatorias */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Clock className="w-6 h-6 text-hospital-blue" />
                            Procesos Vigentes
                        </h2>

                        {/* Item 1 */}
                        <ConvocatoriaItem
                            code="CAS-001-2024"
                            title="Contratación de (5) Licenciados en Enfermería para UCI"
                            regime="D.L. 1057 (CAS)"
                            status="Vigente"
                            deadline="Hasta el 20/02/2024"
                        />

                        {/* Item 2 */}
                        <ConvocatoriaItem
                            code="CAS-002-2024"
                            title="Contratación de (2) Médicos Especialistas en Pediatría"
                            regime="D.L. 1057 (CAS)"
                            status="Vigente"
                            deadline="Hasta el 25/02/2024"
                        />

                        {/* Item 3 */}
                        <ConvocatoriaItem
                            code="SUPLENCIA-001"
                            title="Técnico Administrativo para el Área de Logística"
                            regime="D.L. 276 (Suplencia)"
                            status="En Evaluación"
                            deadline="Cerrado el 10/02/2024"
                            isClosed
                        />

                    </div>

                    {/* Sidebar Informativo */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-hospital-blue" />
                                Descargas
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-hospital-blue transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Modelo de CV
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-hospital-blue transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Declaraciones Juradas
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-hospital-blue transition-colors">
                                        <ArrowRight className="w-4 h-4" /> Reglamento CAS
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-blue-900 text-white p-8 rounded-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-2">¿Resultados?</h3>
                                <p className="opacity-80 text-sm mb-4">
                                    Consulte aquí la lista de ganadores y comunicados de los procesos concluidos.
                                </p>
                                <button className="bg-white text-blue-900 px-4 py-2 rounded-lg font-bold text-sm w-full hover:bg-opacity-90 transition-all">
                                    Ver Resultados Anteriores
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}

function ConvocatoriaItem({ code, title, regime, status, deadline, isClosed = false }: any) {
    return (
        <div className={`bg-white p-6 rounded-xl border ${isClosed ? 'border-gray-100 opacity-75' : 'border-l-4 border-l-hospital-blue shadow-md'} transition-all hover:shadow-lg`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                    <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                        {code}
                    </span>
                    <span className="ml-2 text-xs text-gray-500 font-medium">
                        {regime}
                    </span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${isClosed ? 'bg-gray-100 text-gray-500' : 'bg-green-100 text-green-700'}`}>
                    {status}
                </span>
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-2 leading-snug">
                {title}
            </h3>

            <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{deadline}</span>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                <button className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-all ${isClosed ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-hospital-blue text-white hover:bg-opacity-90'}`}>
                    <FileText className="w-4 h-4" />
                    Ver Bases
                </button>
                {!isClosed && (
                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all">
                        <CheckCircle className="w-4 h-4" />
                        Cronograma
                    </button>
                )}
            </div>
        </div>
    )
}
