import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const newsItems = [
    {
        id: 1,
        title: "Hospital implementa nueva tecnología para atención de pacientes",
        date: "06 Feb 2026",
        category: "Institucional",
        author: "Oficina de Comunicaciones",
        summary: "El Hospital ha adquirido modernos equipos de tomografía que permitirán reducir los tiempos de espera y mejorar la precisión en los diagnósticos.",
        image: "bg-blue-100" // Placeholder class
    },
    {
        id: 2,
        title: "Campaña de donación de sangre logra récord de participantes",
        date: "04 Feb 2026",
        category: "Comunidad",
        author: "Banco de Sangre",
        summary: "Gracias a la solidaridad de los ciudadanos, se logró recolectar más de 200 unidades de sangre que salvarán vidas en nuestra institución.",
        image: "bg-red-100"
    },
    {
        id: 3,
        title: "Director del Hospital presenta balance de gestión 2025",
        date: "30 Ene 2026",
        category: "Gestión",
        author: "Dirección General",
        summary: "Se destacaron los avances en infraestructura, la contratación de nuevo personal médico y la digitalización de historias clínicas.",
        image: "bg-neutral-100"
    },
    {
        id: 4,
        title: "Jornada de vacunación contra la Influenza este fin de semana",
        date: "25 Ene 2026",
        category: "Salud Pública",
        author: "Epidemiología",
        summary: "Invitamos a toda la población vulnerable a acercarse a nuestros puntos de vacunación ubicados en la entrada principal.",
        image: "bg-green-100"
    },
    {
        id: 5,
        title: "Reconocimiento a enfermeras por su labor destacada",
        date: "15 Ene 2026",
        category: "Talento Humano",
        author: "Recursos Humanos",
        summary: "En una emotiva ceremonia, se premió a las licenciadas que cumplieron 25 y 30 años de servicio ininterrumpido.",
        image: "bg-purple-100"
    },
    {
        id: 6,
        title: "Hospital recibe acreditación de calidad internacional",
        date: "10 Ene 2026",
        category: "Calidad",
        author: "Oficina de Calidad",
        summary: "Tras una rigurosa auditoría, nuestra institución obtuvo la certificación ISO 9001 por sus procesos de atención al paciente.",
        image: "bg-amber-100"
    }
];

export default function NoticiasPage() {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-800">Noticias</h1>
                    <p className="text-neutral-500 mt-2">Mantente informado sobre el acontecer de nuestra institución.</p>
                </div>

                {/* Filtros simples (visuales por ahora) */}
                <div className="hidden md:flex gap-2">
                    {['Todas', 'Institucional', 'Comunidad', 'Salud Pública'].map((filter, idx) => (
                        <button
                            key={filter}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0 ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((item) => (
                    <article key={item.id} className="flex flex-col bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-lg transition-shadow">
                        {/* Imagen Placeholder */}
                        <div className={`h-48 w-full ${item.image} flex items-center justify-center text-neutral-400 font-medium`}>
                            Imagen de Noticia
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-md font-semibold tracking-wide uppercase">
                                    {item.category}
                                </span>
                            </div>

                            <h2 className="text-xl font-bold text-neutral-800 mb-3 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                                {item.title}
                            </h2>

                            <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                                {item.summary}
                            </p>

                            <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                                <div className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    <span>{item.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <User size={14} />
                                    <span className="truncate max-w-[100px]">{item.author}</span>
                                </div>
                            </div>

                            <Link href="#" className="mt-4 w-full py-2 flex items-center justify-center gap-2 text-primary font-medium hover:bg-primary/5 rounded-lg transition-colors">
                                Leer más <ArrowRight size={16} />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            {/* Paginación simple */}
            <div className="mt-12 flex justify-center gap-2">
                <button className="px-4 py-2 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-50 disabled:opacity-50" disabled>Anterior</button>
                <button className="px-4 py-2 bg-primary text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-50">2</button>
                <button className="px-4 py-2 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-50">3</button>
                <button className="px-4 py-2 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-50">Siguiente</button>
            </div>
        </div>
    );
}
