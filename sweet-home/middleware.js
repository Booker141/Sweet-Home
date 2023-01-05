import { NextResponse } from 'next/server'
export { default } from "next-auth/middleware"


export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/api')) {
        return NextResponse.rewrite(new URL('/', request.url))
      }
}

export const config = { matcher: ["/dashboard", "/home", "/profile", "/attendances", "/chat", "/search"] }