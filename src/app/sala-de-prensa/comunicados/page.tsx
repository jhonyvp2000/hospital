import { FileText, Download, Calendar, ExternalLink } from 'lucide-react';

const releases = [
    {
        id: "COM-2026-003",
        title: "COMUNICADO OFICIAL N° 003-2026: Sobre las medidas de prevención ante ola de calor",
        date: "05 Feb 2026",
        type: "Alerta Sanitaria",
        content: "Ante el incremento de temperaturas, el Hospital recomienda a la población mantenerse hidratada y evitar la exposición solar entre las 10am y 4pm..."
    },
    {
        id: "COM-2026-002",
        title: "COMUNICADO OFICIAL N° 002-2026: Restricción temporal de visitas en UCI",
        date: "02 Feb 2026",
        type: "Administrativo",
        content: "Se informa a los familiares de pacientes en la Unidad de Cuidados Intensivos que, por mantenimiento, el horario de visita se modificará..."
    },
    {
        id: "COM-2026-001",
        title: "COMUNICADO OFICIAL N° 001-2026: Nombramiento de nuevo Director Médico",
        date: "15 Ene 2026",
        type: "Institucional",
        content: "La Dirección General hace de conocimiento público la designación del Dr. Juan Pérez como nuevo Director Médico de nuestra institución..."
    }
];

export default function ComunicadosPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-neutral-800">Comunicados Oficiales</h1>
                <p className="text-neutral-500 mt-2">Avisos y pronunciamientos oficiales de la institución.</p>
            </div>

            <div className="space-y-6">
                {releases.map((release) => (
                    <div key={release.id} className="bg-white border-l-4 border-amber-500 rounded-r-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                            <div>
                                <span className="inline-block px-2 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded uppercase mb-2">
                                    {release.type}
                                </span>
                                <h2 className="text-lg font-bold text-neutral-900 leading-tight">
                                    {release.title}
                                </h2>
                            </div>
                            <div className="flex items-center text-sm text-neutral-500 whitespace-nowrap">
                                <Calendar size={16} className="mr-1" />
                                {release.date}
                            </div>
                        </div>

                        <p className="text-neutral-700 mb-4 bg-neutral-50 p-4 rounded border border-neutral-100 italic">
                            "{release.content}"
                        </p>

                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                                <Download size={16} /> Descargar PDF
                            </button>
                            <button className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
                                <ExternalLink size={16} /> Ver en navegador
                            </button>
                        </div>
                    </div>
                ))}

                {/* Placeholder vacio */}
                <div className="p-8 text-center bg-neutral-50 rounded-lg border border-dashed border-neutral-300 text-neutral-400">
                    No hay más comunicados recientes para mostrar.
                </div>
            </div>
        </div>
    );
}
