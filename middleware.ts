// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'], // paths to protect
};

export default function middleware(request: NextRequest) {
  // Example: Check for an auth cookie (replace "auth-token" with your real cookie name)
  const token = request.cookies.get('auth-token')?.value;

  if (!token) {
    // If no token, redirect to sign-in page
    const signInUrl = new URL('/auth/signin', request.url);
    return NextResponse.redirect(signInUrl);
  }

  // Otherwise, allow the request
  return NextResponse.next();
}
