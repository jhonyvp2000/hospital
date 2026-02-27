"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    ArrowLeft, Calendar, MapPin, Users,
    FileText, CheckCircle, Clock, FileCheck, Info, Search, Send
} from 'lucide-react';

interface JobDetails {
    id: string;
    title: string;
    code: string;
    regime: string;
    department: string;
    vacancies: string;
    description: string;
    salary: string;
    status: string;
    currentStage: string;
    endDate: string | null;
    createdAt: string;
    documents: any[];
}

const STAGES = [
    { id: 'PREPARATORIA', label: 'Actos Preparatorios', desc: 'Aprobación de bases' },
    { id: 'CONVOCATORIA', label: 'Convocatoria y Postulación', desc: 'Recepción de expedientes' },
    { id: 'EVALUACION_CURRICULAR', label: 'Evaluación Curricular', desc: 'Revisión y resultados' },
    { id: 'ENTREVISTAS', label: 'Evaluación / Entrevistas', desc: 'Pruebas técnicas y entrevistas' },
    { id: 'CONCLUIDO', label: 'Resultados Finales', desc: 'Suscripción de contrato' }
];

export default function ConvocatoriaDetallePage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const { id } = React.use(params);
    const [job, setJob] = useState<JobDetails | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setJob(data);
                } else {
                    router.push('/convocatorias'); // Handle not found
                }
            } catch (error) {
                console.error("Error fetching job:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchJob();
    }, [id, router]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-500 font-medium">Cargando detalles de la convocatoria...</p>
            </div>
        );
    }

    if (!job) return null;

    const formatCurrency = (value: string | null) => {
        if (!value) return '';
        const num = Number(value.toString().replace(/,/g, ''));
        if (!isNaN(num) && value.toString().trim() !== '') {
            return `S/ ${num.toLocaleString('en-US')}`;
        }
        return value;
    };

    const currentStageIndex = STAGES.findIndex(s => s.id === job.currentStage);
    const isActivelyReceivingApplications = job.currentStage === 'CONVOCATORIA';

    // Group documents for UI
    const basesDocs = job.documents.filter(d => d.documentType === 'BASES');
    const evaluationDocs = job.documents.filter(d => ['RESULTS_PRE', 'COMMUNIQUE'].includes(d.documentType));
    const finalDocs = job.documents.filter(d => d.documentType === 'RESULTS_FINAL');
    const otherDocs = job.documents.filter(d => d.documentType === 'OTHER');

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header / Hero Section */}
            <div className="bg-blue-900 pt-32 pb-16 px-4 text-white relative">
                <div className="absolute inset-0 bg-blue-950/20 z-0" />
                <div className="container mx-auto max-w-5xl relative z-10">
                    <Link href="/convocatorias" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 font-medium text-sm transition-colors">
                        <ArrowLeft size={16} /> Volver a Oportunidades Laborales
                    </Link>

                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${job.status === 'PUBLISHED' ? 'bg-green-500 text-white' : 'bg-amber-500 text-white'
                            }`}>
                            {job.status === 'PUBLISHED' ? 'Proceso Vigente' : 'En Evaluación'}
                        </span>
                        <span className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-xs font-bold border border-blue-700">
                            Régimen {job.regime}
                        </span>
                        <span className="text-blue-200 font-mono text-sm tracking-wide bg-blue-950/50 px-3 py-1 rounded-lg">
                            {job.code}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{job.title}</h1>

                    <div className="flex flex-wrap items-center gap-6 text-blue-100 text-sm md:text-base mt-6">
                        <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-blue-300" />
                            <span>{job.department || 'Dirección General'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users size={18} className="text-blue-300" />
                            <span>{job.vacancies} Plaza(s) Disponible(s)</span>
                        </div>
                        {job.endDate && (
                            <div className="flex items-center gap-2 text-red-300 font-bold bg-red-900/30 px-3 py-1.5 rounded-lg border border-red-800/50">
                                <Clock size={18} />
                                <span>Cierre de Postulación: {new Date(job.endDate).toLocaleDateString('es-PE')}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <main className="container mx-auto max-w-5xl px-4 -mt-8 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Details & Documents */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Status Timeline */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <CheckCircle className="text-blue-600" size={24} /> Estado del Proceso
                            </h2>

                            <div className="relative">
                                {/* Vertical line connecting steps */}
                                <div className="absolute left-4 top-2 bottom-6 w-0.5 bg-gray-100"></div>

                                <div className="space-y-6">
                                    {STAGES.map((stage, idx) => {
                                        const isCompleted = idx < currentStageIndex;
                                        const isCurrent = idx === currentStageIndex;

                                        return (
                                            <div key={stage.id} className="relative flex items-start gap-4">
                                                {/* Indicator bullet */}
                                                <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-4 border-white ${isCompleted ? 'bg-green-500' : isCurrent ? 'bg-blue-600' : 'bg-gray-200'
                                                    }`}>
                                                    {isCompleted && <CheckCircle className="w-4 h-4 text-white" />}
                                                    {isCurrent && <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />}
                                                </div>

                                                <div className={`flex-1 pt-1.5 ${isCurrent ? 'bg-blue-50/50 p-4 -mt-2 -mb-2 rounded-xl border border-blue-100' : ''}`}>
                                                    <h3 className={`font-bold ${isCompleted ? 'text-gray-900' : isCurrent ? 'text-blue-700' : 'text-gray-500'
                                                        }`}>
                                                        {stage.label}
                                                    </h3>
                                                    <p className={`text-sm mt-0.5 ${isCurrent ? 'text-blue-600/80 font-medium' : 'text-gray-500'
                                                        }`}>
                                                        {stage.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        {job.description && (
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Perfil y Requisitos</h2>
                                <div className="prose prose-blue max-w-none text-gray-600 whitespace-pre-wrap leading-relaxed">
                                    {job.description}
                                </div>
                                {job.salary && (
                                    <div className="mt-6 flex items-center gap-3 bg-green-50 border border-green-100 p-4 rounded-xl text-green-800 font-medium">
                                        <Info size={20} className="text-green-600" />
                                        Remuneración referencial: {formatCurrency(job.salary)}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Documents Section */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <FileText className="text-blue-600" size={24} /> Documentos Adjuntos
                            </h2>

                            {job.documents.length === 0 ? (
                                <div className="text-center py-8 text-gray-400">
                                    <FileCheck size={40} className="mx-auto mb-3 opacity-20" />
                                    <p>Aún no hay documentos adjuntos para este proceso.</p>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {/* Bases */}
                                    {basesDocs.length > 0 && (
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Bases de la Convocatoria</h3>
                                            <div className="grid gap-3">
                                                {basesDocs.map(doc => (
                                                    <a key={doc.id} href={doc.documentUrl} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group">
                                                        <div className="bg-red-50 p-3 rounded-lg mr-4 group-hover:bg-red-100 transition-colors">
                                                            <FileText className="text-red-500 w-6 h-6" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors">{doc.title}</h4>
                                                            <p className="text-xs text-gray-500">Publicado: {new Date(doc.uploadedAt).toLocaleDateString('es-PE')}</p>
                                                        </div>
                                                        <ArrowLeft className="w-5 h-5 text-gray-300 rotate-180 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Evaluation */}
                                    {evaluationDocs.length > 0 && (
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Formatos y Evaluaciones Preliminares</h3>
                                            <div className="grid gap-3">
                                                {evaluationDocs.map(doc => (
                                                    <a key={doc.id} href={doc.documentUrl} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group">
                                                        <div className="bg-blue-50 p-3 rounded-lg mr-4 group-hover:bg-blue-100 transition-colors">
                                                            <FileCheck className="text-blue-500 w-6 h-6" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors">{doc.title}</h4>
                                                            <p className="text-xs text-gray-500">Publicado: {new Date(doc.uploadedAt).toLocaleDateString('es-PE')}</p>
                                                        </div>
                                                        <ArrowLeft className="w-5 h-5 text-gray-300 rotate-180 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Final Results */}
                                    {finalDocs.length > 0 && (
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Resultados Finales</h3>
                                            <div className="grid gap-3">
                                                {finalDocs.map(doc => (
                                                    <a key={doc.id} href={doc.documentUrl} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-green-50 border border-green-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all group">
                                                        <div className="bg-white p-3 rounded-lg mr-4 shadow-sm">
                                                            <CheckCircle className="text-green-600 w-6 h-6" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="font-bold text-green-900 group-hover:text-green-700 transition-colors">{doc.title}</h4>
                                                            <p className="text-xs text-green-700/70">Publicado: {new Date(doc.uploadedAt).toLocaleDateString('es-PE')}</p>
                                                        </div>
                                                        <ArrowLeft className="w-5 h-5 text-green-300 rotate-180 group-hover:text-green-600 transform group-hover:translate-x-1 transition-all" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: CTA & Help */}
                    <div className="lg:col-span-1 space-y-6">

                        {/* Call to Action Card */}
                        <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 border border-blue-100 p-6 sticky top-24">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-blue-900 mb-2">¿Deseas participar?</h3>
                                <p className="text-gray-500 text-sm">Presenta tus documentos por Mesa de Partes Virtual o presencial, según lo expuesto en las Bases.</p>
                            </div>

                            {isActivelyReceivingApplications ? (
                                <a
                                    href="#"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    <Send size={20} />
                                    Postular Ahora
                                </a>
                            ) : (
                                <button
                                    disabled
                                    className="w-full bg-gray-100 text-gray-400 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 cursor-not-allowed border border-gray-200"
                                >
                                    <Info size={20} />
                                    {currentStageIndex < 1 ? 'Aún no inicia' : 'Postulación Cerrada'}
                                </button>
                            )}

                            <hr className="my-6 border-gray-100" />

                            <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
                                <p className="font-bold text-gray-700 mb-1">Mesa de Partes Virtual:</p>
                                <a href="https://facilita.gob.pe" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline break-all">
                                    Enlace al TRAMITE MPV
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
