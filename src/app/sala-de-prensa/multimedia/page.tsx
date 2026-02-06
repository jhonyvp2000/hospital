import { Play, Image as ImageIcon } from 'lucide-react';

const galleryItems = [
    { type: 'video', title: "Video Institucional 2026", duration: "3:45", thumbnail: "bg-neutral-800" },
    { type: 'image', title: "Inauguración Nueva Sala de Espera", count: "12 fotos", thumbnail: "bg-neutral-300" },
    { type: 'image', title: "Campaña de Salud Preventiva en Plaza de Armas", count: "24 fotos", thumbnail: "bg-neutral-300" },
    { type: 'video', title: "Testimonio de Paciente Recuperado", duration: "2:10", thumbnail: "bg-neutral-800" },
    { type: 'image', title: "Visita del Ministro de Salud", count: "8 fotos", thumbnail: "bg-neutral-300" },
    { type: 'image', title: "Celebración por el Día de la Medicina", count: "30 fotos", thumbnail: "bg-neutral-300" },
];

export default function MultimediaPage() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-neutral-800">Galería Multimedia</h1>
                <p className="text-neutral-500 mt-2">Fotos y videos de nuestros eventos y actividades.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item, idx) => (
                    <div key={idx} className="group relative aspect-video bg-neutral-200 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all">
                        {/* Thumbnail Placeholder */}
                        <div className={`w-full h-full ${item.thumbnail} flex items-center justify-center`}>
                            {item.type === 'video' ? (
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play fill="white" className="text-white ml-1" />
                                </div>
                            ) : (
                                <ImageIcon className="text-neutral-500 w-10 h-10 group-hover:scale-110 transition-transform" />
                            )}
                        </div>

                        {/* Overlay Info */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 flex flex-col justify-end p-4">
                            <h3 className="text-white font-medium text-lg leading-tight mb-1">{item.title}</h3>
                            <span className="text-white/70 text-sm flex items-center gap-1">
                                {item.type === 'video' ? (
                                    <>{item.duration}</>
                                ) : (
                                    <>{item.count}</>
                                )}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
