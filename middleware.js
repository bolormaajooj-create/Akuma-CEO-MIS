import { NextResponse } from 'next/server';

export function middleware(request) {
  const auth = request.cookies.get('akuma_auth')?.value;
  const isLoginPage = request.nextUrl.pathname === '/login';

  if (!auth && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  if (auth && isLoginPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
