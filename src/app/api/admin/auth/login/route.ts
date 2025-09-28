import { NextResponse } from 'next/server';
import { validateCredentials, createSession } from '@/src/lib/auth';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

/**
 * Admin login endpoint with credential validation
 * POST /api/admin/auth/login
 */
export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    // Validate input
    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }

    if (typeof password !== 'string') {
      return NextResponse.json(
        { error: 'Invalid password format' },
        { status: 400 }
      );
    }

    // Validate credentials
    if (validateCredentials(password)) {
      // Create secure session
      createSession();

      return NextResponse.json({ 
        success: true,
        message: 'Authentication successful'
      });
    } else {
      // Add a small delay to prevent brute force attacks
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}