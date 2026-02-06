"use client";

import React from 'react';
import { Calendar, Stethoscope, FileText, ChevronRight, Activity } from 'lucide-react';

export default function HistoriaClinicaPage() {
    // Mock Timeline Data
    const EVENTS = [
        { id: 1, date: "05 Feb 2026", type: "CONSULTA EXTERNA", specialty: "Medicina General", doctor: "Dr. Carlos Miguel Torres", diagnosis: "J00 - Rinofaringitis Aguda", notes: "Paciente presenta congestión nasal y febrícula." },
        { id: 2, date: "15 Ene 2026", type: "LABORATORIO", specialty: "Laboratorio Clínico", doctor: "Lic. Tec. Med.", diagnosis: "Orden de Chequeo General", notes: "Hemograma, Glucosa, Colesterol." },
        { id: 3, date: "10 Dic 2025", type: "EMERGENCIA", specialty: "Traumatología", doctor: "Dr. Jorge Mendoza", diagnosis: "S93.4 - Esguince del tobillo", notes: "Caída de nivel. Se inmoviliza y receta analgésicos." },
        { id: 4, date: "20 Nov 2025", type: "CONSULTA EXTERNA", specialty: "Oftalmología", doctor: "Dra. Carmen Rosa Díaz", diagnosis: "H52.1 - Miopía", notes: "Control anual. Se actualiza medida de lentes." },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FileText className="w-8 h-8 text-hospital-blue" />
                    Historia Clínica Digital
                </h1>
                <p className="text-gray-500">Cronología de sus atenciones médicas y diagnósticos.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                <div className="relative border-l-2 border-gray-200 ml-3 space-y-12">
                    {EVENTS.map((event) => (
                        <div key={event.id} className="relative pl-8 md:pl-12 group">
                            {/* Dot */}
                            <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-white border-4 border-hospital-blue group-hover:scale-125 transition-transform shadow-sm"></div>

                            {/* Date Label */}
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">
                                {event.date}
                            </span>

                            {/* Card Content */}
                            <div className="bg-gray-50 hover:bg-white border boundary-transparent hover:border-blue-100 p-5 rounded-xl transition-all hover:shadow-md cursor-default">
                                <div className="flex flex-col md:flex-row justify-between md:items-center mb-3">
                                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                        {event.type === 'CONSULTA EXTERNA' && <Stethoscope className="w-4 h-4 text-green-500" />}
                                        {event.type === 'EMERGENCIA' && <Activity className="w-4 h-4 text-red-500" />}
                                        {event.type === 'LABORATORIO' && <FileText className="w-4 h-4 text-purple-500" />}
                                        {event.specialty}
                                    </h3>
                                    <span className={`
                                        text-xs font-bold px-2 py-1 rounded w-fit mt-2 md:mt-0
                                        ${event.type === 'EMERGENCIA' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-hospital-blue'}
                                    `}>
                                        {event.type}
                                    </span>
                                </div>

                                <div className="text-sm text-gray-600 space-y-2">
                                    <p><span className="font-semibold text-gray-700">Médico:</span> {event.doctor}</p>
                                    <p><span className="font-semibold text-gray-700">Diagnóstico:</span> {event.diagnosis}</p>
                                    <div className="bg-white/50 p-3 rounded border border-gray-200/50 text-gray-500 italic text-sm mt-3">
                                        "{event.notes}"
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="text-hospital-blue font-medium hover:underline text-sm flex items-center justify-center gap-1 mx-auto">
                        Ver atenciones anteriores <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
