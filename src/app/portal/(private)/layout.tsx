"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { LayoutDashboard, FileText, Pill, LogOut, Menu, X, Activity, ClipboardCheck } from 'lucide-react';

export default function PrivateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isAuthenticated, user, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Protect Route
    useEffect(() => {
        const storedAuth = localStorage.getItem('hospital_auth');
        if (!isAuthenticated && !storedAuth) {
            router.push('/portal/login');
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return null; // Or a loading spinner while redirecting
    }

    const MENU_ITEMS = [
        // { label: 'Resumen', href: '/portal/dashboard', icon: LayoutDashboard }, // Future
        { label: 'Resultados', href: '/portal/resultados', icon: Activity },
        { label: 'Historia Clínica', href: '/portal/historia', icon: FileText },
        { label: 'Mis Recetas', href: '/portal/recetas', icon: Pill },
        { label: 'Próximos Pasos', href: '/portal/indicaciones', icon: ClipboardCheck },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed md:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0 flex flex-col
            `}>
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-hospital-blue text-xl">
                        <div className="w-8 h-8 bg-hospital-blue text-white rounded-lg flex items-center justify-center">H</div>
                        <span>Mi Salud</span>
                    </div>
                    <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-500">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-4 flex-1">
                    <div className="mb-6 px-4">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Paciente</p>
                        <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="font-bold text-gray-800 text-sm truncate">{user?.name}</p>
                            <p className="text-xs text-gray-500">DNI: {user?.document}</p>
                        </div>
                    </div>

                    <nav className="space-y-1">
                        {MENU_ITEMS.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                                        ${isActive
                                            ? 'bg-hospital-blue text-white shadow-md'
                                            : 'text-gray-600 hover:bg-gray-100'
                                        }
                                    `}
                                >
                                    <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="p-4 border-t border-gray-100">
                    <button
                        onClick={logout}
                        className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        Cerrar Sesión
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col w-full">
                {/* Mobile Header */}
                <header className="bg-white border-b border-gray-200 p-4 md:hidden flex items-center justify-between sticky top-0 z-30">
                    <button onClick={() => setSidebarOpen(true)} className="text-gray-600">
                        <Menu className="w-6 h-6" />
                    </button>
                    <span className="font-bold text-gray-800">Hospital Tarapoto</span>
                    <div className="w-6" /> {/* Spacer */}
                </header>

                <main className="flex-1 overflow-auto p-4 md:p-8">
                    <div className="max-w-5xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
