"use client";

import React from 'react';
import { FileText, Download, CheckCircle, Search, Filter } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function PortalResultadosPage() {
    // Mock Data (In real app, fetch using user.id)
    const MOCK_RESULTS = [
        { id: 1, type: "LABORATORIO", name: "Hemograma Completo", date: "05 Feb 2026", doctor: "Dr. Carlos Torres", status: "Listo" },
        { id: 2, type: "RAYOS X", name: "Radiografía de Tórax (F/P)", date: "02 Feb 2026", doctor: "Dra. Ana Vargas", status: "Listo" },
        { id: 3, type: "LABORATORIO", name: "Perfil Lipídico", date: "15 Ene 2026", doctor: "Dr. Ricardo Silva", status: "Listo" },
        { id: 4, type: "LABORATORIO", name: "Examen Completo de Orina", date: "15 Ene 2026", doctor: "Dr. Ricardo Silva", status: "Listo" },
        { id: 5, type: "ECOGRAFÍA", name: "Ecografía Abdominal", date: "10 Dic 2025", doctor: "Dra. Elena Quispe", status: "Listo" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Resultados de Exámenes</h1>
                    <p className="text-gray-500">Historial de pruebas de laboratorio e imágenes.</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2 shadow-sm">
                        <Filter className="w-4 h-4" /> Filtrar
                    </button>
                    <button className="bg-hospital-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 shadow-md flex items-center gap-2">
                        <Search className="w-4 h-4" /> Buscar
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="divide-y divide-gray-100">
                    {MOCK_RESULTS.map((result) => (
                        <div key={result.id} className="p-4 md:p-6 hover:bg-blue-50/30 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-lg flex-shrink-0 ${result.type === 'LABORATORIO' ? 'bg-purple-100 text-purple-600' :
                                        result.type === 'RAYOS X' ? 'bg-orange-100 text-orange-600' :
                                            'bg-blue-100 text-blue-600'
                                    }`}>
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">{result.name}</h4>
                                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-gray-500">
                                        <span className="font-medium text-gray-700">{result.date}</span>
                                        <span>• {result.doctor}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 w-full md:w-auto pl-14 md:pl-0 justify-between md:justify-end">
                                <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    <CheckCircle className="w-3 h-3" /> {result.status}
                                </div>

                                <button className="flex items-center gap-2 text-hospital-blue hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors text-sm font-bold">
                                    <Download className="w-4 h-4" />
                                    <span className="hidden md:inline">Descargar</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
