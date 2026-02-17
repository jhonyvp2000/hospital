'use client';

import React from 'react';
import { Siren, Clock, Users, AlertCircle, CheckCircle, Info, HeartPulse } from 'lucide-react';

export default function SemaforoEmergenciaPage() {
    // Estado Mockeado (En el futuro vendría de una API)
    const currentStatus = {
        level: 'normal', // normal, high, saturated
        patientsWaiting: 12,
        doctorsActive: 4,
        lastUpdate: 'Hace 5 minutos'
    };

    const getStatusConfig = (level: string) => {
        switch (level) {
            case 'normal':
                return {
                    color: 'bg-green-500',
                    textColor: 'text-green-600',
                    bgColor: 'bg-green-50',
                    label: 'Demanda Normal',
                    description: 'Tiempos de espera estándar. Atención fluida.'
                };
            case 'high':
                return {
                    color: 'bg-yellow-500',
                    textColor: 'text-yellow-600',
                    bgColor: 'bg-yellow-50',
                    label: 'Demanda Alta',
                    description: 'Tiempos de espera prolongados para casos no urgentes.'
                };
            case 'saturated':
                return {
                    color: 'bg-red-600',
                    textColor: 'text-red-700',
                    bgColor: 'bg-red-50',
                    label: 'Servicio Saturado',
                    description: 'Prioridad absoluta a emergencias vitales. Considere ir a un Centro de Salud para casos menores.'
                };
            default:
                return { color: 'bg-gray-400', textColor: 'text-gray-600', bgColor: 'bg-gray-50', label: '-', description: '-' };
        }
    };

    const statusConfig = getStatusConfig(currentStatus.level);

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <section className="bg-hospital-blue text-white py-12 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                        <Siren className="w-5 h-5 text-red-400 animate-pulse" />
                        <span className="font-medium">Tablero de Control en Tiempo Real</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Semáforo de Emergencia</h1>
                    <p className="text-xl opacity-90 font-light max-w-2xl mx-auto">
                        Monitoreo en vivo de la capacidad de atención y tiempos de espera estimados según gravedad.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-5xl px-4 -mt-10 relative z-10">

                {/* Main Dashboard Card */}
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden mb-12">
                    <div className="p-8 md:p-12 text-center border-b border-gray-100">
                        <h2 className="text-gray-500 font-medium uppercase tracking-wider text-sm mb-6">Estado Actual del Servicio</h2>

                        <div className="flex flex-col items-center justify-center">
                            <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full ${statusConfig.color} shadow-[0_0_40px_rgba(0,0,0,0.2)] flex items-center justify-center mb-6 animate-pulse`}>
                                <Siren className="w-16 h-16 md:w-20 md:h-20 text-white" />
                            </div>
                            <h3 className={`text-4xl md:text-5xl font-bold ${statusConfig.textColor} mb-2`}>{statusConfig.label}</h3>
                            <p className="text-gray-500 max-w-md mx-auto">{statusConfig.description}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 bg-gray-50/50">
                        <div className="p-6 text-center">
                            <div className="text-3xl font-bold text-gray-800 mb-1">{currentStatus.patientsWaiting}</div>
                            <div className="text-xs text-gray-500 font-medium uppercase">Pacientes en Espera</div>
                        </div>
                        <div className="p-6 text-center">
                            <div className="text-3xl font-bold text-gray-800 mb-1">{currentStatus.doctorsActive}</div>
                            <div className="text-xs text-gray-500 font-medium uppercase">Médicos Activos</div>
                        </div>
                        <div className="p-6 text-center">
                            <div className="text-3xl font-bold text-gray-800 mb-1">24h</div>
                            <div className="text-xs text-gray-500 font-medium uppercase">Atención</div>
                        </div>
                        <div className="p-6 text-center">
                            <div className="text-sm font-bold text-gray-600 mb-1 mt-2">{currentStatus.lastUpdate}</div>
                            <div className="text-xs text-gray-500 font-medium uppercase">Última Actualización</div>
                        </div>
                    </div>
                </div>

                {/* Educational Section: Manchester Triage */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Info className="w-6 h-6 text-hospital-blue" />
                            ¿Cómo funciona el Triaje?
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            La atención en Emergencia <strong>NO es por orden de llegada</strong>, sino por gravedad del paciente. Utilizamos el <strong>Sistema de Triaje Manchester</strong> para clasificar a cada paciente.
                        </p>

                        <div className="space-y-3">
                            {/* Priority 1 */}
                            <div className="flex items-center gap-4 bg-white p-4 rounded-lg border-l-4 border-red-600 shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                    <HeartPulse className="w-5 h-5 text-red-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="font-bold text-gray-800">Prioridad I: Emergencia Vital</h4>
                                        <span className="text-xs font-bold bg-red-100 text-red-700 px-2 py-1 rounded">Atención Inmediata</span>
                                    </div>
                                    <p className="text-sm text-gray-600">Riesgo inminente de muerte. (Paro cardiorrespiratorio, hemorragia masiva).</p>
                                </div>
                            </div>

                            {/* Priority 2 */}
                            <div className="flex items-center gap-4 bg-white p-4 rounded-lg border-l-4 border-orange-500 shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                    <AlertCircle className="w-5 h-5 text-orange-500" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="font-bold text-gray-800">Prioridad II: Emergencia</h4>
                                        <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded">Esperra máx. 10-15 min</span>
                                    </div>
                                    <p className="text-sm text-gray-600">Dolor torácico severo, dificultad respiratoria aguda, fracturas abiertas.</p>
                                </div>
                            </div>

                            {/* Priority 3 */}
                            <div className="flex items-center gap-4 bg-white p-4 rounded-lg border-l-4 border-yellow-400 shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5 text-yellow-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="font-bold text-gray-800">Prioridad III: Urgencia</h4>
                                        <span className="text-xs font-bold bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Espera máx. 60 min</span>
                                    </div>
                                    <p className="text-sm text-gray-600">Dolor abdominal moderado, fiebre alta, heridas que requieren sutura.</p>
                                </div>
                            </div>

                            {/* Priority 4 */}
                            <div className="flex items-center gap-4 bg-white p-4 rounded-lg border-l-4 border-green-500 shadow-sm opacity-75 grayscale-[0.3]">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="font-bold text-gray-800">Prioridad IV: Urgencia Menor</h4>
                                        <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-1 rounded">Espera 2 - 4 horas</span>
                                    </div>
                                    <p className="text-sm text-gray-600">Dolor de garganta, diarrea sin deshidratación, malestar general leve.</p>
                                </div>
                            </div>

                            {/* Priority 5 */}
                            <div className="flex items-center gap-4 bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm opacity-75 grayscale-[0.3]">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                    <Info className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="font-bold text-gray-800">Prioridad V: No Urgente</h4>
                                        <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-1 rounded">Espera +4 horas</span>
                                    </div>
                                    <p className="text-sm text-gray-600">Patologías crónicas, curaciones, solicitud de certificados.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-hospital-blue text-white rounded-xl p-6 mb-6">
                            <h4 className="font-bold text-lg mb-4">¿Tienes una Urgencia Leve?</h4>
                            <p className="text-blue-100 text-sm mb-4">
                                Si tu condición es clasificada como Prioridad IV o V (Verde/Azul), el tiempo de espera será prolongado.
                            </p>
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <p className="font-medium text-sm mb-2">Te recomendamos acudir a:</p>
                                <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
                                    <li>Consultorios Externos (Cita Previa)</li>
                                    <li>Tu Centro de Salud (Posta) más cercano</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <h4 className="font-bold text-gray-800 mb-2">Recomendaciones</h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                    <span>Traer DNI físico del paciente.</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                    <span>Solo un acompañante por paciente para evitar aglomeraciones.</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                    <span>Respetar el turno y la prioridad asignada.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
