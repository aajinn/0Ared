import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/src/lib/auth';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

export async function GET() {
  if (!isAuthenticated()) {
    return NextResponse.json(
      { error: 'Not authenticated' },
      { status: 401 }
    );
  }
  
  return NextResponse.json({ authenticated: true });
}
