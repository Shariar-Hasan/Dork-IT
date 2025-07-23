"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dork } from "@/lib/data/dork-data";
import { ExternalLink, Trash2, Copy, Edit2 } from "lucide-react";
import { toast } from "sonner";

interface DorkListProps {
    dorks: Dork[];
    onRemoveDork: (id: string) => void;
    onEditDork: (id: string) => void;
    onSearch: (dorks: Dork[]) => void;
}

export function DorkList({ dorks, onRemoveDork, onEditDork, onSearch }: DorkListProps) {
    const handleCopyDork = (dork: string) => {
        navigator.clipboard.writeText(dork);
        toast.success("Dork copied to clipboard!");
    };

    const handleSearch = () => {
        if (dorks.length === 0) {
            toast.error("Please add at least one dork query before searching");
            return;
        }
        onSearch(dorks);
    };

    const constructSearchUrl = () => {
        if (dorks.length === 0) return "";
        const query = dorks.map(d => d.dork).join(" ");
        return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    };

    return (
        <Card className="w-full border-0 shadow-md bg-gradient-to-br from-card via-card to-card/95">
            <CardHeader className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-t-lg">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                    <div className="p-2 bg-primary/10 rounded-xl">
                        <i className="fas fa-list-check text-primary text-xl"></i>
                    </div>
                    Dork Queries ({dorks.length})
                </CardTitle>
                <CardDescription className="text-base">
                    Your constructed Google dork queries ready for search
                </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                {dorks.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="mx-auto w-32 h-32 bg-gradient-to-br from-muted to-muted/50 rounded-full flex items-center justify-center mb-6 shadow-inner">
                            <i className="fas fa-search text-4xl text-muted-foreground"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-3">No dork queries yet</h3>
                        <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                            Create your first dork query using the form on the left to get started with advanced Google searching.
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg text-primary font-medium">
                            <i className="fas fa-arrow-left"></i>
                            Start building queries
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {dorks.map((dork, index) => (
                            <div
                                key={dork.id}
                                className="group flex items-center justify-between p-4 border-2 border-border/50 rounded-xl bg-gradient-to-r from-muted/30 to-muted/10 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
                            >
                                <div className="flex-1 mr-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="flex items-center justify-center w-6 h-6 bg-primary/20 text-primary text-sm font-bold rounded-full">
                                            {index + 1}
                                        </span>
                                        <Badge variant="secondary" className="font-mono text-sm px-3 py-1 bg-primary/10 text-primary border border-primary/20">
                                            {dork.dork}
                                        </Badge>
                                    </div>
                                </div>
                                <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleCopyDork(dork.dork)}
                                        className="h-9 w-9 hover:bg-primary/10 hover:text-primary"
                                        title="Copy dork"
                                    >
                                        <Copy className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => onEditDork(dork.id)}
                                        className="h-9 w-9 hover:bg-blue-500/10 hover:text-blue-500"
                                        title="Edit dork"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => onRemoveDork(dork.id)}
                                        className="h-9 w-9 hover:bg-destructive/10 hover:text-destructive"
                                        title="Remove dork"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {dorks.length > 0 && (
                    <div className="mt-8 space-y-4">
                        <div className="p-4 bg-gradient-to-r from-secondary/30 to-secondary/10 rounded-xl border border-secondary/20">
                            <div className="flex items-center gap-2 mb-3">
                                <i className="fas fa-magic text-secondary"></i>
                                <p className="text-sm font-bold text-secondary">Combined Search Query:</p>
                            </div>
                            <div className="p-3 bg-background/50 rounded-lg border border-border/30">
                                <Badge variant="outline" className="font-mono text-xs break-all w-full justify-start p-2">
                                    {dorks.map(d => d.dork).join(" ")}
                                </Badge>
                            </div>
                        </div>

                        <Button
                            onClick={handleSearch}
                            className="w-full h-14 text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
                            size="lg"
                            asChild
                        >
                            <a
                                href={constructSearchUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3"
                            >
                                <i className="fab fa-google text-xl"></i>
                                <span>Search with Google</span>
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
