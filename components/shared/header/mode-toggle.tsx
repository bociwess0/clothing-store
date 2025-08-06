'use client'
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DropdownMenuCheckboxItem, DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import { MoonIcon, Sun, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

export default function ModeToggle() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if(!mounted) {
        return null;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer'>
                    { theme === 'system' ? (
                        <SunMoon />
                    ) : theme === 'dark' ? (
                        <MoonIcon />
                    ) : <Sun /> }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='focus-visible:ring-0 focus-visible:ring-offset-0 text-center'>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem className='cursor-pointer' checked = {theme === 'system'} onClick={() => setTheme('system')} >
                    System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className='cursor-pointer' checked = {theme === 'dark'} onClick={() => setTheme('dark')} >
                    Dark
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className='cursor-pointer' checked = {theme === 'light'} onClick={() => setTheme('light')} >
                    System
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
