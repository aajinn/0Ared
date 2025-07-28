import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true';
  const isAdminPath = request.nextUrl.pathname.startsWith('/admin/dashboard');

  // Redirect to login if trying to access dashboard without authentication
  if (isAdminPath && !isAuthenticated) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  // If authenticated and trying to access login page, redirect to dashboard
  if (request.nextUrl.pathname === '/admin' && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
