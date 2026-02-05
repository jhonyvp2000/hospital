import React from 'react';
import { ShieldCheck, HeartPulse, Clock, FileQuestion, Globe, CheckCircle, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function EmergencyPage() {
    return (
        <main className="min-h-screen bg-hospital-bg pb-20">
            {/* Hero Section - Urgency Context */}
            <section className="bg-red-600 text-white py-16 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 bg-red-700 px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
                        <HeartPulse className="w-4 h-4" /> ATENCIÓN 24 HORAS
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">Guía de Atención en Emergencia</h1>
                    <p className="text-xl opacity-95 max-w-3xl mx-auto">
                        En el Hospital Tarapoto, nuestra prioridad es salvar vidas. Entienda cómo clasificamos las urgencias para brindarle la mejor atención.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-5xl px-4 -mt-8">

                {/* Policy Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <ShieldCheck className="w-7 h-7 text-hospital-blue" />
                        ¿A quién atendemos?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <PolicyCard
                            icon={Globe}
                            title="A Todos"
                            text="Sin excepción. No importa dónde viva o su nacionalidad. Peruanos y extranjeros tienen los mismos derechos."
                        />
                        <PolicyCard
                            icon={CheckCircle}
                            title="Sin Pagos Previos"
                            text="La Ley prohíbe condicionar la atención vital a un pago o documento. Lo primero es su vida."
                        />
                        <PolicyCard
                            icon={HeartPulse}
                            title="Priorizando la Vida"
                            text="No atendemos por orden de llegada, sino por gravedad del paciente (Triaje)."
                        />
                    </div>
                </div>

                {/* Triage Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚦 El Semáforo del Triaje</h2>
                    <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                        Al llegar, un especialista evaluará sus signos vitales y le asignará un color de prioridad.
                        <strong> Por favor, sea paciente si atendemos a alguien que llegó después; su vida podría estar en peligro.</strong>
                    </p>

                    <div className="grid grid-cols-1 gap-6">
                        {/* PRIORITY I */}
                        <TriageCard
                            color="red"
                            priority="PRIORIDAD I: Gravedad Extrema"
                            subtitle="Riesgo de muerte inminente"
                            wait="0 minutos (Inmediato)"
                            examples="Paro cardíaco, atropellos graves, dificultad severa para respirar, sangrado incontrolable."
                            action="Pasa directo a Shock Trauma"
                        />

                        {/* PRIORITY II */}
                        <TriageCard
                            color="orange"
                            priority="PRIORIDAD II: Urgencia Mayor"
                            subtitle="Riesgo de complicaciones serias"
                            wait="10 - 15 minutos aprox."
                            examples="Apendicitis, crisis asmática, fracturas, fiebre muy alta en niños, dolor abdominal intenso."
                            action="Atención muy rápida para estabilizar"
                        />

                        {/* PRIORITY III */}
                        <TriageCard
                            color="green"
                            priority="PRIORIDAD III: Urgencia Menor"
                            subtitle="No hay riesgo vital"
                            wait="Variable (Espera)"
                            examples="Dolor de estómago leve, golpes menores, náuseas, intoxicación leve."
                            action="Se atiende después de los pacientes graves"
                        />

                        {/* PRIORITY IV */}
                        <TriageCard
                            color="blue"
                            priority="PRIORIDAD IV: No Urgente"
                            subtitle="Malestares generales o crónicos"
                            wait="Consultorio Externo"
                            examples="Resfrío común, dolores de espalda crónicos, certificados, curaciones simples."
                            action="Recomendación: Acuda a su Centro de Salud (Posta)"
                        />
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-blue-50 rounded-3xl p-8 md:p-12 mb-12">
                    <h2 className="text-2xl font-bold text-hospital-blue mb-8 flex items-center gap-3">
                        <FileQuestion className="w-7 h-7" />
                        Preguntas Frecuentes
                    </h2>
                    <div className="space-y-6">
                        <FAQItem
                            question="No tengo mi DNI a la mano, ¿me van a atender?"
                            answer="SÍ. En una emergencia vital (Prioridad I o II), la falta de documentos nunca es impedimento para recibir atención."
                        />
                        <FAQItem
                            question="¿Qué pasa si no tengo dinero en ese momento?"
                            answer="Su atención médica inicial para estabilizarlo está garantizada por Ley. Los trámites administrativos y pagos se regularizan después, cuando el paciente esté fuera de peligro."
                        />
                        <FAQItem
                            question="¿Por qué atienden a alguien que llegó después que yo?"
                            answer="Probablemente esa persona fue clasificada con una prioridad mayor (Rojo o Naranja). Agradecemos su comprensión, estamos salvando vidas."
                        />
                    </div>
                </section>

                <div className="text-center">
                    <Link href="/" className="text-gray-500 hover:text-hospital-blue font-medium transition-colors">
                        &larr; Volver a la Página Principal
                    </Link>
                </div>

            </div>
        </main>
    );
}

function PolicyCard({ icon: Icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-hospital-blue">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
        </div>
    );
}

function TriageCard({ color, priority, subtitle, wait, examples, action }: any) {
    const colorStyles: any = {
        red: { border: 'border-l-red-600', bg: 'bg-red-50', text: 'text-red-800', badge: 'bg-red-600' },
        orange: { border: 'border-l-orange-500', bg: 'bg-orange-50', text: 'text-orange-800', badge: 'bg-orange-500' },
        green: { border: 'border-l-green-600', bg: 'bg-green-50', text: 'text-green-800', badge: 'bg-green-600' },
        blue: { border: 'border-l-blue-600', bg: 'bg-blue-50', text: 'text-blue-800', badge: 'bg-blue-600' },
    };

    const style = colorStyles[color];

    return (
        <div className={`bg-white rounded-xl shadow-sm border border-gray-100 border-l-8 ${style.border} p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-all`}>
            <div className="md:w-1/3">
                <div className={`${style.badge} text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3 uppercase tracking-wide`}>
                    Tiempo: {wait}
                </div>
                <h3 className={`text-xl font-bold ${style.text} mb-1`}>{priority}</h3>
                <p className="font-medium text-gray-700 italic">"{subtitle}"</p>
            </div>
            <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                <p className="text-gray-700 mb-3"><span className="font-bold text-gray-900">Ejemplos:</span> {examples}</p>
                <div className={`text-sm font-medium ${style.text} flex items-center gap-2`}>
                    <CheckCircle className="w-4 h-4" /> {action}
                </div>
            </div>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-hospital-blue text-lg mb-2">{question}</h3>
            <p className="text-gray-700">{answer}</p>
        </div>
    );
}
