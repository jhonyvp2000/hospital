'use client';

import React from 'react';
import { Activity, AlertTriangle, ArrowDown, ArrowUp, BarChart3, Download, FileText, Info, Users, Thermometer, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

// Mock Data for KPI Cards
const KPIS = [
    {
        title: "Atenciones Totales",
        value: "14,520",
        change: "+5.2%",
        trend: "up",
        period: "Último Mes",
        icon: Users,
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Casos de Dengue",
        value: "42",
        change: "-12%",
        trend: "down",
        period: "Semana Epidemiológica 24",
        icon: Thermometer,
        color: "bg-orange-50 text-orange-600"
    },
    {
        title: "Emergencias",
        value: "2,105",
        change: "+1.8%",
        trend: "up",
        period: "Último Mes",
        icon: Activity,
        color: "bg-red-50 text-red-600"
    },
    {
        title: "Hospitalizaciones",
        value: "380",
        change: "0%",
        trend: "neutral",
        period: "Último Mes",
        icon: ShieldAlert,
        color: "bg-purple-50 text-purple-600"
    }
];

// Mock Data for Alerts
const ALERTS = [
    {
        id: 1,
        type: "high", // high, medium, low
        title: "Alerta Roja: Brote de Dengue",
        description: "Se reporta incremento de casos en distritos de la Banda de Shilcayo y Tarapoto. Reforzar medidas preventivas.",
        date: "Hace 2 días"
    },
    {
        id: 2,
        type: "medium",
        title: "Vigilancia de IRAs en niños",
        description: "Aumento estacional de Infecciones Respiratorias Agudas en menores de 5 años debido al descenso de temperatura.",
        date: "Hace 1 semana"
    }
];

// Mock Data for Documents
const DOCUMENTS = [
    { title: "Boletín Epidemiológico SE 24-2024", date: "15 Jun 2024", size: "2.4 MB" },
    { title: "Reporte Mensual de Producción - Mayo 2024", date: "05 Jun 2024", size: "1.8 MB" },
    { title: "Sala Situacional Dengue - Semana 23", date: "08 Jun 2024", size: "3.1 MB" },
    { title: "Informe Técnico de Mortalidad Materna", date: "01 Jun 2024", size: "4.5 MB" }
];

export default function SalaSituacionalPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <section className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <BarChart3 className="w-64 h-64" />
                </div>
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        <Activity className="w-4 h-4 text-green-400" /> Vigilancia en Salud Pública
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Sala Situacional de Salud</h1>
                    <p className="text-slate-300 text-lg max-w-2xl font-light">
                        Monitoreo continuo de indicadores sanitarios y epidemiológicos para la toma de decisiones y transparencia con la comunidad.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 -mt-10 relative z-20">

                {/* KPI Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {KPIS.map((kpi, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-lg ${kpi.color}`}>
                                    <kpi.icon className="w-6 h-6" />
                                </div>
                                <span className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${kpi.trend === 'up' ? 'bg-green-100 text-green-700' :
                                        kpi.trend === 'down' ? 'bg-red-100 text-red-700' :
                                            'bg-gray-100 text-gray-600'
                                    }`}>
                                    {kpi.trend === 'up' ? <ArrowUp className="w-3 h-3 mr-1" /> :
                                        kpi.trend === 'down' ? <ArrowDown className="w-3 h-3 mr-1" /> : null}
                                    {kpi.change}
                                </span>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-1">{kpi.value}</h3>
                            <p className="text-gray-500 text-sm font-medium">{kpi.title}</p>
                            <p className="text-xs text-gray-400 mt-2">{kpi.period}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

                    {/* Alerts Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h3 className="font-bold text-gray-800 text-lg mb-6 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-orange-500" />
                                Alertas Epidemiológicas
                            </h3>
                            <div className="space-y-4">
                                {ALERTS.map((alert) => (
                                    <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${alert.type === 'high' ? 'bg-red-50 border-red-500' : 'bg-amber-50 border-amber-500'
                                        }`}>
                                        <div className="flex justify-between items-start mb-2">
                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${alert.type === 'high' ? 'bg-red-200 text-red-800' : 'bg-amber-200 text-amber-800'
                                                }`}>
                                                {alert.type === 'high' ? 'Crítica' : 'Preventiva'}
                                            </span>
                                            <span className="text-xs text-gray-500">{alert.date}</span>
                                        </div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1">{alert.title}</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            {alert.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-6 py-2 text-sm font-bold text-hospital-blue hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100">
                                Ver Historial de Alertas
                            </button>
                        </div>

                        {/* Quick Info Box */}
                        <div className="bg-gradient-to-br from-hospital-blue to-blue-700 text-white rounded-xl p-6 shadow-lg">
                            <h3 className="font-bold text-lg mb-2">¿Cómo prevenir el Dengue?</h3>
                            <p className="text-sm text-blue-100 mb-4 opacity-90">
                                Elimina criaderos de zancudos, tapa recipientes con agua y usa repelente.
                            </p>
                            <Link href="/programas/dengue" className="inline-block bg-white text-hospital-blue text-xs font-bold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                Ver Guía Completa
                            </Link>
                        </div>
                    </div>

                    {/* Charts & Analysis Column */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                                <div>
                                    <h3 className="font-bold text-gray-800 text-xl">Tendencia de Casos Dengue 2024</h3>
                                    <p className="text-sm text-gray-500">Comparativo semanal de casos confirmados y probables.</p>
                                </div>
                                <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-100">
                                    <option>Últimas 12 Semanas</option>
                                    <option>Año 2024</option>
                                    <option>Año 2023</option>
                                </select>
                            </div>

                            {/* Simple CSS Chart Simulation */}
                            <div className="h-64 flex items-end justify-between gap-2 md:gap-4 pb-4 border-b border-gray-100 relative">
                                {/* Grid lines background simulation could be added here */}
                                {[35, 42, 55, 68, 72, 60, 52, 48, 45, 42, 38, 30].map((h, i) => (
                                    <div key={i} className="w-full bg-blue-100 hover:bg-hospital-blue rounded-t transition-colors relative group cursor-pointer" style={{ height: `${h}%` }}>
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                                            Semana {13 + i}: {h} casos
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between text-xs text-gray-400 mt-2 px-1">
                                <span>SE 13</span>
                                <span>SE 24</span>
                            </div>

                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-gray-700 text-sm mb-2">Distritos con Mayor Incidencia</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs"><span>Tarapoto</span> <span className="font-bold">45%</span></div>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5"><div className="bg-red-500 h-1.5 rounded-full" style={{ width: '45%' }}></div></div>

                                        <div className="flex justify-between text-xs"><span>Banda de Shilcayo</span> <span className="font-bold">30%</span></div>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5"><div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '30%' }}></div></div>

                                        <div className="flex justify-between text-xs"><span>Morales</span> <span className="font-bold">15%</span></div>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5"><div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '15%' }}></div></div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-gray-700 text-sm mb-2">Grupos de Edad Afectados</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-xs text-gray-600">
                                            <div className="w-3 h-3 rounded-full bg-blue-500"></div> Niños (0-11)
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-600">
                                            <div className="w-3 h-3 rounded-full bg-teal-500"></div> Adultos Jovenes (18-29)
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-600">
                                            <div className="w-3 h-3 rounded-full bg-purple-500"></div> Adultos Mayores (60+)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Documents / Bulletins */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <FileText className="w-6 h-6 text-hospital-blue" />
                        Boletines y Reportes Técnicos
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100 text-gray-500 text-sm uppercase tracking-wider">
                                    <th className="py-4 font-semibold">Nombre del Documento</th>
                                    <th className="py-4 font-semibold">Fecha de Emisión</th>
                                    <th className="py-4 font-semibold">Tamaño</th>
                                    <th className="py-4 font-semibold text-right">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {DOCUMENTS.map((doc, idx) => (
                                    <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50 transition-colors group">
                                        <td className="py-4 font-medium text-gray-800 group-hover:text-hospital-blue transition-colors flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                                                <span className="text-[10px] font-bold">PDF</span>
                                            </div>
                                            {doc.title}
                                        </td>
                                        <td className="py-4 text-gray-500 text-sm">{doc.date}</td>
                                        <td className="py-4 text-gray-500 text-sm">{doc.size}</td>
                                        <td className="py-4 text-right">
                                            <button className="text-hospital-blue hover:text-blue-700 font-bold text-sm flex items-center justify-end gap-1 ml-auto">
                                                <Download className="w-4 h-4" /> Descargar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 text-center">
                        <button className="text-sm font-bold text-gray-500 hover:text-hospital-blue transition-colors">
                            Ver todos los documentos anteriores &rarr;
                        </button>
                    </div>
                </div>

            </div>
        </main>
    );
}
