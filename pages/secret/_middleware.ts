import { NextRequest, NextResponse } from 'next/server';


export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;
  console.log("aaaaa")
  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    if (user === process.env.NEXT_PUBLIC_USER && pwd === process.env.NEXT_PUBLIC_PASS) {
      return NextResponse.next();
    }
  }
  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
