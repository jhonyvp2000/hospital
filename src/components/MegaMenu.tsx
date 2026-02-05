import { MenuCategory, MenuItem } from '@/lib/menu-data';
import Link from 'next/link';
import React from 'react';

interface MegaMenuProps {
    category: MenuCategory;
    isOpen: boolean;
    onClose: () => void;
}

export default function MegaMenu({ category, isOpen, onClose }: MegaMenuProps) {
    if (!isOpen) return null;

    return (
        <div
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
            onMouseLeave={onClose}
        >
            <div className="container mx-auto max-w-7xl py-8 px-4">
                {category.type === 'mega' && category.columns && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {category.columns.map((col, idx) => (
                            <div key={idx} className="space-y-4">
                                <h3 className="font-bold text-hospital-blue text-lg flex items-center gap-2 border-b border-gray-100 pb-2">
                                    {col.title}
                                </h3>
                                <ul className="space-y-3">
                                    {col.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                            <Link
                                                href={item.href}
                                                className="group flex items-start gap-3 p-2 rounded-lg hover:bg-hospital-bg transition-colors"
                                                onClick={onClose}
                                            >
                                                {item.icon && (
                                                    <item.icon className="w-5 h-5 text-hospital-light group-hover:text-hospital-blue transition-colors mt-0.5" />
                                                )}
                                                <div>
                                                    <span className="text-gray-700 font-medium group-hover:text-hospital-blue block">
                                                        {item.title}
                                                    </span>
                                                    {item.description && (
                                                        <span className="text-xs text-gray-500">{item.description}</span>
                                                    )}
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {category.type === 'dropdown' && category.items && (
                    <div className="max-w-xs bg-white rounded-lg p-2">
                        <ul className="space-y-1">
                            {category.items.map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-hospital-bg text-gray-700 hover:text-hospital-blue transition-colors"
                                        onClick={onClose}
                                    >
                                        {item.icon && <item.icon className="w-4 h-4" />}
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
