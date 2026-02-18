
import Image from "next/image";
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import ServicePortfolio from "@/components/ServicePortfolio";

export default function Home() {
  return (
    <main className="min-h-screen">

      <section className="bg-hospital-blue text-white py-20 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hospital Tarapoto</h1>
          <p className="text-xl md:text-2xl mb-8 opactiy-90">Evolucionamos para cuidarte mejor</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/como-solicitar-cita" className="bg-white text-hospital-blue px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors inline-block">
              Cómo Obtener Cita
            </Link>
            <Link href="/emergencias" className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-hospital-blue transition-colors inline-block">
              Atención de emergencias
            </Link>
          </div>
        </div>
      </section>

      <ServicePortfolio />
    </main>
  );
}
