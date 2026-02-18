'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
    const pathname = usePathname();

    // Do not render on home page
    if (pathname === '/') return null;

    const pathSegments = pathname.split('/').filter(segment => segment);

    // Map of path segments to readable labels
    const labelMap: Record<string, string> = {
        'nosotros': 'Quiénes Somos',
        'programas': 'Programas Estratégicos',
        'citas': 'Citas y Referencias',
        'portal': 'Portal del Paciente',
        'login': 'Iniciar Sesión',
        'telesalud': 'Telesalud',
        'paus': 'Plataforma PAUS',
        'faq': 'Preguntas Frecuentes',
        'transparencia': 'Transparencia',
        'normatividad': 'Normatividad',
        'gestion': 'Gestión',
        'sala-situacional': 'Sala Situacional',
        'servicios': 'Servicios',
        'emergencia': 'Emergencia',
        'banco-sangre': 'Banco de Sangre',
        'laboratorio': 'Laboratorio',
        'admision': 'Admisión',
        'docencia': 'Docencia e Investigación',
        'convocatorias': 'Convocatorias',
        'staff-medico': 'Staff Médico',
        'procedimientos': 'Procedimientos',
        'derechos': 'Derechos y Deberes',
        'encuesta': 'Encuesta',
        'organigrama': 'Organigrama',
        'directorio': 'Directorio',
        'contacto': 'Contacto',
        'historia': 'Historia Clínica',
        'recetas': 'Recetas',
        'resultados': 'Resultados',
        'indicaciones': 'Indicaciones',
    };

    return (
        <div className="bg-gray-50 border-b border-gray-100 py-3">
            <div className="container mx-auto max-w-7xl px-4">
                <nav className="flex items-center text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
                    <Link
                        href="/"
                        className="flex items-center hover:text-hospital-blue transition-colors"
                    >
                        <Home className="w-4 h-4 mr-1" />
                        Inicio
                    </Link>

                    {pathSegments.map((segment, index) => {
                        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathSegments.length - 1;
                        const label = labelMap[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

                        return (
                            <React.Fragment key={href}>
                                <ChevronRight className="w-4 h-4 mx-2 text-gray-300 flex-shrink-0" />
                                {isLast ? (
                                    <span className="font-semibold text-hospital-blue cursor-default">
                                        {label}
                                    </span>
                                ) : (
                                    <Link
                                        href={href}
                                        className="hover:text-hospital-blue transition-colors"
                                    >
                                        {label}
                                    </Link>
                                )}
                            </React.Fragment>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default Breadcrumbs;
