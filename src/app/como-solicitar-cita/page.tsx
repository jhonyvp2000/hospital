import React from 'react';
import { Building2, Stethoscope, FileText, Phone, Ambulance, ArrowRight, CheckCircle2, Bookmark } from 'lucide-react';
import Link from 'next/link';

export default function HowToRequestAppointment() {
    return (
        <main className="min-h-screen bg-hospital-bg pb-20">
            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-16 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">¿Cómo solicito una cita médica?</h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                        Guía para entender el Sistema de Referencias (REFCON) y acceder a la atención especializada.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-5xl px-4 -mt-8">
                {/* Introduction Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        El sistema de salud en Perú (MINSA) funciona bajo un modelo de redes integradas, donde no todos los establecimientos pueden atender todo tipo de casos. Para ordenar esto, existe el <span className="font-bold text-hospital-blue">Sistema de Referencia y Contrarreferencia</span>.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mt-4">
                        Aquí te detallamos cómo funciona este flujo, específicamente desde una posta médica (Primer Nivel) hacia un hospital referencial (Segundo o Tercer Nivel) como nosotros.
                    </p>
                </div>

                {/* Conceptos Clave */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-hospital-blue mb-8 flex items-center gap-3">
                        <Bookmark className="w-6 h-6" />
                        1. Conceptos Clave
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ConceptCard
                            icon={Building2}
                            title="IPRESS"
                            description="Institución Prestadora de Servicios de Salud. Incluye Postas, Centros de Salud y Hospitales."
                        />
                        <ConceptCard
                            icon={Stethoscope}
                            title="Capacidad Resolutiva"
                            description="La capacidad técnica de un establecimiento (equipos, especialistas) para resolver un problema de salud específico."
                        />
                        <ConceptCard
                            icon={FileText}
                            title="Referencia"
                            description="Procedimiento mediante el cual una posta deriva la responsabilidad del cuidado de un paciente a un hospital de mayor complejidad."
                        />
                    </div>
                </section>

                {/* El Flujo de Atención (Timeline) */}
                <section>
                    <h2 className="text-2xl font-bold text-hospital-blue mb-10 flex items-center gap-3">
                        <ArrowRight className="w-6 h-6" />
                        2. El Flujo de Atención (Paso a Paso)
                    </h2>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">

                        <StepItem
                            step="01"
                            title="Atención en el Primer Nivel (La Posta Médica)"
                            content={
                                <>
                                    <p className="mb-2">El paciente acude a su establecimiento de salud más cercano (Categoría I-1 hasta I-4).</p>
                                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                        <li><strong>Evaluación:</strong> El médico general u obstetra evalúa al paciente.</li>
                                        <li><strong>Decisión:</strong> Si requieres exámenes especializados (ej. Tomografía) o especialistas (ej. Cardiólogo) que no hay en la posta, se inicia la referencia.</li>
                                    </ul>
                                </>
                            }
                        />

                        <StepItem
                            step="02"
                            title="Generación de la Referencia"
                            content={
                                <>
                                    <p className="mb-2">El médico de la posta llena la <strong>Hoja de Referencia</strong>, el documento oficial obligatorio que contiene:</p>
                                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                        <li>Datos del paciente y diagnóstico.</li>
                                        <li>Motivo de la referencia (Ej: "Limitación en capacidad resolutiva").</li>
                                        <li>Especialidad de destino requerida.</li>
                                    </ul>
                                </>
                            }
                        />

                        <StepItem
                            step="03"
                            title="Coordinación (El Sistema REFCON)"
                            content={
                                <>
                                    <p className="mb-2">El paciente <strong>no va directamente al hospital</strong> a tocar la puerta.</p>
                                    <div className="bg-blue-50 p-4 rounded-lg my-3 border-l-4 border-hospital-blue">
                                        <p className="text-sm">La posta médica carga la solicitud en el software <strong>REFCON</strong> del MINSA o se comunica con nuestra Oficina de Referencias.</p>
                                    </div>
                                    <p><strong>Aceptación:</strong> El hospital evalúa si tiene cupo. Si acepta, emite una confirmación con fecha y hora para la cita.</p>
                                </>
                            }
                        />

                        <StepItem
                            step="04"
                            title="El Traslado y Atención"
                            content={
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                    <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                                        <div className="flex items-center gap-2 mb-2 font-bold text-red-700">
                                            <Ambulance className="w-5 h-5" /> Emergencia
                                        </div>
                                        <p className="text-sm text-red-800">Si es urgencia vital, el traslado es inmediato en ambulancia. El hospital debe recibirlo obligatoriamente.</p>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                        <div className="flex items-center gap-2 mb-2 font-bold text-green-700">
                                            <CheckCircle2 className="w-5 h-5" /> Consulta Externa
                                        </div>
                                        <p className="text-sm text-green-800">Recibes tu Hoja de Referencia impresa, acudes en la fecha programada, te diriges al consultorio externo respectivo y esperas tu turno para ser atendido.</p>
                                    </div>
                                </div>
                            }
                        />

                        <StepItem
                            step="05"
                            title="Contrarreferencia (El Retorno)"
                            content={
                                <>
                                    <p>Una vez resuelto el problema complejo, realizamos la <strong>Contrarreferencia</strong>.</p>
                                    <p className="mt-2 text-gray-600">Te devolvemos a tu posta de origen con un informe detallado para tu seguimiento (curaciones, controles), liberando recursos del hospital para otros casos complejos.</p>
                                </>
                            }
                            isLast
                        />

                    </div>
                </section>

                <div className="mt-16 text-center">
                    <Link href="/" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-hospital-blue hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
                        Volver al Inicio
                    </Link>
                </div>

            </div>
        </main>
    );
}

function ConceptCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-hospital-blue">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    );
}

function StepItem({ step, title, content, isLast }: { step: string, title: string, content: React.ReactNode, isLast?: boolean }) {
    return (
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon/Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-hospital-blue shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-white font-bold text-sm">
                {step}
            </div>

            {/* Spacer for desktop line alignment */}
            <div className="hidden md:block w-[calc(50%-2.5rem)] md:order-1"></div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-gray-800 mb-3">{title}</h3>
                <div className="text-gray-600 text-sm leading-relaxed">
                    {content}
                </div>
            </div>
        </div>
    );
}
