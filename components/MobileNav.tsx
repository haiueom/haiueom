'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import Link from './Link'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const headerNavLinks = [
	{ href: '/', title: 'Home' },
	{ href: '/blog', title: 'Blog' },
	{ href: '/projects', title: 'Projects' },
]

const MobileNav = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="flex size-9 items-center justify-center p-2 md:hidden"
                    type="button"
                    aria-label="Toggle menu"
                    variant="ghost"
                >
                    <span className="sr-only">Toggle menu</span>
                    <Menu />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[10rem]">
                {headerNavLinks.map((link) => (
                    <DropdownMenuItem key={link.title} asChild>
                        <Link href={link.href} className="flex items-center gap-4">
                            {/* {link.icon} */}
                            <div>{link.title}</div>
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default MobileNav
