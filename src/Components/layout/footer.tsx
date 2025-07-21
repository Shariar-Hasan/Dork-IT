import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-gradient-to-r from-background via-background to-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center space-y-6">
                    <div className="flex justify-center items-center space-x-3 group">
                        <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                            <i className="fas fa-search text-2xl text-primary"></i>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            Dork IT
                        </span>
                    </div>

                    <p className="text-muted-foreground text-lg max-w-md mx-auto">
                        A Simple Google Dork Tool for Beginners to Master Advanced Search Techniques
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/" className="group flex items-center space-x-2 hover:text-primary transition-all duration-300 font-medium">
                            <i className="fas fa-home group-hover:scale-110 transition-transform duration-300"></i>
                            <span>Home</span>
                        </Link>
                        <Link href="/about" className="group flex items-center space-x-2 hover:text-primary transition-all duration-300 font-medium">
                            <i className="fa fa-list group-hover:scale-110 transition-transform duration-300"></i>
                            <span>About</span>
                        </Link>
                        <Link href="/contact" className="group flex items-center space-x-2 hover:text-primary transition-all duration-300 font-medium">
                            <i className="fa fa-address-book group-hover:scale-110 transition-transform duration-300"></i>
                            <span>Contact</span>
                        </Link>
                    </div>

                    <div className="pt-6 border-t border-border/30">
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
                            <p className="flex items-center gap-2">
                                <i className="fas fa-heart text-red-500"></i>
                                © 2025 Dork IT. Made with love
                            </p>
                            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
                            <p className="flex items-center gap-2">
                                Built with
                                <span className="font-semibold text-primary">Next.js</span>
                                and
                                <span className="font-semibold text-primary">shadcn/ui</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
