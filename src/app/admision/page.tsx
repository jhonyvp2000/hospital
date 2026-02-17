'use client';

import React, { useState } from 'react';
import { AlertTriangle, Upload, FileText, CheckCircle, Clock, Info, ChevronRight, Send } from 'lucide-react';
import Link from 'next/link';

export default function AdmisionDigitalPage() {
    const [step, setStep] = useState(1);
    const [fileSelected, setFileSelected] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileSelected(e.target.files[0].name);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(3); // Move to success state
    };

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <section className="bg-hospital-blue text-white py-12 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Solicitud de Cita Referenciada</h1>
                    <p className="text-xl opacity-90 font-light">
                        Registro anticipado para pacientes con Hoja de Referencia (REFCON).
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-4xl px-4 -mt-8 relative z-10">

                {/* STRICT DISCLAIMER */}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg shadow-sm mb-8">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0" />
                        <div>
                            <h3 className="font-bold text-amber-800 text-lg mb-1">IMPORTANTE: Requisito Obligatorio</h3>
                            <p className="text-amber-700 leading-relaxed">
                                Este servicio es <strong>exclusivo para pacientes que cuentan con una HOJA DE REFERENCIA VIGENTE</strong> emitida por su Centro de Salud o Posta Médica.
                                <br /><br />
                                Si usted no tiene una referencia, <strong>no podremos atender su solicitud</strong>. Por favor, acuda primero al establecimiento de salud más cercano a su domicilio.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">

                    {/* Progress Steps */}
                    <div className="bg-gray-50 border-b border-gray-100 p-6 hidden md:flex justify-between items-center px-12">
                        <div className={`flex items-center gap-2 ${step >= 1 ? 'text-hospital-blue font-bold' : 'text-gray-400'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-hospital-blue bg-blue-50' : 'border-gray-300'}`}>1</div>
                            <span>Datos del Paciente</span>
                        </div>
                        <div className="h-0.5 flex-grow bg-gray-200 mx-4"></div>
                        <div className={`flex items-center gap-2 ${step >= 2 ? 'text-hospital-blue font-bold' : 'text-gray-400'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-hospital-blue bg-blue-50' : 'border-gray-300'}`}>2</div>
                            <span>Adjuntar Referencia</span>
                        </div>
                        <div className="h-0.5 flex-grow bg-gray-200 mx-4"></div>
                        <div className={`flex items-center gap-2 ${step >= 3 ? 'text-green-600 font-bold' : 'text-gray-400'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-green-600 bg-green-50' : 'border-gray-300'}`}>3</div>
                            <span>Confirmación</span>
                        </div>
                    </div>

                    <div className="p-8">
                        {step === 1 && (
                            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6 animate-fadeIn">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                    <FileText className="w-6 h-6 text-hospital-light" />
                                    Datos del Paciente
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">DNI del Paciente</label>
                                        <input type="text" maxLength={8} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-light outline-none" placeholder="Ingrese los 8 dígitos" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Fecha de Nacimiento</label>
                                        <input type="date" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-light outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Celular de Contacto</label>
                                        <input type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-light outline-none" placeholder="Para confirmar la cita" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico (Opcional)</label>
                                        <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-light outline-none" placeholder="ejemplo@correo.com" />
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-6 flex justify-end">
                                    <button type="submit" className="bg-hospital-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                                        Siguiente Paso <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </form>
                        )}

                        {step === 2 && (
                            <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                    <Upload className="w-6 h-6 text-hospital-light" />
                                    Cargar Hoja de Referencia
                                </h2>

                                <div className="bg-blue-50 p-4 rounded-lg flex gap-3 text-sm text-blue-800 mb-6">
                                    <Info className="w-5 h-5 shrink-0" />
                                    <p>Por favor, suba una foto clara de su Hoja de Referencia (Anverso y Reverso si es necesario). Asegúrese de que el número de referencia sea legible.</p>
                                </div>

                                <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                                    <input
                                        type="file"
                                        accept="image/*,.pdf"
                                        onChange={handleFileChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        required
                                    />
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                                            <Upload className="w-8 h-8" />
                                        </div>
                                        {fileSelected ? (
                                            <div className="text-green-600 font-bold flex items-center gap-2">
                                                <CheckCircle className="w-5 h-5" />
                                                {fileSelected}
                                            </div>
                                        ) : (
                                            <>
                                                <h3 className="font-bold text-gray-700">Haga clic para subir o arrastre el archivo</h3>
                                                <p className="text-gray-400 text-sm">Soporta JPG, PNG o PDF (Máx 5MB)</p>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Centro de Salud de Origen</label>
                                        <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-light outline-none" placeholder="Ej: C.S. Morales" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Especialidad Solicitada</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-light outline-none">
                                            <option>Seleccione una especialidad</option>
                                            <option>Medicina Interna</option>
                                            <option>Pediatría</option>
                                            <option>Ginecología</option>
                                            <option>Cirugía General</option>
                                            <option>Otro</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-6 flex justify-between items-center">
                                    <button type="button" onClick={() => setStep(1)} className="text-gray-500 font-bold hover:text-gray-700">
                                        Atrás
                                    </button>
                                    <button type="submit" className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 shadow-lg shadow-green-200">
                                        Enviar Solicitud <Send className="w-5 h-5" />
                                    </button>
                                </div>
                            </form>
                        )}

                        {step === 3 && (
                            <div className="text-center py-10 animate-fadeIn">
                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                                    <CheckCircle className="w-12 h-12" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Solicitud Enviada con Éxito!</h2>
                                <p className="text-lg text-gray-600 max-w-lg mx-auto mb-8">
                                    Hemos recibido su solicitud de cita referenciada. Nuestro equipo de Admisión verificará la información en el sistema <strong>REFCON</strong>.
                                </p>

                                <div className="bg-hospital-bg p-6 rounded-lg max-w-lg mx-auto text-left mb-8 shadow-sm">
                                    <h4 className="font-bold text-hospital-blue mb-2 flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Próximos Pasos:
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-hospital-blue">•</span>
                                            Validación de Referencia (24 horas hábiles).
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-hospital-blue">•</span>
                                            Si es conforme, recibirá un <strong>SMS o WhatsApp</strong> con la fecha y hora de su cita.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-bold text-hospital-blue">•</span>
                                            Si hay observaciones, nos contactaremos con usted para subsanarlas.
                                        </li>
                                    </ul>
                                </div>

                                <Link href="/" className="inline-block bg-hospital-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                                    Volver al Inicio
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className="text-center mt-8 text-gray-500 text-sm">
                    <p>Si tiene dudas sobre el proceso, puede llamar al <strong>(042) 522-133 Anexo 205 (Admisión)</strong>.</p>
                </div>

            </div>
        </main>
    );
}
