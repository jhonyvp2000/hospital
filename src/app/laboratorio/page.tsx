'use client';

import React from 'react';
import { TestTube } from 'lucide-react';

export default function LaboratorioPage() {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-100 max-w-md mx-auto">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-hospital-blue">
                    <TestTube className="w-10 h-10" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Laboratorio Referencial</h1>
                <p className="text-gray-600 mb-6">Estamos trabajando en esta sección para brindarte el catálogo de pruebas especializadas.</p>
                <div className="bg-blue-50 text-hospital-blue font-bold py-2 px-4 rounded-lg inline-block">
                    Próximamente
                </div>
            </div>
        </main>
    );
}
