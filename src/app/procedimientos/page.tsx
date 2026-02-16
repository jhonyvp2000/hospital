'use client';

import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Clock, Info, Activity, Microscope, Slice, Stethoscope, Syringe, Pill, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Mock Data for Procedures
const procedures = [
    {
        id: 1,
        title: "Hemograma Completo",
        category: "Diagnóstico",
        icon: Microscope,
        description: "Análisis de sangre para evaluar tu estado general de salud.",
        details: {
            whatIsIt: "Es un examen de sangre que mide los glóbulos rojos, glóbulos blancos y plaquetas. Ayuda a detectar anemia, infecciones y otras enfermedades.",
            benefit: "Permite al médico tener una visión rápida de tu salud y detectar problemas antes de que se agraven.",
            preparation: "Generalmente no requiere ayuno, aunque depende de si se realiza junto con otros exámenes (como glucosa).",
            feeling: "Sentirás un leve pinchazo al momento de la extracción."
        }
    },
    {
        id: 2,
        title: "Ecografía Abdominal",
        category: "Diagnóstico",
        icon: Activity,
        description: "Examen de imagen para ver órganos internos como el hígado, vesícula y páncreas.",
        details: {
            whatIsIt: "Utiliza ondas sonoras para crear imágenes de los órganos. No utiliza radiación.",
            benefit: "Ayuda a diagnosticar dolores abdominales, cálculos en la vesícula o problemas hepáticos.",
            preparation: "Ayuno de 6 a 8 horas. Beber agua antes del examen solo si se indica (para vejiga llena).",
            feeling: "Es indoloro. Solo sentirás el transductor (dispositivo) moviéndose sobre tu piel con un gel frío."
        }
    },
    {
        id: 3,
        title: "Endoscopis Digestiva Alta",
        category: "Ambulatorio",
        icon: Stethoscope,
        description: "Examen para visualizar el esófago, estómago y duodeno.",
        details: {
            whatIsIt: "Se introduce un tubo flexible con una cámara por la boca para examinar el tracto digestivo superior.",
            benefit: "Detecta úlceras, gastritis, reflujo o causas de dolor abdominal y sangrado.",
            preparation: "Ayuno total de 8 horas. Debes venir acompañado ya que se usa sedación.",
            feeling: "No sentirás dolor gracias a la sedación, pero podrías tener molestias leves en la garganta después."
        }
    },
    {
        id: 4,
        title: "Parto por Cesárea",
        category: "Cirugía",
        icon: Slice,
        description: "Intervención quirúrgica para el nacimiento del bebé.",
        details: {
            whatIsIt: "Es una cirugía para sacar al bebé a través de una incisión en el abdomen y útero de la madre.",
            benefit: "Salva vidas cuando un parto vaginal es riesgoso para la madre o el bebé.",
            preparation: "Ayuno, análisis preoperatorios y evaluación por anestesiología.",
            feeling: "No sentirás dolor durante la cirugía (anestesia epidural/raquídea). Tendrás molestias en la herida durante la recuperación."
        }
    },
    {
        id: 5,
        title: "Apendicectomía",
        category: "Cirugía",
        icon: Slice,
        description: "Cirugía de emergencia para extirpar el apéndice inflamado.",
        details: {
            whatIsIt: "Remoción del apéndice, usualmente por laparoscopía (pequeñas incisiones).",
            benefit: "Evita que el apéndice se rompa y cause una infección grave (peritonitis).",
            preparation: "Al ser de emergencia, se realiza tras la evaluación en urgencias. Ayuno inmediato.",
            feeling: "Dolor postoperatorio manejable con medicación. Requiere reposo relativo."
        }
    },
    {
        id: 6,
        title: "Nelluización",
        category: "Ambulatorio",
        icon: Syringe,
        description: "Tratamiento para administrar medicamentos inhalados.",
        details: {
            whatIsIt: "Convierte un medicamento líquido en vapor para que pueda ser inhalado profundamente hacia los pulmones.",
            benefit: "Alivia crisis de asma, bronquitis o dificultad respiratoria aguda.",
            preparation: "No requiere preparación especial. Solo informar si eres alérgico a algún fármaco.",
            feeling: "Es indoloro. Solo debes respirar con normalidad a través de la mascarilla."
        }
    },
    {
        id: 7,
        title: "Parto Natural",
        category: "Hospitalización",
        icon: Activity,
        description: "Proceso fisiológico para el nacimiento del bebé por vía vaginal.",
        details: {
            whatIsIt: "Asistencia médica durante el trabajo de parto y expulsión del bebé.",
            benefit: "Recuperación más rápida que una cesárea y beneficios inmunológicos para el bebé.",
            preparation: "Controles prenatales completos, curso de psicoprofilaxis.",
            feeling: "Contracciones uterinas intensas. Se puede ofrecer manejo del dolor."
        }
    },
    {
        id: 8,
        title: "Tomografía (TAC)",
        category: "Diagnóstico",
        icon: Activity,
        description: "Imágenes detalladas del interior del cuerpo usando rayos X.",
        details: {
            whatIsIt: "Escaneo rápido que genera imágenes transversales del cuerpo.",
            benefit: "Detecta tumores, fracturas complejas, hemorragias internas con gran precisión.",
            preparation: "Ayuno de 4 horas si usa contraste. Ropa cómoda sin metales.",
            feeling: "Indoloro. Escucharás zumbidos del equipo. Si usa contraste, podrías sentir calor momentáneo."
        }
    }
];

