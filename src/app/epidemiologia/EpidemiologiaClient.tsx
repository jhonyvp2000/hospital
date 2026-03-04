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

    // Static Indicators for UI (we aren't tracking these exactly in PG yet, keeping beautiful visual)
    const topIndicators = [
        { id: 1, title: 'Consultas Externas Anuales', value: '45,210', trend: '+15.2%', trendUp: true, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
        { id: 2, title: 'Atenciones en Emergencia Anual', value: '18,820', trend: '-2.1%', trendUp: false, icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50' },
        { id: 3, title: 'Intervenciones Quirúrgicas', value: '4,845', trend: '+12.4%', trendUp: true, icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { id: 4, title: 'Ocupación Hospitalaria Media', value: '82%', trend: '+3.0%', trendUp: true, icon: Stethoscope, color: 'text-purple-600', bg: 'bg-purple-50' },
    ];

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
                        {/* 1. Hospital Indicators KPIs (Estáticos decorativos) */}
                        <div className="mb-16">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                                <h2 className="text-2xl font-bold text-gray-800">Cifras Globales del Centro</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {topIndicators.map((ind) => (
                                    <div key={ind.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${ind.bg} ${ind.color}`}>
                                                <ind.icon size={24} />
                                            </div>
                                            <div className={`flex items-center gap-1 text-sm font-bold px-2 py-1 rounded-lg ${ind.trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                                                {ind.trend}
                                            </div>
                                        </div>
                                        <h3 className="text-gray-500 text-sm font-medium mb-1">{ind.title}</h3>
                                        <p className="text-3xl font-bold text-gray-800">{ind.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Reports Layout with Left Sidebar */}
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Sidebar Menu */}
                            <div className="w-full md:w-64 shrink-0 space-y-2">
                                <button
                                    onClick={() => setIndSubTab('rendimiento')}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${indSubTab === 'rendimiento' ? 'bg-amber-50 text-amber-700 border border-amber-200 shadow-sm' : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'}`}
                                >
                                    <span className="flex items-center gap-2"><Activity size={18} /> Rendimiento Médico</span>
                                    <ChevronRight size={16} className={indSubTab === 'rendimiento' ? 'text-amber-500' : 'text-gray-300'} />
                                </button>
                                <button
                                    onClick={() => setIndSubTab('analisis')}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${indSubTab === 'analisis' ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm' : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'}`}
                                >
                                    <span className="flex items-center gap-2"><BarChart3 size={18} /> Análisis de Indicadores</span>
                                    <ChevronRight size={16} className={indSubTab === 'analisis' ? 'text-indigo-500' : 'text-gray-300'} />
                                </button>
                            </div>

                            {/* Reports Content Based on Selection */}
                            <div className="flex-1 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 min-h-[400px]">
                                {indSubTab === 'rendimiento' && (
                                    <div className="space-y-6 animate-in fade-in duration-300">
                                        <div className="flex items-center gap-3 border-b border-gray-100 pb-6 mb-6">
                                            <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                                                <Activity size={24} />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold text-gray-800">Rendimiento Hora Médico</h2>
                                                <p className="text-gray-500">Productividad y análisis de horas médicas en Consulta Externa.</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                            {data.indicadores.rendimiento.map((item: any) => (
                                                <div key={item.id} className="bg-amber-50/30 p-5 rounded-2xl border border-amber-100 hover:shadow-md hover:border-amber-300 transition-all group flex flex-col h-full">
                                                    <div className="flex-1">
                                                        <span className="text-xs font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded inline-block mb-3">
                                                            {item.date}
                                                        </span>
                                                        <h4 className="font-bold text-gray-800 mb-4 leading-tight">
                                                            {item.title}
                                                        </h4>
                                                    </div>
                                                    <a href={item.url} target="_blank" rel="noreferrer" className="w-full flex justify-center items-center gap-2 bg-amber-600 text-white font-medium py-2 rounded-xl hover:bg-amber-700 transition mt-auto">
                                                        <Download size={16} /> Descargar PDF
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                        {data.indicadores.rendimiento.length === 0 && (
                                            <div className="py-12 text-center text-gray-400 border-2 border-dashed border-gray-100 rounded-2xl">
                                                No hay indicadores de rendimiento registrados aún.
                                            </div>
                                        )}
                                    </div>
                                )}

                                {indSubTab === 'analisis' && (
                                    <div className="space-y-6 animate-in fade-in duration-300">
                                        <div className="flex items-center gap-3 border-b border-gray-100 pb-6 mb-6">
                                            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                                                <BarChart3 size={24} />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold text-gray-800">Análisis de Indicadores</h2>
                                                <p className="text-gray-500">Informes analíticos sobre el desempeño y calidad hospitalaria.</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                            {data.indicadores.analisis.map((item: any) => (
                                                <div key={item.id} className="bg-indigo-50/30 p-5 rounded-2xl border border-indigo-100 hover:shadow-md hover:border-indigo-300 transition-all group flex flex-col h-full">
                                                    <div className="flex-1">
                                                        <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-1 rounded inline-block mb-3">
                                                            {item.date}
                                                        </span>
                                                        <h4 className="font-bold text-gray-800 mb-4 leading-tight">
                                                            {item.title}
                                                        </h4>
                                                    </div>
                                                    <a href={item.url} target="_blank" rel="noreferrer" className="w-full flex justify-center items-center gap-2 bg-indigo-600 text-white font-medium py-2 rounded-xl hover:bg-indigo-700 transition mt-auto">
                                                        <Download size={16} /> Descargar PDF
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                        {data.indicadores.analisis.length === 0 && (
                                            <div className="py-12 text-center text-gray-400 border-2 border-dashed border-gray-100 rounded-2xl">
                                                No hay análisis de indicadores registrados aún.
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* --- PESTAÑA 2: REPOSITORIO DE BOLETINES --- */}
                {mainTab === 'boletines' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col md:flex-row gap-8">
                        {/* Sidebar Menu */}
                        <div className="w-full md:w-64 shrink-0 space-y-2">
                            <button
                                onClick={() => setBolSubTab('epidemiologicos')}
                                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${bolSubTab === 'epidemiologicos' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm' : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'}`}
                            >
                                <span className="flex items-center gap-2"><Activity size={18} /> Epidemiológicos</span>
                                <ChevronRight size={16} className={bolSubTab === 'epidemiologicos' ? 'text-emerald-500' : 'text-gray-300'} />
                            </button>
                            <button
                                onClick={() => setBolSubTab('iaas')}
                                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${bolSubTab === 'iaas' ? 'bg-amber-50 text-amber-700 border border-amber-200 shadow-sm' : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'}`}
                            >
                                <span className="flex items-center gap-2"><FileWarning size={18} /> Infecciones IAAS</span>
                                <ChevronRight size={16} className={bolSubTab === 'iaas' ? 'text-amber-500' : 'text-gray-300'} />
                            </button>
                            <button
                                onClick={() => setBolSubTab('estadisticos')}
                                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${bolSubTab === 'estadisticos' ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm' : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'}`}
                            >
                                <span className="flex items-center gap-2"><BarChart3 size={18} /> Estadísticos</span>
                                <ChevronRight size={16} className={bolSubTab === 'estadisticos' ? 'text-blue-500' : 'text-gray-300'} />
                            </button>
                        </div>

                        {/* Boletines Content Based on Selection */}
                        <div className="flex-1 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 min-h-[500px]">

                            {bolSubTab === 'epidemiologicos' && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    <div className="flex items-center gap-3 border-b border-gray-100 pb-6 mb-6">
                                        <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                                            <Activity size={24} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800">Boletines Epidemiológicos</h2>
                                            <p className="text-gray-500">Documentos oficiales publicables sobre tendencias sanitarias.</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {data.boletines.epidemiologicos.map((bulletin: any) => (
                                            <a key={bulletin.id} href={bulletin.url} target="_blank" rel="noreferrer" className="flex items-center p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 hover:bg-emerald-100 transition-colors group">
                                                <div className="bg-emerald-200/50 p-3 rounded-lg mr-4 group-hover:bg-emerald-200 transition">
                                                    <FileText className="text-emerald-700" size={20} />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-bold text-emerald-900 leading-tight mb-1">{bulletin.title}</p>
                                                    <p className="text-xs text-emerald-700">{bulletin.date}</p>
                                                </div>
                                                <ExternalLink className="text-emerald-400 group-hover:text-emerald-600 transition" size={18} />
                                            </a>
                                        ))}
                                    </div>
                                    {data.boletines.epidemiologicos.length === 0 && (
                                        <div className="py-12 text-center text-gray-400 border-2 border-dashed border-gray-100 rounded-2xl">
                                            No hay boletines para mostrar.
                                        </div>
                                    )}
                                </div>
                            )}

                            {bolSubTab === 'iaas' && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    <div className="flex items-center gap-3 border-b border-gray-100 pb-6 mb-6">
                                        <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                                            <FileWarning size={24} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800">Boletines IAAS</h2>
                                            <p className="text-gray-500">Reportes de vigilancia de IAAS (Infecciones Intrahospitalarias).</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {data.boletines.iaas.map((bulletin: any) => (
                                            <a key={bulletin.id} href={bulletin.url} target="_blank" rel="noreferrer" className="flex items-center p-4 bg-amber-50/50 rounded-2xl border border-amber-100 hover:bg-amber-100 transition-colors group">
                                                <div className="bg-amber-200/50 p-3 rounded-lg mr-4 group-hover:bg-amber-200 transition">
                                                    <FileText className="text-amber-700" size={20} />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-bold text-amber-900 leading-tight mb-1">{bulletin.title}</p>
                                                    <p className="text-xs text-amber-700">{bulletin.date}</p>
                                                </div>
                                                <ExternalLink className="text-amber-400 group-hover:text-amber-600 transition" size={18} />
                                            </a>
                                        ))}
                                    </div>
                                    {data.boletines.iaas.length === 0 && (
                                        <div className="py-12 text-center text-gray-400 border-2 border-dashed border-gray-100 rounded-2xl">
                                            No hay boletines para mostrar.
                                        </div>
                                    )}
                                </div>
                            )}

                            {bolSubTab === 'estadisticos' && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    <div className="flex items-center gap-3 border-b border-gray-100 pb-6 mb-6">
                                        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                                            <BarChart3 size={24} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800">Boletines Estadísticos</h2>
                                            <p className="text-gray-500">Resúmenes de analítica mensual, trimestral o anual.</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {data.boletines.estadisticos.map((bulletin: any) => (
                                            <a key={bulletin.id} href={bulletin.url} target="_blank" rel="noreferrer" className="flex items-center p-4 bg-blue-50/50 rounded-2xl border border-blue-100 hover:bg-blue-100 transition-colors group">
                                                <div className="bg-blue-200/50 p-3 rounded-lg mr-4 group-hover:bg-blue-200 transition">
                                                    <FileText className="text-blue-700" size={20} />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-bold text-blue-900 leading-tight mb-1">{bulletin.title}</p>
                                                    <p className="text-xs text-blue-700">{bulletin.date}</p>
                                                </div>
                                                <ExternalLink className="text-blue-400 group-hover:text-blue-600 transition" size={18} />
                                            </a>
                                        ))}
                                    </div>
                                    {data.boletines.estadisticos.length === 0 && (
                                        <div className="py-12 text-center text-gray-400 border-2 border-dashed border-gray-100 rounded-2xl">
                                            No hay boletines para mostrar.
                                        </div>
                                    )}
                                </div>
                            )}

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
