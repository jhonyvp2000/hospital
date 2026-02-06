import Link from 'next/link';
import {
    HeartPulse, Activity, Zap, ShieldCheck, Microscope,
    Stethoscope, Brain, Bone, Baby, Thermometer,
    Clock, CheckCircle, AlertCircle
} from 'lucide-react';

export default function CentroQuirurgicoPage() {
    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="relative h-[400px] bg-sky-900 text-white flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/60 z-10" />
                {/* Decorative elements representing sterile environment */}
                <div className="absolute inset-0 opacity-10 pattern-grid-lg" />

                <div className="relative z-20 text-center container mx-auto px-4">
                    <div className="inline-flex items-center gap-2 bg-sky-500/30 border border-sky-400/30 text-sky-100 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase mb-6 backdrop-blur-sm">
                        <ShieldCheck size={18} /> Seguridad y Bioseguridad Garantizada
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Centro Quirúrgico</h1>
                    <p className="text-xl md:text-2xl text-sky-100 max-w-2xl mx-auto mb-8">
                        Tecnología de vanguardia y staff médico altamente especializado para intervenciones de alta complejidad.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href="#especialidades" className="bg-white text-sky-900 hover:bg-sky-50 px-8 py-3 rounded-lg font-bold transition-colors">
                            Ver Especialidades
                        </Link>
                    </div>
                </div>
            </section>

            <main className="container mx-auto px-4 py-16 space-y-20">

                {/* Intro & Infraestructura */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-neutral-800 mb-6">Infraestructura de Clase Mundial</h2>
                        <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                            Nuestro Centro Quirúrgico cuenta con salas de operaciones inteligentes, diseñadas bajo estrictos estándares internacionales de asepsia y flujo laminar.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 bg-green-100 p-1 rounded text-green-600"><CheckCircle size={18} /></div>
                                <div>
                                    <h4 className="font-bold text-neutral-800">Quirófanos Integrados</h4>
                                    <p className="text-sm text-neutral-500">Torres de laparoscopía 4K y sistemas de transmisión de video.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 bg-green-100 p-1 rounded text-green-600"><CheckCircle size={18} /></div>
                                <div>
                                    <h4 className="font-bold text-neutral-800">Cielíticas LED</h4>
                                    <p className="text-sm text-neutral-500">Iluminación de alta precisión sin sombras ni calor.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 bg-green-100 p-1 rounded text-green-600"><CheckCircle size={18} /></div>
                                <div>
                                    <h4 className="font-bold text-neutral-800">Mesas Quirúrgicas Eléctricas</h4>
                                    <p className="text-sm text-neutral-500">Versatilidad para todo tipo de posición y cirugía.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-neutral-200 rounded-2xl h-[400px] flex items-center justify-center relative overflow-hidden group">
                        {/* Placeholder Image */}
                        <div className="absolute inset-0 bg-neutral-300 flex items-center justify-center text-neutral-500 font-medium z-10 group-hover:scale-105 transition-transform duration-500">
                            Imagen de Quirófano Equipado
                        </div>
                        <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
                            <span className="font-bold text-neutral-800 block">Sala de Operaciones 1</span>
                            <span className="text-xs text-neutral-500">Equipamiento de Alta Complejidad</span>
                        </div>
                    </div>
                </section>

                {/* Especialidades */}
                <section id="especialidades" className="bg-white rounded-3xl p-10 shadow-sm border border-neutral-200">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-neutral-800 mb-4">Especialidades Quirúrgicas</h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto">
                            Realizamos procedimientos programados y de emergencia en diversas ramas de la medicina moderna.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-primary/30 hover:shadow-md transition-all flex flex-col items-center text-center group">
                            <Microscope size={40} className="text-neutral-400 group-hover:text-primary mb-4 transition-colors" />
                            <h3 className="font-bold text-neutral-800 mb-2">Cirugía General</h3>
                            <p className="text-xs text-neutral-500">Laparoscópica y Abdominal</p>
                        </div>

                        <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-primary/30 hover:shadow-md transition-all flex flex-col items-center text-center group">
                            <Brain size={40} className="text-neutral-400 group-hover:text-primary mb-4 transition-colors" />
                            <h3 className="font-bold text-neutral-800 mb-2">Neurocirugía</h3>
                            <p className="text-xs text-neutral-500">Tumores y Columna</p>
                        </div>

                        <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-primary/30 hover:shadow-md transition-all flex flex-col items-center text-center group">
                            <Bone size={40} className="text-neutral-400 group-hover:text-primary mb-4 transition-colors" />
                            <h3 className="font-bold text-neutral-800 mb-2">Traumatología</h3>
                            <p className="text-xs text-neutral-500">Prótesis y Fracturas</p>
                        </div>

                        <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-primary/30 hover:shadow-md transition-all flex flex-col items-center text-center group">
                            <Baby size={40} className="text-neutral-400 group-hover:text-primary mb-4 transition-colors" />
                            <h3 className="font-bold text-neutral-800 mb-2">Ginecología</h3>
                            <p className="text-xs text-neutral-500">Cesáreas y Miomas</p>
                        </div>

                        <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-primary/30 hover:shadow-md transition-all flex flex-col items-center text-center group">
                            <HeartPulse size={40} className="text-neutral-400 group-hover:text-primary mb-4 transition-colors" />
                            <h3 className="font-bold text-neutral-800 mb-2">Cardiovascular</h3>
                            <p className="text-xs text-neutral-500">By-pass y Valvular</p>
                        </div>

                        <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-primary/30 hover:shadow-md transition-all flex flex-col items-center text-center group">
                            <Activity size={40} className="text-neutral-400 group-hover:text-primary mb-4 transition-colors" />
                            <h3 className="font-bold text-neutral-800 mb-2">Urología</h3>
                            <p className="text-xs text-neutral-500">Próstata y Litiasis</p>
                        </div>

                        <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-primary/30 hover:shadow-md transition-all flex flex-col items-center text-center group">
                            <Stethoscope size={40} className="text-neutral-400 group-hover:text-primary mb-4 transition-colors" />
                            <h3 className="font-bold text-neutral-800 mb-2">Pediatría</h3>
                            <p className="text-xs text-neutral-500">Cirugía Infantil</p>
                        </div>

                        <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-primary/30 hover:shadow-md transition-all flex flex-col items-center text-center group">
                            <Zap size={40} className="text-neutral-400 group-hover:text-primary mb-4 transition-colors" />
                            <h3 className="font-bold text-neutral-800 mb-2">Oftalmología</h3>
                            <p className="text-xs text-neutral-500">Cataratas y Retina</p>
                        </div>
                    </div>
                </section>

                {/* Central de Esterilización */}
                <section className="bg-blue-900 rounded-2xl overflow-hidden text-white relative">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/50 skew-x-12 transform translate-x-20" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 p-12 items-center">
                        <div>
                            <div className="inline-block px-3 py-1 bg-blue-700 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
                                Pilar de Seguridad
                            </div>
                            <h2 className="text-3xl font-bold mb-6">Central de Esterilización</h2>
                            <p className="text-blue-100 mb-8 leading-relaxed">
                                Nuestra Central es el corazón de la seguridad del paciente. Procesamos todo el instrumental quirúrgico mediante rigurosos protocolos de lavado, desinfección y esterilización (Autoclave y Plasma), garantizando la asepsia total en cada procedimiento.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="text-green-400" />
                                    <span>Certificación de procesos biológicos y químicos.</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Thermometer className="text-green-400" />
                                    <span>Control estricto de temperatura y presión.</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            {/* Iconografia abstracta o imagen */}
                            <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                                <Zap size={80} className="text-blue-300 opacity-80" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Flujo del Paciente */}
                <section>
                    <h2 className="text-3xl font-bold text-neutral-800 mb-10 text-center">Su Experiencia Quirúrgica</h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { step: 1, title: "Admisión", desc: "Verificación de datos y consentimiento informado." },
                            { step: 2, title: "Pre-Operatorio", desc: "Preparación física y evaluación anestesiológica." },
                            { step: 3, title: "Intervención", desc: "Procedimiento en quirófano con monitoreo continuo." },
                            { step: 4, title: "Recuperación", desc: "Monitoreo en URPA hasta el pase a habitación o alta." }
                        ].map((item) => (
                            <div key={item.step} className="bg-white p-6 rounded-xl border border-neutral-100 relative group hover:-translate-y-1 transition-transform">
                                <div className="absolute -top-4 left-6 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-neutral-800 mt-4 mb-2">{item.title}</h3>
                                <p className="text-sm text-neutral-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Info Adicional */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 flex flex-col sm:flex-row gap-4 items-start">
                    <AlertCircle className="text-amber-600 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-amber-800 mb-1">Información para Familiares</h4>
                        <p className="text-amber-900/80 text-sm">
                            Durante la cirugía, los familiares pueden esperar en la Sala de Espera Quirúrgica (Piso 2).
                            El médico cirujano brindará el informe verbal al finalizar el procedimiento.
                        </p>
                    </div>
                </div>

            </main>
        </div>
    );
}
