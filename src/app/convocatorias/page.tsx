"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    Briefcase, Search, FileSignature,
    Users, HardHat, FileSpreadsheet,
    MapPin, Clock, ArrowRight, Bell, Building, Milestone
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

const REGIMES = [
    { id: 'Todos', label: 'Todos', icon: Briefcase, color: 'text-hospital-blue', borderColor: 'border-hospital-blue' },
    { id: '1057', label: 'Régimen CAS', icon: FileSignature, color: 'text-blue-600', borderColor: 'border-blue-600' },
    { id: '276', label: 'Régimen 276', icon: Users, color: 'text-cyan-600', borderColor: 'border-cyan-600' },
    { id: '728', label: 'Régimen 728', icon: Building, color: 'text-emerald-600', borderColor: 'border-emerald-600' },
    { id: '30057', label: 'Servicio Civil', icon: Milestone, color: 'text-violet-600', borderColor: 'border-violet-600' },
    { id: 'Múltiple', label: 'Locadores', icon: HardHat, color: 'text-amber-600', borderColor: 'border-amber-600' },
    { id: 'Proceso Interno', label: 'Procesos Internos', icon: FileSpreadsheet, color: 'text-slate-600', borderColor: 'border-slate-600' },
];

export default function ConvocatoriasPage() {
    const [jobs, setJobs] = useState<PublicJob[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('Todos');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchJobs = async () => {
            try {
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

    const filteredJobs = jobs.filter(j => {
        const matchesRegime = activeTab === 'Todos' || j.regime.includes(activeTab) || (activeTab === 'Múltiple' && j.regime.includes('Tercero'));
        const matchesSearch = searchTerm === '' ||
            j.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            j.code.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesRegime && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-slate-50 py-10">
            <div className="container mx-auto max-w-7xl px-4">

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    {/* Header Oscuro Integrado estilo Sala Situacional */}
                    <div className="bg-blue-800 text-white p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-[-10%]">
                            <Briefcase size={350} />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 bg-blue-700/50 border border-blue-400/30 text-blue-50 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-6 backdrop-blur-md">
                                Oportunidades Laborales
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Únete a Nuestro Equipo</h1>
                            <p className="text-lg text-blue-100 max-w-3xl leading-relaxed mb-8 font-light">
                                Descubre las oportunidades y procesos de selección vigentes en nuestra institución.
                                Seleccione un régimen laboral para consultar las convocatorias actuales.
                            </p>

                            {/* Search Bar integrado en Header */}
                            <div className="max-w-xl bg-blue-900/40 backdrop-blur-md p-2 rounded-2xl flex items-center border border-blue-500/30 focus-within:border-blue-400/60 transition-colors">
                                <div className="pl-3 text-blue-200">
                                    <Search size={22} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Buscar por cargo, especialidad o código..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="flex-1 bg-transparent py-2 px-3 text-white placeholder-blue-300 focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Horizontal Tabs List (Los Regímenes unidos al header) */}
                    <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50/50 hide-scrollbar scroll-smooth">
                        {REGIMES.map((regime) => {
                            const Icon = regime.icon;
                            const isActive = activeTab === regime.id;
                            return (
                                <button
                                    key={regime.id}
                                    onClick={() => setActiveTab(regime.id)}
                                    className={`
                                        flex items-center gap-2 px-8 py-5 font-bold text-sm whitespace-nowrap transition-colors border-b-2
                                        ${isActive
                                            ? `bg-white ${regime.borderColor} ${regime.color}`
                                            : 'border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-800'}
                                    `}
                                >
                                    <Icon size={18} className={isActive ? regime.color : 'text-gray-400'} />
                                    {regime.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Area */}
                    <div className="bg-gray-50/30 min-h-[400px]">

                        {/* Header of Content Block */}
                        <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                    Convocatorias Vigentes: {REGIMES.find(r => r.id === activeTab)?.label}
                                </h2>
                                <p className="text-gray-500 mt-1">
                                    Mostrando {filteredJobs.length} registro(s) encontrado(s).
                                </p>
                            </div>
                        </div>

                        {/* Results List */}
                        <div className="divide-y divide-gray-100">
                            {loading ? (
                                <div className="p-16 text-center text-gray-500 flex flex-col items-center bg-white">
                                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-hospital-blue mb-4"></div>
                                    <p>Cargando información del sistema...</p>
                                </div>
                            ) : filteredJobs.length === 0 ? (
                                <div className="p-20 text-center text-gray-500 bg-white">
                                    <Briefcase size={56} className="mx-auto text-gray-300 mb-4" />
                                    <p className="text-xl font-medium text-gray-600">No hay convocatorias vigentes encontradas</p>
                                    <p className="text-gray-400 mt-2">Intente con otro régimen en la parte superior o retire el filtro de búsqueda.</p>
                                </div>
                            ) : (
                                filteredJobs.map((item) => (
                                    <div key={item.id} className="p-6 md:p-8 bg-white hover:bg-slate-50/80 transition-colors flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center group">

                                        <div className="flex-1 w-full">
                                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === 'PUBLISHED' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-amber-100 text-amber-700 border border-amber-200'}`}>
                                                    {item.status === 'PUBLISHED' ? 'Proceso Vigente' : 'En Evaluación'}
                                                </span>
                                                <span className="text-gray-600 font-mono text-xs font-bold bg-gray-100 px-3 py-1 rounded-md border border-gray-200">ID: {item.code}</span>
                                                <span className="text-hospital-blue bg-blue-50 border border-blue-100 px-3 py-1 rounded-md text-xs font-bold">{item.regime}</span>
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-hospital-blue transition-colors leading-tight">
                                                {item.title}
                                            </h3>

                                            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600">
                                                <span className="flex items-center gap-2"><MapPin size={16} className="text-gray-400" /> {item.department || 'Sede Central'}</span>
                                                <span className="flex items-center gap-2"><Users size={16} className="text-gray-400" /> <strong className="text-gray-800">{item.vacancies}</strong> Plaza(s) Disponible(s)</span>
                                                {item.endDate && (
                                                    <span className="flex items-center gap-2 text-red-600 font-medium bg-red-50 border border-red-100 px-3 py-1 rounded-lg">
                                                        <Clock size={16} /> Cierre: {new Date(item.endDate).toLocaleDateString('es-PE')}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-auto shrink-0 mt-4 lg:mt-0">
                                            <Link href={`/convocatorias/${item.id}`} className="block w-full text-center bg-white border-2 border-slate-200 text-slate-700 hover:bg-hospital-blue hover:text-white hover:border-hospital-blue px-8 py-3.5 rounded-xl font-bold transition-all shadow-sm hover:shadow-md">
                                                Ver Bases y Postular
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer actions */}
                        <div className="p-6 bg-slate-50 border-t border-gray-100 text-center flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center justify-center gap-3 text-sm text-gray-500 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                                <Bell className="w-4 h-4 text-hospital-blue fill-current" />
                                <span>Activa las notificaciones en tu correo para nuevas plazas</span>
                            </div>
                            <Link href="#historico" className="text-hospital-blue font-bold hover:underline inline-flex items-center gap-2 transition-colors">
                                Ver Convocatorias Finalizadas <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </main>
    );
}
