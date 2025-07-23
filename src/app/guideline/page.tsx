"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dorkTypesInfo } from "@/lib/data/dork-data";
import Image from "next/image";
import { useState } from "react";

export default function About() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-chart-1/5 relative overflow-hidden">
            {/* Image Preview Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh] bg-card rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute top-4 right-4 z-10">
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                            >
                                <i className="fas fa-times text-lg"></i>
                            </button>
                        </div>
                        <Image
                            src={selectedImage}
                            alt="Google Dork Example Preview"
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-chart-1/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-chart-2/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-6 mb-8">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-chart-1 to-chart-2 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-pulse"></div>
                            <div className="relative p-8 bg-gradient-to-br from-card/80 via-card/90 to-card backdrop-blur-xl rounded-3xl border border-primary/20 shadow-lg">
                                <i className="fas fa-info-circle text-6xl text-gradient bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent"></i>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-7xl font-black tracking-tight mb-6">
                        <span className="text-gradient bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent bg-[length:200%_200%] animate-[gradient-x_3s_ease_infinite]">
                            About Google Dorks
                        </span>
                    </h1>
                    <div className="relative max-w-5xl mx-auto">
                        <p className="text-2xl text-muted-foreground leading-relaxed mb-6">
                            Master the art of <span className="text-primary font-bold">advanced Google searching</span> with
                            <span className="text-chart-1 font-bold"> powerful operators</span> that unlock
                            <span className="text-chart-2 font-bold"> hidden information</span> and enhance your research capabilities.
                        </p>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-primary via-chart-1 to-chart-2 rounded-full opacity-60"></div>
                    </div>
                </div>

                {/* Introduction Card */}
                <div className="mb-20 relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-chart-1/30 to-primary/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <Card className="relative shadow-xl bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-primary/20 overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10 text-center relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
                            <CardTitle className="text-4xl flex items-center justify-center gap-4 relative z-10">
                                <div className="p-3 bg-primary/20 rounded-2xl">
                                    <i className="fas fa-search text-primary text-2xl"></i>
                                </div>
                                <span className="text-gradient bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
                                    What are Google Dorks?
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-10">
                            <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed space-y-8">
                                <p className="text-muted-foreground text-xl">
                                    <strong className="text-foreground text-gradient bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">Google Dorks</strong>, also known as Google hacking, refers to the use of advanced search operators in Google
                                    to find specific information that might not be easily accessible through regular searches. These powerful operators
                                    allow you to search for specific file types, websites, or text patterns with surgical precision.
                                </p>
                                <div className="relative group">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative p-8 bg-gradient-to-br from-amber-50/50 via-amber-50/30 to-orange-50/50 dark:from-amber-950/30 dark:via-amber-900/20 dark:to-orange-950/30 border border-amber-200/50 dark:border-amber-800/50 rounded-2xl backdrop-blur-sm">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-amber-500/20 rounded-xl">
                                                <i className="fas fa-exclamation-triangle text-amber-600 text-xl"></i>
                                            </div>
                                            <div>
                                                <h4 className="text-amber-800 dark:text-amber-200 font-bold text-lg mb-2">Important Notice</h4>
                                                <p className="text-amber-700 dark:text-amber-300 mb-0 leading-relaxed">
                                                    While Google dorking can be used for legitimate research and security testing purposes, it&apos;s crucial
                                                    to use these techniques responsibly and ethically. Always respect website terms of service and privacy policies.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Google Dork Operators - Card Grid Layout */}
                <div className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-6">
                            <span className="text-gradient bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
                                Google Dork Operators
                            </span>
                        </h2>
                        <p className="text-muted-foreground text-xl leading-relaxed max-w-4xl mx-auto">
                            Explore powerful search operators through real examples. Each screenshot demonstrates
                            how these operators work in actual Google searches.
                        </p>
                        <div className="w-32 h-2 bg-gradient-to-r from-primary to-chart-1 rounded-full mx-auto mt-8"></div>
                    </div>

                    {/* Operators Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dorkTypesInfo.map((info, index) => (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Background Glow Effect */}
                                <div className={`absolute -inset-3 bg-gradient-to-r from-primary/20 via-chart-1/20 to-chart-2/20 rounded-3xl blur-xl transition-opacity duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}></div>

                                <Card className={`relative h-full bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border/50 dark:border-border/30 rounded-2xl overflow-hidden shadow-lg dark:shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:border-primary/30 ${hoveredCard === index ? 'scale-105' : ''}`}>
                                    {/* Screenshot Container - Clickable */}
                                    <div
                                        className="relative h-48 overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30 dark:from-muted/30 dark:to-muted/20 border-b border-border/50 dark:border-border/30 cursor-pointer group/image"
                                        onClick={() => setSelectedImage(info.img)}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                                        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 z-20 flex items-center justify-center">
                                            <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                                                <i className="fas fa-expand text-white text-xl"></i>
                                            </div>
                                        </div>
                                        <Image
                                            src={info.img}
                                            alt={`${info.title} Google Dork example`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Operator Badge Overlay */}
                                        <div className="absolute top-4 left-4 z-30">
                                            <Badge
                                                variant="secondary"
                                                className="font-mono text-sm px-3 py-1 bg-card/90 dark:bg-card/80 backdrop-blur-sm text-primary border border-primary/30 shadow-lg"
                                            >
                                                {info.title}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <CardContent className="p-6 bg-card/50 dark:bg-card/30">
                                        <div className="space-y-4">
                                            {/* Title with Icon */}
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                                                    <i className="fas fa-search text-primary text-sm"></i>
                                                </div>
                                                <h3 className="font-bold text-lg text-foreground">
                                                    {info.title.replace(':', '')} Operator
                                                </h3>
                                            </div>

                                            {/* Description */}
                                            <p className="text-muted-foreground leading-relaxed text-sm">
                                                {info.content}
                                            </p>

                                            {/* Example Usage */}
                                            <div className="mt-4 p-3 bg-muted/50 dark:bg-muted/30 rounded-lg border border-border/50 dark:border-border/30">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="p-1 bg-primary/20 rounded">
                                                        <i className="fas fa-terminal text-primary text-xs"></i>
                                                    </div>
                                                    <span className="text-xs font-semibold text-primary">Example:</span>
                                                </div>
                                                <code className="text-xs font-mono bg-card/80 dark:bg-card/60 px-2 py-1 rounded border border-border/50 dark:border-border/30 block text-foreground">
                                                    {info.title}example search
                                                </code>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="relative inline-block group">
                        <div className="absolute -inset-6 bg-gradient-to-r from-primary via-chart-1 to-chart-2 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative bg-gradient-to-r from-primary to-chart-1 text-primary-foreground px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-transform duration-300 cursor-pointer shadow-xl">
                            <i className="fas fa-rocket mr-4"></i>
                            Ready to start? Build your first Google Dork!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
