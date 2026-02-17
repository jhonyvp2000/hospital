"use client";

import React, { useState } from 'react';
import {
    Activity, TrendingUp, Users, Calendar,
    FileText, Download, Filter, BarChart3,
    PieChart, AlertCircle, CheckCircle, ArrowUpRight, ArrowDownRight
} from 'lucide-react';

export default function IndicadoresPage() {
    const [selectedYear, setSelectedYear] = useState('2024');
    const [selectedCategory, setSelectedCategory] = useState('Todas');

    return (
        <main className="min-h-screen bg-gray-50 pb-20">

            {/* Header Section */}
            <section className="bg-hospital-blue text-white py-12 px-4 shadow-lg">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm border border-blue-400/30 px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                                <Activity className="w-3 h-3" /> Transparencia en Salud
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-2">Indicadores de Gestión</h1>
                            <p className="opacity-90 max-w-2xl font-light">
                                Monitoreo continuo de la producción, calidad y eficiencia hospitalaria para la toma de decisiones informadas.
                            </p>
                        </div>

                        {/* Global Filters */}
                        <div className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm flex flex-col sm:flex-row gap-3">
                            <div>
                                <label className="block text-xs font-bold opacity-80 mb-1">Año</label>
                                <select
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                    className="bg-white text-gray-800 rounded-lg px-4 py-2 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-auto"
                                >
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold opacity-80 mb-1">Categoría</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="bg-white text-gray-800 rounded-lg px-4 py-2 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-auto"
                                >
                                    <option value="Todas">Todas las Categorías</option>
                                    <option value="Producción">Producción Asistencial</option>
                                    <option value="Calidad">Calidad y Seguridad</option>
                                    <option value="Presupuestal">Ejecución Presupuestal</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-7xl px-4 -mt-8 relative z-10">

                {/* KPI Cards (High Level) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <KPICard
                        title="Atenciones Totales"
                        value="45,231"
                        trend="+12%"
                        trendUp={true}
                        period="Ene - Feb 2024"
                        icon={Users}
                        color="blue"
                    />
                    <KPICard
                        title="Satisfacción Usuaria"
                        value="88.5%"
                        trend="+2.1%"
                        trendUp={true}
                        period="Último Trimestre"
                        icon={CheckCircle}
                        color="green"
                    />
                    <KPICard
                        title="Tasa de Cese de Actividades"
                        value="4.2%"
                        trend="-0.5%"
                        trendUp={false} // Good because it went down (context dependent, but visually red/green)
                        inverseTrend={true} // Lower is better
                        period="Promedio Mensual"
                        icon={AlertCircle}
                        color="orange"
                    />
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Filters & Navigation Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Filter className="w-5 h-5 text-hospital-blue" />
                                Explorar Datos
                            </h3>
                            <nav className="space-y-1">
                                <FilterButton active={selectedCategory === 'Todas'} onClick={() => setSelectedCategory('Todas')} label="Resumen General" count={12} />
                                <FilterButton active={selectedCategory === 'Producción'} onClick={() => setSelectedCategory('Producción')} label="Producción Asistencial" count={5} />
                                <FilterButton active={selectedCategory === 'Calidad'} onClick={() => setSelectedCategory('Calidad')} label="Calidad de Atención" count={4} />
                                <FilterButton active={selectedCategory === 'Presupuestal'} onClick={() => setSelectedCategory('Presupuestal')} label="Presupuesto" count={3} />
                            </nav>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h4 className="font-bold text-blue-900 mb-2 text-sm">¿Necesitas datos históricos?</h4>
                            <p className="text-xs text-blue-800 mb-4 opacity-80">
                                Para acceder a reportes anteriores al 2022, visita el repositorio histórico.
                            </p>
                            <button className="text-xs font-bold text-hospital-blue hover:underline flex items-center gap-1">
                                Ir al Repositorio <ArrowUpRight className="w-3 h-3" />
                            </button>
                        </div>
                    </div>

                    {/* Reports List */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-xl font-bold text-gray-800">
                                Reportes Disponibles: {selectedYear}
                            </h2>
                            <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
                                Mostrando: <strong>{selectedCategory}</strong>
                            </span>
                        </div>

                        {/* Report Section: Producción */}
                        {(selectedCategory === 'Todas' || selectedCategory === 'Producción') && (
                            <ReportSection title="Producción Asistencial" icon={BarChart3}>
                                <ReportItem
                                    title="Producción Hospitalaria Mensual - Enero 2024"
                                    desc="Consolidado de consultas externas, emergencias, hospitalizaciones y cirugías."
                                    date="15 Feb 2024"
                                    size="2.4 MB"
                                    format="PDF"
                                />
                                <ReportItem
                                    title="Rendimiento Hora-Médico"
                                    desc="Indicador de productividad por especialidad y servicio."
                                    date="10 Feb 2024"
                                    size="1.8 MB"
                                    format="XLS"
                                />
                            </ReportSection>
                        )}

                        {/* Report Section: Calidad */}
                        {(selectedCategory === 'Todas' || selectedCategory === 'Calidad') && (
                            <ReportSection title="Calidad y Seguridad del Paciente" icon={CheckCircle}>
                                <ReportItem
                                    title="Reporte de Indicadores de Calidad - IV Trimestre 2023"
                                    desc="Tiempos de espera, satisfacción usuaria, infecciones intrahospitalarias."
                                    date="20 Ene 2024"
                                    size="3.1 MB"
                                    format="PDF"
                                />
                                <ReportItem
                                    title="Analisis de Eventos Adversos"
                                    desc="Reporte de seguridad del paciente y gestión de riesgos."
                                    date="15 Ene 2024"
                                    size="1.5 MB"
                                    format="PDF"
                                />
                            </ReportSection>
                        )}

                        {/* Report Section: Presupuesto */}
                        {(selectedCategory === 'Todas' || selectedCategory === 'Presupuestal') && (
                            <ReportSection title="Ejecución Presupuestal" icon={PieChart}>
                                <ReportItem
                                    title="Ejecución de Gasto por Genérica - Enero 2024"
                                    desc="Avance de la ejecución presupuestal comparativa."
                                    date="05 Feb 2024"
                                    size="850 KB"
                                    format="PDF"
                                />
                            </ReportSection>
                        )}

                    </div>
                </div>

            </div>
        </main>
    );
}

// Sub-components

function KPICard({ title, value, trend, trendUp, inverseTrend, period, icon: Icon, color }: any) {
    const colors = {
        blue: { bg: 'bg-white', icon: 'bg-blue-100 text-blue-600', text: 'text-gray-800' },
        green: { bg: 'bg-white', icon: 'bg-green-100 text-green-600', text: 'text-gray-800' },
        orange: { bg: 'bg-white', icon: 'bg-orange-100 text-orange-600', text: 'text-gray-800' },
    };
    // @ts-ignore
    const theme = colors[color];
    const isGood = inverseTrend ? !trendUp : trendUp;

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${theme.icon}`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold ${isGood ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {trendUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {trend}
                </div>
            </div>
            <div className="relative z-10">
                <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
                <p className="text-3xl font-bold text-gray-800 mb-1">{value}</p>
                <p className="text-xs text-gray-400">{period}</p>
            </div>
            {/* Decor */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gray-50 rounded-full z-0 opacity-50"></div>
        </div>
    )
}

function FilterButton({ active, onClick, label, count }: any) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between text-sm px-4 py-3 rounded-lg transition-all ${active ? 'bg-hospital-blue text-white font-bold shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
        >
            <span>{label}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${active ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                {count}
            </span>
        </button>
    )
}

function ReportSection({ title, icon: Icon, children }: any) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                <Icon className="w-5 h-5 text-hospital-blue" />
                <h3 className="font-bold text-gray-800">{title}</h3>
            </div>
            <div className="p-2">
                {children}
            </div>
        </div>
    )
}

function ReportItem({ title, desc, date, size, format }: any) {
    const isPdf = format === 'PDF';
    return (
        <div className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg hover:bg-blue-50/50 transition-colors border-b border-gray-50 last:border-0 border-dashed">
            <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 font-bold text-xs shadow-sm ${isPdf ? 'bg-red-100 text-red-600 border border-red-200' : 'bg-green-100 text-green-600 border border-green-200'}`}>
                    {format}
                </div>
                <div>
                    <h4 className="font-bold text-gray-800 group-hover:text-hospital-blue transition-colors text-sm md:text-base">
                        {title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 mt-1 line-clamp-1">
                        {desc}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                            <Calendar className="w-3 h-3" /> {date}
                        </span>
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                            {size}
                        </span>
                    </div>
                </div>
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm font-bold hover:bg-white hover:border-hospital-blue hover:text-hospital-blue hover:shadow-sm transition-all whitespace-nowrap bg-white md:bg-transparent">
                <Download className="w-4 h-4" />
                Descargar
            </button>
        </div>
    )
}
