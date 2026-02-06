import React from 'react';

export default function SalaDePrensaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-neutral-50">
            <div className="bg-primary/5 py-12 border-b border-primary/10">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-primary mb-2">Sala de Prensa</h1>
                    <p className="text-neutral-600 text-lg">
                        Información oficial, noticias y recursos para medios de comunicación.
                    </p>
                </div>
            </div>
            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    );
}
