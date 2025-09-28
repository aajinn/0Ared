import { NextResponse } from 'next/server';
import { destroySession } from '@/src/lib/auth';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    // Destroy the admin session
    destroySession();
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
