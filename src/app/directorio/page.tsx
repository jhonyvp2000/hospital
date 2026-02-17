import React from 'react';
import { User, Mail, Phone, Users, MapPin, Search, Filter, Award, Calendar } from 'lucide-react';
import Link from 'next/link';

// Mock Data based on real authorities found in research
const DIRECTORY_DATA = [
    {
        id: 1,
        name: "M.C. Carlos Javier Mego Silva",
        role: "Director OGESS Especializada",
        department: "Dirección General",
        email: "direccion@hospitaltarapoto.gob.pe",
        phone: "(042) 522 133",
        image: null // Placeholder for now
    },
    {
        id: 2,
        name: "M.C. Manuel Isaac Pérez Kuga",
        role: "Director Hospital II-2 Tarapoto",
        department: "Dirección Hospitalaria",
        email: "director.hospital@hospitaltarapoto.gob.pe",
        phone: "(042) 522 133 Anexo 101",
        agendaUrl: "https://visitas.servicios.gob.pe/agenda/main-agenda-pte.php?ruc=20494013453",
        image: null
    },
    {
        id: 3,
        name: "M.C. Luis Gerardo Pacheco Chávez",
        role: "Director de Gestión Prestacional",
        department: "Gestión Prestacional",
        email: "lpacheco@hospitaltarapoto.gob.pe",
        phone: "(042) 522 133",
        image: null
    },
    {
        id: 4,
        name: "C.P.C. Jaime Flores Mera",
        role: "Director de Planificación y Administración",
        department: "Administración",
        email: "administracion@hospitaltarapoto.gob.pe",
        phone: "(042) 522 133 Anexo 105",
        image: null
    },
    {
        id: 5,
        name: "C.P.C. Elsa Del Pilar Saavedra Sandoval",
        role: "Directora de Recursos Humanos",
        department: "Recursos Humanos",
        email: "rrhh@hospitaltarapoto.gob.pe",
        phone: "(042) 522 133",
        image: null
    },
    {
        id: 6,
        name: "Abog. Jim Pol Vega Sandoval",
        role: "Asesoría Legal",
        department: "Asesoría Jurídica",
        email: "legal@hospitaltarapoto.gob.pe",
        phone: "(042) 522 133",
        image: null
    },
    {
        id: 7,
        name: "Ing. Annie Mabel Chong Bartra",
        role: "Responsable de Transparencia",
        department: "Tecnologías de la Información",
        email: "transparencia@hospitaltarapoto.gob.pe",
        phone: "(042) 522 133",
        image: null
    }
];

export default function DirectoryPage() {
    return (
        <main className="min-h-screen bg-hospital-bg pb-20">

            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-16 px-4">
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Directorio Institucional</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
                        Conoce a las autoridades y profesionales que lideran nuestra gestión hospitalaria.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 -mt-8 relative z-10">

                {/* Search & Filter Bar (Visual only for now) */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-10 flex flex-col md:flex-row gap-4">
                    <div className="relative flex-grow">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Buscar por nombre o cargo..."
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-hospital-light focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <div className="relative md:w-1/3">
                        <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-hospital-light focus:border-transparent outline-none transition-all bg-white appearance-none cursor-pointer">
                            <option value="">Todos los Departamentos</option>
                            <option value="Dirección">Dirección General</option>
                            <option value="Administración">Administración</option>
                            <option value="Asistencial">Área Asistencial</option>
                        </select>
                    </div>
                </div>

                {/* Directory Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DIRECTORY_DATA.map((person) => (
                        <div key={person.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                            <div className="p-6 flex flex-col items-center text-center gap-4">
                                {/* Avatar / Placeholder */}
                                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-hospital-blue shrink-0 group-hover:bg-hospital-blue group-hover:text-white transition-colors mb-2">
                                    {person.image ? (
                                        <img src={person.image} alt={person.name} className="w-full h-full object-cover rounded-full" />
                                    ) : (
                                        <User className="w-10 h-10" />
                                    )}
                                </div>

                                <div className="w-full min-w-0">
                                    <span className="text-xs font-bold text-hospital-light uppercase tracking-wider mb-2 block break-words">
                                        {person.department}
                                    </span>
                                    <h3 className="font-bold text-gray-800 text-xl leading-tight mb-2 break-words">
                                        {person.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm font-medium mb-6 flex items-center justify-center gap-1">
                                        <Award className="w-4 h-4 text-gray-400 shrink-0" />
                                        <span className="break-words">{person.role}</span>
                                    </p>

                                    <div className="space-y-3 border-t border-gray-100 pt-4 w-full">
                                        <a href={`mailto:${person.email}`} className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-hospital-blue transition-colors group/link">
                                            <Mail className="w-4 h-4 shrink-0 group-hover/link:text-hospital-light" />
                                            <span className="break-all text-left">{person.email}</span>
                                        </a>
                                        <a href="tel:+51042522133" className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-hospital-blue transition-colors group/link">
                                            <Phone className="w-4 h-4 shrink-0 group-hover/link:text-hospital-light" />
                                            <span className="break-words">{person.phone}</span>
                                        </a>
                                        {/* @ts-ignore */}
                                        {person.agendaUrl && (
                                            <a href={person.agendaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-sm text-hospital-blue font-bold hover:underline transition-colors pt-2 border-t border-gray-100">
                                                <Calendar className="w-4 h-4 shrink-0" />
                                                Ver Agenda Oficial
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" /> Tarapoto, San Martín
                                </span>
                                <Link href="/contacto" className="font-bold text-hospital-blue hover:underline">
                                    Ver Ubicación
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
