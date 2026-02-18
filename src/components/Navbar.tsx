'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, X, Phone, User, Globe } from 'lucide-react';
import { MENU_DATA } from '@/lib/menu-data';
import MegaMenu from './MegaMenu';

export default function Navbar() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMouseEnter = (label: string) => {
        setActiveCategory(label);
    };

    const handleMouseLeave = () => {
        setActiveCategory(null);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 font-sans shadow-sm">
            {/* Top Bar - Accesibilidad y Contacto Rápido */}
            <div className="bg-hospital-bg border-b border-gray-100 hidden md:block">
                <div className="container mx-auto max-w-7xl px-4 py-2 flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> Español</span>
                        <a href="#" className="hover:text-hospital-blue">Accesibilidad</a>
                        <a href="#" className="hover:text-hospital-blue">Mapa del Sitio</a>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1 font-medium text-hospital-blue">
                            <Phone className="w-3 h-3" /> Emergencias: 106
                        </span>
                        <Link href="/portal/login" className="flex items-center gap-1 hover:text-hospital-blue">
                            <User className="w-3 h-3" /> Portal Paciente
                        </Link>
                    </div>
                </div>
            </div>

            <nav className="relative" onMouseLeave={handleMouseLeave}>
                <div className="container mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center h-full py-2">
                        <div className="relative h-16 w-auto aspect-[3/1]">
                            <Image
                                src="/logo.png"
                                alt="Hospital Tarapoto"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center h-full">
                        <ul className="flex items-center gap-1 h-full">
                            {MENU_DATA.map((category) => (
                                <li
                                    key={category.label}
                                    className="h-full flex items-center"
                                    onMouseEnter={() => category.type !== 'link' && handleMouseEnter(category.label)}
                                >
                                    {category.type === 'link' ? (
                                        <Link
                                            href={category.href || "/"}
                                            className="px-5 py-2 font-medium text-gray-600 hover:text-hospital-blue hover:bg-gray-50 transition-colors rounded-full"
                                        >
                                            {category.label}
                                        </Link>
                                    ) : (
                                        <button
                                            className={`
                                                px-5 py-2 font-medium transition-colors rounded-full
                                                ${activeCategory === category.label
                                                    ? 'bg-hospital-bg text-hospital-blue'
                                                    : 'text-gray-600 hover:text-hospital-blue hover:bg-gray-50'
                                                }
                                            `}
                                        >
                                            {category.label}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Buscar especialista, servicio..."
                                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-hospital-light transition-all"
                            />
                            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>

                        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold shadow-sm hover:shadow-md transition-all flex items-center gap-2 animate-pulse">
                            <Phone className="w-4 h-4" /> Emergencia
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-gray-600"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>

                {/* Desktop Mega Menu Dropdowns */}
                {MENU_DATA.map((category) => (
                    <MegaMenu
                        key={category.label}
                        category={category}
                        isOpen={activeCategory === category.label}
                        onClose={() => setActiveCategory(null)}
                    />
                ))}

            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl h-[calc(100vh-80px)] overflow-y-auto">
                    <div className="p-4 space-y-6">

                        {/* Mobile Search */}
                        <div className="relative">
                            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                            />
                        </div>

                        <div className="space-y-1">
                            {MENU_DATA.map((cat) => (
                                <div key={cat.label} className="border-b border-gray-100 last:border-0 pb-4 mb-4">
                                    <h3 className="font-bold text-hospital-blue mb-3 px-2">{cat.label}</h3>
                                    {/* Render flattened items for simpler mobile view */}
                                    <div className="space-y-1">
                                        {cat.columns?.map(col => (
                                            <div key={col.title} className="mb-3">
                                                <h4 className="text-xs font-bold text-gray-400 uppercase px-2 mb-1">{col.title}</h4>
                                                {col.items.map(item => (
                                                    <Link
                                                        key={item.title}
                                                        href={item.href}
                                                        className="block px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-3"
                                                        onClick={toggleMobileMenu}
                                                    >
                                                        {item.icon && <item.icon className="w-4 h-4 text-hospital-light" />}
                                                        {item.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                        {cat.items?.map(item => (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className="block px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-3"
                                                onClick={toggleMobileMenu}
                                            >
                                                {item.icon && <item.icon className="w-4 h-4 text-hospital-light" />}
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" /> Llamar a Emergencia
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
