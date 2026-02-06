'use client';

import React, { useState } from 'react';
import { Search, FileText, ChevronDown, ChevronUp, Download, ExternalLink, Scale, Shield, Building, BookOpen } from 'lucide-react';

// Data for the Normatividad section
const REGULATION_DATA = [
    {
        category: "Marco Legal General",
        icon: Scale,
        description: "Leyes y decretos fundamentales del sistema de salud.",
        items: [
            {
                title: "Ley General de Salud",
                code: "Ley N° 26842",
                description: "Establece los derechos, deberes y responsabilidades concernientes a la salud individual y pública.",
                url: "https://www.gob.pe/institucion/minsa/normas-legales/26842-ley-26842", // Generic link found in research or placeholder
                type: "link"
            },
            {
                title: "Ley Marco de Aseguramiento Universal en Salud",
                code: "Ley N° 29344",
                description: "Garantiza el derecho pleno y progresivo de toda persona a la seguridad social en salud.",
                url: "#",
                type: "pdf"
            },
            {
                title: "Ley de Organización y Funciones del Ministerio de Salud",
                code: "Decreto Legislativo N° 1161",
                description: "Define la estructura y competencias del ente rector del sistema de salud.",
                url: "#",
                type: "pdf"
            },
            {
                title: "Reglamento de Establecimientos de Salud",
                code: "D.S. N° 013-2006-SA",
                description: "Regula las condiciones y requisitos para la operación de establecimientos de salud.",
                url: "#",
                type: "pdf"
            }
        ]
    },
    {
        category: "Normatividad Técnica",
        icon: Shield,
        description: "Normas técnicas del MINSA y SUSALUD para la operación hospitalaria.",
        items: [
            {
                title: "Norma Técnica de Salud para la Atención Integral",
                code: "NTS N° 021-MINSA/DGSP",
                description: "Estándares para la categorización de establecimientos del sector salud.",
                url: "#",
                type: "pdf"
            },
            {
                title: "Norma Técnica de Historia Clínica",
                code: "NTS N° 139-MINSA/2018/DGAIN",
                description: "Gestión y manejo de la historia clínica en los establecimientos de salud.",
                url: "#",
                type: "pdf"
            }
        ]
    },
    {
        category: "Documentos de Gestión",
        icon: Building,
        description: "Instrumentos de gestión interna del Hospital.",
        items: [
            {
                title: "Reglamento de Organización y Funciones (ROF)",
                code: "ROF Institucional",
                description: "Documento técnico normativo de gestión institucional.",
                url: "#",
                type: "pdf"
            },
            {
                title: "Manual de Organización y Funciones (MOF)",
                code: "MOF Vigente",
                description: "Describe las funciones específicas de los cargos.",
                url: "#",
                type: "pdf"
            },
            {
                title: "Plan Operativo Institucional (POI)",
                code: "POI 2025",
                description: "Instrumento de gestión de corto plazo.",
                url: "#",
                type: "pdf"
            }
        ]
    },
    {
        category: "Transparencia y Trámites",
        icon: BookOpen,
        description: "Información pública y procedimientos administrativos.",
        items: [
            {
                title: "Texto Único de Procedimientos Administrativos (TUPA)",
                code: "TUPA Actualizado",
                description: "Requisitos y derechos de tramitación.",
                url: "#",
                type: "pdf"
            },
            {
                title: "Libro de Reclamaciones en Salud",
                code: "Plataforma Virtual",
                description: "Presente su reclamo o queja ante la IPRESS.",
                url: "http://reclamos.susalud.gob.pe/",
                type: "link"
            }
        ]
    }
];

export default function NormatividadPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [openCategories, setOpenCategories] = useState<string[]>(["Marco Legal General"]);

    const toggleCategory = (category: string) => {
        setOpenCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const filteredData = REGULATION_DATA.map(section => {
        const filteredItems = section.items.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return { ...section, items: filteredItems };
    }).filter(section => section.items.length > 0);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-hospital-blue text-white py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl font-bold mb-4">Normatividad Institucional</h1>
                    <p className="text-hospital-light text-lg max-w-2xl">
                        Acceda a la base legal, normas técnicas y documentos de gestión que rigen el funcionamiento y la calidad de nuestros servicios de salud.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-5xl -mt-8">
                {/* Search Bar card */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-10">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Buscar norma por nombre, código o palabra clave..."
                            className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:border-hospital-blue focus:ring-2 focus:ring-hospital-blue/20 outline-none transition-all text-gray-700"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    {filteredData.length > 0 ? (
                        filteredData.map((section, idx) => (
                            <div key={idx} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                                <button
                                    onClick={() => toggleCategory(section.category)}
                                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-hospital-blue/10 rounded-lg text-hospital-blue">
                                            <section.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-800">{section.category}</h2>
                                            <p className="text-sm text-gray-500 mt-1">{section.description}</p>
                                        </div>
                                    </div>
                                    {openCategories.includes(section.category) ? (
                                        <ChevronUp className="w-5 h-5 text-gray-400" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    )}
                                </button>

                                {openCategories.includes(section.category) && (
                                    <div className="border-t border-gray-100">
                                        {section.items.map((item, itemIdx) => (
                                            <div
                                                key={itemIdx}
                                                className="p-6 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                                            >
                                                <div className="space-y-2 flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
                                                            {item.code}
                                                        </span>
                                                    </div>
                                                    <h3 className="font-semibold text-gray-800 text-lg group-hover:text-hospital-blue transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <div className="shrink-0">
                                                    <a
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-hospital-blue hover:bg-hospital-blue hover:text-white hover:border-hospital-blue transition-all font-medium text-sm shadow-sm"
                                                    >
                                                        {item.type === 'pdf' ? (
                                                            <>
                                                                <Download className="w-4 h-4" />
                                                                Descargar PDF
                                                            </>
                                                        ) : (
                                                            <>
                                                                <ExternalLink className="w-4 h-4" />
                                                                Ver documento
                                                            </>
                                                        )}
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
                            <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                                <Search className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">No se encontraron resultados</h3>
                            <p className="text-gray-500 mt-2">Intenta buscar con otros términos o revisa todas las categorías.</p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="mt-6 text-hospital-blue font-medium hover:underline"
                            >
                                Limpiar búsqueda
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
