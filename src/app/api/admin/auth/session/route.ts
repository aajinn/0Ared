import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/src/lib/auth';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

/**
 * Admin session verification endpoint
 * GET /api/admin/auth/session
 */
export async function GET() {
  try {
    const authenticated = isAuthenticated();
    
    if (!authenticated) {
      return NextResponse.json(
        { 
          authenticated: false, 
          error: 'No valid session',
          sessionValid: false
        },
        { status: 401 }
      );
    }
    
    return NextResponse.json({ 
      authenticated: true,
      sessionValid: true,
      timestamp: new Date().toISOString(),
      message: 'Session is valid'
    });
  } catch (error) {
    console.error('Admin session check error:', error);
    return NextResponse.json(
      { 
        authenticated: false,
        sessionValid: false,
        error: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}