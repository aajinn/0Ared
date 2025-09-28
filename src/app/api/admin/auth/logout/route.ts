import { NextResponse } from 'next/server';
import { destroySession, isAuthenticated } from '@/src/lib/auth';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

/**
 * Admin logout endpoint with session cleanup
 * POST /api/admin/auth/logout
 */
export async function POST() {
  try {
    // Check if user is authenticated before logout
    const authenticated = isAuthenticated();
    
    if (!authenticated) {
      return NextResponse.json(
        { error: 'No active session to logout' },
        { status: 401 }
      );
    }

    // Destroy the admin session
    destroySession();
    
    return NextResponse.json({ 
      success: true,
      message: 'Logout successful'
    });
  } catch (error) {
    console.error('Admin logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}