const categories = ["Todos", "Diagnóstico", "Ambulatorio", "Cirugía", "Hospitalización"];

export default function ProcedimientosPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const filteredProcedures = procedures.filter(proc => {
        const matchesSearch = proc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            proc.details.whatIsIt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "Todos" || proc.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="bg-blue-600 text-white py-16 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-700 opacity-50 z-0"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')] opacity-10 z-0"></div>
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Procedimientos Médicos</h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Entiende tu tratamiento. Conoce en qué consiste, para qué sirve y cómo prepararte para tu procedimiento.
                    </p>

                    {/* Search Bar */}
                    <div className="bg-white p-2 rounded-full shadow-lg max-w-2xl mx-auto flex items-center">
                        <Search className="text-gray-400 ml-4 w-6 h-6" />
                        <input
                            type="text"
                            placeholder="Buscar procedimiento (ej: Endoscopía, Ecografía)"
                            className="flex-1 px-4 py-3 outline-none text-gray-700 text-lg rounded-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 max-w-6xl">

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory === cat
                                ? 'bg-blue-600 text-white shadow-md transform scale-105'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Procedures Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProcedures.length > 0 ? (
                        filteredProcedures.map(proc => (
                            <div
                                key={proc.id}
                                className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${expandedId === proc.id ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'}`}
                            >
                                {/* Card Header */}
                                <div
                                    className="p-6 cursor-pointer flex items-start gap-4"
                                    onClick={() => toggleExpand(proc.id)}
                                >
                                    <div className={`p-3 rounded-xl shrink-0 ${expandedId === proc.id ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                                        <proc.icon className="w-8 h-8" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1 block">{proc.category}</span>
                                                <h3 className="text-xl font-bold text-gray-800 mb-1">{proc.title}</h3>
                                            </div>
                                            {expandedId === proc.id ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                                        </div>
                                        <p className="text-gray-600 text-sm line-clamp-2">{proc.description}</p>
                                    </div>
                                </div>

                                {/* Expanded Details */}
                                {expandedId === proc.id && (
                                    <div className="px-6 pb-6 pt-0 border-t border-gray-100 bg-blue-50/30">
                                        <div className="grid gap-6 mt-6">

                                            <DetailSection
                                                title="¿Qué es?"
                                                content={proc.details.whatIsIt}
                                                icon={<Info className="w-5 h-5 text-blue-500" />}
                                            />

                                            <DetailSection
                                                title="¿Para qué sirve? (Beneficio)"
                                                content={proc.details.benefit}
                                                icon={<Activity className="w-5 h-5 text-green-500" />}
                                            />

                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <DetailSection
                                                    title="Preparación"
                                                    content={proc.details.preparation}
                                                    icon={<Clock className="w-5 h-5 text-orange-500" />}
                                                />
                                                <DetailSection
                                                    title="¿Qué sentiré?"
                                                    content={proc.details.feeling}
                                                    icon={<Pill className="w-5 h-5 text-purple-500" />}
                                                />
                                            </div>

                                            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-end">
                                                <Link href="/citas" className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-bold transition-colors shadow-sm">
                                                    Solicitar este procedimiento <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                                <Search className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-600">No encontramos procedimientos</h3>
                            <p className="text-gray-500">Intenta con otro término o categoría.</p>
                            <button
                                onClick={() => { setSearchTerm(""); setSelectedCategory("Todos"); }}
                                className="mt-4 text-blue-600 font-semibold hover:underline"
                            >
                                Ver todos los procedimientos
                            </button>
                        </div>
                    )}
                </div>

                {/* Doctor's Note / Disclaimer */}
                <div className="mt-20 bg-amber-50 rounded-xl p-8 border border-amber-100 flex items-start gap-4">
                    <Info className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-amber-900 mb-2">Nota Importante</h4>
                        <p className="text-amber-800/80 text-sm">
                            La información presentada aquí es orientativa. Siempre sigue las indicaciones específicas entregadas por tu médico tratante, ya que cada paciente es único y podría requerir preparaciones especiales.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

function DetailSection({ title, content, icon }: any) {
    return (
        <div className="flex gap-3">
            <div className="mt-0.5">{icon}</div>
            <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{content}</p>
            </div>
        </div>
    );
}
