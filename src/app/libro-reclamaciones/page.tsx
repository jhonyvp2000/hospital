"use client";

import React, { useState } from 'react';
import { BookOpen, Send, AlertCircle, CheckCircle, User, MapPin, Phone, Mail, FileText, Calendar, Printer, ShieldCheck } from 'lucide-react';

export default function LibroReclamacionesPage() {
    const [submitted, setSubmitted] = useState(false);
    const [complaintCode, setComplaintCode] = useState('');
    const [isAfectado, setIsAfectado] = useState(true);

    // Variables para el recibo
    const [formData, setFormData] = useState({
        fecha: new Date().toLocaleDateString('es-PE'),
        nombres: '',
        apellidos: '',
        tipoReclamo: 'RECLAMO',
        area: 'Consulta Externa'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, tipoReclamo: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Generación de código de reclamo formato oficial SUSALUD (IPRESS-Año-Correlativo)
        const code = `HR-15552-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
        setComplaintCode(code);
        setSubmitted(true);
        window.scrollTo(0, 0);
    };

    if (submitted) {
        return (
            <main className="min-h-screen bg-gray-50 py-12 px-4 flex flex-col items-center">
                <div className="bg-white max-w-2xl w-full rounded-2xl shadow-xl overflow-hidden animate-fade-in-up">
                    <div className="bg-green-600 text-white p-8 text-center relative">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                            <CheckCircle className="w-12 h-12 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold mb-2">Constancia de Registro</h1>
                        <p className="text-green-100">Su Hoja de Reclamación en Salud (SUSALUD) ha sido ingresada exitosamente.</p>
                    </div>

                    <div className="p-8">
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 text-center">
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Código de Seguimiento Oficial</p>
                            <p className="text-4xl font-mono font-bold text-gray-800">{complaintCode}</p>
                            <p className="text-xs text-gray-400 mt-2">Guarde este código para consultar el estado de su trámite.</p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="text-gray-500">Fecha de Registro:</div>
                                <div className="font-semibold text-gray-800 text-right">{formData.fecha}</div>

                                <div className="text-gray-500">Reclamante:</div>
                                <div className="font-semibold text-gray-800 text-right">{formData.nombres} {formData.apellidos}</div>

                                <div className="text-gray-500">Tipo:</div>
                                <div className="font-semibold text-gray-800 text-right"><span className="bg-hospital-blue text-white px-2 py-0.5 rounded text-xs">{formData.tipoReclamo}</span></div>

                                <div className="text-gray-500">Área de Inconformidad:</div>
                                <div className="font-semibold text-gray-800 text-right">{formData.area}</div>
                            </div>
                        </div>

                        <div className="bg-blue-50 text-blue-800 p-4 rounded-lg flex items-start gap-3 mb-8 text-sm">
                            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-blue-600" />
                            <p>De acuerdo al D.S. N° 002-2019-SA, la institución de salud (IPRESS) tiene un plazo máximo de <strong>treinta (30) días hábiles</strong> para emitir y notificar la respuesta a su correo electrónico. Si la respuesta no es satisfactoria, usted puede acudir a SUSALUD.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => window.print()}
                                className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
                            >
                                <Printer className="w-5 h-5" /> Imprimir / Guardar PDF
                            </button>
                            <button
                                onClick={() => window.location.href = '/'}
                                className="flex-1 bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all text-center"
                            >
                                Volver al Inicio
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header Oficial SUSALUD Formato */}
            <header className="bg-hospital-blue text-white py-12 px-4 shadow-lg border-b-8 border-red-600">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-4 opacity-80">
                                <BookOpen className="w-6 h-6 text-red-400" />
                                <span className="font-semibold tracking-widest uppercase text-sm">Libro de Reclamaciones Virtual</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">Hoja de Reclamación</h1>
                            <p className="opacity-90 max-w-2xl text-sm md:text-base leading-relaxed">
                                Formulario Único de Reclamo (FUR) conforme al D.S. N° 002-2019-SA de SUSALUD.
                                Complete con veracidad los campos obligatorios (*) para procesar su atención.
                            </p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20 text-center shrink-0">
                            <ShieldCheck className="w-10 h-10 mx-auto mb-2 text-green-400" />
                            <p className="text-xs font-bold tracking-wider uppercase">Vigilado por</p>
                            <p className="text-xl font-bold">SUSALUD</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto max-w-4xl px-4 -mt-6 relative z-10">
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

                    {/* Sección 1: Identificación del Reclamante */}
                    <div className="p-6 md:p-8 border-b border-gray-100">
                        <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-100">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-hospital-blue font-bold">1</div>
                            <h2 className="text-xl font-bold text-gray-800">Identificación del Reclamante (Quien presenta el reclamo)</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField name="tipoDocRecl" label="Tipo de Documento" type="select" options={["DNI", "Carnet de Extranjería", "Pasaporte"]} required />
                            <InputField name="numDocRecl" label="Número de Documento" type="number" placeholder="Ej: 12345678" required />
                            <InputField name="nombres" label="Nombres" placeholder="Nombres completos" onChange={handleInputChange} required />
                            <InputField name="apellidos" label="Apellidos" placeholder="Apellidos completos" onChange={handleInputChange} required />
                            <InputField name="celular" label="Celular / Teléfono" type="tel" icon={Phone} required />
                            <InputField name="email" label="Correo Electrónico" type="email" icon={Mail} placeholder="Para notificarle la respuesta formal" required />
                            <div className="md:col-span-2">
                                <InputField name="direccion" label="Domicilio Fijo" icon={MapPin} placeholder="Dirección para correspondencia física (Opcional)" />
                            </div>
                        </div>
                    </div>

                    {/* Sección 2: Identificación del Afectado (Paciente) */}
                    <div className="p-6 md:p-8 border-b border-gray-100 bg-slate-50">
                        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-gray-200">
                            <div>
                                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                                    <User className="w-5 h-5 text-hospital-blue" />
                                    ¿El reclamo es para usted mismo?
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">Si usted es la persona que recibió la atención médica, seleccione Sí.</p>
                            </div>
                            <div className="flex gap-4">
                                <label className={`px-6 py-2 rounded-lg font-bold cursor-pointer transition-colors ${isAfectado ? 'bg-hospital-blue text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                    <input type="radio" name="esAfectado" className="hidden" checked={isAfectado} onChange={() => setIsAfectado(true)} />
                                    Sí, soy el afectado
                                </label>
                                <label className={`px-6 py-2 rounded-lg font-bold cursor-pointer transition-colors ${!isAfectado ? 'bg-hospital-blue text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                    <input type="radio" name="esAfectado" className="hidden" checked={!isAfectado} onChange={() => setIsAfectado(false)} />
                                    No, es otra persona
                                </label>
                            </div>
                        </div>

                        {!isAfectado && (
                            <div className="animate-fade-in-up border-l-4 border-hospital-blue pl-6 py-2">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">Datos del Paciente Afectado / Menor de Edad</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField name="tipoDocPac" label="Tipo de Documento del Paciente" type="select" options={["DNI", "CUI / DNI Menor", "Carnet de Extranjería", "No cuenta con documento"]} required={!isAfectado} />
                                    <InputField name="numDocPac" label="Número de Documento" type="number" required={!isAfectado} />
                                    <InputField name="nombresPac" label="Nombres del Paciente" required={!isAfectado} />
                                    <InputField name="apellidosPac" label="Apellidos del Paciente" required={!isAfectado} />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sección 3: Detalle del Suceso */}
                    <div className="p-6 md:p-8 border-b border-gray-100">
                        <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-100">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-hospital-blue font-bold">2</div>
                            <h2 className="text-xl font-bold text-gray-800">Detalles del Suceso</h2>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
                            <label className="block text-sm font-bold text-gray-800 mb-4 uppercase tracking-wider">Clasificación SUSALUD <span className="text-red-500">*</span></label>
                            <div className="flex flex-col md:flex-row gap-4">
                                <label className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all flex-1 bg-white ${formData.tipoReclamo === 'RECLAMO' ? 'border-amber-500 shadow-md scale-[1.02]' : 'border-gray-200 hover:border-amber-300'}`}>
                                    <div className="mt-1">
                                        <input type="radio" name="tipoReclamo" value="RECLAMO" checked={formData.tipoReclamo === 'RECLAMO'} onChange={handleRadioChange} className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block font-bold text-gray-900 text-lg mb-1">RECLAMO</span>
                                        <span className="text-sm text-gray-600 leading-relaxed">Disconformidad relacionada directamente a los <strong>servicios de salud</strong> (Ej. Negación de atención, cobros indebidos, mala praxis médica, falta de medicamentos).</span>
                                    </div>
                                </label>
                                <label className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all flex-1 bg-white ${formData.tipoReclamo === 'QUEJA' ? 'border-amber-500 shadow-md scale-[1.02]' : 'border-gray-200 hover:border-amber-300'}`}>
                                    <div className="mt-1">
                                        <input type="radio" name="tipoReclamo" value="QUEJA" checked={formData.tipoReclamo === 'QUEJA'} onChange={handleRadioChange} className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block font-bold text-gray-900 text-lg mb-1">QUEJA</span>
                                        <span className="text-sm text-gray-600 leading-relaxed">Malestar que NO se relaciona a la salud directamente, sino al <strong>trato, infraestructura o información</strong> (Ej. Malos modales, baños sucios, demora en caja).</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <InputField name="fechaIncidente" label="Fecha de Ocurrencia del Incidente" type="date" required />
                            <InputField
                                name="area"
                                label="Servicio / Área Hospitalaria"
                                type="select"
                                options={[
                                    "Consulta Externa (Especialidades Médicas)",
                                    "Consulta Externa (Procedimientos Médicos)",
                                    "Emergencia y Críticos",
                                    "Hospitalización",
                                    "Ayuda al Diagnóstico (Imágenes y Lab)",
                                    "Farmacia",
                                    "Admisión y Citas",
                                    "Caja y Facturación",
                                    "Vigilancia / Seguridad",
                                    "Otro"
                                ]}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-bold text-gray-800 mb-2">Descripción de los Hechos <span className="text-red-500">*</span></label>
                            <p className="text-xs text-gray-500 mb-2">Describa detalladamente el incidente, fechas, personal involucrado (si conoce nombres o cargos).</p>
                            <textarea
                                name="descripcion"
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hospital-blue focus:border-transparent outline-none transition-all resize-y"
                                placeholder="..."
                                required
                            ></textarea>
                        </div>

                        <div className="mb-2">
                            <label className="block text-sm font-bold text-gray-800 mb-2">Pedido Concreto / Solicitud (Opcional)</label>
                            <textarea
                                name="pedido"
                                rows={2}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hospital-blue focus:border-transparent outline-none transition-all resize-y"
                                placeholder="Indique qué solución específica usted espera por parte de nuestra institución..."
                            ></textarea>
                        </div>
                    </div>

                    {/* Sección 4: Declaraciones Juradas y Normativa */}
                    <div className="p-6 md:p-8 bg-slate-100 border-t-4 border-gray-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center text-gray-700 font-bold">3</div>
                            <h2 className="text-xl font-bold text-gray-800">Declaraciones y Términos Legales</h2>
                        </div>

                        <div className="space-y-4 mb-8">
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input type="checkbox" required className="mt-1 w-5 h-5 rounded border-gray-400 text-hospital-blue focus:ring-hospital-blue shrink-0" />
                                <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                                    <strong>Declaración Jurada:</strong> Declaro bajo juramento que los hechos acá descritos son verdaderos y me someto a las responsabilidades civiles y penales correspondientes de probarse lo contrario.
                                </span>
                            </label>

                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input type="checkbox" required className="mt-1 w-5 h-5 rounded border-gray-400 text-hospital-blue focus:ring-hospital-blue shrink-0" />
                                <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                                    <strong>Tratamiento de Datos Personales (Ley N° 29733):</strong> Autorizo al Hospital y a SUSALUD al tratamiento de mis datos personales brindados en este formulario estrictamente para los fines de investigación y resolución de la presente solicitud.
                                </span>
                            </label>

                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input type="checkbox" required className="mt-1 w-5 h-5 rounded border-gray-400 text-hospital-blue focus:ring-hospital-blue shrink-0" />
                                <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                                    <strong>Auditoría Médica y Confidencialidad:</strong> Autorizo a la Plataforma de Atención al Usuario en Salud (PAUS) a acceder y revisar la Historia Clínica del paciente para investigar y verificar los hechos descritos en este expediente.
                                </span>
                            </label>

                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input type="checkbox" required className="mt-1 w-5 h-5 rounded border-gray-400 text-hospital-blue focus:ring-hospital-blue shrink-0" />
                                <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                                    <strong>Autorización de Notificación:</strong> Autorizo expresamente que la notificación del resultado y respuesta de esta Hoja de Reclamación me sea enviada al <strong>Correo Electrónico</strong> proporcionado.
                                </span>
                            </label>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-300">
                            <div className="text-xs text-gray-500 font-medium flex-1">
                                * El envío de este formulario tiene carácter de declaración jurada virtual y no requiere firma manuscrita durante el estado de simplificación administrativa.
                            </div>
                            <button type="submit" className="w-full md:w-auto bg-red-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/30 transform hover:-translate-y-1">
                                <Send className="w-5 h-5" />
                                Firmar y Presentar Formulario
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </main>
    );
}

// Componente Helper de Entradas
function InputField({ label, name, type = "text", placeholder, icon: Icon, options, required = false, onChange }: any) {
    return (
        <div className="w-full">
            <label className="block text-sm font-bold text-gray-800 mb-2">
                {label} {required && <span className="text-red-500 font-bold">*</span>}
            </label>
            <div className="relative">
                {Icon && (
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Icon className="w-5 h-5" />
                    </div>
                )}

                {type === 'select' ? (
                    <select name={name} onChange={onChange} required={required} className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hospital-blue focus:border-transparent outline-none transition-all bg-white text-gray-700`}>
                        <option value="">Seleccione una opción...</option>
                        {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                ) : (
                    <input
                        name={name}
                        type={type}
                        onChange={onChange}
                        className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hospital-blue focus:border-transparent outline-none transition-all`}
                        placeholder={placeholder}
                        required={required}
                    />
                )}
            </div>
        </div>
    )
}
