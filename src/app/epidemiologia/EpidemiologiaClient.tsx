"use client";

import React, { useState } from 'react';
import {
    Activity, AlertTriangle, BarChart3, ChevronRight,
    Download, FileText, FileWarning, HeartPulse,
    Microscope, Stethoscope, Users, Baby, ExternalLink
} from 'lucide-react';

export default function EpidemiologiaClient({ data }: any) {
    const [mainTab, setMainTab] = useState('indicadores'); // 'indicadores', 'boletines', 'situacional'
    const [indSubTab, setIndSubTab] = useState('rendimiento'); // 'rendimiento', 'analisis'
    const [bolSubTab, setBolSubTab] = useState('epidemiologicos'); // 'epidemiologicos', 'iaas', 'estadisticos'
    const [salaSubTab, setSalaSubTab] = useState('metaxenicas'); // 'metaxenicas', 'materno', 'respiratorio'

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="bg-blue-900 text-white pt-12 pb-40 lg:pb-32 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-950/50 z-10" />
                <div className="absolute right-0 top-0 opacity-10 pointer-events-none z-0 transform translate-x-32 -translate-y-16">
                    <BarChart3 size={400} />
                </div>

                <div className="container mx-auto max-w-6xl relative z-20">
                    <div className="mt-8">
                        <div className="inline-flex items-center gap-2 bg-blue-500/30 border border-blue-400/30 text-blue-100 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase mb-6 backdrop-blur-sm">
                            <Activity size={16} /> Oficina de Epidemiología
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                            <div className="max-w-3xl">
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    Centro de Inteligencia Sanitaria e Indicadores Públicos
                                </h1>
                                <p className="text-xl text-blue-100 leading-relaxed font-light">
                                    Repositorio oficial transparente de documentos, análisis y boletines para ciudadanos y profesionales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto max-w-6xl px-4 -mt-32 lg:-mt-20 relative z-30">

                {/* Main Tabs Navigation */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mb-12 relative z-40">
                    <button
                        onClick={() => setMainTab('indicadores')}
                        className={`w-full md:w-auto py-4 px-6 md:px-8 rounded-full font-bold text-sm md:text-base transition-all duration-300 flex justify-center items-center gap-3 shadow-lg hover:-translate-y-1 ${mainTab === 'indicadores'
                            ? 'bg-white text-blue-800 ring-4 ring-white/20 shadow-blue-900/20 scale-105'
                            : 'bg-blue-900/60 text-blue-100 hover:bg-blue-800/80 backdrop-blur-md border border-blue-700/50 hover:text-white'
                            }`}
                    >
                        <Activity size={20} className={mainTab === 'indicadores' ? 'text-blue-600' : 'text-blue-300'} />
                        Indicadores de Gestión
                    </button>

                    <button
                        onClick={() => setMainTab('boletines')}
                        className={`w-full md:w-auto py-4 px-6 md:px-8 rounded-full font-bold text-sm md:text-base transition-all duration-300 flex justify-center items-center gap-3 shadow-lg hover:-translate-y-1 ${mainTab === 'boletines'
                            ? 'bg-white text-blue-800 ring-4 ring-white/20 shadow-blue-900/20 scale-105'
                            : 'bg-blue-900/60 text-blue-100 hover:bg-blue-800/80 backdrop-blur-md border border-blue-700/50 hover:text-white'
                            }`}
                    >
                        <FileText size={20} className={mainTab === 'boletines' ? 'text-blue-600' : 'text-blue-300'} />
                        Repositorio de Boletines
                    </button>

                    <button
                        onClick={() => setMainTab('situacional')}
                        className={`w-full md:w-auto py-4 px-6 md:px-8 rounded-full font-bold text-sm md:text-base transition-all duration-300 flex justify-center items-center gap-3 shadow-lg hover:-translate-y-1 ${mainTab === 'situacional'
                            ? 'bg-white text-blue-800 ring-4 ring-white/20 shadow-blue-900/20 scale-105'
                            : 'bg-blue-900/60 text-blue-100 hover:bg-blue-800/80 backdrop-blur-md border border-blue-700/50 hover:text-white'
                            }`}
                    >
                        <BarChart3 size={20} className={mainTab === 'situacional' ? 'text-blue-600' : 'text-blue-300'} />
                        Sala Situacional
                    </button>
                </div>

                {/* --- PESTAÑA 1: INDICADORES HOSPITALARIOS --- */}
                {mainTab === 'indicadores' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-slate-900 text-white p-8 md:p-10 border-b border-gray-100 relative overflow-hidden">
                                <div className="absolute right-0 top-0 text-white/5 transform translate-x-10 -translate-y-10">
                                    <Activity size={250} />
                                </div>
                                <h2 className="text-3xl font-bold mb-2 relative z-10">Indicadores de Gestión</h2>
                                <p className="text-slate-400 relative z-10 max-w-xl">
                                    Informes y métricas sobre el rendimiento, productividad y calidad hospitalaria.
                                    Seleccione una categoría para consultar los documentos registrados.
                                </p>
                            </div>

                            {/* Tab Navigation */}
                            <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50/50 scrollbar-hide">
                                <button
                                    onClick={() => setIndSubTab('rendimiento')}
                                    className={`flex items-center gap-2 px-8 py-5 font-bold text-sm whitespace-nowrap transition-colors border-b-2 ${indSubTab === 'rendimiento' ? 'border-amber-600 text-amber-700 bg-white' : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100'}`}
                                >
                                    <Activity size={18} /> Rendimiento Médico
                                </button>
                                <button
                                    onClick={() => setIndSubTab('analisis')}
                                    className={`flex items-center gap-2 px-8 py-5 font-bold text-sm whitespace-nowrap transition-colors border-b-2 ${indSubTab === 'analisis' ? 'border-indigo-600 text-indigo-700 bg-white' : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100'}`}
                                >
                                    <BarChart3 size={18} /> Análisis de Indicadores
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="p-8 bg-gray-50/30 min-h-[400px]">
                                {indSubTab === 'rendimiento' && (
                                    <div className="animate-in fade-in duration-300">
                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                            {data.indicadores.rendimiento.map((item: any) => (
                                                <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className="block p-5 bg-white rounded-2xl shadow-sm border border-amber-100 hover:-translate-y-1 hover:shadow-md transition-all group">
                                                    <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                                        <Download size={18} />
                                                    </div>
                                                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                                    <p className="text-xs font-semibold text-amber-600 bg-amber-50 inline-block px-2 py-0.5 rounded uppercase">{item.date}</p>
                                                </a>
                                            ))}
                                            {data.indicadores.rendimiento.length === 0 && (
                                                <p className="col-span-full py-8 text-center text-gray-400">Sin indicadores de rendimiento aún.</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {indSubTab === 'analisis' && (
                                    <div className="animate-in fade-in duration-300">
                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                            {data.indicadores.analisis.map((item: any) => (
                                                <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className="block p-5 bg-white rounded-2xl shadow-sm border border-indigo-100 hover:-translate-y-1 hover:shadow-md transition-all group">
                                                    <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                                        <Download size={18} />
                                                    </div>
                                                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                                    <p className="text-xs font-semibold text-indigo-600 bg-indigo-50 inline-block px-2 py-0.5 rounded uppercase">{item.date}</p>
                                                </a>
                                            ))}
                                            {data.indicadores.analisis.length === 0 && (
                                                <p className="col-span-full py-8 text-center text-gray-400">Sin análisis de indicadores aún.</p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* --- PESTAÑA 2: REPOSITORIO DE BOLETINES --- */}
                {mainTab === 'boletines' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-slate-900 text-white p-8 md:p-10 border-b border-gray-100 relative overflow-hidden">
                                <div className="absolute right-0 top-0 text-white/5 transform translate-x-10 -translate-y-10">
                                    <FileText size={250} />
                                </div>
                                <h2 className="text-3xl font-bold mb-2 relative z-10">Repositorio de Boletines</h2>
                                <p className="text-slate-400 relative z-10 max-w-xl">
                                    Documentos e informes oficiales descargables sobre tendencias sanitarias, IAAS y estadísticas.
                                </p>
                            </div>

                            {/* Tab Navigation */}
                            <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50/50 scrollbar-hide">
                                <button
                                    onClick={() => setBolSubTab('epidemiologicos')}
                                    className={`flex items-center gap-2 px-8 py-5 font-bold text-sm whitespace-nowrap transition-colors border-b-2 ${bolSubTab === 'epidemiologicos' ? 'border-emerald-600 text-emerald-700 bg-white' : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100'}`}
                                >
                                    <Activity size={18} /> Epidemiológicos
                                </button>
                                <button
                                    onClick={() => setBolSubTab('iaas')}
                                    className={`flex items-center gap-2 px-8 py-5 font-bold text-sm whitespace-nowrap transition-colors border-b-2 ${bolSubTab === 'iaas' ? 'border-amber-600 text-amber-700 bg-white' : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100'}`}
                                >
                                    <FileWarning size={18} /> Infecciones IAAS
                                </button>
                                <button
                                    onClick={() => setBolSubTab('estadisticos')}
                                    className={`flex items-center gap-2 px-8 py-5 font-bold text-sm whitespace-nowrap transition-colors border-b-2 ${bolSubTab === 'estadisticos' ? 'border-blue-600 text-blue-700 bg-white' : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100'}`}
                                >
                                    <BarChart3 size={18} /> Estadísticos
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="p-8 bg-gray-50/30 min-h-[400px]">
                                {bolSubTab === 'epidemiologicos' && (
                                    <div className="animate-in fade-in duration-300">
                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                            {data.boletines.epidemiologicos.map((bulletin: any) => (
                                                <a key={bulletin.id} href={bulletin.url} target="_blank" rel="noreferrer" className="block p-5 bg-white rounded-2xl shadow-sm border border-emerald-100 hover:-translate-y-1 hover:shadow-md transition-all group">
                                                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                                        <FileText size={18} />
                                                    </div>
                                                    <h4 className="font-bold text-gray-900 mb-1">{bulletin.title}</h4>
                                                    <p className="text-xs font-semibold text-emerald-600 bg-emerald-50 inline-block px-2 py-0.5 rounded uppercase">{bulletin.date}</p>
                                                </a>
                                            ))}
                                            {data.boletines.epidemiologicos.length === 0 && (
                                                <p className="col-span-full py-8 text-center text-gray-400">Sin boletines epidemiológicos aún.</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {bolSubTab === 'iaas' && (
                                    <div className="animate-in fade-in duration-300">
                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                            {data.boletines.iaas.map((bulletin: any) => (
                                                <a key={bulletin.id} href={bulletin.url} target="_blank" rel="noreferrer" className="block p-5 bg-white rounded-2xl shadow-sm border border-amber-100 hover:-translate-y-1 hover:shadow-md transition-all group">
                                                    <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                                        <FileText size={18} />
                                                    </div>
                                                    <h4 className="font-bold text-gray-900 mb-1">{bulletin.title}</h4>
                                                    <p className="text-xs font-semibold text-amber-600 bg-amber-50 inline-block px-2 py-0.5 rounded uppercase">{bulletin.date}</p>
                                                </a>
                                            ))}
                                            {data.boletines.iaas.length === 0 && (
                                                <p className="col-span-full py-8 text-center text-gray-400">Sin boletines IAAS aún.</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {bolSubTab === 'estadisticos' && (
                                    <div className="animate-in fade-in duration-300">
                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                            {data.boletines.estadisticos.map((bulletin: any) => (
                                                <a key={bulletin.id} href={bulletin.url} target="_blank" rel="noreferrer" className="block p-5 bg-white rounded-2xl shadow-sm border border-blue-100 hover:-translate-y-1 hover:shadow-md transition-all group">
                                                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                        <FileText size={18} />
                                                    </div>
                                                    <h4 className="font-bold text-gray-900 mb-1">{bulletin.title}</h4>
                                                    <p className="text-xs font-semibold text-blue-600 bg-blue-50 inline-block px-2 py-0.5 rounded uppercase">{bulletin.date}</p>
                                                </a>
                                            ))}
                                            {data.boletines.estadisticos.length === 0 && (
                                                <p className="col-span-full py-8 text-center text-gray-400">Sin boletines estadísticos aún.</p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* --- PESTAÑA 3: SALA SITUACIONAL VIRTUAL --- */}
                {mainTab === 'situacional' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-slate-900 text-white p-8 md:p-10 border-b border-gray-100 relative overflow-hidden">
                                <div className="absolute right-0 top-0 text-white/5 transform translate-x-10 -translate-y-10">
                                    <BarChart3 size={250} />
                                </div>
                                <h2 className="text-3xl font-bold mb-2 relative z-10">Sala Situacional Virtual</h2>
                                <p className="text-slate-400 relative z-10 max-w-xl">
                                    Repositorio semanal de presentaciones (PPT/PDF) de las distintas salas operativas.
                                    Haciendo click en cada ficha operativa se descargará el material consolidado para esa semana.
                                </p>
                            </div>

                            {/* Tab Navigation */}
                            <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50/50 scrollbar-hide">
                                <button
                                    onClick={() => setSalaSubTab('metaxenicas')}
                                    className={`flex items-center gap-2 px-8 py-5 font-bold text-sm whitespace-nowrap transition-colors border-b-2 ${salaSubTab === 'metaxenicas' ? 'border-blue-600 text-blue-700 bg-white' : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100'}`}
                                >
                                    <Microscope size={18} /> Metaxénicas
                                </button>
                                <button
                                    onClick={() => setSalaSubTab('materno')}
                                    className={`flex items-center gap-2 px-8 py-5 font-bold text-sm whitespace-nowrap transition-colors border-b-2 ${salaSubTab === 'materno' ? 'border-pink-600 text-pink-700 bg-white' : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100'}`}
                                >
                                    <Baby size={18} /> Materno Neonatal
                                </button>
                                <button
                                    onClick={() => setSalaSubTab('respiratorio')}
                                    className={`flex items-center gap-2 px-8 py-5 font-bold text-sm whitespace-nowrap transition-colors border-b-2 ${salaSubTab === 'respiratorio' ? 'border-teal-600 text-teal-700 bg-white' : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100'}`}
                                >
                                    <HeartPulse size={18} /> V. Respiratoria
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="p-8 bg-gray-50/30">
                                {salaSubTab === 'metaxenicas' && (
                                    <div className="animate-in fade-in duration-300">
                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                            {data.salaSituacional.metaxenicas.map((item: any) => (
                                                <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className="block p-5 bg-white rounded-2xl shadow-sm border border-blue-100 hover:-translate-y-1 hover:shadow-md transition-all group">
                                                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                        <Download size={18} />
                                                    </div>
                                                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                                    <p className="text-xs font-semibold text-blue-600 bg-blue-50 inline-block px-2 py-0.5 rounded uppercase">{item.date}</p>
                                                </a>
                                            ))}
                                            {data.salaSituacional.metaxenicas.length === 0 && (
                                                <p className="col-span-full py-8 text-center text-gray-400">Sin presentaciones semanales aún.</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {salaSubTab === 'materno' && (
                                    <div className="animate-in fade-in duration-300">
                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                            {data.salaSituacional.materno.map((item: any) => (
                                                <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className="block p-5 bg-white rounded-2xl shadow-sm border border-pink-100 hover:-translate-y-1 hover:shadow-md transition-all group">
                                                    <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                                        <Download size={18} />
                                                    </div>
                                                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                                    <p className="text-xs font-semibold text-pink-600 bg-pink-50 inline-block px-2 py-0.5 rounded uppercase">{item.date}</p>
                                                </a>
                                            ))}
                                            {data.salaSituacional.materno.length === 0 && (
                                                <p className="col-span-full py-8 text-center text-gray-400">Sin presentaciones semanales aún.</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {salaSubTab === 'respiratorio' && (
                                    <div className="animate-in fade-in duration-300">
                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                            {data.salaSituacional.respiratorio.map((item: any) => (
                                                <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className="block p-5 bg-white rounded-2xl shadow-sm border border-teal-100 hover:-translate-y-1 hover:shadow-md transition-all group">
                                                    <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                                        <Download size={18} />
                                                    </div>
                                                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                                    <p className="text-xs font-semibold text-teal-600 bg-teal-50 inline-block px-2 py-0.5 rounded uppercase">{item.date}</p>
                                                </a>
                                            ))}
                                            {data.salaSituacional.respiratorio.length === 0 && (
                                                <p className="col-span-full py-8 text-center text-gray-400">Sin presentaciones semanales aún.</p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

            </main>
        </main>
    );
}
