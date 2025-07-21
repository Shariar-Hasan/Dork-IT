import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <Card>
                    <CardContent className="p-6">
                        <div className="animate-pulse space-y-4">
                            <div className="h-6 bg-muted rounded w-3/4"></div>
                            <div className="h-4 bg-muted rounded w-1/2"></div>
                            <div className="space-y-2">
                                <div className="h-10 bg-muted rounded"></div>
                                <div className="h-10 bg-muted rounded"></div>
                                <div className="h-10 bg-muted rounded"></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="animate-pulse space-y-4">
                            <div className="h-6 bg-muted rounded w-3/4"></div>
                            <div className="h-4 bg-muted rounded w-1/2"></div>
                            <div className="space-y-2">
                                <div className="h-16 bg-muted rounded"></div>
                                <div className="h-16 bg-muted rounded"></div>
                                <div className="h-10 bg-muted rounded"></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
