export function middleware() {
    // Allow all requests to pass through without locale routing
    return;
}

export const config = {
    // Match all paths except API routes and static files
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};