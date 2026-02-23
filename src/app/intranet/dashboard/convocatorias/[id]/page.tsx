"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    ArrowLeft, UploadCloud, FileText, FileCheck, FileX,
    CheckCircle, AlertCircle, Clock, Trash2, Download, Eye, EyeOff
} from 'lucide-react';

export default function DetalleConvocatoria({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const { id } = React.use(params);
    const [job, setJob] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    // File upload state
    const [file, setFile] = useState<File | null>(null);
    const [docTitle, setDocTitle] = useState('');
    const [docType, setDocType] = useState('BASES');

    useEffect(() => {
        fetchJobDetails();
    }, [id]);

    const fetchJobDetails = async () => {
        if (!id) return; // Prevent fetching when async params render initially as undefined

        try {
            const res = await fetch(`/api/admin/jobs/${id}`);
            if (res.ok) {
                const data = await res.json();
                setJob(data);
            } else {
                console.error("Job details response not OK: ", res.status);
                // router.push('/intranet/dashboard/convocatorias');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file || !docTitle) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', docTitle);
        formData.append('documentType', docType);

        try {
            const res = await fetch(`/api/admin/jobs/${id}/documents`, {
                method: 'POST',
                body: formData
            });

            if (res.ok) {
                // Reset form and reload
                setFile(null);
                setDocTitle('');
                setDocType('OTHER');
                await fetchJobDetails();
            } else {
                alert("Error al subir archivo");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setUploading(false);
        }
    };

    const handlePublish = async () => {
        const newStatus = job.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED';
        try {
            const res = await fetch(`/api/admin/jobs/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
            if (res.ok) {
                fetchJobDetails();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleChangeStage = async (newStage: string) => {
        try {
            const res = await fetch(`/api/admin/jobs/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ currentStage: newStage })
            });
            if (res.ok) {
                fetchJobDetails();
            } else {
                alert("Error al actualizar la etapa");
            }
        } catch (error) {
            console.error("Error cambiando fase", error);
        }
    };

    const handleDeleteDocument = async (docId: string) => {
        if (!confirm('¿Estás seguro de que deseas eliminar este documento? Esta acción no se puede deshacer.')) return;

        try {
            const res = await fetch(`/api/admin/jobs/${id}/documents?docId=${docId}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                await fetchJobDetails();
            } else {
                alert("Error al eliminar el documento");
            }
        } catch (err) {
            console.error("Error deleting document:", err);
            alert("Error de conexión al eliminar");
        }
    };

    const handleToggleVisibility = async (docId: string, currentVisibility: boolean) => {
        try {
            const res = await fetch(`/api/admin/jobs/${id}/documents`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ docId, isPublic: !currentVisibility })
            });

            if (res.ok) {
                await fetchJobDetails();
            } else {
                alert("Error al cambiar la visibilidad del documento.");
            }
        } catch (error) {
            console.error("Error toggling document visibility:", error);
        }
    };

    if (loading) return <div className="p-12 text-center text-gray-500">Cargando expediente...</div>;
    if (!job) return null;

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto max-w-5xl px-6 py-6 border-b border-gray-100 flex items-center justify-between">
                    <div>
                        <Link href="/intranet/dashboard/convocatorias" className="inline-flex items-center gap-2 text-hospital-blue font-bold text-sm hover:underline mb-2">
                            <ArrowLeft className="w-4 h-4" /> Volver a las Convocatorias
                        </Link>
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-bold text-gray-900">{job.code}</h1>
                            {job.status === 'PUBLISHED' ? (
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">VISIBILIDAD PÚBLICA</span>
                            ) : (
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold border border-gray-200">Borrador Interno</span>
                            )}
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{job.title}</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={handlePublish}
                            className={`px-6 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors border ${job.status === 'PUBLISHED'
                                ? 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                : 'bg-green-600 text-white border-green-700 hover:bg-green-700'
                                }`}
                        >
                            {job.status === 'PUBLISHED' ? (
                                <>Ocultar del Portal Público</>
                            ) : (
                                <><CheckCircle className="w-4 h-4" /> Publicar Oficialmente</>
                            )}
                        </button>
                    </div>
                </div>

                {/* Stage Progress Bar (HR) */}
                <div className="bg-gray-50 border-t border-b border-gray-200 overflow-x-auto">
                    <div className="container mx-auto max-w-5xl px-6 py-3 flex gap-2 min-w-max">
                        {[
                            { id: 'PREPARATORIA', label: '1. Preparatoria' },
                            { id: 'CONVOCATORIA', label: '2. Convocatoria' },
                            { id: 'EVALUACION_CURRICULAR', label: '3. Ev. Curricular' },
                            { id: 'ENTREVISTAS', label: '4. Entrevistas' },
                            { id: 'CONCLUIDO', label: '5. Concluido' }
                        ].map((stage) => (
                            <button
                                key={stage.id}
                                onClick={() => handleChangeStage(stage.id)}
                                className={`px-4 py-2 text-xs font-bold rounded-full transition-colors border ${job.currentStage === stage.id
                                    ? 'bg-hospital-blue text-white border-hospital-blue'
                                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-100'
                                    }`}
                            >
                                {stage.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-5xl px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Col: Upload Form */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <UploadCloud className="w-5 h-5 text-hospital-blue" />
                            Nuevo Documento
                        </h3>
                        <form onSubmit={handleUpload} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-600 mb-1">Nombre Público del Archivo</label>
                                <input
                                    type="text"
                                    required
                                    value={docTitle}
                                    onChange={(e) => setDocTitle(e.target.value)}
                                    placeholder="Ej: Bases Integradas"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-hospital-blue outline-none text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-600 mb-1">Fase / Tipo</label>
                                <select
                                    value={docType}
                                    onChange={(e) => setDocType(e.target.value)}
                                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded focus:ring-1 focus:ring-hospital-blue outline-none text-sm"
                                >
                                    <option value="BASES">Bases y Anexos</option>
                                    <option value="RESULTS_PRE">Resultados Curriculares</option>
                                    <option value="COMMUNIQUE">Comunicado / Fe de erratas</option>
                                    <option value="RESULTS_FINAL">Resultados Finales (Ganadores)</option>
                                    <option value="OTHER">Otros</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-600 mb-1">Archivo PDF</label>
                                <input
                                    type="file"
                                    accept="application/pdf"
                                    required
                                    onChange={handleFileChange}
                                    className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-hospital-blue hover:file:bg-blue-100"
                                />
                                <p className="text-[10px] text-gray-400 mt-1">Solo PDF, máx. 5MB recomendados.</p>
                            </div>

                            <button
                                type="submit"
                                disabled={uploading}
                                className="w-full bg-hospital-blue text-white py-2 rounded font-bold text-sm hover:bg-blue-800 transition-colors disabled:opacity-50"
                            >
                                {uploading ? 'Subiendo...' : 'Subir Archivo'}
                            </button>
                        </form>
                    </div>

                    {/* Metadata Card */}
                    <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
                        <h4 className="font-bold text-gray-700 mb-3 text-sm">Resumen del Expediente</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><strong className="text-gray-800">Régimen:</strong> {job.regime}</li>
                            <li><strong className="text-gray-800">Vacantes:</strong> {job.vacancies}</li>
                            <li><strong className="text-gray-800">Remuneración:</strong> {job.salary || 'No especificada'}</li>
                            <li><strong className="text-gray-800">Fecha Creado:</strong> {new Date(job.createdAt).toLocaleDateString()}</li>
                        </ul>
                    </div>
                </div>

                {/* Right Col: Documents Timeline */}
                <div className="md:col-span-2">
                    <h3 className="font-bold text-gray-800 mb-6 text-lg">Archivos Adjuntos al Expediente</h3>

                    {job.documents && job.documents.length === 0 ? (
                        <div className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center">
                            <FileX className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                            <h4 className="text-gray-800 font-medium">Aún no hay archivos subidos</h4>
                            <p className="text-sm text-gray-500 mt-1 text-balance">Usa el formulario lateral para agregar las Bases del Concurso o los Anexos.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {[
                                { group: 'Bases y Anexos', types: ['BASES'] },
                                { group: 'Evaluación Curricular', types: ['RESULTS_PRE'] },
                                { group: 'Conocimientos / Entrevistas', types: ['COMMUNIQUE'] },
                                { group: 'Resultados Finales', types: ['RESULTS_FINAL'] },
                                { group: 'Otros Documentos', types: ['OTHER'] },
                            ].map(({ group, types }) => {
                                const groupDocs = job.documents.filter((d: any) => types.includes(d.documentType));
                                if (groupDocs.length === 0) return null;

                                return (
                                    <div key={group} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                                        <h4 className="font-bold text-gray-800 text-sm mb-4 border-b pb-2">{group}</h4>
                                        <div className="space-y-3">
                                            {groupDocs.map((doc: any) => (
                                                <div key={doc.id} className={`flex items-center justify-between group p-2 rounded-lg transition-colors ${!doc.isPublic ? 'bg-gray-50 border border-gray-200/60' : 'hover:bg-gray-50'}`}>
                                                    <div className="flex items-center gap-3">
                                                        <FileText className={`w-5 h-5 shrink-0 ${!doc.isPublic ? 'text-gray-400' : 'text-red-500'}`} />
                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <h5 className={`font-medium text-sm transition-colors ${!doc.isPublic ? 'text-gray-500 line-through decoration-gray-300' : 'text-gray-800 group-hover:text-hospital-blue'}`}>
                                                                    {doc.title}
                                                                </h5>
                                                                {!doc.isPublic && (
                                                                    <span className="text-[10px] bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-bold">OCULTO</span>
                                                                )}
                                                            </div>
                                                            <div className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                                                                <Clock className="w-3 h-3" />
                                                                {new Date(doc.uploadedAt).toLocaleString('es-PE')}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <button
                                                            onClick={() => handleToggleVisibility(doc.id, doc.isPublic)}
                                                            className={`p-1.5 rounded-lg transition-colors ${doc.isPublic ? 'text-blue-500 hover:bg-blue-100 bg-blue-50' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-200'}`}
                                                            title={doc.isPublic ? "Ocultar documento" : "Mostrar documento"}
                                                        >
                                                            {doc.isPublic ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                                        </button>
                                                        <a
                                                            href={doc.documentUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="p-1.5 text-gray-400 hover:text-hospital-blue hover:bg-blue-50 rounded-lg transition-colors"
                                                            title="Descargar"
                                                        >
                                                            <Download className="w-4 h-4" />
                                                        </a>
                                                        <button
                                                            onClick={() => handleDeleteDocument(doc.id)}
                                                            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                            title="Eliminar"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
