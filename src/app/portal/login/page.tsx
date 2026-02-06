"use client";

import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, ShieldCheck, AlertTriangle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
    const { login } = useAuth();
    const [docType, setDocType] = useState("DNI");
    const [docNumber, setDocNumber] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        setTimeout(() => {
            if (docNumber.length >= 8 && password.length > 0) {
                login(docNumber);
            } else {
                setError("Credenciales inválidas. Intente nuevamente.");
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row max-w-4xl w-full">

                {/* Left Side: Info */}
                <div className="bg-hospital-blue p-8 md:p-12 md:w-5/12 text-white flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Portal del Paciente</h2>
                        <ul className="space-y-6 text-blue-50">
                            <li className="flex gap-4">
                                <div className="bg-white/20 p-2 rounded-lg h-fit">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Seguridad Garantizada</h4>
                                    <p className="text-sm mt-1 opacity-90">Acceso protegido a su información médica personal bajo normativa de ley.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white/20 p-2 rounded-lg h-fit">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Cuenta Personal</h4>
                                    <p className="text-sm mt-1 opacity-90">Gestione sus citas, resultados y recetas desde un solo lugar.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="p-8 md:p-12 md:w-7/12 flex flex-col justify-center">
                    <div className="mb-8 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Bienvenido de nuevo</h3>
                        <p className="text-gray-500 text-sm">Ingrese sus credenciales para acceder a su historia clínica.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Tipo de Documento</label>
                            <select
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-hospital-blue outline-none bg-white transition-all text-gray-700"
                                value={docType}
                                onChange={(e) => setDocType(e.target.value)}
                            >
                                <option value="DNI">DNI - Documento Nacional de Identidad</option>
                                <option value="CE">CE - Carné de Extranjería</option>
                                <option value="PAS">Pasaporte</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Número de Documento</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-hospital-blue outline-none transition-all font-mono"
                                    placeholder="Ej. 12345678"
                                    value={docNumber}
                                    onChange={(e) => setDocNumber(e.target.value)}
                                    maxLength={12}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Contraseña</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full pl-12 pr-12 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-hospital-blue outline-none transition-all"
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
                        </div>

                        {error && (
                            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg flex items-center gap-2 animate-pulse">
                                <AlertTriangle className="w-4 h-4 ml-1" />
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-hospital-blue text-white font-bold py-3.5 rounded-lg shadow-lg hover:bg-blue-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 transform active:scale-[0.98]"
                        >
                            {isLoading ? (
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            ) : "Iniciar Sesión Segura"}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-xs text-gray-500">
                        ¿Olvidó su contraseña? Acérquese al módulo de Admisión.
                    </p>
                </div>
            </div>

            <p className="fixed bottom-4 text-xs text-gray-400">
                © 2026 Hospital II-2 Tarapoto. Todos los derechos reservados.
            </p>
        </div>
    );
}
