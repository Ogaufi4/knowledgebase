'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // to detect active route

interface NavItem {
    label: string
    href: string
}

const navItems: NavItem[] = [
    { label: 'Overview', href: '/overview' },
    { label: 'Stations', href: '/stations' },
    { label: 'Schemaverse', href: '/schemaverse' },
    { label: 'Functions', href: '/functions' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Logs', href: '/logs' },
    { label: 'Support', href: '/support' },
    { label: 'Settings', href: '/settings' },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
            <div className="p-4 font-bold text-xl">KITSO hub</div>
            <nav className="flex-1">
                {navItems.map((item) => {
                    const active = pathname.startsWith(item.href)
                    return (
                        <Link
                            key={item.href}
                            href={`/admin${item.href}`}
                            className={`block px-4 py-2 hover:bg-gray-100 ${
                                active ? 'bg-gray-200 font-semibold' : ''
                            }`}
                        >
                            {item.label}
                        </Link>
                    )
                })}
            </nav>
            <div className="p-4 border-t border-gray-200">
                {/* Theme Toggle or other footer items */}
                <button className="w-full bg-gray-100 px-3 py-2 rounded">
                    Toggle Theme
                </button>
            </div>
        </aside>
    )
}
