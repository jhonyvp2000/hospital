'use client';

import React from 'react';
import { Calendar, FileText, CheckCircle, Clock, AlertCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Mock Data for Indications
const indications = [
    {
        id: 1,
        type: 'exam',
        title: 'Realizar Hemograma Completo',
        doctor: 'Dr. Juan Pérez',
        date: '2023-11-15',
        status: 'pending',
        description: 'Acudir al laboratorio central en ayunas (8 horas).',
        priority: 'high'
    },
    {
        id: 2,
        type: 'appointment',
        title: 'Control de Cardiología',
        doctor: 'Dra. María González',
        date: '2023-11-20',
        status: 'scheduled',
        description: 'Traer resultados de electrocardiograma anterior.',
        priority: 'medium'
    },
    {
        id: 3,
        type: 'pharmacy',
        title: 'Recoger Medicación',
        doctor: 'Farmacia Central',
        date: '2023-11-10',
        status: 'completed',
        description: 'Losartán 50mg - 30 tabletas.',
        priority: 'low'
    }
];

export default function IndicacionesPage() {
    return (
        <div className="space-y-6">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Próximos Pasos</h1>
                <p className="text-gray-600">Aquí encontrarás tus indicaciones médicas, citas pendientes y tareas de salud.</p>
            </header>

            <div className="grid gap-4">
                {indications.map((item) => (
                    <div
                        key={item.id}
                        className={`bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center transition-all hover:shadow-md ${item.status === 'completed' ? 'opacity-75' : ''}`}
                    >
                        {/* Status Icon */}
                        <div className={`p-4 rounded-full shrink-0 ${item.type === 'exam' ? 'bg-blue-50 text-blue-600' :
                                item.type === 'appointment' ? 'bg-violet-50 text-violet-600' :
                                    'bg-green-50 text-green-600'
                            }`}>
                            {item.type === 'exam' && <FileText className="w-6 h-6" />}
                            {item.type === 'appointment' && <Calendar className="w-6 h-6" />}
                            {item.type === 'pharmacy' && <CheckCircle className="w-6 h-6" />}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${item.priority === 'high' ? 'bg-red-100 text-red-700' :
                                        item.priority === 'medium' ? 'bg-amber-100 text-amber-700' :
                                            'bg-gray-100 text-gray-600'
                                    }`}>
                                    {item.priority === 'high' ? 'Prioritario' : item.priority === 'medium' ? 'Pendiente' : 'Completado'}
                                </span>
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {item.date}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                            <p className="text-xs text-gray-500 font-medium">Ordenado por: {item.doctor}</p>
                        </div>

                        {/* Action */}
                        <div className="w-full md:w-auto mt-2 md:mt-0">
                            {item.status !== 'completed' ? (
                                <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-hospital-blue text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors">
                                    Ver Detalles <ArrowRight className="w-4 h-4" />
                                </button>
                            ) : (
                                <span className="w-full md:w-auto flex items-center justify-center gap-2 text-green-600 font-bold text-sm bg-green-50 px-6 py-2 rounded-lg">
                                    <CheckCircle className="w-4 h-4" /> Finalizado
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-8 flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                    <h4 className="font-bold text-blue-900 mb-1">¿Tienes dudas sobre tus indicaciones?</h4>
                    <p className="text-sm text-blue-800/80 mb-4">
                        Si no entiendes algún paso o necesitas reprogramar, comunícate con nosotros.
                    </p>
                    <Link href="/contacto" className="text-sm font-bold text-blue-700 hover:underline">
                        Contactar al Hospital &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}
