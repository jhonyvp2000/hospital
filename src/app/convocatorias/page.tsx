"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    Briefcase, Search, FileSignature,
    Users, HardHat, FileSpreadsheet,
    ChevronRight, Calendar, MapPin, CheckCircle,
    Clock, ArrowRight, Bell, FileText
} from 'lucide-react';

interface PublicJob {
    id: string;
    title: string;
    code: string;
    regime: string;
    department: string;
    vacancies: string;
    status: string;
    endDate: string | null;
}

export default function ConvocatoriasPage() {
    const [jobs, setJobs] = useState<PublicJob[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                // Using a public endpoint that we will create now
                const res = await fetch('/api/jobs');
                if (res.ok) {
                    const data = await res.json();
                    setJobs(data);
                }
            } catch (error) {
                console.error("Error fetching jobs", error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">

            {/* Hero Section */}
            <section className="bg-blue-900 text-white pt-20 pb-24 px-4 relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 bg-blue-950/50 z-10" />
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none z-0">
                    <Briefcase size={400} className="transform translate-x-32 translate-y-32" />
                </div>

                <div className="container mx-auto max-w-6xl relative z-20 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/30 border border-blue-400/30 text-blue-100 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase mb-6 backdrop-blur-sm">
                        Oportunidades Laborales
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Únete a Nuestro Equipo</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        Descubre las oportunidades y procesos de selección vigentes.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto bg-white p-2 rounded-2xl flex items-center shadow-2xl">
                        <div className="pl-4 text-gray-400">
                            <Search size={24} />
                        </div>
                        <input
                            type="text"
                            placeholder="Buscar por cargo, especialidad o código de convocatoria..."
                            className="flex-1 bg-transparent py-4 px-4 text-gray-800 focus:outline-none text-lg"
                        />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-colors">
                            Buscar
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto max-w-6xl px-4 -mt-10 relative z-30">

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {/* CAS */}
                    <Link href="#cas" className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all group flex flex-col h-full">
                        <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                            <FileSignature size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Régimen CAS</h3>
                        <p className="text-gray-500 text-sm flex-1">Procesos de selección bajo el régimen del D.L. 1057 (Contrato Administrativo de Servicios).</p>
                        <div className="mt-4 flex items-center text-indigo-600 font-medium group-hover:gap-2 transition-all text-sm">
                            Ver convocatorias <ArrowRight size={16} className="ml-1" />
                        </div>
                    </Link>

                    {/* 276 */}
                    <Link href="#276" className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all group flex flex-col h-full">
                        <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                            <Users size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Régimen 276</h3>
                        <p className="text-gray-500 text-sm flex-1">Concursos públicos para nombramiento e ingreso a la carrera administrativa estatal.</p>
                        <div className="mt-4 flex items-center text-cyan-600 font-medium group-hover:gap-2 transition-all text-sm">
                            Ver convocatorias <ArrowRight size={16} className="ml-1" />
                        </div>
                    </Link>

                    {/* Terceros */}
                    <Link href="#terceros" className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all group flex flex-col h-full">
                        <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                            <HardHat size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Terceros / Locadores</h3>
                        <p className="text-gray-500 text-sm flex-1">Requerimiento de servicios específicos y locación de servicios por terceros.</p>
                        <div className="mt-4 flex items-center text-amber-600 font-medium group-hover:gap-2 transition-all text-sm">
                            Ver procesos <ArrowRight size={16} className="ml-1" />
                        </div>
                    </Link>

                    {/* Internos */}
                    <Link href="#internos" className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all group flex flex-col h-full">
                        <div className="w-14 h-14 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-600 group-hover:text-white transition-colors duration-300">
                            <FileSpreadsheet size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Procesos Internos</h3>
                        <p className="text-gray-500 text-sm flex-1">Concursos de ascensos, desplazamientos y cambio de grupo ocupacional.</p>
                        <div className="mt-4 flex items-center text-slate-600 font-medium group-hover:gap-2 transition-all text-sm">
                            Acceso restringido <ArrowRight size={16} className="ml-1" />
                        </div>
                    </Link>
                </div>

                {/* Alertas */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
                    <div className="flex gap-4 items-center md:items-start text-center md:text-left">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0">
                            <Bell size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-blue-900 mb-1">¡No te pierdas ninguna oportunidad!</h4>
                            <p className="text-blue-800/80">Suscríbete a nuestras alertas y recibe en tu correo las nuevas convocatorias publicadas.</p>
                        </div>
                    </div>
                    <div className="flex w-full md:w-auto gap-2">
                        <input type="email" placeholder="Tu correo electrónico" className="flex-1 md:w-64 px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
                            Suscribirme
                        </button>
                    </div>
                </div>

                {/* Convocatorias Vigentes */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-50/50">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Convocatorias Vigentes</h2>
                            <p className="text-gray-500">Procesos de selección actualmente en fase de inscripción o postulación.</p>
                        </div>
                        <div className="flex gap-2">
                            <select className="bg-white border border-gray-200 text-gray-700 py-2 px-4 rounded-lg outline-none text-sm font-medium">
                                <option>Todos los regímenes</option>
                                <option>CAS</option>
                                <option>DL 276</option>
                                <option>Terceros</option>
                            </select>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {loading ? (
                            <div className="p-12 text-center text-gray-500 flex flex-col items-center">
                                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mb-4"></div>
                                <p>Cargando convocatorias...</p>
                            </div>
                        ) : jobs.length === 0 ? (
                            <div className="p-12 text-center text-gray-500">
                                <Briefcase size={48} className="mx-auto text-gray-300 mb-4" />
                                <p className="text-lg">No hay convocatorias vigentes en este momento.</p>
                            </div>
                        ) : (
                            jobs.map((item) => (
                                <div key={item.id} className="p-6 md:p-8 hover:bg-gray-50/50 transition-colors flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center group">

                                    <div className="flex-1 w-full">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === 'PUBLISHED' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                                                }`}>
                                                {item.status === 'PUBLISHED' ? 'Vigente' : 'En Evaluación'}
                                            </span>
                                            <span className="text-gray-500 font-mono text-sm font-semibold">{item.code}</span>
                                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-bold">{item.regime}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                                            {item.title}
                                        </h3>

                                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
                                            <span className="flex items-center gap-1.5"><MapPin size={16} /> {item.department || 'Dirección General'}</span>
                                            <span className="flex items-center gap-1.5"><Users size={16} /> {item.vacancies} Plaza(s)</span>
                                            {item.endDate && (
                                                <span className="flex items-center gap-1.5 text-red-500 font-medium"><Clock size={16} /> Cierre: {new Date(item.endDate).toLocaleDateString('es-PE')}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row gap-3">
                                        <Link href={`/convocatorias/${item.id}`} className="flex-1 sm:flex-none bg-blue-600 text-white hover:bg-blue-700 px-8 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                                            Ver Detalles y Postular <ChevronRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
                        <Link href="#historico" className="text-blue-600 font-bold hover:text-blue-800 inline-flex items-center gap-2 transition-colors">
                            Ver Resultados y Convocatorias Anteriores <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

            </main>
        </div>
    );
}
