"use client";

import React, { useState } from 'react';
import { ClipboardCheck, Star, Send, ThumbsUp, MessageSquare, Building, Clock, Activity, Shield, Heart } from 'lucide-react';
import Link from 'next/link';

export default function EncuestaPage() {
    const [submitted, setSubmitted] = useState(false);
    const [ratings, setRatings] = useState({
        tangibles: 0,
        fiabilidad: 0,
        respuesta: 0,
        seguridad: 0,
        empatia: 0
    });

    const handleRate = (category: string, value: number) => {
        setRatings(prev => ({ ...prev, [category]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulación de envío
        setTimeout(() => {
            setSubmitted(true);
            window.scrollTo(0, 0);
        }, 1000);
    };

    if (submitted) {
        return (
            <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-8 text-center animate-fade-in-up">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ThumbsUp className="w-10 h-10 text-hospital-blue" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">¡Gracias por tu opinión!</h1>
                    <p className="text-gray-600 mb-8">
                        Tus respuestas nos ayudan directamente a mejorar nuestros servicios. Valoramos mucho el tiempo que te has tomado.
                    </p>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => window.location.href = '/'}
                            className="bg-hospital-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all w-full"
                        >
                            Volver al Inicio
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-hospital-bg pb-20">
            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-16 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm border border-blue-400/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        <ClipboardCheck className="w-4 h-4" /> Mejora Continua
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">Encuesta de Satisfacción</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
                        Tu experiencia es lo más importante. Ayúdanos a evaluarnos para seguir brindándote la mejor atención.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-3xl px-4 -mt-10 relative z-10">
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

                    <div className="p-8 border-b border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">1. Datos de la Atención</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Servicio Visitado</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hospital-light focus:border-transparent outline-none transition-all bg-white" required>
                                    <option value="">Seleccione...</option>
                                    <option>Consulta Externa</option>
                                    <option>Emergencia</option>
                                    <option>Hospitalización</option>
                                    <option>Laboratorio / Rayos X</option>
                                    <option>Farmacia</option>
                                    <option>Admisión / Citas</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Fecha de Atención</label>
                                <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hospital-light focus:border-transparent outline-none transition-all" required />
                            </div>
                        </div>
                    </div>

                    <div className="p-8 border-b border-gray-100 bg-gray-50/50">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">2. Califica tu Experiencia</h2>
                        <p className="text-gray-500 text-sm mb-8">Selecciona de 1 a 5 estrellas, donde 1 es "Malo" y 5 es "Excelente".</p>

                        <div className="space-y-8">
                            <RatingQuestion
                                id="tangibles"
                                title="Instalaciones y Limpieza"
                                desc="¿Los ambientes estaban limpios, ordenados y cómodos?"
                                icon={Building}
                                value={ratings.tangibles}
                                onChange={handleRate}
                            />
                            <RatingQuestion
                                id="fiabilidad"
                                title="Cumplimiento y Tiempos"
                                desc="¿Se respetaron los horarios y se cumplió con lo ofrecido?"
                                icon={Clock}
                                value={ratings.fiabilidad}
                                onChange={handleRate}
                            />
                            <RatingQuestion
                                id="respuesta"
                                title="Rapidez de Atención"
                                desc="¿El personal lo atendió con la rapidez y disposición esperada?"
                                icon={Activity}
                                value={ratings.respuesta}
                                onChange={handleRate}
                            />
                            <RatingQuestion
                                id="seguridad"
                                title="Seguridad y Confianza"
                                desc="¿El personal demostró conocimiento y le inspiró confianza?"
                                icon={Shield}
                                value={ratings.seguridad}
                                onChange={handleRate}
                            />
                            <RatingQuestion
                                id="empatia"
                                title="Amabilidad y Trato"
                                desc="¿Recibió un trato amable, respetuoso y personalizado?"
                                icon={Heart}
                                value={ratings.empatia}
                                onChange={handleRate}
                            />
                        </div>
                    </div>

                    <div className="p-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">3. Comentarios Adicionales</h2>
                        <div className="relative">
                            <div className="absolute left-3 top-4 text-gray-400">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <textarea
                                rows={4}
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hospital-light focus:border-transparent outline-none transition-all"
                                placeholder="¿Tiene alguna sugerencia para mejorar nuestro servicio?"
                            ></textarea>
                        </div>
                    </div>

                    <div className="p-8 bg-gray-100 flex justify-end">
                        <button type="submit" className="w-full md:w-auto bg-hospital-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg">
                            <Send className="w-5 h-5" />
                            Enviar Encuesta
                        </button>
                    </div>

                </form>
            </div>
        </main>
    );
}

function RatingQuestion({ id, title, desc, icon: Icon, value, onChange }: any) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4 max-w-lg">
                    <div className="w-10 h-10 bg-blue-50 text-hospital-blue rounded-full flex items-center justify-center shrink-0 mt-1">
                        <Icon className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => onChange(id, star)}
                            className={`p-1 transition-transform hover:scale-110 focus:outline-none ${star <= value ? 'text-yellow-400' : 'text-gray-200 hover:text-yellow-200'}`}
                        >
                            <Star className={`w-8 h-8 ${star <= value ? 'fill-current' : ''}`} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
