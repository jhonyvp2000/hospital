"use client";

import React, { useState } from 'react';
import { Lock, Eye, EyeOff, FileText, Download, User, LogOut, CheckCircle, AlertTriangle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function ResultadosPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Login Form State
    const [docType, setDocType] = useState("DNI");
    const [docNumber, setDocNumber] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Simulate API check
        setTimeout(() => {
            if (docNumber.length >= 8 && password.length > 0) {
                setIsLoggedIn(true);
            } else {
                setError("Por favor ingrese credenciales válidas.");
            }
            setIsLoading(false);
        }, 1500);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setDocNumber("");
        setPassword("");
    };

    // Mock Data for Dashboard
    const MOCK_RESULTS = [
        { id: 1, type: "LABORATORIO", name: "Hemograma Completo", date: "05 Feb 2026", doctor: "Dr. Carlos Torres", status: "Listo" },
        { id: 2, type: "RAYOS X", name: "Radiografía de Tórax (F/P)", date: "02 Feb 2026", doctor: "Dra. Ana Vargas", status: "Listo" },
        { id: 3, type: "LABORATORIO", name: "Perfil Lipídico", date: "15 Ene 2026", doctor: "Dr. Ricardo Silva", status: "Listo" },
        { id: 4, type: "LABORATORIO", name: "Examen Completo de Orina", date: "15 Ene 2026", doctor: "Dr. Ricardo Silva", status: "Listo" },
    ];

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero / Header */}
            <section className="bg-hospital-blue text-white py-12 px-4">
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3 flex items-center justify-center gap-3">
                        <FileText className="w-8 h-8 md:w-10 md:h-10 text-blue-200" />
                        Portal del Paciente
                    </h1>
                    <p className="opacity-90 font-light max-w-xl mx-auto">
                        Acceda a sus resultados de laboratorio e imágenes de forma segura y confidencial.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-4xl px-4 -mt-8 relative z-10">

                {!isLoggedIn ? (
                    /* LOGIN VIEW */
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                        {/* Left Side: Info */}
                        <div className="bg-blue-50 p-8 md:w-5/12 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-hospital-blue mb-4">¿Cómo ingresar?</h3>
                            <ul className="space-y-4 text-sm text-gray-700">
                                <li className="flex gap-3">
                                    <div className="bg-white p-2 rounded-full h-fit text-hospital-blue shadow-sm">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <p>Ingrese su número de documento (DNI/CE).</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="bg-white p-2 rounded-full h-fit text-hospital-blue shadow-sm">
                                        <Lock className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">¿No tiene contraseña?</p>
                                        <p className="mt-1 opacity-80">Por seguridad, la clave se entrega <span className="underline">presencialmente</span> en el módulo de Admisión presentando su DNI.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="bg-white p-2 rounded-full h-fit text-hospital-blue shadow-sm">
                                        <ShieldCheck className="w-4 h-4" />
                                    </div>
                                    <p>Sus datos están protegidos por la Ley N° 29733.</p>
                                </li>
                            </ul>
                        </div>

                        {/* Right Side: Form */}
                        <div className="p-8 md:w-7/12">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Iniciar Sesión</h2>

                            <form onSubmit={handleLogin} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Tipo de Documento</label>
                                    <select
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-hospital-blue outline-none bg-white transition-all"
                                        value={docType}
                                        onChange={(e) => setDocType(e.target.value)}
                                    >
                                        <option value="DNI">DNI - Documento Nacional de Identidad</option>
                                        <option value="CE">CE - Carné de Extranjería</option>
                                        <option value="PAS">Pasaporte</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Número de Documento</label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-hospital-blue outline-none transition-all font-mono tracking-wide"
                                        placeholder="Ej. 70123456"
                                        value={docNumber}
                                        onChange={(e) => setDocNumber(e.target.value)}
                                        maxLength={12}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Contraseña Digital</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-hospital-blue outline-none transition-all pr-12"
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    <div className="text-right">
                                        <a href="#" className="text-xs text-hospital-blue hover:underline">¿Olvidó su contraseña?</a>
                                    </div>
                                </div>

                                {error && (
                                    <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg flex items-center gap-2">
                                        <AlertTriangle className="w-4 h-4" />
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-hospital-blue text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                                >
                                    {isLoading ? (
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    ) : "Consultar Resultados"}
                                </button>
                            </form>
                        </div>
                    </div>
                ) : (
                    /* DASHBOARD VIEW (LOGGED IN) */
                    <div className="space-y-6">

                        {/* Welcome Card */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-hospital-blue">
                                    <User className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">Hola, Juan Pérez</h2>
                                    <p className="text-gray-500 text-sm">DNI: {docNumber}</p>
                                </div>
                            </div>
                            <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors font-medium">
                                <LogOut className="w-4 h-4" />
                                Cerrar Sesión
                            </button>
                        </div>

                        {/* Results List */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                                <h3 className="font-bold text-gray-700">Resultados Recientes</h3>
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    4 Disponibles
                                </span>
                            </div>

                            <div className="divide-y divide-gray-100">
                                {MOCK_RESULTS.map((result) => (
                                    <div key={result.id} className="p-4 md:p-6 hover:bg-blue-50/30 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 rounded-lg ${result.type === 'LABORATORIO' ? 'bg-purple-100 text-purple-600' : 'bg-orange-100 text-orange-600'}`}>
                                                <FileText className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-800">{result.name}</h4>
                                                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-gray-500">
                                                    <span className="flex items-center gap-1">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                                        {result.date}
                                                    </span>
                                                    <span>• {result.doctor}</span>
                                                    <span className="md:hidden text-green-600 font-medium">• {result.status}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 w-full md:w-auto pl-14 md:pl-0">
                                            <div className="hidden md:flex flex-col items-end mr-4">
                                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Estado</span>
                                                <span className="text-green-600 font-medium flex items-center gap-1">
                                                    <CheckCircle className="w-3 h-3" /> {result.status}
                                                </span>
                                            </div>

                                            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-gray-300 hover:border-hospital-blue hover:text-hospital-blue text-gray-700 px-4 py-2 rounded-lg transition-all text-sm font-medium shadow-sm">
                                                <Download className="w-4 h-4" />
                                                Descargar PDF
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer Disclaimer */}
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-3 items-start text-sm text-yellow-800">
                            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <p>
                                <strong>Importante:</strong> Los resultados publicados en este portal son para fines informativos.
                                La interpretación de los mismos debe ser realizada estrictamente por su médico tratante.
                                Hospital II-2 Tarapoto no se hace responsable por la automedicación basada en estos documentos.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
