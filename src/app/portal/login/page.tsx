"use client";

import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, ShieldCheck, AlertTriangle, Info, MapPin } from 'lucide-react';
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
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row max-w-5xl w-full">

                {/* Left Side: Instructions & Education */}
                <div className="bg-blue-50 p-8 md:p-10 md:w-5/12 flex flex-col justify-center border-r border-blue-100">
                    <h2 className="text-2xl font-bold text-hospital-blue mb-6">Portal del Paciente</h2>

                    <div className="space-y-6">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-2 text-sm">
                                <Lock className="w-4 h-4 text-hospital-blue" />
                                ¿Cómo obtengo mi contraseña?
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Por su seguridad y la confidencialidad de sus datos médicos, la contraseña se entrega <strong>únicamente de forma presencial</strong>.
                            </p>
                            <div className="mt-3 flex items-start gap-2 text-xs text-gray-500 bg-gray-50 p-2 rounded border border-gray-100">
                                <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                <span>Acérquese al módulo de <strong>Admisión / Informes</strong> con su DNI físico para solicitar su clave digital gratuita.</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Beneficios del Portal</h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-center gap-3">
                                    <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                                        <ShieldCheck className="w-3 h-3" />
                                    </div>
                                    <span>Acceso 100% seguro y confidencial.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-purple-100 p-1.5 rounded-full text-purple-600">
                                        <Info className="w-3 h-3" />
                                    </div>
                                    <span>Historial de atenciones y recetas.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="text-xs text-gray-400 mt-4 leading-tight">
                            * Sus datos están protegidos conforme a la <strong>Ley N° 29733</strong> de Protección de Datos Personales.
                        </div>
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div className="p-8 md:p-12 md:w-7/12 flex flex-col justify-center">
                    <div className="mb-8 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">Iniciar Sesión</h3>
                        <p className="text-gray-500 text-sm">Ingrese sus credenciales para acceder.</p>
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
                            ) : "Ingresar al Portal"}
                        </button>
                    </form>
                </div>
            </div>

            <p className="fixed bottom-4 text-xs text-gray-400">
                © 2026 Hospital II-2 Tarapoto.
            </p>
        </div>
    );
}
