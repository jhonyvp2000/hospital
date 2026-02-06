"use client";

import React, { useState } from 'react';
import { FileText, Search, Filter, Download, Eye, Calendar, BookOpen, Layers, Shield, FileCheck } from 'lucide-react';
import Link from 'next/link';

// Categorías de documentos
type Category = 'Todos' | 'Instrumentos de Gestión' | 'Planes y Presupuesto' | 'Normatividad' | 'Recursos Humanos';

// Mock Data de Documentos (Basado en la investigación)
const DOCUMENTS = [
    {
        id: 1,
        title: "Reglamento de Organización y Funciones (ROF)",
        category: "Instrumentos de Gestión",
        year: "2024",
        date: "15 Ene 2024",
        description: "Documento técnico normativo de gestión institucional que formaliza la estructura orgánica de la entidad.",
        fileSize: "2.5 MB",
        type: "PDF"
    },
    {
        id: 2,
        title: "Manual de Organización y Funciones (MOF)",
        category: "Instrumentos de Gestión",
        year: "2023",
        date: "10 Mar 2023",
        description: "Describe las funciones específicas y requisitos de los cargos o puestos de trabajo.",
        fileSize: "4.8 MB",
        type: "PDF"
    },
    {
        id: 3,
        title: "Plan Estratégico Institucional (PEI) 2024-2027",
        category: "Planes y Presupuesto",
        year: "2024",
        date: "02 Feb 2024",
        description: "Instrumento de gestión que identifica la estrategia de la entidad para lograr sus objetivos de política.",
        fileSize: "1.2 MB",
        type: "PDF"
    },
    {
        id: 4,
        title: "Plan Operativo Institucional (POI) Anual 2025",
        category: "Planes y Presupuesto",
        year: "2025",
        date: "20 Dic 2024",
        description: "Instrumento de gestión que orienta la asignación de recursos para implementar la estrategia institucional.",
        fileSize: "3.1 MB",
        type: "PDF"
    },
    {
        id: 5,
        title: "Texto Único de Procedimientos Administrativos (TUPA)",
        category: "Normatividad",
        year: "2024",
        date: "05 Abr 2024",
        description: "Documento de gestión que contiene los procedimientos administrativos y servicios exclusivos.",
        fileSize: "5.5 MB",
        type: "PDF"
    },
    {
        id: 6,
        title: "Cuadro para Asignación de Personal (CAP) Provisional",
        category: "Recursos Humanos",
        year: "2024",
        date: "12 Jun 2024",
        description: "Documento de gestión institucional que contiene los cargos definidos y aprobados de la entidad.",
        fileSize: "1.8 MB",
        type: "PDF"
    },
    {
        id: 7,
        title: "Manual de Procesos y Procedimientos (MAPRO)",
        category: "Instrumentos de Gestión",
        year: "2023",
        date: "18 Ago 2023",
        description: "Documento descriptivo y de sistematización normativa que tiene por objeto la descripción de los procedimientos.",
        fileSize: "6.2 MB",
        type: "PDF"
    },
    {
        id: 8,
        title: "Código de Ética y Conducta",
        category: "Normatividad",
        year: "2024",
        date: "10 Ene 2024",
        description: "Principios, deberes y prohibiciones éticas que rigen a los servidores públicos del hospital.",
        fileSize: "0.8 MB",
        type: "PDF"
    }
];

const CATEGORIES: Category[] = ['Todos', 'Instrumentos de Gestión', 'Planes y Presupuesto', 'Normatividad', 'Recursos Humanos'];

export default function GestionPage() {
    const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDocs = DOCUMENTS.filter(doc => {
        const matchesCategory = selectedCategory === 'Todos' || doc.category === selectedCategory;
        const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-hospital-bg pb-20">
            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-16 px-4">
                <div className="container mx-auto max-w-5xl text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm border border-blue-400/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        <FileCheck className="w-4 h-4" /> Transparencia y Acceso a la Información
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">Documentos de Gestión</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
                        Accede, consulta y descarga nuestros principales instrumentos de planificación, organización y normatividad institucional.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 -mt-8 relative z-10">

                {/* Controls Bar */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-10">
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-center">

                        {/* Search and Filters */}
                        <div className="w-full flex flex-col md:flex-row gap-4">
                            <div className="relative flex-grow">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Buscar documento (ej: ROF, POI 2025)..."
                                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-hospital-light focus:border-transparent outline-none transition-all"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            {/* Categories Pills (Desktop) */}
                            <div className="hidden md:flex bg-gray-100 p-1 rounded-lg overflow-x-auto">
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === cat
                                                ? 'bg-white text-hospital-blue shadow-sm'
                                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Categories Select (Mobile) */}
                            <div className="md:hidden relative w-full">
                                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <select
                                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg outline-none bg-white appearance-none"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value as Category)}
                                >
                                    {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                </select>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Documents Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDocs.length > 0 ? (
                        filteredDocs.map((doc) => (
                            <div key={doc.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col">
                                <div className="p-6 flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-12 h-12 bg-red-50 text-red-500 rounded-lg flex items-center justify-center shrink-0">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <span className="bg-blue-50 text-hospital-blue text-xs font-bold px-2.5 py-1 rounded-full">
                                            {doc.year}
                                        </span>
                                    </div>

                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 block">
                                        {doc.category}
                                    </span>

                                    <h3 className="text-lg font-bold text-gray-800 mb-3 leading-snug group-hover:text-hospital-blue transition-colors">
                                        {doc.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
                                        {doc.description}
                                    </p>
                                </div>

                                <div className="px-6 py-4 border-t border-gray-50 bg-gray-50/50 flex justify-between items-center rounded-b-xl">
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{doc.date}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
                                        <span>{doc.fileSize}</span>
                                    </div>
                                    <button className="flex items-center gap-1.5 text-sm font-bold text-hospital-blue hover:text-hospital-light transition-colors">
                                        <Download className="w-4 h-4" />
                                        Descargar
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center text-gray-500">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">No se encontraron documentos</h3>
                            <p>Intenta con otros términos de búsqueda o cambia el filtro de categoría.</p>
                        </div>
                    )}
                </div>

            </div>
        </main>
    );
}
