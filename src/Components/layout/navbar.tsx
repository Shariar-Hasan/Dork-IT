"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

const navigation = [
    { title: "navbar.home", link: "/", icon: "fas fa-home" },
    { title: "navbar.about", link: "/about", icon: "fa fa-list" },
    { title: "navbar.contact", link: "/contact", icon: "fa fa-address-book" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations();

    return (
        <nav className="border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <Image
                                src="/spy.png"
                                alt="Dork IT"
                                width={36}
                                height={36}
                                className="group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </div>
                        <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-red-300 bg-clip-text text-transparent">
                            Dork IT
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <NavigationMenu>
                            <NavigationMenuList className="flex space-x-2">
                                {navigation.map((item, index) => (
                                    <NavigationMenuItem key={index}>
                                        <Link
                                            href={item.link}
                                            className="px-4 py-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300 flex items-center space-x-2 font-medium group"
                                        >
                                            <i className={`${item.icon} group-hover:scale-110 transition-transform duration-300`}></i>
                                            <span>{t(item.title)}</span>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* Language Switcher */}
                        <LanguageSwitcher />

                        {/* Theme Toggle */}
                        <ThemeToggle />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <LanguageSwitcher />
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}></i>
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-300">
                        <div className="py-4 space-y-2">
                            {navigation.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    className="flex items-center space-x-3 px-4 py-3 mx-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300 font-medium group"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <i className={`${item.icon} group-hover:scale-110 transition-transform duration-300`}></i>
                                    <span>{t(item.title)}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}