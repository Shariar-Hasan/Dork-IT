"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-chart-1/5 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-chart-1/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-6 mb-8">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-chart-1 to-chart-2 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-pulse"></div>
                            <div className="relative p-8 bg-gradient-to-br from-card/80 via-card/90 to-card backdrop-blur-xl rounded-3xl border border-primary/20 shadow-lg">
                                <i className="fas fa-file-contract text-6xl text-gradient bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent"></i>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-6xl font-black tracking-tight mb-6">
                        <span className="text-gradient bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
                            Terms and Conditions
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Please read these terms and conditions carefully before using our Google Dork research tool.
                    </p>
                    <div className="w-32 h-2 bg-gradient-to-r from-primary to-chart-1 rounded-full mx-auto mt-6"></div>
                </div>

                {/* Terms Content */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Last Updated */}
                    <div className="text-center text-muted-foreground text-sm mb-12">
                        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>

                    {/* Introduction */}
                    <Card className="bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-primary/20 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                                    <i className="fas fa-info-circle text-primary"></i>
                                </div>
                                1. Acceptance of Terms
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing and using Dork-IT (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement.
                                If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Use License */}
                    <Card className="bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border/50 dark:border-border/30 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-2 bg-chart-1/10 dark:bg-chart-1/20 rounded-lg">
                                    <i className="fas fa-certificate text-chart-1"></i>
                                </div>
                                2. Use License
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Permission is granted to temporarily use Dork-IT for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="text-muted-foreground space-y-2 pl-6">
                                <li>• Use the service for any illegal or unauthorized purpose</li>
                                <li>• Attempt to gain unauthorized access to any systems or networks</li>
                                <li>• Use the service to harm, threaten, or harass others</li>
                                <li>• Violate any applicable laws or regulations</li>
                                <li>• Reverse engineer or attempt to extract source code</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Disclaimer */}
                    <Card className="bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border/50 dark:border-border/30 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-2 bg-amber-500/10 dark:bg-amber-500/20 rounded-lg">
                                    <i className="fas fa-exclamation-triangle text-amber-600"></i>
                                </div>
                                3. Disclaimer
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                The information on this service is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, this service:
                            </p>
                            <ul className="text-muted-foreground space-y-2 pl-6 mb-4">
                                <li>• Excludes all representations and warranties relating to this service and its contents</li>
                                <li>• Excludes all liability for damages arising out of or in connection with your use of this service</li>
                            </ul>
                            <div className="p-4 bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-800/50 rounded-lg">
                                <p className="text-amber-700 dark:text-amber-300 font-semibold mb-0">
                                    Educational Purpose Only: This tool is designed for educational and legitimate research purposes.
                                    Users are responsible for ensuring their use complies with all applicable laws and website terms of service.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Limitations */}
                    <Card className="bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border/50 dark:border-border/30 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-2 bg-red-500/10 dark:bg-red-500/20 rounded-lg">
                                    <i className="fas fa-ban text-red-500"></i>
                                </div>
                                4. Limitations
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed">
                                In no event shall Dork-IT or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit,
                                or due to business interruption) arising out of the use or inability to use the materials on Dork-IT, even if Dork-IT or a Dork-IT
                                authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not
                                allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Accuracy of Materials */}
                    <Card className="bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border/50 dark:border-border/30 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-2 bg-green-500/10 dark:bg-green-500/20 rounded-lg">
                                    <i className="fas fa-check-circle text-green-500"></i>
                                </div>
                                5. Accuracy of Materials
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed">
                                The materials appearing on Dork-IT could include technical, typographical, or photographic errors. Dork-IT does not warrant that
                                any of the materials on its service are accurate, complete, or current. Dork-IT may make changes to the materials contained on its
                                service at any time without notice. However, Dork-IT does not make any commitment to update the materials.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Governing Law */}
                    <Card className="bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border/50 dark:border-border/30 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-2 bg-purple-500/10 dark:bg-purple-500/20 rounded-lg">
                                    <i className="fas fa-gavel text-purple-500"></i>
                                </div>
                                6. Governing Law
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed">
                                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the
                                exclusive jurisdiction of the courts in that state or location.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <Card className="bg-gradient-to-br from-primary/10 via-chart-1/5 to-chart-2/10 border border-primary/20 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl text-primary">
                                <div className="p-2 bg-primary/20 rounded-lg">
                                    <i className="fas fa-envelope text-primary"></i>
                                </div>
                                Contact Us
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about these Terms and Conditions, please contact us through our contact page or reach out to our support team.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
