"use client";

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function AdminLoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get redirect URL from query params
  const redirectTo = searchParams.get('redirect') || '/admin/dashboard';

  useEffect(() => {
    // Clear any previous errors when component mounts
    setError('');
    setValidationError('');
  }, []);

  // Real-time validation
  const validatePassword = (value: string) => {
    if (!value.trim()) {
      setValidationError('Password is required');
      return false;
    }
    if (value.length < 1) {
      setValidationError('Password cannot be empty');
      return false;
    }
    setValidationError('');
    return true;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setError(''); // Clear server errors when user types
    validatePassword(value);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!validatePassword(password)) {
      return;
    }
    
    setIsLoading(true);
    setError('');
    setValidationError('');
    
    try {
      const response = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
        credentials: 'same-origin',
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to the intended page or dashboard
        router.push(redirectTo);
        router.refresh(); // Ensure the page updates with the new auth state
      } else {
        // Handle different error types
        if (response.status === 401) {
          setError('Invalid password. Please try again.');
        } else if (response.status === 400) {
          setValidationError(data.error || 'Invalid input');
        } else if (response.status >= 500) {
          setError('Server error. Please try again later.');
        } else {
          setError(data.error || 'Login failed');
        }
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">Admin Login</h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                validationError || error 
                  ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                  : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              }`}
              placeholder="Enter admin password"
              required
              disabled={isLoading}
              aria-describedby={validationError || error ? 'password-error' : undefined}
            />
            {(validationError || error) && (
              <p id="password-error" className="mt-2 text-sm text-red-600" role="alert">
                {validationError || error}
              </p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isLoading || !!validationError}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Secure admin access for content management
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AdminLogin() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-6"></div>
            <div className="h-10 bg-gray-200 rounded mb-4"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    }>
      <AdminLoginForm />
    </Suspense>
  );
}
