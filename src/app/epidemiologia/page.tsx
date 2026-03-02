"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Activity, AlertTriangle, BarChart3, ChevronRight,
    Download, FileText, FileWarning, HeartPulse,
    Microscope, Stethoscope, Users, Baby
} from 'lucide-react';

// Mock Data for Hospital Indicators
const indicators = [
    { id: 1, title: 'Consultas Externas', value: '12,450', trend: '+5.2%', trendUp: true, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 2, title: 'Atenciones en Emergencia', value: '3,820', trend: '-2.1%', trendUp: false, icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50' },
    { id: 3, title: 'Intervenciones Quirúrgicas', value: '845', trend: '+12.4%', trendUp: true, icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { id: 4, title: 'Ocupación Hospitalaria', value: '82%', trend: '+3.0%', trendUp: true, icon: Stethoscope, color: 'text-purple-600', bg: 'bg-purple-50' },
];

// Mock Data for Bulletins
const bulletins = [
    { id: 1, title: 'Boletín Epidemiológico Vol. 45', date: 'Octubre 2024', size: '2.4 MB', week: 'SE 42' },
    { id: 2, title: 'Boletín Epidemiológico Vol. 44', date: 'Septiembre 2024', size: '2.1 MB', week: 'SE 38' },
    { id: 3, title: 'Boletín Epidemiológico Vol. 43', date: 'Agosto 2024', size: '2.8 MB', week: 'SE 34' },
    { id: 4, title: 'Boletín Epidemiológico Vol. 42', date: 'Julio 2024', size: '1.9 MB', week: 'SE 30' },
];

export default function EpidemiologiaPage() {
    const [activeTab, setActiveTab] = useState('dengue');
    const [isCrisisActive, setIsCrisisActive] = useState(false); // Toggle to simulate Crisis Room

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Crisis Banner (Conditional) */}
            {isCrisisActive && (
                <div className="bg-red-600 text-white px-4 py-3 relative z-50 animate-pulse">
                    <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <FileWarning className="w-6 h-6 shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg">SALA DE CRISIS ACTIVA: Alerta Epidemiológica Nacional</h3>
                                <p className="text-red-100 text-sm">Brote inusual de Dengue con signos de alarma en la jurisdicción. Comité Operativo de Emergencias activado.</p>
                            </div>
                        </div>
                        <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap hover:bg-red-50 transition-colors">
                            Ver Reporte de Crisis
                        </button>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="bg-blue-900 text-white pt-12 pb-24 px-4 relative overflow-hidden">
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
                                    Centro de Inteligencia Sanitaria e Indicadores
                                </h1>
                                <p className="text-xl text-blue-100 leading-relaxed font-light">
                                    Monitoreo transparente y en tiempo real de la situación de salud regional, producción hospitalaria y vigilancia epidemiológica.
                                </p>
                            </div>

                            {/* Simulator Toggle for Demo */}
                            <div className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm shrink-0">
                                <p className="text-xs text-blue-200 mb-2 uppercase tracking-wider font-bold">Simulación UI</p>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            className="sr-only"
                                            checked={isCrisisActive}
                                            onChange={() => setIsCrisisActive(!isCrisisActive)}
                                        />
                                        <div className={`block w-10 h-6 rounded-full transition-colors ${isCrisisActive ? 'bg-red-500' : 'bg-blue-950'}`}></div>
                                        <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${isCrisisActive ? 'transform translate-x-4' : ''}`}></div>
                                    </div>
                                    <span className="text-sm font-medium">Activar Sala de Crisis</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto max-w-6xl px-4 -mt-12 relative z-30">

                {/* 1. Hospital Indicators KPIs */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Indicadores Hospitalarios</h2>
                        <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">Actualizado: Marzo 2025</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {indicators.map((ind) => (
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

                {/* 2. Situational Rooms (Tabs) */}
                <div className="mb-16 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-gray-50/50 p-6 md:p-8 border-b border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sala Situacional Virtual</h2>
                        <p className="text-gray-500">Análisis detallado de eventos de importancia en salud pública territorial.</p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex overflow-x-auto border-b border-gray-100 scrollbar-hide">
                        <button
                            onClick={() => setActiveTab('dengue')}
                            className={`flex items-center gap-2 px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === 'dengue' ? 'border-blue-600 text-blue-600 bg-blue-50/50' : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50'}`}
                        >
                            <Microscope size={18} /> Metaxénicas (Dengue)
                        </button>
                        <button
                            onClick={() => setActiveTab('materno')}
                            className={`flex items-center gap-2 px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === 'materno' ? 'border-pink-600 text-pink-600 bg-pink-50/50' : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50'}`}
                        >
                            <Baby size={18} /> Salud Materno Neonatal
                        </button>
                        <button
                            onClick={() => setActiveTab('respiratorio')}
                            className={`flex items-center gap-2 px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === 'respiratorio' ? 'border-teal-600 text-teal-600 bg-teal-50/50' : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50'}`}
                        >
                            <HeartPulse size={18} /> V. Respiratoria (IRAG/COVID)
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6 md:p-8">
                        {activeTab === 'dengue' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-bold text-gray-800">Sala Situacional de Dengue</h3>
                                    <button className="text-blue-600 text-sm font-bold flex items-center hover:underline">
                                        Descargar PPT Completo <Download size={16} className="ml-1" />
                                    </button>
                                </div>
                                <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center border-2 border-dashed border-gray-200">
                                    <p className="text-gray-400 font-medium flex flex-col items-center gap-2">
                                        <BarChart3 size={48} className="text-gray-300" />
                                        <span>[Espacio para Gráficos Recharts / Chart.js de Curva Epidémica]</span>
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                                        <p className="text-amber-800 font-bold mb-1">Casos Confirmados</p>
                                        <p className="text-3xl font-black text-amber-600">342</p>
                                    </div>
                                    <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                                        <p className="text-red-800 font-bold mb-1">Con Signos de Alarma</p>
                                        <p className="text-3xl font-black text-red-600">45</p>
                                    </div>
                                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                                        <p className="text-blue-800 font-bold mb-1">Total Hospitalizados</p>
                                        <p className="text-3xl font-black text-blue-600">12</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'materno' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-20 text-gray-500">
                                <Baby size={48} className="mx-auto text-pink-200 mb-4" />
                                <h3 className="text-xl font-bold text-gray-700 mb-2">Sala Materno Neonatal</h3>
                                <p>Información de morbilidad y mortalidad materna en desarrollo.</p>
                            </div>
                        )}

                        {activeTab === 'respiratorio' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-20 text-gray-500">
                                <HeartPulse size={48} className="mx-auto text-teal-200 mb-4" />
                                <h3 className="text-xl font-bold text-gray-700 mb-2">Vigilancia de Infecciones Respiratorias</h3>
                                <p>Monitoreo de IRAG, COVID-19 e Influenza en desarrollo.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* 3. Epidemiological Bulletins Grid */}
                <div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Boletines Epidemiológicos</h2>
                            <p className="text-gray-500 mt-1">Reportes oficiales descargables por semana epidemiológica (SE).</p>
                        </div>

                        {/* Filters */}
                        <div className="flex gap-3">
                            <select className="bg-white border border-gray-200 text-gray-700 py-2.5 px-4 rounded-xl outline-none text-sm font-medium shadow-sm">
                                <option>Año 2024</option>
                                <option>Año 2023</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {bulletins.map((bulletin) => (
                            <div key={bulletin.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <FileText size={24} />
                                </div>
                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block mb-3">
                                    {bulletin.week}
                                </span>
                                <h4 className="font-bold text-gray-800 mb-1 leading-tight group-hover:text-blue-700 transition-colors">
                                    {bulletin.title}
                                </h4>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-xs text-gray-500">{bulletin.date}</span>
                                    <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors" title="Descargar PDF">
                                        <Download size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <button className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm">
                            Cargar más boletines
                        </button>
                    </div>
                </div>

            </main>
        </main>
    );
}
