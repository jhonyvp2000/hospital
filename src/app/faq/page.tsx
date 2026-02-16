'use client';

import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Calendar, Users, Building, HelpCircle, Phone, FileText } from 'lucide-react';

// FAQ Data
const faqs = [
    {
        category: 'Citas y Admisión',
        icon: Calendar,
        questions: [
            {
                q: '¿Cómo puedo sacar una cita médica?',
                a: 'Puedes solicitar tu cita de tres formas: 1) A través de nuestra página web en la sección "Citas en Línea", 2) Llamando a nuestra central telefónica al (042) 522-123, o 3) Presencialmente en el módulo de admisión presentando tu DNI.'
            },
            {
                q: '¿Qué documentos debo llevar el día de mi cita?',
                a: 'Debes presentar tu Documento Nacional de Identidad (DNI) físico. Si eres paciente referido, es importante traer tu hoja de referencia vigente.'
            },
            {
                q: '¿Atienden con SIS y EsSalud?',
                a: 'Sí, atendemos pacientes con Seguro Integral de Salud (SIS) previa referencia de su centro de salud. Para pacientes de EsSalud, atendemos en casos de emergencia o convenios específicos.'
            }
        ]
    },
    {
        category: 'Atención al Paciente',
        icon: Users,
        questions: [
            {
                q: '¿Cuál es el horario de visita para hospitalización?',
                a: 'El horario general de visitas es de Lunes a Domingo de 4:00 PM a 6:00 PM. Solo se permite un visitante por paciente a la vez. En áreas críticas (UCI), el horario es restringido y se informa directamente al familiar responsable.'
            },
            {
                q: '¿Puedo ingresar alimentos para un paciente hospitalizado?',
                a: 'Por seguridad del paciente, está prohibido el ingreso de alimentos externos. La dieta es estrictamente controlada por el departamento de Nutrición según la condición médica del paciente.'
            }
        ]
    },
    {
        category: 'Servicios',
        icon: Building,
        questions: [
            {
                q: '¿Cómo recojo mis resultados de laboratorio?',
                a: 'Puedes visualizar y descargar tus resultados desde nuestro "Portal del Paciente" en esta web. Si prefieres recogerlos en físico, acércate al módulo de Laboratorio de 8:00 AM a 6:00 PM con tu DNI.'
            },
            {
                q: '¿La emergencia atiende las 24 horas?',
                a: 'Sí, nuestro servicio de Emergencia está disponible las 24 horas del día, los 365 días del año, para atender cualquier urgencia o emergencia médica.'
            }
        ]
    },
    {
        category: 'Portal del Paciente',
        icon: FileText,
        questions: [
            {
                q: '¿Cómo me registro en el portal web?',
                a: 'Para registrarte, necesitas ser paciente del hospital. Haz clic en "Portal Paciente", selecciona "Registrarse" e ingresa tu DNI y fecha de nacimiento para validar tu identidad.'
            },
            {
                q: 'Olvidé mi contraseña, ¿qué hago?',
                a: 'En la pantalla de inicio de sesión del portal, selecciona la opción "¿Olvidaste tu contraseña?". Te enviaremos un código de recuperación a tu correo electrónico o celular registrado.'
            }
        ]
    }
];

export default function FAQPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('Todas');
    const [openQuestionIndex, setOpenQuestionIndex] = useState<string | null>(null);

    const toggleQuestion = (id: string) => {
        setOpenQuestionIndex(openQuestionIndex === id ? null : id);
    };

    const filteredFaqs = faqs.map(cat => ({
        ...cat,
        questions: cat.questions.filter(q =>
            q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.a.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(cat =>
        (activeCategory === 'Todas' || cat.category === activeCategory) &&
        cat.questions.length > 0
    );

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-16 px-4">
                <div className="container mx-auto max-w-4xl text-center space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold">¿En qué podemos ayudarte?</h1>
                    <p className="text-blue-100 text-lg">Resolvemos tus dudas más frecuentes para que tu experiencia sea más sencilla.</p>

                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="Buscar una pregunta (ej. horarios, citas, resultados)..."
                            className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400/50 shadow-lg text-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="container mx-auto max-w-5xl px-4 py-10">
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveCategory('Todas')}
                        className={`px-6 py-2 rounded-full font-medium transition-colors ${activeCategory === 'Todas' ? 'bg-hospital-blue text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        Todas
                    </button>
                    {faqs.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveCategory(cat.category)}
                            className={`px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2 ${activeCategory === cat.category ? 'bg-hospital-blue text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            <cat.icon className="w-4 h-4" />
                            {cat.category}
                        </button>
                    ))}
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-8">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((cat, catIdx) => (
                            <div key={catIdx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-hospital-blue">
                                        <cat.icon className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800">{cat.category}</h2>
                                </div>
                                <div>
                                    {cat.questions.map((item, qIdx) => {
                                        const id = `${catIdx}-${qIdx}`;
                                        const isOpen = openQuestionIndex === id;
                                        return (
                                            <div key={qIdx} className="border-b border-gray-100 last:border-0">
                                                <button
                                                    onClick={() => toggleQuestion(id)}
                                                    className="w-full px-6 py-5 text-left flex items-start justify-between hover:bg-gray-50/50 transition-colors group"
                                                >
                                                    <span className={`font-medium text-lg pr-8 ${isOpen ? 'text-hospital-blue' : 'text-gray-700'}`}>
                                                        {item.q}
                                                    </span>
                                                    <div className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-hospital-blue' : 'text-gray-400 group-hover:text-gray-600'}`}>
                                                        <ChevronDown className="w-6 h-6" />
                                                    </div>
                                                </button>
                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                        }`}
                                                >
                                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed bg-gray-50/30">
                                                        {item.a}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-600 mb-2">No encontramos resultados</h3>
                            <p className="text-gray-500">Intenta con otros términos o navega por las categorías.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto max-w-4xl px-4 mt-8">
                <div className="bg-gradient-to-r from-hospital-blue to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold">¿Aún tienes preguntas?</h2>
                        <p className="text-blue-100 max-w-2xl mx-auto">
                            Estamos aquí para ayudarte. Contáctanos directamente y nuestro equipo de atención al usuario resolverá tus dudas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contacto"
                                className="inline-flex items-center justify-center gap-2 bg-white text-hospital-blue px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-sm"
                            >
                                <Phone className="w-5 h-5" /> Contáctanos
                            </a>
                            <a
                                href="/paus"
                                className="inline-flex items-center justify-center gap-2 bg-blue-800/30 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-full font-bold hover:bg-blue-800/50 transition-colors"
                            >
                                <Users className="w-5 h-5" /> Plataforma PAUS
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
