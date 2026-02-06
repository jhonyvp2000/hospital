import Link from 'next/link';
import {
    Microscope, Scan, Droplet, FileText, ArrowRight,
    Activity, Thermometer, ShieldCheck, Database, Router
} from 'lucide-react';

export default function AyudaDiagnosticoPage() {
    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="relative h-[400px] bg-indigo-900 text-white flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-indigo-950/70 z-10" />
                <div className="relative z-20 text-center container mx-auto px-4">
                    <div className="inline-flex items-center gap-2 bg-indigo-500/30 border border-indigo-400/30 text-indigo-100 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase mb-6 backdrop-blur-sm">
                        <Activity size={18} /> Precisión Certificada
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Ayuda al Diagnóstico</h1>
                    <p className="text-xl md:text-2xl text-indigo-100 max-w-2xl mx-auto mb-8">
                        Tecnología avanzada y profesionales expertos para brindarle resultados rápidos y precisos.
                    </p>
                    <Link href="#resultados" className="bg-white text-indigo-900 hover:bg-indigo-50 px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center gap-2">
                        <FileText size={20} /> Consultar Resultados en Línea
                    </Link>
                </div>
            </section>

            <main className="container mx-auto px-4 py-16 space-y-24">

                {/* Laboratorio Clínico */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                                <Microscope size={28} />
                            </div>
                            <h2 className="text-3xl font-bold text-neutral-800">Laboratorio Clínico</h2>
                        </div>
                        <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                            Realizamos análisis bioquímicos, hematológicos y microbiológicos con los más altos estándares de calidad. Nuestro compromiso es apoyar al médico en la toma de decisiones clínicas.
                        </p>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-2 text-neutral-700">
                                <span className="w-2 h-2 rounded-full bg-indigo-500" /> Bioquímica automatizada y marcadores tumorales.
                            </li>
                            <li className="flex items-center gap-2 text-neutral-700">
                                <span className="w-2 h-2 rounded-full bg-indigo-500" /> Microbiología y cultivos especializados.
                            </li>
                            <li className="flex items-center gap-2 text-neutral-700">
                                <span className="w-2 h-2 rounded-full bg-indigo-500" /> Pruebas hormonales e inmunológicas.
                            </li>
                        </ul>
                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                            <p className="text-sm text-indigo-900 font-medium">
                                <span className="font-bold block mb-1">Tecnología Integrada:</span>
                                Equipos automatizados con interfaz al proyecto de historia clínica electrónica, reduciendo el margen de error y agilizando la entrega de resultados.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 bg-neutral-200 rounded-2xl h-[350px] flex items-center justify-center text-neutral-400 font-medium">
                        Imagen de Laboratorio Automatizado
                    </div>
                </section>

                {/* Diagnóstico por Imágenes */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-neutral-200 rounded-2xl h-[350px] flex items-center justify-center text-neutral-400 font-medium">
                        Imagen de Tomógrafo / Rayos X
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                                <Scan size={28} />
                            </div>
                            <h2 className="text-3xl font-bold text-neutral-800">Diagnóstico por Imágenes</h2>
                        </div>
                        <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                            Obtenemos imágenes de alta resolución esenciales para el diagnóstico preciso de diversas patologías, utilizando equipos de última generación con mínima radiación.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
                                <h4 className="font-bold text-neutral-800 mb-1">Tomografía (TEM)</h4>
                                <p className="text-xs text-neutral-500">Espiral multicorte para reconstrucciones 3D.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
                                <h4 className="font-bold text-neutral-800 mb-1">Ecografía 4D</h4>
                                <p className="text-xs text-neutral-500">Doppler color de alta definición.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
                                <h4 className="font-bold text-neutral-800 mb-1">Rayos X Digital</h4>
                                <p className="text-xs text-neutral-500">Imágenes instantáneas y nítidas.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
                                <h4 className="font-bold text-neutral-800 mb-1">Mamografía</h4>
                                <p className="text-xs text-neutral-500">Digital para detección temprana.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Anatomía Patológica (Compacto) */}
                <section className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="bg-pink-100 p-4 rounded-full text-pink-600 shrink-0">
                            <Microscope size={32} />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-neutral-800 mb-2">Anatomía Patológica</h3>
                            <p className="text-neutral-600">
                                Estudio microscópico de tejidos y células para determinar la naturaleza de las enfermedades. Realizamos biopsias, citologías y estudios inmunohistoquímicos fundamentales para el diagnóstico oncológico.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Agrupación: Banco de Sangre y Lab Regional */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Banco de Sangre Regional */}
                    <section className="bg-red-50 rounded-3xl p-8 border border-red-100 flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-red-100 p-3 rounded-xl text-red-600">
                                <Droplet size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-red-900">Banco de Sangre Regional</h2>
                        </div>
                        <p className="text-red-900/80 mb-6 flex-1">
                            Centro especializado en la obtención, procesamiento y almacenamiento seguro de hemocomponentes para atender las necesidades transfusionales de toda la región.
                        </p>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
                            <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                                <Activity size={16} /> ¡Dona Sangre, Dona Vida!
                            </h4>
                            <p className="text-sm text-neutral-600 mb-4">
                                Acércate a nuestro centro de donación voluntaria. Tu aporte solidario salva vidas diariamente.
                            </p>
                            <div className="text-xs font-semibold text-neutral-500">
                                Horario de Donación: Lunes a Sábado 7:00 AM - 1:00 PM
                            </div>
                        </div>
                    </section>

                    {/* Laboratorio Regional Referencial */}
                    <section className="bg-sky-50 rounded-3xl p-8 border border-sky-100 flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-sky-100 p-3 rounded-xl text-sky-600">
                                <Router size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-sky-900">Laboratorio Regional Referencial</h2>
                        </div>
                        <p className="text-sky-900/80 mb-6 flex-1">
                            Eje central de la vigilancia epidemiológica regional. Trabajamos articuladamente con el <strong>Instituto Nacional de Salud (INS)</strong> para el control de enfermedades y brotes.
                        </p>
                        <ul className="space-y-3 bg-white p-6 rounded-xl shadow-sm border border-sky-100">
                            <li className="flex gap-3 text-sm text-neutral-700">
                                <ShieldCheck className="text-sky-500 shrink-0" size={18} />
                                <span><strong>Vigilancia Epidemiológica:</strong> Diagnóstico especializado de TBC, VIH, Dengue y otras metaxénicas.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-neutral-700">
                                <Database className="text-sky-500 shrink-0" size={18} />
                                <span><strong>Control de Calidad:</strong> Supervisión y evaluación de la red de laboratorios periféricos.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-neutral-700">
                                <Thermometer className="text-sky-500 shrink-0" size={18} />
                                <span><strong>Respuesta Rápida:</strong> Investigación de brotes y emergencias sanitarias.</span>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* CTA Resultados */}
                <section id="resultados" className="bg-neutral-900 text-white rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Consulte sus Resultados en Línea</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
                        Acceda a su historial de laboratorio e informes de imágenes desde la comodidad de su hogar a través de nuestro Portal del Paciente seguro.
                    </p>
                    <Link href="/portal/resultados" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-3 transition-colors">
                        Ingresar al Portal de Paciente <ArrowRight size={20} />
                    </Link>
                </section>

            </main>
        </div>
    );
}
