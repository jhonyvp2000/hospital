"use client";

import React, { useState } from 'react';
import { BookOpen, Send, AlertCircle, CheckCircle, User, MapPin, Phone, Mail, FileText, Calendar } from 'lucide-react';

export default function LibroReclamacionesPage() {
    const [submitted, setSubmitted] = useState(false);
    const [complaintCode, setComplaintCode] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulación de envío y generación de código
        const code = `REC-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
        setComplaintCode(code);
        setSubmitted(true);
        window.scrollTo(0, 0);
    };

    if (submitted) {
        return (
            <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-8 text-center animate-fade-in-up">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">¡Reclamo Registrado!</h1>
                    <p className="text-gray-600 mb-6">
                        Hemos recibido su "Hoja de Reclamación en Salud". Se ha enviado una copia a su correo electrónico.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-xl mb-6">
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Código de Seguimiento</p>
                        <p className="text-3xl font-mono font-bold text-hospital-blue">{complaintCode}</p>
                    </div>
                    <p className="text-sm text-gray-500 mb-8">
                        Nos pondremos en contacto con usted en un plazo máximo de 30 días hábiles, conforme a ley.
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="bg-hospital-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all w-full"
                    >
                        Volver al Inicio
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header Oficial */}
            <header className="bg-hospital-blue text-white py-12 px-4 shadow-lg">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="flex items-center justify-center gap-3 mb-4 opacity-80">
                        <BookOpen className="w-6 h-6" />
                        <span className="font-semibold tracking-widest uppercase text-sm">Libro de Reclamaciones Virtual</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Hoja de Reclamación en Salud</h1>
                    <p className="opacity-90 max-w-2xl mx-auto text-sm md:text-base">
                        Conforme al D.S. N° 002-2019-SA y Reglamento de la Ley N° 29414.
                        Su opinión es fundamental para mejorar nuestros servicios.
                    </p>
                </div>
            </header>

            <div className="container mx-auto max-w-4xl px-4 -mt-8">
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

                    {/* Sección 1: Identificación */}
                    <div className="p-8 border-b border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-hospital-blue font-bold">1</div>
                            <h2 className="text-xl font-bold text-gray-800">Identificación del Usuario</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField label="Tipo de Documento" type="select" options={["DNI", "Carnet de Extranjería", "Pasaporte"]} required />
                            <InputField label="Número de Documento" type="number" placeholder="Ej: 12345678" required />
                            <InputField label="Nombres" placeholder="Nombres completos" required />
                            <InputField label="Apellidos" placeholder="Apellidos completos" required />
                            <InputField label="Celular / Teléfono" type="tel" icon={Phone} required />
                            <InputField label="Correo Electrónico" type="email" icon={Mail} placeholder="Para enviarle la respuesta" required />
                            <div className="md:col-span-2">
                                <InputField label="Domicilio" icon={MapPin} placeholder="Dirección actual" required />
                            </div>
                        </div>

                        <div className="mt-4 flex items-start gap-2 text-sm text-gray-500 bg-blue-50 p-4 rounded-lg">
                            <User className="w-5 h-5 text-hospital-blue shrink-0" />
                            <p>Si usted es el paciente, marque aquí. Si presenta el reclamo en representación de otro, deberá llenar los datos del paciente más adelante (Simulado para esta demo).</p>
                        </div>
                    </div>

                    {/* Sección 2: Detalle del Reclamo */}
                    <div className="p-8 border-b border-gray-100 bg-gray-50/30">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-hospital-blue font-bold">2</div>
                            <h2 className="text-xl font-bold text-gray-800">Detalle de la Reclamación</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <InputField label="Fecha del Incidente" type="date" required />
                            <InputField label="Servicio o Área" type="select" options={["Consulta Externa", "Emergencia", "Farmacia", "Hospitalización", "Laboratorio", "Admisión / Citas", "Otros"]} required />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Reclamo</label>
                            <div className="flex gap-4">
                                <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-hospital-blue hover:bg-blue-50 transition-all flex-1">
                                    <input type="radio" name="tipo" className="w-4 h-4 text-hospital-blue" defaultChecked />
                                    <div className="ml-3">
                                        <span className="block font-bold text-gray-800">RECLAMO</span>
                                        <span className="text-xs text-gray-500">Disconformidad con el servicio o bienes.</span>
                                    </div>
                                </label>
                                <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-hospital-blue hover:bg-blue-50 transition-all flex-1">
                                    <input type="radio" name="tipo" className="w-4 h-4 text-hospital-blue" />
                                    <div className="ml-3">
                                        <span className="block font-bold text-gray-800">QUEJA</span>
                                        <span className="text-xs text-gray-500">Malestar por la atención o trato personal.</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Descripción de los Hechos</label>
                            <textarea
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hospital-light focus:border-transparent outline-none transition-all"
                                placeholder="Describa detalladamente lo ocurrido..."
                                required
                            ></textarea>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Pedido Concreto (Opcional)</label>
                            <textarea
                                rows={2}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hospital-light focus:border-transparent outline-none transition-all"
                                placeholder="¿Qué solución espera?"
                            ></textarea>
                        </div>
                    </div>

                    {/* Footer y Envío */}
                    <div className="p-8 bg-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-xs text-gray-500 max-w-md">
                            <p className="flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 shrink-0" />
                                Al enviar este formulario, usted acepta que la información consignada es verdadera y autoriza al hospital a contactarlo para la respuesta.
                            </p>
                        </div>
                        <button type="submit" className="w-full md:w-auto bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            <Send className="w-5 h-5" />
                            Registrar Reclamo
                        </button>
                    </div>

                </form>
            </div>
        </main>
    );
}

// Helper Component for Inputs
function InputField({ label, type = "text", placeholder, icon: Icon, options, required = false }: any) {
    return (
        <div className="w-full">
            <label className="block text-sm font-bold text-gray-700 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                {Icon && (
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Icon className="w-5 h-5" />
                    </div>
                )}

                {type === 'select' ? (
                    <select className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hospital-light focus:border-transparent outline-none transition-all bg-white`}>
                        {options.map((opt: string) => <option key={opt}>{opt}</option>)}
                    </select>
                ) : (
                    <input
                        type={type}
                        className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hospital-light focus:border-transparent outline-none transition-all`}
                        placeholder={placeholder}
                        required={required}
                    />
                )}
            </div>
        </div>
    )
}
