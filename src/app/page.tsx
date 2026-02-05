

export default function Home() {
  return (
    <main className="min-h-screen">

      <section className="bg-hospital-blue text-white py-20 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hospital Tarapoto</h1>
          <p className="text-xl md:text-2xl mb-8 opactiy-90">Evolucionamos para cuidarte mejor</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-hospital-blue px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
              ¿Cómo solicito una cita médica?
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-hospital-blue transition-colors">
              Emergencias
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-hospital-bg">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-hospital-blue mb-8 text-center">Servicios Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Cards will go here */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Consulta Externa</h3>
              <p className="text-gray-600">Atención especializada en más de 20 especialidades médicas.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Laboratorio</h3>
              <p className="text-gray-600">Resultados rápidos y confiables con tecnología de punta.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Emergencia 24/7</h3>
              <p className="text-gray-600">Atención inmediata para casos críticos de alta complejidad.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
