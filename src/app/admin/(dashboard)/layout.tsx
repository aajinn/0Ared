import AdminLayout from '@/src/components/admin/AdminLayout';

/**
 * Dashboard layout for authenticated admin pages
 * This layout is only rendered for authenticated admin routes
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  );
}