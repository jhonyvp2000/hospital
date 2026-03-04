'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, Search, Shield, ChevronRight, Info, Building2, Map, Users } from 'lucide-react';

// Datos de Microredes y Establecimientos
const REDES_SALUD = [
    {
        provincia: "San Martín (Sede Tarapoto)",
        descripcion: "Red de Salud San Martín conformada por 8 Micro Redes y 51 Establecimientos.",
        centros: [
            { nombre: "C.S. Banda de Shilcayo", tipo: "Centro de Salud", direccion: "Jr. Alegría Arias de Morey S/N", telefono: "(042) 522-111" },
            { nombre: "C.S. Morales", tipo: "Centro de Salud", direccion: "Jr. Francisco Pizarro 123", telefono: "(042) 524-222" },
            { nombre: "C.S. Chazuta", tipo: "Centro de Salud", direccion: "Jr. Comercio Cdra. 3", telefono: "-" },
            { nombre: "P.S. Juan Guerra", tipo: "Puesto de Salud", direccion: "Plaza de Armas S/N", telefono: "-" },
            { nombre: "P.S. Sauce", tipo: "Puesto de Salud", direccion: "Jr. Leticia Mz. C", telefono: "-" },
        ]
    },
    {
        provincia: "Moyobamba",
        descripcion: "Sede de la zona del Alto Mayo con establecimientos jerarquizados.",
        centros: [
            { nombre: "C.S. Jepelacio", tipo: "Centro de Salud", direccion: "Jr. San Martín Cdra. 4", telefono: "-" },
            { nombre: "C.S. Soritor", tipo: "Centro de Salud", direccion: "Av. Grau 456", telefono: "-" },
            { nombre: "P.S. Yantaló", tipo: "Puesto de Salud", direccion: "Carretera Principal", telefono: "-" },
            { nombre: "P.S. Calzada", tipo: "Puesto de Salud", direccion: "Plaza Mayor", telefono: "-" }
        ]
    },
    {
        provincia: "Rioja",
        descripcion: "Establecimientos de primer nivel en el valle del Alto Mayo.",
        centros: [
            { nombre: "C.S. Naranjos", tipo: "Centro de Salud", direccion: "Av. Principal Naranjos", telefono: "-" },
            { nombre: "C.S. Naranjillo", tipo: "Centro de Salud", direccion: "Jr. Comercio", telefono: "-" },
            { nombre: "P.S. San Fernando", tipo: "Puesto de Salud", direccion: "Sector Rural S/N", telefono: "-" }
        ]
    },
    {
        provincia: "Bellavista",
        descripcion: "Red de Salud de la zona centro de la región.",
        centros: [
            { nombre: "C.S. Bellavista", tipo: "Centro de Salud", direccion: "Av. Huallaga S/N", telefono: "(042) 541-111" },
            { nombre: "C.S. San Rafael", tipo: "Centro de Salud", direccion: "Jr. Lima 222", telefono: "-" },
            { nombre: "P.S. Barranca", tipo: "Puesto de Salud", direccion: "Carretera FBT", telefono: "-" }
        ]
    },
    {
        provincia: "Tocache",
        descripcion: "Atención primaria para la zona sur de la región San Martín.",
        centros: [
            { nombre: "C.S. Nuevo Progreso", tipo: "Centro de Salud", direccion: "Jr. Progreso", telefono: "-" },
            { nombre: "C.S. Uchiza", tipo: "Centro de Salud", direccion: "Av. Principal Uchiza", telefono: "(042) 555-222" },
            { nombre: "P.S. Puerto Pizana", tipo: "Puesto de Salud", direccion: "Puerto Principal", telefono: "-" }
        ]
    }
];

