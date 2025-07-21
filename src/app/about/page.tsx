"use client";

import { useTranslations } from 'next-intl';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dorkTypesInfo } from "@/lib/data/dork-data";
import Image from "next/image";

export default function About() {
    const t = useTranslations('about');

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
            <div className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl">
                            <i className="fas fa-info-circle text-5xl text-primary"></i>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            About Google Dorks
                        </h1>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Master the art of advanced Google searching with powerful operators that unlock hidden information and enhance your research capabilities.
                    </p>
                </div>

                {/* Introduction Card */}
                <Card className="mb-12 border-0 shadow-md bg-gradient-to-br from-card via-card to-card/95 overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10 text-center">
                        <CardTitle className="text-3xl flex items-center justify-center gap-3">
                            <i className="fas fa-search text-primary"></i>
                            What are Google Dorks?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed space-y-6">
                            <p className="text-muted-foreground">
                                <strong className="text-foreground">Google Dorks</strong>, also known as Google hacking, refers to the use of advanced search operators in Google
                                to find specific information that might not be easily accessible through regular searches. These powerful operators
                                allow you to search for specific file types, websites, or text patterns with surgical precision.
                            </p>
                            <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl">
                                <p className="text-amber-800 dark:text-amber-200 mb-0">
                                    <i className="fas fa-exclamation-triangle text-amber-600 mr-2"></i>
                                    <strong>Important:</strong> While Google dorking can be used for legitimate research and security testing purposes, it&apos;s crucial
                                    to use these techniques responsibly and ethically. Always respect website terms of service and privacy policies.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Dork Types */}
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            Google Dork Operators
                        </h2>
                        <p className="text-muted-foreground text-lg">Explore the powerful search operators at your disposal</p>
                    </div>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {dorkTypesInfo.map((info, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-0 shadow-md rounded-xl overflow-hidden bg-gradient-to-r from-card to-card/90">
                                <AccordionTrigger className="text-left hover:no-underline px-6 py-4 hover:bg-primary/5 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <Image
                                                src={info.img}
                                                alt={info.title}
                                                width={28}
                                                height={28}
                                                className="rounded"
                                            />
                                        </div>
                                        <Badge variant="secondary" className="font-mono text-base px-4 py-2 bg-primary/10 text-primary border border-primary/20">
                                            {info.title}
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-6">
                                    <div className="pt-4 pl-14">
                                        <p className="text-muted-foreground leading-relaxed text-base">
                                            {info.content}
                                        </p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Best Practices */}
                <Card className="border-0 shadow-md bg-gradient-to-br from-card via-card to-card/95">
                    <CardHeader className="bg-gradient-to-r from-green-500/10 via-green-600/15 to-green-500/10 text-center">
                        <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                            <div className="p-2 bg-green-500/20 rounded-xl">
                                <i className="fas fa-shield-alt text-green-600 text-xl"></i>
                            </div>
                            Best Practices & Ethics
                        </CardTitle>
                        <CardDescription className="text-base mt-2">
                            Guidelines for responsible use of Google dorking techniques
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="grid gap-4">
                            {[
                                "Use for legitimate research and educational purposes only",
                                "Respect website terms of service and robots.txt files",
                                "Do not attempt to access unauthorized information",
                                "Use for security testing only on systems you own or have permission to test",
                                "Be mindful of the privacy and security of others"
                            ].map((practice, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                                    <div className="p-1 bg-green-500/20 rounded-full mt-1">
                                        <i className="fas fa-check-circle text-green-600 text-sm"></i>
                                    </div>
                                    <span className="text-green-800 dark:text-green-200 font-medium">{practice}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
