"use client";

import React from 'react';
import {
    Building, FileText, PiggyBank, HardHat, Users,
    ShoppingCart, Calendar, Search, Eye, BookOpen,
    ArrowRight, Globe
} from 'lucide-react';
import Link from 'next/link';

export default function TransparenciaPage() {

    // Rubros del Portal de Transparencia Estándar (PTE)
    const RUBROS = [
        {
            title: "Datos Generales",
            icon: Building,
            description: "Directorio, Marco Legal y normas emitidas.",
            color: "bg-blue-600",
            href: "https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=18792&id_tema=1&ver="
        },
        {
            title: "Planeamiento y Organización",
            icon: FileText,
            description: "ROF, MOF, Organigrama y Planes Operativos (POI).",
            color: "bg-emerald-600",
            href: "#"
        },
        {
            title: "Presupuesto",
            icon: PiggyBank,
            description: "Presupuesto anual (PIA/PIM) y ejecución del gasto.",
            color: "bg-amber-500",
            href: "#"
        },
        {
            title: "Proyectos de Inversión",
            icon: HardHat,
            description: "Cartera de proyectos y avances de obras públicas.",
            color: "bg-orange-600",
            href: "#"
        },
        {
            title: "Personal",
            icon: Users,
            description: "Relación de personal Nombrado, CAS y dietas.",
            color: "bg-purple-600",
            href: "#"
        },
        {
            title: "Contrataciones",
            icon: ShoppingCart,
            description: "Órdenes de Compra, Servicio y procesos de selección.",
            color: "bg-cyan-600",
            href: "#"
        },
        {
            title: "Actividades Oficiales",
            icon: Calendar,
            description: "Agenda de la Dirección y comunicados oficiales.",
            color: "bg-indigo-600",
            href: "https://visitas.servicios.gob.pe/agenda/main-agenda-pte.php?ruc=20494013453"
        },
        {
            title: "Acceso a la Información",
            icon: Search,
            description: "Solicite información pública de manera virtual.",
            color: "bg-rose-600",
            href: "#"
        },
        {
            title: "Registro de Visitas",
            icon: Eye,
            description: "Registro de visitas a funcionarios públicos.",
            color: "bg-teal-600",
            href: "https://visitas.servicios.gob.pe/" // Official link usually used
        },
        {
            title: "Normas Emitidas",
            icon: BookOpen,
            description: "Resoluciones Directorales y administrativa.",
            color: "bg-slate-600",
            href: "#"
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header PTE Official Style */}
            <section className="bg-red-700 text-white pt-16 pb-24 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Globe className="w-64 h-64" />
                </div>
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded uppercase tracking-widest mb-2 inline-block">Portal Oficial</span>
                            <h1 className="text-3xl md:text-5xl font-bold mb-2">Transparencia Estándar</h1>
                            <p className="opacity-90 max-w-xl text-lg font-light">
                                Acceda a la información pública del Hospital II-2 Tarapoto conforme a la Ley N° 27806.
                            </p>
                        </div>

                        {/* Search Bar Simulation */}
                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm w-full md:w-auto">
                            <label className="text-xs font-semibold uppercase tracking-wide opacity-80 mb-2 block">Búsqueda Rápida</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Buscar documentos, resoluciones..."
                                    className="px-4 py-2 rounded-lg text-gray-800 w-full md:w-64 focus:outline-none"
                                />
                                <button className="bg-white text-red-700 p-2 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                                    <Search className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rubros Grid */}
            <div className="container mx-auto max-w-6xl px-4 -mt-16 z-20 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {/* Access Information - Primary Call to Action */}
                    <div className="col-span-1 md:col-span-2 bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col justify-between hover:shadow-xl transition-shadow relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                        <div>
                            <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600 mb-4">
                                <Search className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Solicitud de Acceso a la Información</h3>
                            <p className="text-gray-500 text-sm mb-6 max-w-md">
                                ¿No encuentra lo que busca? Puede presentar una solicitud virtual de acceso a la información pública. Atendemos en un plazo máximo de 10 días hábiles.
                            </p>
                        </div>
                        <a href="https://www.transparencia.gob.pe/reportes_directos/pep_transparencia_acceso_informacion.aspx?id_entidad=18792&id_tema=49&cod_rueep=0&ver=" target="_blank" rel="noopener noreferrer" className="flex items-center w-fit gap-2 text-rose-600 font-bold hover:gap-3 transition-all">
                            Presentar Solicitud <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Standard Rubros */}
                    {RUBROS.filter(r => r.title !== "Acceso a la Información").map((rubro, idx) => (
                        <Link
                            href={rubro.href}
                            key={idx}
                            className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:-translate-y-1 hover:shadow-lg transition-all group"
                        >
                            <div className={`w-10 h-10 ${rubro.color} text-white rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                                <rubro.icon className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">{rubro.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                {rubro.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Footer Disclaimer */}
            <div className="container mx-auto max-w-6xl px-4 mt-12">
                <div className="border-t border-gray-200 pt-8 text-center">
                    <p className="text-sm text-gray-400">
                        Responsable del Portal de Transparencia: <strong>Oficina de Estadística e Informática</strong><br />
                        Actualizado al: {new Date().toLocaleDateString('es-PE', { month: 'long', year: 'numeric' })}
                    </p>
                </div>
            </div>
        </main>
    );
}
