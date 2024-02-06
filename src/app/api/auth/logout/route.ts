import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/login', request.url);

  /* const cookieExpiresInSeconds = 60 * 60 * 24 * 30; */
  NextResponse.next().cookies.delete('token');
  return NextResponse.redirect(redirectURL);
}
