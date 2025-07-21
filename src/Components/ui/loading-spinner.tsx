import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg";
    text?: string;
}

export function LoadingSpinner({ size = "md", text }: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8"
    };

    return (
        <div className="flex flex-col items-center justify-center gap-3 py-8">
            <Loader2 className={`${sizeClasses[size]} animate-spin text-primary`} />
            {text && (
                <p className="text-sm text-muted-foreground">{text}</p>
            )}
        </div>
    );
}
