"use client";

import React, { useState, useMemo } from 'react';
import { Search, FileText, ChevronLeft, ChevronRight, Filter, AlertCircle } from 'lucide-react';
import { TARIFARIO_DATA } from '@/data/tarifario';

const ITEMS_PER_PAGE = 15;

export default function TarifarioPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("TODOS");
    const [currentPage, setCurrentPage] = useState(1);

    // Extract unique categories for filter
    const categories = useMemo(() => {
        const cats = Array.from(new Set(TARIFARIO_DATA.map(item => item.category))).sort();
        return ["TODOS", ...cats];
    }, []);

    // Filter Logic
    const filteredData = useMemo(() => {
        return TARIFARIO_DATA.filter(item => {
            const matchesSearch =
                item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.code.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCategory = selectedCategory === "TODOS" || item.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Handlers
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to page 1 on search
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
        setCurrentPage(1);
    };

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-12 px-4 shadow-md">
                <div className="container mx-auto max-w-5xl">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3">
                        <FileText className="w-8 h-8 md:w-10 md:h-10 text-blue-200" />
                        Tarifario y Presupuestos
                    </h1>
                    <p className="text-lg opacity-90 font-light max-w-2xl">
                        Consulta los costos oficiales de nuestros procedimientos médicos y servicios de salud (CPMS).
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 mt-8">

                {/* Search & Filter Bar */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 sticky top-4 z-20">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search Input */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Buscar procedimiento por nombre o código..."
                                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-hospital-blue outline-none transition-all"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="w-full md:w-64 relative">
                            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-hospital-blue w-5 h-5" />
                            <select
                                className="w-full pl-12 pr-10 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-hospital-blue outline-none transition-all appearance-none bg-white cursor-pointer"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                            {/* Custom arrow icon for select */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div>
                    {/* Results count */}
                    <div className="mt-3 text-sm text-gray-500 flex justify-between items-center">
                        <p>Mostrando {paginatedData.length} de {filteredData.length} resultados</p>
                        {filteredData.length === 0 && (
                            <span className="text-red-500 flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" /> Sin resultados
                            </span>
                        )}
                    </div>
                </div>

                {/* Data Table / Cards */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden min-h-[400px]">
                    {/* Desktop Header */}
                    <div className="hidden md:grid grid-cols-12 bg-gray-50 border-b border-gray-200 py-4 px-6 text-sm font-bold text-gray-600 uppercase tracking-wider">
                        <div className="col-span-2">Código</div>
                        <div className="col-span-6">Descripción</div>
                        <div className="col-span-2">Categoría</div>
                        <div className="col-span-2 text-right">Precio (S/)</div>
                    </div>

                    {/* Loading State or Empty State handling could go here */}

                    {/* Rows */}
                    <div className="divide-y divide-gray-100">
                        {paginatedData.map((item, index) => (
                            <div key={`${item.code}-${index}`} className="group hover:bg-blue-50/50 transition-colors">
                                {/* Desktop Row */}
                                <div className="hidden md:grid grid-cols-12 py-4 px-6 items-center">
                                    <div className="col-span-2 font-mono text-gray-500 text-sm">{item.code}</div>
                                    <div className="col-span-6 font-medium text-gray-800 pr-4">{item.description}</div>
                                    <div className="col-span-2">
                                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="col-span-2 text-right font-bold text-hospital-blue text-lg">
                                        S/ {item.price.toFixed(2)}
                                    </div>
                                </div>

                                {/* Mobile Card View */}
                                <div className="md:hidden p-5 flex flex-col gap-3">
                                    <div className="flex justify-between items-start">
                                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-mono font-bold">
                                            {item.code}
                                        </span>
                                        <span className="text-hospital-blue font-bold text-xl">
                                            S/ {item.price.toFixed(2)}
                                        </span>
                                    </div>
                                    <h3 className="font-medium text-gray-800 leading-tight">
                                        {item.description}
                                    </h3>
                                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                                        {item.category}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredData.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                            <Search className="w-16 h-16 mb-4 opacity-20" />
                            <p className="text-lg font-medium text-gray-500">No se encontraron resultados</p>
                            <p className="text-sm">Intenta con otros términos de búsqueda</p>
                        </div>
                    )}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-8 gap-2">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg border border-gray-200 hover:bg-white hover:border-hospital-blue disabled:opacity-50 disabled:cursor-not-allowed transition-all bg-white shadow-sm"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>

                        <div className="flex items-center px-4 bg-white rounded-lg border border-gray-200 shadow-sm font-medium text-gray-600">
                            Página {currentPage} de {totalPages}
                        </div>

                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg border border-gray-200 hover:bg-white hover:border-hospital-blue disabled:opacity-50 disabled:cursor-not-allowed transition-all bg-white shadow-sm"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                )}

            </div>
        </main>
    );
}
