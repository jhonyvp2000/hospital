"use client";

import React from 'react';
import { Pill, AlertCircle, Clock, Check } from 'lucide-react';

export default function RecetasPage() {
    // Mock Prescriptions
    const RECETAS = [
        {
            id: 1,
            doctor: "Dr. Carlos Miguel Torres",
            specialty: "Medicina General",
            date: "05 Feb 2026",
            status: "VIGENTE",
            meds: [
                { name: "Paracetamol 500mg", indications: "1 tableta cada 8 horas por 3 días", quantity: "10 Tab" },
                { name: "Cetirizina 10mg", indications: "1 tableta cada 24 horas por 5 días", quantity: "5 Tab" }
            ]
        },
        {
            id: 2,
            doctor: "Dr. Jorge Mendoza",
            specialty: "Traumatología",
            date: "10 Dic 2025",
            status: "VENCIDA",
            meds: [
                { name: "Ibuprofeno 400mg", indications: "1 tableta cada 8 horas si hay dolor", quantity: "20 Tab" },
                { name: "Diclofenaco Gel 1%", indications: "Aplicar en zona afectada cada 12 horas", quantity: "1 Tubo" }
            ]
        }
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <Pill className="w-8 h-8 text-green-500" />
                    Mis Recetas Médicas
                </h1>
                <p className="text-gray-500">Medicamentos prescritos e indicaciones.</p>
            </div>

            <div className="grid gap-6">
                {RECETAS.map((receta) => (
                    <div key={receta.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        {/* Header */}
                        <div className="bg-gray-50 px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-100">
                            <div>
                                <h3 className="font-bold text-gray-800">{receta.specialty}</h3>
                                <p className="text-sm text-gray-500">{receta.doctor} • {receta.date}</p>
                            </div>
                            <span className={`
                                px-3 py-1 rounded-full text-xs font-bold border
                                ${receta.status === 'VIGENTE'
                                    ? 'bg-green-50 text-green-700 border-green-200'
                                    : 'bg-gray-100 text-gray-500 border-gray-200'}
                            `}>
                                {receta.status}
                            </span>
                        </div>

                        {/* List */}
                        <div className="p-6">
                            <div className="space-y-4">
                                {receta.meds.map((med, idx) => (
                                    <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 bg-green-100 text-green-600 p-1.5 rounded">
                                                <Pill className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-800">{med.name}</p>
                                                <p className="text-sm text-gray-600 flex items-center gap-1 mt-0.5">
                                                    <Clock className="w-3 h-3" /> {med.indications}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="font-mono font-bold text-gray-500 text-sm mt-2 md:mt-0 ml-10 md:ml-0 bg-gray-100 px-2 py-1 rounded">
                                            Cant: {med.quantity}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 text-sm text-blue-800">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p>
                    Recuerde que para el recojo de medicamentos en Farmacia debe presentar su DNI físico.
                    Las recetas tienen una vigencia de 3 días desde su emisión para medicinas regulares.
                </p>
            </div>
        </div>
    );
}
