import React from 'react';
import { Target, Eye, Calendar, Award, Building2, User, Flag, ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-hospital-bg pb-20">

            {/* Hero Section */}
            <section className="bg-hospital-blue text-white py-20 px-4 relative overflow-hidden">
                {/* Abstract pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm border border-blue-400/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        <Building2 className="w-4 h-4" /> Hospital Referencial II-2
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Nuestra Historia y Propósito
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto font-light leading-relaxed">
                        Más que un centro médico, somos una institución con décadas de servicio, evolución y compromiso inquebrantable con la salud de San Martín.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 -mt-10 relative z-20">

                {/* Mission & Vision Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {/* Mission */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-8 border-hospital-blue transform hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-hospital-blue">
                            <Target className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
                        <p className="text-gray-600 text-lg leading-relaxed italic">
                            "Somos un Hospital II-2, que brinda atención integral especializada en los diferentes servicios de Salud del segundo nivel de atención, personalizada, con amabilidad, sentido de urgencia y estándares de calidad, a la población Nor Oriental."
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-8 border-hospital-light transform hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-6 text-hospital-light">
                            <Eye className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Visión</h2>
                        <p className="text-gray-600 text-lg leading-relaxed italic">
                            "Hospital referente en la macro región nororiental, en gestión clínica moderna y docencia, con altos estándares de calidad científica, técnica y humana al servicio de la población."
                        </p>
                    </div>
                </div>

                {/* History Timeline Section */}
                <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-16 mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-hospital-blue mb-4">Un Legado de Salud</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Desde 1968, cada año ha sido un paso adelante en nuestra misión de cuidar vidas.</p>
                    </div>

                    <div className="relative border-l-4 border-gray-100 ml-4 md:ml-1/2 md:left-0 md:transform md:-translate-x-0.5 space-y-12">

                        {/* 1968 */}
                        <TimelineItem
                            year="1968 - Orígenes"
                            icon={Flag}
                            title="Nuestra Fundación"
                            content="El 6 de enero, bajo la gestión del Pdte. Fernando Belaunde Terry, nacemos como 'Hospital de Tarapoto'. Nuestro primer equipo de salud fue liderado por el Dr. Juan B. Lozno."
                        />

                        {/* 1986 - 2007 (Right side on desktop) */}
                        <TimelineItem
                            year="1986 - 2007"
                            icon={User}
                            title="Integración y Restitución"
                            content="Atravesamos 21 años integrados a la Seguridad Social (IPSS/EsSalud). En 2007, formalizamos nuestra recuperación física, cerrando un ciclo complejo pero de mucho aprendizaje."
                            side="right"
                        />

                        {/* 2010 - Present */}
                        <TimelineItem
                            year="2010 - Presente"
                            icon={Award}
                            title="Modernización y Nivel II-2"
                            content="Consolidados como Unidad Ejecutora 400 y categorizados como Hospital de Mediana Complejidad (Nivel II-2). Somos el centro de referencia para Tarapoto, Dorado, Picota y Lamas."
                        />

                    </div>
                </section>

                {/* Strategic Commitment */}
                <section className="bg-gradient-to-br from-blue-900 to-hospital-blue rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <Quote className="w-12 h-12 text-blue-300 mx-auto mb-6 opacity-50" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Nuestro Compromiso</h2>
                        <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-10">
                            Continuamos evolucionando para garantizar servicios de salud preventivos, promocionales y recuperativos, superando las limitaciones del pasado y mirando hacia un futuro de excelencia médica.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link href="/servicios/consulta" className="bg-white text-hospital-blue px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
                                Ver Nuestros Servicios
                            </Link>
                            <Link href="/directorio" className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-hospital-blue transition-all">
                                Conoce al Directorio
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}

function TimelineItem({ year, icon: Icon, title, content, side = "left" }: any) {
    const isRight = side === "right";

    return (
        <div className={`relative flex items-center md:justify-between ${isRight ? 'md:flex-row-reverse' : ''}`}>

            {/* Dot on Line */}
            <div className="absolute -left-[20px] md:left-1/2 md:-ml-[10px] w-5 h-5 rounded-full border-4 border-white bg-hospital-blue z-20"></div>

            {/* Content Spacer for Desktop centering */}
            <div className="hidden md:block w-5/12"></div>

            {/* Content Card */}
            <div className="w-full ml-10 md:ml-0 md:w-5/12 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-hospital-blue text-xs font-bold px-3 py-1 rounded-full">{year}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Icon className="w-5 h-5 text-hospital-light" />
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                    {content}
                </p>
            </div>
        </div>
    )
}
