"use client";

import React from 'react';
import { Download, FileText, ChevronRight, Share2 } from 'lucide-react';


export default function OrganigramaPage() {
    return (
        <main className="min-h-screen bg-hospital-bg pb-20">
            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-16 px-4">
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Estructura Organizacional</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
                        Conoce cómo está organizado nuestro hospital para brindarte la mejor atención.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-7xl px-4 -mt-8 relative z-10">

                {/* Intro Card & Download Actions */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Organigrama Estructural</h2>
                        <p className="text-gray-600">
                            Representación gráfica de la estructura orgánica del Hospital II-2 Tarapoto, aprobada mediante Resolución Directoral vigente.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <button className="flex items-center justify-center gap-2 bg-hospital-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg">
                            <Download className="w-5 h-5" />
                            Descargar PDF (3MB)
                        </button>
                        <button className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-bold hover:border-hospital-blue hover:text-hospital-blue transition-all">
                            <FileText className="w-5 h-5" />
                            Ver ROF
                        </button>
                    </div>
                </div>



                {/* Additional Info / Legend */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h3 className="font-bold text-hospital-blue mb-2">Órganos de Dirección</h3>
                        <p className="text-sm text-gray-700">Responsables de establecer las políticas institucionales y dirigir la gestión del hospital.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                        <h3 className="font-bold text-green-700 mb-2">Órganos de Línea</h3>
                        <p className="text-sm text-gray-700">Departamentos y Servicios médicos encargados de la atención directa a los pacientes.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="font-bold text-gray-700 mb-2">Órganos de Apoyo</h3>
                        <p className="text-sm text-gray-700">Unidades encargadas de proveer los recursos necesarios para el funcionamiento institucional.</p>
                    </div>
                </div>

            </div>
        </main>
    );
}



