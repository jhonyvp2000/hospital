"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Info } from 'lucide-react';

export default function ContactoPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-16 px-4">
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Ubicación y Contacto</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
                        Estamos aquí para atenderte. Encuentra nuestros canales de atención y visítanos.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-7xl px-4 -mt-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Information Cards Column */}
                    <div className="lg:col-span-1 flex flex-col gap-6">

                        {/* Address Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="bg-blue-50 p-3 rounded-lg text-hospital-blue">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 mb-1">Dirección</h3>
                                <p className="text-gray-600 text-sm">
                                    Jr. Ángel Delgado Morey<br />
                                    Tarapoto 22202, Perú
                                </p>
                            </div>
                        </div>

                        {/* Phones Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="bg-blue-50 p-3 rounded-lg text-hospital-blue">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 mb-1">Teléfonos</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li><span className="font-semibold text-gray-700">Central:</span> (042) 522233</li>
                                    <li><span className="font-semibold text-gray-700">Citas:</span> (042) 522233 Anexo 123</li>
                                    <li><span className="font-semibold text-red-500">Emergencia:</span> 106 (SAMU)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="bg-blue-50 p-3 rounded-lg text-hospital-blue">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 mb-1">Correos Electrónicos</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>
                                        <span className="block font-medium">Informes:</span>
                                        <a href="mailto:informes@hospitaltarapoto.gob.pe" className="text-hospital-blue hover:underline">informes@hospitaltarapoto.gob.pe</a>
                                    </li>
                                    <li>
                                        <span className="block font-medium">Mesa de Partes:</span>
                                        <a href="mailto:mesadepartes@hospitaltarapoto.gob.pe" className="text-hospital-blue hover:underline">mesadepartes@hospitaltarapoto.gob.pe</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Hours Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="bg-blue-50 p-3 rounded-lg text-hospital-blue">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 mb-1">Horarios de Atención</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                        <span className="font-semibold">Emergencia:</span> 24 Horas
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                        <span className="font-semibold">Consultas:</span> Lun - Sáb
                                    </li>
                                    <li className="text-xs text-gray-500 pl-4">7:00 AM - 1:00 PM / 2:00 PM - 7:00 PM</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* Main Content Column (Map & Form) */}
                    <div className="lg:col-span-2 flex flex-col gap-8">

                        {/* Map Section */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-64 md:h-80 relative">
                            <iframe
                                src="https://maps.google.com/maps?q=Hospital+II-2+Tarapoto&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <Send className="w-6 h-6 text-hospital-blue" />
                                Envíanos un mensaje
                            </h2>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre Completo</label>
                                        <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-hospital-blue outline-none transition-all" placeholder="Juan Pérez" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Correo Electrónico</label>
                                        <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-hospital-blue outline-none transition-all" placeholder="juan@ejemplo.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Asunto</label>
                                    <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-hospital-blue outline-none transition-all bg-white">
                                        <option value="">Selecciona un asunto</option>
                                        <option value="informes">Informes Generales</option>
                                        <option value="citas">Consultas sobre Citas</option>
                                        <option value="reclamos">Libro de Reclamaciones / Quejas</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensaje</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-hospital-blue outline-none transition-all resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
                                </div>

                                <div className="pt-2">
                                    <button type="button" className="w-full md:w-auto bg-hospital-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                                        <Send className="w-4 h-4" />
                                        Enviar Mensaje
                                    </button>
                                </div>

                                <p className="text-xs text-gray-500 flex items-center gap-1 bg-gray-50 p-3 rounded">
                                    <Info className="w-4 h-4" />
                                    Sus datos serán tratados conforme a la Ley de Protección de Datos Personales.
                                </p>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
