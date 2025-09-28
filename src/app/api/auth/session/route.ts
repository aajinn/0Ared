import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/src/lib/auth';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

/**
 * Session verification endpoint
 * Returns current authentication status and session information
 */
export async function GET() {
  try {
    const authenticated = isAuthenticated();
    
    if (!authenticated) {
      return NextResponse.json(
        { authenticated: false, error: 'No valid session' },
        { status: 401 }
      );
    }
    
    return NextResponse.json({ 
      authenticated: true,
      sessionValid: true,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Session check error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}