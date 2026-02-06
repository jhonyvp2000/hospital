import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactoPrensaPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-neutral-800 mb-4">Contacto de Prensa</h1>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                    Si eres periodista o representas a un medio de comunicación, comunícate con nuestra Oficina de Comunicaciones para coordinar entrevistas, filmaciones o solicitar información oficial.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                        <Mail size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">Correo Electrónico</h3>
                    <p className="text-neutral-500 mb-4 text-sm">Para notas de prensa y solicitudes formales</p>
                    <a href="mailto:prensa@hospital.gob.pe" className="text-lg font-medium text-primary hover:underline">
                        prensa@hospital.gob.pe
                    </a>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                        <Phone size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">Teléfonos</h3>
                    <p className="text-neutral-500 mb-4 text-sm">Atención directa a medios</p>
                    <div className="flex flex-col gap-1">
                        <a href="tel:+5112345678" className="text-lg font-medium text-neutral-800 hover:text-primary transition-colors">
                            (01) 234-5678 <span className="text-neutral-400 text-sm font-normal">anexo 204</span>
                        </a>
                        <a href="tel:+51999888777" className="text-lg font-medium text-neutral-800 hover:text-primary transition-colors">
                            +51 999 888 777 <span className="text-neutral-400 text-sm font-normal">(Móvil)</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-800 mb-6 flex items-center gap-2">
                    <MapPin size={20} className="text-primary" />
                    Ubicación y Horarios
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-medium text-neutral-900 mb-2">Oficina de Comunicaciones</h4>
                        <p className="text-neutral-600 mb-4">
                            Av. Principal 123, Distrito, Lima - Perú<br />
                            Edificio Administrativo, 2do Piso
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium text-neutral-900 mb-2 flex items-center gap-2">
                            <Clock size={16} className="text-neutral-400" /> Horario de Atención
                        </h4>
                        <ul className="text-neutral-600 space-y-1">
                            <li className="flex justify-between max-w-xs">
                                <span>Lunes a Viernes:</span>
                                <span className="font-medium">8:00 AM - 5:00 PM</span>
                            </li>
                            <li className="flex justify-between max-w-xs">
                                <span>Sábados:</span>
                                <span className="font-medium">9:00 AM - 1:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
