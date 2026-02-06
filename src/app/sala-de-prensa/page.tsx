import Link from 'next/link';
import { Newspaper, FileText, Video, Phone, ArrowRight } from 'lucide-react';

const sections = [
    {
        title: "Noticias",
        description: "Últimas novedades, actividades y logros de nuestra institución.",
        href: "/sala-de-prensa/noticias",
        icon: Newspaper,
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "Comunicados",
        description: "Anuncios oficiales y avisos importantes para la comunidad.",
        href: "/sala-de-prensa/comunicados",
        icon: FileText,
        color: "bg-amber-100 text-amber-600"
    },
    {
        title: "Multimedia",
        description: "Galería de fotos y videos de eventos y campañas.",
        href: "/sala-de-prensa/multimedia",
        icon: Video,
        color: "bg-purple-100 text-purple-600"
    },
    {
        title: "Contacto de Prensa",
        description: "Canales de comunicación exclusivos para periodistas y medios.",
        href: "/sala-de-prensa/contacto",
        icon: Phone,
        color: "bg-green-100 text-green-600"
    }
];

export default function SalaDePrensaPage() {
    return (
        <div className="space-y-12">
            {/* Accesos Directos */}
            <div className="grid md:grid-cols-2 gap-6">
                {sections.map((section) => (
                    <Link
                        key={section.title}
                        href={section.href}
                        className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-neutral-100 flex items-start gap-4"
                    >
                        <div className={`p-3 rounded-lg ${section.color}`}>
                            <section.icon size={24} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary transition-colors">
                                {section.title}
                            </h3>
                            <p className="text-neutral-600 mb-4">
                                {section.description}
                            </p>
                            <div className="flex items-center text-sm font-medium text-primary">
                                Ver sección <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Sección Destacada (Preview) */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-neutral-800">Lo Más Reciente</h2>
                    <Link href="/sala-de-prensa/noticias" className="text-primary hover:underline flex items-center">
                        Ver todas las noticias <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Mock de noticias recientes */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-lg overflow-hidden border border-neutral-200">
                            <div className="h-48 bg-neutral-200 animate-pulse flex items-center justify-center text-neutral-400">
                                Imagen Noticia {i}
                            </div>
                            <div className="p-4">
                                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                                    Institucional
                                </span>
                                <h3 className="font-bold text-lg mt-2 mb-2 line-clamp-2">
                                    Hospital implementa nueva tecnología para atención de pacientes
                                </h3>
                                <p className="text-neutral-500 text-sm mb-4 line-clamp-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <span className="text-xs text-neutral-400">06 Feb 2026</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
