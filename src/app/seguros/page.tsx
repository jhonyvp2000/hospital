"use client";

import React from 'react';
import { Shield, ShieldCheck, AlertTriangle, CreditCard, FileText, Ambulance, Info } from 'lucide-react';
import Link from 'next/link';

export default function SegurosPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-16 px-4">
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                        <Shield className="w-10 h-10 md:w-12 md:h-12 text-blue-300" />
                        Cobertura de Seguros
                    </h1>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto font-light">
                        Información sobre los seguros de salud aceptados y convenios vigentes en el Hospital II-2 Tarapoto.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-5xl px-4 -mt-10 relative z-10 space-y-8">

                {/* 1. SIS - HIGHLIGHTED */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 md:p-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <ShieldCheck className="w-8 h-8 text-yellow-300" />
                                    SIS - Seguro Integral de Salud
                                </h2>
                                <p className="opacity-90 mt-1">Nuestra principal cobertura para la población.</p>
                            </div>
                            <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm border border-white/30">
                                Cobertura Gratuita *
                            </span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8 text-gray-700">
                        <div>
                            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-hospital-blue" />
                                ¿Qué cubre?
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Consultas médicas y hospitalización.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Exámenes de laboratorio e imágenes.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Medicamentos e insumos.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Intervenciones quirúrgicas.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-hospital-blue mb-3 text-sm uppercase tracking-wide">Requisitos Indispensables</h3>
                            <ol className="list-decimal list-inside space-y-2 text-sm">
                                <li>Presentar <strong>DNI físico</strong> vigente.</li>
                                <li>Estar <strong>Activo</strong> en la base de datos del SIS.</li>
                                <li className="font-medium bg-white px-2 py-1 rounded inline-block w-full border border-blue-200">
                                    ¡Importante! Traer Hoja de Referencia
                                </li>
                            </ol>
                            <p className="text-xs text-gray-500 mt-2 leading-tight">
                                Para atención especializada (Consultorios), debe venir referido de su Posta o Centro de Salud (Nivel I-4). Por emergencia no requiere referencia.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. CONVENIOS GRID */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* EsSalud */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-hospital-blue mb-4">
                            <Shield className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">EsSalud</h3>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-purple-100 text-purple-700 px-2 py-0.5 rounded">Solo Referencias</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                            Atención bajo convenio de intercambio prestacional para procedimientos específicos no disponibles en su red.
                        </p>
                        <div className="bg-gray-50 p-3 rounded text-xs text-gray-500 border border-gray-100">
                            <strong>Requisito:</strong> Carta de referencia aprobada por EsSalud dirigida a nuestro Hospital.
                        </div>
                    </div>

                    {/* SOAT */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-red-300 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 rounded-bl-full -mr-10 -mt-10"></div>
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4 relative z-10">
                            <Ambulance className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">SOAT / AFOCAT</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Cobertura obligatoria e inmediata para víctimas de accidentes de tránsito (Ley N° 27181).
                        </p>
                        <ul className="text-xs text-gray-500 space-y-1 mb-4">
                            <li className="flex gap-2">✓ Atención de Emergencia.</li>
                            <li className="flex gap-2">✓ Hospitalización y Cirugía.</li>
                            <li className="flex gap-2">✓ Rehabilitación.</li>
                        </ul>
                        <div className="text-xs text-red-600 bg-red-50 p-2 rounded font-medium border border-red-100">
                            Cubrimos al 100% hasta el límite de la póliza (5 UIT).
                        </div>
                    </div>

                    {/* SALUDPOL */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-green-300 transition-colors">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 mb-4">
                            <ShieldCheck className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">SALUDPOL</h3>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">Policía Nacional</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                            Atención al personal policial y familiares mediante Carta de Garantía o en caso de Emergencia.
                        </p>
                        <div className="space-y-2">
                            <div className="bg-gray-50 p-3 rounded text-xs text-gray-500 border border-gray-100">
                                <strong>Regular:</strong> Requiere Carta de Garantía emitida por SALUDPOL.
                            </div>
                            <div className="bg-green-50 p-3 rounded text-xs text-green-700 border border-green-100 font-medium">
                                <strong>Emergencia (Prioridad I):</strong> Cubierta al 100% sin trámite previo (Ley de Emergencia).
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. SIN SEGURO / PARTICULAR */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-xl">
                            <CreditCard className="w-8 h-8 text-blue-300" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2">¿No cuenta con seguro?</h2>
                            <p className="text-gray-300 text-sm max-w-md">
                                Si usted no está afiliado a ningún seguro, puede acceder a nuestros servicios como paciente pagante particular. Consulte nuestros costos transparentes.
                            </p>
                        </div>
                    </div>
                    <Link
                        href="/transparencia/tarifario"
                        className="bg-white text-gray-900 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
                    >
                        <FileText className="w-4 h-4" />
                        Ver Tarifario Institucional
                    </Link>
                </div>

                {/* Disclaimer */}
                <div className="flex gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                    <p className="text-sm text-yellow-800">
                        <strong>Nota Importante:</strong> La cobertura de los seguros está sujeta a la vigencia de la póliza y a la normativa actual.
                        Para verificar si su SIS está activo, visite la web oficial de <a href="http://app.sis.gob.pe/SisConsultaEnLinea/Consulta/frmConsultaEnLinea.aspx" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-yellow-900">SUSALUD</a>.
                    </p>
                </div>

            </div>
        </main>
    );
}
