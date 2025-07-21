"use client";

import { useLocale } from 'next-intl';
import { Button } from "@/components/ui/button";
import { setLocale } from '@/lib/actions/locale';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
];

export function LanguageSwitcher() {
    const locale = useLocale();

    const handleLanguageChange = (newLocale: string) => {
        setLocale(newLocale);
    };

    const currentLanguage = languages.find(lang => lang.code === locale);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 px-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors"
                >
                    <Globe className="h-4 w-4 mr-2" />
                    <span className="mr-1">{currentLanguage?.flag}</span>
                    <span className="hidden sm:inline">{currentLanguage?.name}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
                {languages.map((language) => (
                    <DropdownMenuItem
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className={`cursor-pointer ${locale === language.code ? 'bg-primary/10 text-primary' : ''
                            }`}
                    >
                        <span className="mr-2">{language.flag}</span>
                        <span>{language.name}</span>
                        {locale === language.code && (
                            <i className="fas fa-check ml-auto text-primary text-sm"></i>
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
