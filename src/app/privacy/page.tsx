"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
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
                                <i className="fas fa-shield-alt text-6xl text-gradient bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent"></i>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-6xl font-black tracking-tight mb-6">
                        <span className="text-gradient bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
                            Privacy Policy
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
                    </p>
                    <div className="w-32 h-2 bg-gradient-to-r from-primary to-chart-1 rounded-full mx-auto mt-6"></div>
                </div>

                {/* Privacy Content */}
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
                                Information We Collect
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Dork-IT is designed with privacy in mind. We collect minimal information to provide you with the best possible experience:
                            </p>
                            <ul className="text-muted-foreground space-y-2 pl-6">
                                <li>• <strong>Local Storage Data:</strong> Your Google Dork queries are stored locally in your browser for convenience</li>
                                <li>• <strong>Usage Analytics:</strong> Anonymous usage statistics to help us improve the service</li>
                                <li>• <strong>Technical Information:</strong> Browser type, device type, and general location for optimization</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* How We Use Information */}
                    <Card className="bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border/50 dark:border-border/30 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-2 bg-chart-1/10 dark:bg-chart-1/20 rounded-lg">
                                    <i className="fas fa-cogs text-chart-1"></i>
                                </div>
                                How We Use Your Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We use the collected information for the following purposes:
                            </p>
                            <ul className="text-muted-foreground space-y-2 pl-6">
                                <li>• To provide and maintain our service</li>
                                <li>• To improve user experience and interface design</li>
                                <li>• To analyze usage patterns and optimize performance</li>
                                <li>• To detect and prevent technical issues</li>
                                <li>• To comply with legal obligations</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Data Storage */}
                    <Card className="bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border/50 dark:border-border/30 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-2 bg-green-500/10 dark:bg-green-500/20 rounded-lg">
                                    <i className="fas fa-database text-green-500"></i>
                                </div>
                                Data Storage and Security
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none">
                            <div className="p-4 bg-green-50/50 dark:bg-green-950/30 border border-green-200/50 dark:border-green-800/50 rounded-lg mb-4">
                                <p className="text-green-700 dark:text-green-300 font-semibold mb-2">
                                    <i className="fas fa-lock mr-2"></i>
                                    Privacy-First Approach
                                </p>
                                <p className="text-green-600 dark:text-green-400 mb-0">
                                    Your Google Dork queries are stored locally in your browser&apos;s localStorage.
                                    We do not collect, transmit, or store your search queries on our servers.
                                </p>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                We implement appropriate security measures to protect your information against unauthorized access,
                                alteration, disclosure, or destruction. However, no method of transmission over the internet or
                                electronic storage is 100% secure.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Cookies */}
                    <Card className="bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border/50 dark:border-border/30 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-2 bg-amber-500/10 dark:bg-amber-500/20 rounded-lg">
                                    <i className="fas fa-cookie-bite text-amber-600"></i>
                                </div>
                                Cookies and Local Storage
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We use cookies and local storage for the following purposes:
                            </p>
                            <ul className="text-muted-foreground space-y-2 pl-6 mb-4">
                                <li>• <strong>Essential Cookies:</strong> Required for basic site functionality</li>
                                <li>• <strong>Preference Cookies:</strong> Remember your theme and language settings</li>
                                <li>• <strong>Local Storage:</strong> Store your dork queries locally for convenience</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed">
                                You can control cookie settings through your browser preferences. Note that disabling certain
                                cookies may affect the functionality of the service.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Third-Party Services */}
                    <Card className="bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border/50 dark:border-border/30 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-2 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg">
                                    <i className="fas fa-external-link-alt text-blue-500"></i>
                                </div>
                                Third-Party Services
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Our service may contain links to third-party websites or services, including:
                            </p>
                            <ul className="text-muted-foreground space-y-2 pl-6 mb-4">
                                <li>• Google Search (when you execute your dork queries)</li>
                                <li>• Analytics services for usage statistics</li>
                                <li>• Content delivery networks for performance</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed">
                                These third-party services have their own privacy policies. We encourage you to review their
                                privacy policies before using their services.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Your Rights */}
                    <Card className="bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border/50 dark:border-border/30 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-2 bg-purple-500/10 dark:bg-purple-500/20 rounded-lg">
                                    <i className="fas fa-user-shield text-purple-500"></i>
                                </div>
                                Your Privacy Rights
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                You have the following rights regarding your personal information:
                            </p>
                            <ul className="text-muted-foreground space-y-2 pl-6 mb-4">
                                <li>• <strong>Access:</strong> Request access to your personal information</li>
                                <li>• <strong>Correction:</strong> Request correction of inaccurate information</li>
                                <li>• <strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li>• <strong>Portability:</strong> Request transfer of your information</li>
                                <li>• <strong>Objection:</strong> Object to processing of your information</li>
                            </ul>
                            <div className="p-4 bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-800/50 rounded-lg">
                                <p className="text-blue-700 dark:text-blue-300 mb-0">
                                    Since most data is stored locally in your browser, you can clear your dork history
                                    anytime through your browser&apos;s settings or by using the clear function in our application.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Changes to Policy */}
                    <Card className="bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border/50 dark:border-border/30 shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-2 bg-orange-500/10 dark:bg-orange-500/20 rounded-lg">
                                    <i className="fas fa-edit text-orange-500"></i>
                                </div>
                                Changes to This Policy
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed">
                                We may update this privacy policy from time to time. We will notify you of any changes by posting
                                the new privacy policy on this page and updating the &quot;Last updated&quot; date. You are advised to review
                                this privacy policy periodically for any changes.
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
                                If you have any questions about this Privacy Policy or our privacy practices, please contact us
                                through our contact page. We will respond to your inquiry as soon as possible.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
