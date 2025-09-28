import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Panel - Ajin Varghese Chandy',
  description: 'Admin panel for managing website content',
  robots: 'noindex, nofollow', // Prevent search engine indexing
};

/**
 * Admin layout component
 * Provides base layout structure for all admin pages
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}