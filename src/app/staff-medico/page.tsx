"use client";

import React, { useState, useMemo } from 'react';
import { Search, Filter, User, Award, Stethoscope } from 'lucide-react';
import { DOCTORS_DATA, SPECIALTIES } from '@/data/doctors';

export default function StaffMedicoPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState("");

    const filteredDoctors = useMemo(() => {
        return DOCTORS_DATA.filter(doctor => {
            const matchesSearch =
                doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                doctor.cmp.includes(searchTerm);

            const matchesSpecialty = selectedSpecialty === "" || doctor.specialty === selectedSpecialty;

            return matchesSearch && matchesSpecialty;
        });
    }, [searchTerm, selectedSpecialty]);

    return (
        <main className="min-h-screen bg-hospital-bg pb-20">
            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-16 px-4">
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Staff Médico</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
                        Conoce a nuestros especialistas altamente calificados y comprometidos con tu salud.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 -mt-8 relative z-10">
                {/* Search & Filter Bar */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-10 flex flex-col md:flex-row gap-4">
                    <div className="relative flex-grow">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Buscar por nombre o número de CMP..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-hospital-light focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <div className="relative md:w-1/3">
                        <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select
                            value={selectedSpecialty}
                            onChange={(e) => setSelectedSpecialty(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-hospital-light focus:border-transparent outline-none transition-all bg-white appearance-none cursor-pointer"
                        >
                            <option value="">Todas las Especialidades</option>
                            {SPECIALTIES.map(specialty => (
                                <option key={specialty} value={specialty}>{specialty}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Directory Grid */}
                {filteredDoctors.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredDoctors.map((doctor) => (
                            <div key={doctor.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                                <div className="p-6 flex flex-col items-center text-center gap-4">
                                    {/* Avatar / Placeholder */}
                                    <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center text-hospital-blue shrink-0 group-hover:bg-hospital-blue group-hover:text-white transition-colors mb-2 border-4 border-white shadow-sm">
                                        {doctor.image ? (
                                            <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover rounded-full" />
                                        ) : (
                                            <User className="w-12 h-12" />
                                        )}
                                    </div>

                                    <div className="w-full min-w-0">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-hospital-blue text-xs font-bold uppercase tracking-wider mb-3">
                                            <Stethoscope className="w-3 h-3" />
                                            {doctor.specialty}
                                        </span>
                                        <h3 className="font-bold text-gray-800 text-xl leading-tight mb-2">
                                            {doctor.name}
                                        </h3>

                                        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-medium bg-gray-50 py-2 px-4 rounded-lg mt-2 mx-auto inline-block">
                                            <Award className="w-4 h-4 text-hospital-light" />
                                            <span>CMP: {doctor.cmp}</span>
                                            {doctor.rne && (
                                                <>
                                                    <span className="mx-1 text-gray-300">|</span>
                                                    <span>RNE: {doctor.rne}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 border-dashed">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                            <Search className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">No se encontraron resultados</h3>
                        <p className="text-gray-500">
                            Intenta ajustar tu búsqueda o los filtros seleccionados.
                        </p>
                        <button
                            onClick={() => { setSearchTerm(""); setSelectedSpecialty(""); }}
                            className="mt-6 text-hospital-blue font-bold hover:underline"
                        >
                            Limpiar filtros
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
