"use client";

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Contact() {
    const t = useTranslations('contact');

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
            <div className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl">
                            <i className="fas fa-envelope text-5xl text-primary"></i>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            Contact Us
                        </h1>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Have questions about Google dorking or need help with the tool? We&apos;d love to hear from you and help you master advanced search techniques!
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                    {/* GitHub */}
                    <Card className="group text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card via-card to-card/95 overflow-hidden">
                        <CardHeader className="relative">
                            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <i className="fab fa-github text-3xl text-primary"></i>
                            </div>
                            <CardTitle className="text-2xl">GitHub</CardTitle>
                            <CardDescription className="text-base">
                                Check out the source code and contribute to the project
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-8">
                            <Link
                                href="https://github.com/Shariar-Hasan/Dork-IT"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-xl transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i>
                                View Repository
                                <i className="fas fa-external-link-alt text-sm"></i>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Email */}
                    <Card className="group text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card via-card to-card/95 overflow-hidden">
                        <CardHeader className="relative">
                            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-envelope text-3xl text-blue-600"></i>
                            </div>
                            <CardTitle className="text-2xl">Email</CardTitle>
                            <CardDescription className="text-base">
                                Send us your questions, feedback, or suggestions
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-8">
                            <Link
                                href="mailto:support@dorkit.dev"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 font-medium rounded-xl transition-colors"
                            >
                                <i className="fas fa-envelope"></i>
                                support@dorkit.dev
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Documentation */}
                    <Card className="group text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card via-card to-card/95 overflow-hidden md:col-span-2 lg:col-span-1">
                        <CardHeader className="relative">
                            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-book text-3xl text-green-600"></i>
                            </div>
                            <CardTitle className="text-2xl">Documentation</CardTitle>
                            <CardDescription className="text-base">
                                Learn more about Google dorking techniques and best practices
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-8">
                            <Link
                                href="/learn"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 hover:bg-green-500/20 text-green-600 font-medium rounded-xl transition-colors"
                            >
                                <i className="fas fa-book"></i>
                                Read the Guide
                                <i className="fas fa-arrow-right text-sm"></i>
                            </Link>
                        </CardContent>
                    </Card>
                </div>

                {/* Additional Info */}
                <Card className="max-w-4xl mx-auto border-0 shadow-md bg-gradient-to-br from-card via-card to-card/95">
                    <CardHeader className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-t-lg">
                        <CardTitle className="text-3xl flex items-center justify-center gap-3">
                            <i className="fas fa-info-circle text-primary"></i>
                            About This Project
                        </CardTitle>
                        <CardDescription className="text-lg mt-3">
                            Dork IT is an educational tool designed to help security researchers and students master Google dorking techniques.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                        <p className="text-muted-foreground text-lg leading-relaxed text-center">
                            This tool is built with cutting-edge technologies including Next.js, TypeScript, and shadcn/ui to provide a modern,
                            intuitive interface for constructing Google dork queries. It&apos;s designed specifically for educational purposes
                            and ethical security research.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                            <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <i className="fas fa-code text-primary text-xl"></i>
                                </div>
                                <h3 className="font-semibold text-primary mb-2">Open Source</h3>
                                <p className="text-sm text-muted-foreground">Free and open to the community</p>
                            </div>
                            <div className="text-center p-4 bg-blue-500/5 rounded-xl border border-blue-500/10">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <i className="fas fa-graduation-cap text-blue-600 text-xl"></i>
                                </div>
                                <h3 className="font-semibold text-blue-600 mb-2">Educational</h3>
                                <p className="text-sm text-muted-foreground">Learn advanced search techniques</p>
                            </div>
                            <div className="text-center p-4 bg-green-500/5 rounded-xl border border-green-500/10">
                                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <i className="fas fa-shield-alt text-green-600 text-xl"></i>
                                </div>
                                <h3 className="font-semibold text-green-600 mb-2">Ethical Use</h3>
                                <p className="text-sm text-muted-foreground">Responsible security research</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
