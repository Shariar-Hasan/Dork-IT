"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300 group cursor-pointer"
                >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:scale-110" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:scale-110" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="w-48 border-0 shadow-2xl bg-card/95 backdrop-blur-lg"
            >
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    className="cursor-pointer hover:bg-primary/10 transition-colors"
                >
                    <Sun className="mr-3 h-4 w-4" />
                    <span>Light</span>
                    {theme === "light" && (
                        <div className="ml-auto h-2 w-2 bg-primary rounded-full"></div>
                    )}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    className="cursor-pointer hover:bg-primary/10 transition-colors"
                >
                    <Moon className="mr-3 h-4 w-4" />
                    <span>Dark</span>
                    {theme === "dark" && (
                        <div className="ml-auto h-2 w-2 bg-primary rounded-full"></div>
                    )}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    className="cursor-pointer hover:bg-primary/10 transition-colors"
                >
                    <Monitor className="mr-3 h-4 w-4" />
                    <span>System</span>
                    {theme === "system" && (
                        <div className="ml-auto h-2 w-2 bg-primary rounded-full"></div>
                    )}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
