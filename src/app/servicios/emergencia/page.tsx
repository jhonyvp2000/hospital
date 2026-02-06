import Link from 'next/link';
import {
    Siren, Clock, Activity, HeartPulse, UserCheck, ShieldAlert,
    MapPin, Phone, AlertTriangle, Stethoscope, BedDouble, Zap
} from 'lucide-react';

export default function EmergenciaUCIPage() {
    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="relative h-[400px] bg-neutral-900 text-white flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-red-900/40 z-10" />
                <div className="relative z-20 text-center container mx-auto px-4">
                    <div className="inline-flex items-center gap-2 bg-red-600/90 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-6 animate-pulse">
                        <Siren size={18} /> Atención Inmediata 24/7
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Emergencia y Cuidados Críticos</h1>
                    <p className="text-xl md:text-2xl text-neutral-200 max-w-2xl mx-auto mb-8">
                        Preparados para salvar vidas con tecnología avanzada y especialistas de primer nivel.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                            <Phone size={20} /> Llamar al 106 (SAMU)
                        </button>
                        <Link href="#ubicacion" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                            <MapPin size={20} /> Ver Ubicación
                        </Link>
                    </div>
                </div>
            </section>

            <main className="container mx-auto px-4 py-12 space-y-16">

                {/* Sistema de Triaje Manchester */}
                <section>
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-3xl font-bold text-neutral-800 mb-4">¿Cómo priorizamos su atención?</h2>
                        <p className="text-neutral-600 text-lg">
                            Utilizamos el <strong className="text-neutral-900">Sistema de Triaje Manchester</strong> para clasificar a los pacientes según la gravedad de su condición, asegurando que quienes tienen riesgo vital sean atendidos primero.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-4">
                        {/* Nivel 1 */}
                        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col">
                            <div className="bg-red-600 p-4 text-white text-center">
                                <span className="block text-2xl font-bold mb-1">Nivel I</span>
                                <span className="text-sm font-medium opacity-90 uppercase tracking-wider">Resucitación</span>
                            </div>
                            <div className="p-6 flex-1 flex flex-col items-center text-center">
                                <HeartPulse size={32} className="text-red-600 mb-3" />
                                <p className="text-neutral-800 font-bold mb-2">Atención Inmediata</p>
                                <p className="text-sm text-neutral-500">Riesgo vital inminente. Paro cardiorespiratorio, trauma grave.</p>
                                <div className="mt-auto pt-4 text-red-600 font-bold text-lg">0 min</div>
                            </div>
                        </div>

                        {/* Nivel 2 */}
                        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col">
                            <div className="bg-orange-500 p-4 text-white text-center">
                                <span className="block text-2xl font-bold mb-1">Nivel II</span>
                                <span className="text-sm font-medium opacity-90 uppercase tracking-wider">Emergencia</span>
                            </div>
                            <div className="p-6 flex-1 flex flex-col items-center text-center">
                                <AlertTriangle size={32} className="text-orange-500 mb-3" />
                                <p className="text-neutral-800 font-bold mb-2">Muy Urgente</p>
                                <p className="text-sm text-neutral-500">Dolor severo, dificultad respiratoria moderada.</p>
                                <div className="mt-auto pt-4 text-orange-500 font-bold text-lg">10 - 15 min</div>
                            </div>
                        </div>

                        {/* Nivel 3 */}
                        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col">
                            <div className="bg-yellow-400 p-4 text-neutral-900 text-center">
                                <span className="block text-2xl font-bold mb-1">Nivel III</span>
                                <span className="text-sm font-bold opacity-80 uppercase tracking-wider">Urgencia</span>
                            </div>
                            <div className="p-6 flex-1 flex flex-col items-center text-center">
                                <Activity size={32} className="text-yellow-500 mb-3" />
                                <p className="text-neutral-800 font-bold mb-2">Urgente</p>
                                <p className="text-sm text-neutral-500">Dolor abdominal, fiebre alta, fracturas estables.</p>
                                <div className="mt-auto pt-4 text-yellow-600 font-bold text-lg">60 min</div>
                            </div>
                        </div>

                        {/* Nivel 4 */}
                        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col">
                            <div className="bg-green-500 p-4 text-white text-center">
                                <span className="block text-2xl font-bold mb-1">Nivel IV</span>
                                <span className="text-sm font-medium opacity-90 uppercase tracking-wider">Menor</span>
                            </div>
                            <div className="p-6 flex-1 flex flex-col items-center text-center">
                                <Stethoscope size={32} className="text-green-500 mb-3" />
                                <p className="text-neutral-800 font-bold mb-2">Urgencia Menor</p>
                                <p className="text-sm text-neutral-500">Dolor garganta, diarrea sin deshidratación.</p>
                                <div className="mt-auto pt-4 text-green-600 font-bold text-lg">2 horas</div>
                            </div>
                        </div>

                        {/* Nivel 5 */}
                        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col">
                            <div className="bg-blue-500 p-4 text-white text-center">
                                <span className="block text-2xl font-bold mb-1">Nivel V</span>
                                <span className="text-sm font-medium opacity-90 uppercase tracking-wider">No Urgente</span>
                            </div>
                            <div className="p-6 flex-1 flex flex-col items-center text-center">
                                <UserCheck size={32} className="text-blue-500 mb-3" />
                                <p className="text-neutral-800 font-bold mb-2">Consulta</p>
                                <p className="text-sm text-neutral-500">Curaciones, retiro de puntos, recetas.</p>
                                <div className="mt-auto pt-4 text-blue-600 font-bold text-lg">4 horas</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-blue-50 p-4 rounded-lg flex items-start gap-3 text-sm text-blue-800 max-w-4xl mx-auto">
                        <ShieldAlert className="shrink-0 mt-0.5" size={18} />
                        <p>
                            <strong>Importante:</strong> Los tiempos son referenciales y dependen de la demanda del servicio.
                            Nuestro compromiso es atender los casos de Nivel I y II de manera prioritaria e inmediata.
                        </p>
                    </div>
                </section>

                {/* Unidad de Cuidados Intensivos (UCI) */}
                <section className="bg-white rounded-3xl shadow-sm border border-neutral-200 overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="bg-neutral-800 text-white p-10 md:p-14 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 text-primary-400 font-bold tracking-wider uppercase mb-4 text-sm">
                                <BedDouble size={18} /> Alta Complejidad
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unidad de Cuidados Intensivos (UCI)</h2>
                            <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                                Nuestra UCI está diseñada para brindar soporte vital avanzado a pacientes en estado crítico. Contamos con tecnología de monitoreo hemodinámico invasivo y no invasivo las 24 horas.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-400">
                                        <Activity size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Monitoreo 24/7</h3>
                                        <p className="text-neutral-400 text-sm">Vigilancia constante de signos vitales.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-400">
                                        <Zap size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Soporte Vital Avanzado</h3>
                                        <p className="text-neutral-400 text-sm">Ventilación mecánica y hemodiálisis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-neutral-100 min-h-[400px] flex items-center justify-center relative">
                            {/* Placeholder para imagen real de UCI */}
                            <div className="text-neutral-400 flex flex-col items-center">
                                <BedDouble size={64} className="mb-4 opacity-50" />
                                <span className="font-medium">Imagen de Sala UCI</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Infraestructura */}
                <section>
                    <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Infraestructura Especializada</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-neutral-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-primary mb-3">Trauma Shock</h3>
                            <p className="text-neutral-600">
                                Área equipada para la reanimación y estabilización inmediata de pacientes con riesgo de muerte inminente.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-neutral-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-primary mb-3">Tópicos Diferenciados</h3>
                            <p className="text-neutral-600">
                                Atención separada por especialidades: Medicina Interna, Cirugía, Pediatría y Ginecología-Obstetricia.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-neutral-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-primary mb-3">Apoyo al Diagnóstico</h3>
                            <p className="text-neutral-600">
                                Acceso directo a Tomografía Espiral Multicorte, Rayos X Digitales y Laboratorio Clínico las 24 horas.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contacto y Ubicación */}
                <section id="ubicacion" className="bg-primary/5 rounded-2xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-2xl font-bold text-neutral-800 mb-4">¿Cuándo acudir a Emergencia?</h2>
                            <p className="text-neutral-600 max-w-xl mb-6">
                                Acuda inmediatamente si presenta: dolor de pecho intenso, dificultad para respirar, pérdida de conciencia, sangrado profuso, convulsiones o accidentes graves.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-lg shadow-sm">
                                    <Phone className="text-red-500" />
                                    <div>
                                        <p className="text-xs text-neutral-500 font-bold uppercase">Central de Emergencia</p>
                                        <p className="text-lg font-bold text-neutral-800">(01) 234-5678</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-lg shadow-sm">
                                    <MapPin className="text-primary" />
                                    <div>
                                        <p className="text-xs text-neutral-500 font-bold uppercase">Ingreso Diferenciado</p>
                                        <p className="text-lg font-bold text-neutral-800">Jr. Washington 123 - Puerta 2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0">
                            {/* Placeholder Mapa */}
                            <div className="w-full md:w-64 h-48 bg-neutral-200 rounded-lg flex items-center justify-center text-neutral-500 font-medium">
                                Mapa de Ubicación
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
