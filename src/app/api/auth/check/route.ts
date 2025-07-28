import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const isAuthenticated = cookies().get('isAuthenticated')?.value === 'true';
  
  if (!isAuthenticated) {
    return NextResponse.json(
      { error: 'Not authenticated' },
      { status: 401 }
    );
  }
  
  return NextResponse.json({ authenticated: true });
}
