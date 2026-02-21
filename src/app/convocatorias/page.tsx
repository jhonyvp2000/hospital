import React from 'react';
import { db } from '@/db';
import { jobPostings, jobDocuments } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';
import { FileText, Briefcase, Calendar, Download, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Convocatorias Laborales | Hospital Referencial',
    description: 'Postula a las oportunidades laborales CAS, 276 y 728 del Hospital.',
};

export default async function ConvocatoriasPage() {
    // Fetch only published jobs directly from Drizzle DB for SSR performance
    const jobs = await db.select().from(jobPostings)
        .where(eq(jobPostings.status, 'PUBLISHED'))
        .orderBy(desc(jobPostings.createdAt));

    // For a real production app we would do a joined query or batch query, 
    // but for simplicity here we will map documents sequentially.
    const jobsWithDocs = await Promise.all(jobs.map(async (job: any) => {
        const docs = await db.select().from(jobDocuments)
            .where(eq(jobDocuments.jobPostingId, job.id))
            .orderBy(desc(jobDocuments.uploadedAt));
        return { ...job, documents: docs };
    }));

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <Breadcrumbs />

            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern.png')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
                    <Briefcase className="w-16 h-16 mx-auto mb-6 text-blue-200" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                        Convocatorias Laborales
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                        Únete a nuestro equipo de profesionales de la salud y personal administrativo. Aquí encontrarás los procesos de selección vigentes (CAS, D.L. 276, D.L. 728).
                    </p>
                </div>
            </section>

            <section className="py-12 flex-1">
                <div className="container mx-auto px-6 max-w-5xl">

                    <div className="bg-blue-50 border-l-4 border-hospital-blue p-4 rounded-r-xl mb-10">
                        <div className="flex gap-3">
                            <Clock className="w-6 h-6 text-hospital-blue shrink-0" />
                            <div>
                                <h4 className="font-bold text-gray-900">Importante</h4>
                                <p className="text-gray-700 text-sm mt-1">Los postulantes deberán presentar sus documentos estrictamente según el cronograma establecido en las Bases de cada concurso. No se admitirán expedientes fuera de fecha.</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <FileText className="w-6 h-6 text-hospital-blue" />
                        Procesos Vigentes
                    </h2>

                    <div className="space-y-6">
                        {jobsWithDocs.length === 0 ? (
                            <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                                <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800">No hay convocatorias activas</h3>
                                <p className="text-gray-500 mt-2">Actualmente no contamos con procesos de selección abiertos. Te sugerimos revisar esta página periódicamente.</p>
                            </div>
                        ) : (
                            jobsWithDocs.map((job) => (
                                <div key={job.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-shadow">
                                    <div className="p-6 md:p-8">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="bg-blue-100 text-hospital-blue font-bold px-3 py-1 rounded-full text-xs">
                                                        {job.regime}
                                                    </span>
                                                    <span className="text-gray-500 font-medium text-sm">
                                                        {job.code}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{job.title}</h3>
                                            </div>
                                            <div className="bg-gray-50 rounded-xl p-3 text-center min-w-[120px] shrink-0 border border-gray-100">
                                                <div className="text-3xl font-black text-hospital-blue leading-none">{job.vacancies}</div>
                                                <div className="text-xs font-bold text-gray-500 uppercase mt-1">VACANTES</div>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-6 text-sm whitespace-pre-line bg-gray-50 p-4 rounded-xl">
                                            {job.description}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-sm">
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Calendar className="w-5 h-5 text-gray-400" />
                                                <strong>Publicado:</strong> {job.publicationDate?.toLocaleDateString ? job.publicationDate.toLocaleDateString('es-PE') : new Date(job.publicationDate).toLocaleDateString('es-PE')}
                                            </div>
                                            {job.salary && (
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <Briefcase className="w-5 h-5 text-gray-400" />
                                                    <strong>Remuneración:</strong> {
                                                        (() => {
                                                            // Remove letters, S/, spaces, etc to extract digits
                                                            const numericString = job.salary.toString().replace(/[^0-9.]/g, '');
                                                            const numericValue = parseFloat(numericString);
                                                            if (!isNaN(numericValue) && numericString.length > 0) {
                                                                // Format as requested: S/ X,XXX (integer, comma separated)
                                                                return `S/ ${Math.floor(numericValue).toLocaleString('en-US')}`;
                                                            }
                                                            // Fallback to original string if not parseable
                                                            return job.salary;
                                                        })()
                                                    }
                                                </div>
                                            )}
                                        </div>

                                        {/* Timeline */}
                                        <div className="mt-8 mb-6 relative">
                                            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 rounded-full hidden sm:block"></div>
                                            <div className="flex flex-col sm:flex-row justify-between relative gap-4 sm:gap-0">
                                                {[
                                                    { id: 'PREPARATORIA', label: '1. Actos Preparatorios', activeColor: 'bg-gray-400' },
                                                    { id: 'CONVOCATORIA', label: '2. Recepción de CVs', activeColor: 'bg-blue-500' },
                                                    { id: 'EVALUACION_CURRICULAR', label: '3. Ev. Curricular', activeColor: 'bg-indigo-500' },
                                                    { id: 'ENTREVISTAS', label: '4. Entrevistas', activeColor: 'bg-purple-500' },
                                                    { id: 'CONCLUIDO', label: '5. Resultados Finales', activeColor: 'bg-green-500' }
                                                ].map((stage, idx, arr) => {
                                                    const currentStageIdx = arr.findIndex(s => s.id === job.currentStage);
                                                    const isPast = idx < currentStageIdx;
                                                    const isCurrent = idx === currentStageIdx;

                                                    return (
                                                        <div key={stage.id} className="relative flex items-center sm:flex-col sm:items-center gap-3 sm:gap-2 z-10">
                                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-4 border-white font-bold text-xs transition-colors
                                                                ${isPast ? 'bg-green-500 text-white' : isCurrent ? `${stage.activeColor} text-white ring-4 ring-blue-100` : 'bg-gray-200 text-gray-400'}
                                                            `}>
                                                                {isPast ? <CheckCircle className="w-4 h-4" /> : idx + 1}
                                                            </div>
                                                            <span className={`text-xs font-bold leading-tight ${isCurrent ? 'text-gray-900' : 'text-gray-500'} sm:text-center w-auto sm:w-24`}>
                                                                {stage.label}
                                                            </span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-100 pt-6 mt-4">
                                            <h4 className="font-bold text-gray-800 mb-6 text-sm font-heading">Documentos Oficiales</h4>

                                            {job.documents.length === 0 ? (
                                                <p className="text-sm text-gray-500 italic">Los documentos estarán disponibles próximamente.</p>
                                            ) : (
                                                <div className="space-y-6">
                                                    {[
                                                        { group: 'Primera Fase: Convocatoria', types: ['BASES'] },
                                                        { group: 'Segunda Fase: Currículos', types: ['RESULTS_PRE'] },
                                                        { group: 'Tercera Fase: Evaluaciones', types: ['COMMUNIQUE'] },
                                                        { group: 'Fase Final: Resultados', types: ['RESULTS_FINAL'] },
                                                        { group: 'Otros Adjuntos', types: ['OTHER'] },
                                                    ].map(({ group, types }) => {
                                                        const groupDocs = job.documents.filter((d: any) => types.includes(d.documentType));
                                                        if (groupDocs.length === 0) return null;

                                                        return (
                                                            <div key={group} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                                                <h5 className="font-bold text-gray-700 text-xs uppercase tracking-wider mb-3">{group}</h5>
                                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                                    {groupDocs.map((doc: any) => (
                                                                        <a
                                                                            key={doc.id}
                                                                            href={doc.documentUrl}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="flex items-center justify-between p-3 rounded-lg border bg-white border-gray-200 hover:border-hospital-blue hover:bg-blue-50 transition-colors group/doc shadow-sm"
                                                                        >
                                                                            <div className="flex items-center gap-3 overflow-hidden">
                                                                                <FileText className="w-5 h-5 text-red-500 shrink-0" />
                                                                                <div className="truncate">
                                                                                    <div className="text-sm font-bold text-gray-800 group-hover/doc:text-hospital-blue truncate">{doc.title}</div>
                                                                                    <div className="text-[10px] text-gray-500 uppercase font-bold mt-0.5">{new Date(doc.uploadedAt).toLocaleString('es-PE')}</div>
                                                                                </div>
                                                                            </div>
                                                                            <Download className="w-4 h-4 text-gray-400 group-hover/doc:text-hospital-blue shrink-0 ml-2" />
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
