import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const incomingRequest = await request.json();

    if (incomingRequest.email != 'teste@teste.com')
      return NextResponse.json(
        { message: 'email ou senha invalidos' },
        { status: 404 }
      );

    const token = jwt.sign({ name: 'usuario teste' }, 'dshnfdsçfjdsalf');

    const redirectTo = request.cookies.get('redirectTo')?.value;

    const redirectURL = redirectTo ?? new URL('/login/agents', request.url);
    NextResponse.next().cookies.set('token', token, { expires: 120 });
    return NextResponse.redirect(redirectURL);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: e });
  }
}