export default function RedesSaludPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeProv, setActiveProv] = useState(REDES_SALUD[0].provincia);

    // Filter Logic
    const filteredCentros = REDES_SALUD.find(r => r.provincia === activeProv)?.centros.filter(c =>
        c.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.tipo.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    return (
        <main className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <header className="bg-hospital-blue text-white py-16 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
                    <Map size={300} />
                </div>
                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Directorio de Redes de Salud</h1>
                    <p className="text-xl text-blue-100 font-light max-w-3xl mx-auto mb-8">
                        Encuentre el Centro o Puesto de Salud de Primer Nivel más cercano a su domicilio.
                        <br className="hidden md:block" /> Ellos evaluarán su caso y, de ser necesario, lo derivarán a nuestro Hospital.
                    </p>

                    <div className="bg-white/10 p-4 rounded-2xl border border-white/20 inline-flex items-center gap-3 mb-8 backdrop-blur-md">
                        <Shield className="w-8 h-8 text-green-400" />
                        <div className="text-left text-sm md:text-base">
                            <span className="font-bold text-white block">Región San Martín</span>
                            <span className="text-blue-100">Ministerio de Salud (MINSA)</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto max-w-6xl px-4 -mt-10 relative z-20">
                {/* Information Card (Why Primary Care) */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                        <Info className="w-12 h-12 text-amber-500" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">¿Por qué acudir primero a un Centro de Salud?</h2>
                        <p className="text-gray-600 leading-relaxed">
                            El 80% de los problemas de salud se resuelven en el **Primer Nivel de Atención** (Postas y Centros de Salud).
                            Acudir allí primero evita saturar las emergencias hospitalarias y asegura que los hospitales especializados (Nivel II y III)
                            puedan atender casos de alta complejidad. Si su médico de posta lo considera necesario, le entregará una **Hoja de Referencia** para venir a nuestro hospital.
                        </p>
                        <div className="mt-4">
                            <Link href="/citas" className="inline-flex items-center gap-2 text-hospital-blue font-bold hover:underline">
                                Ya tengo mi Hoja de Referencia, quiero sacar cita <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Sidebar NAVEGADOR DE PROVINCIAS */}
                    <div className="lg:col-span-1 space-y-2">
                        <h3 className="text-lg font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">Provincias / Redes</h3>
                        {REDES_SALUD.map((red) => (
                            <button
                                key={red.provincia}
                                onClick={() => { setActiveProv(red.provincia); setSearchTerm(''); }}
                                className={`w-full text-left px-5 py-4 rounded-xl font-bold transition-all flex items-center justify-between group ${activeProv === red.provincia ? 'bg-hospital-blue text-white shadow-md transform scale-105' : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-hospital-blue border border-gray-100 shadow-sm'}`}
                            >
                                <span className="flex items-center gap-3">
                                    <MapPin className={`w-5 h-5 ${activeProv === red.provincia ? 'text-blue-300' : 'text-gray-400 group-hover:text-blue-500'}`} />
                                    {red.provincia}
                                </span>
                                {activeProv === red.provincia && <ChevronRight className="w-5 h-5" />}
                            </button>
                        ))}
                    </div>

                    {/* Main Content CONTENEDOR DE CENTROS */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            {/* Header del Contenido */}
                            <div className="p-6 md:p-8 bg-slate-50 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-1">
                                        Red de Salud: {activeProv}
                                    </h2>
                                    <p className="text-gray-500 text-sm">
                                        {REDES_SALUD.find(r => r.provincia === activeProv)?.descripcion}
                                    </p>
                                </div>
                                <div className="relative w-full md:w-64 shrink-0">
                                    <input
                                        type="text"
                                        placeholder="Buscar centro o posta..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-hospital-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                    />
                                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                </div>
                            </div>

                            {/* Listado de Centros */}
                            <div className="p-6 md:p-8">
                                {filteredCentros.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {filteredCentros.map((centro, idx) => (
                                            <div key={idx} className="border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-md hover:bg-blue-50/30 transition-all flex flex-col h-full group">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className={`text-xs font-bold px-2 py-1 rounded inline-block uppercase tracking-wider ${centro.tipo === 'Centro de Salud' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>
                                                            {centro.tipo}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-hospital-blue transition-colors">
                                                        {centro.nombre}
                                                    </h4>

                                                    <div className="space-y-2 text-sm text-gray-600">
                                                        <p className="flex items-start gap-2">
                                                            <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-gray-400" />
                                                            {centro.direccion}
                                                        </p>
                                                        <p className="flex items-start gap-2">
                                                            <Phone className="w-4 h-4 shrink-0 mt-0.5 text-gray-400" />
                                                            {centro.telefono}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Horario Referencial</span>
                                                    <span>08:00 - 18:00</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12 text-gray-400">
                                        <Building2 className="w-16 h-16 mx-auto mb-4 opacity-20" />
                                        <p>No se encontraron establecimientos con ese nombre en esta provincia.</p>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
