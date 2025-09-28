"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  DocumentTextIcon, 
  Bars3Icon,
  PhotoIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  GlobeAltIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
  { name: 'Blog Posts', href: '/admin/posts', icon: DocumentTextIcon },
  { name: 'Navigation', href: '/admin/navigation', icon: Bars3Icon },
  { name: 'Widgets', href: '/admin/widgets', icon: GlobeAltIcon },
  { name: 'Pages', href: '/admin/pages', icon: DocumentTextIcon },
  { name: 'Media', href: '/admin/media', icon: PhotoIcon },
  { name: 'Analytics', href: '/admin/analytics', icon: ChartBarIcon },
  { name: 'Settings', href: '/admin/settings', icon: Cog6ToothIcon },
];

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 shadow-sm border-r border-gray-200">
          <div className="flex h-16 shrink-0 items-center">
            <Link href="/admin/dashboard" className="text-xl font-bold text-gray-900">
              Admin Panel
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`
                            group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors
                            ${isActive
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                            }
                          `}
                        >
                          <item.icon
                            className={`h-6 w-6 shrink-0 ${
                              isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                            }`}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className={`relative z-50 lg:hidden ${isOpen ? '' : 'hidden'}`}>
        <div className="fixed inset-0 flex">
          <div className="relative mr-16 flex w-full max-w-xs flex-1">
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
              <button
                type="button"
                className="-m-2.5 p-2.5"
                onClick={onClose}
              >
                <span className="sr-only">Close sidebar</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
              <div className="flex h-16 shrink-0 items-center">
                <Link 
                  href="/admin/dashboard" 
                  className="text-xl font-bold text-gray-900"
                  onClick={onClose}
                >
                  Admin Panel
                </Link>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className={`
                                group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors
                                ${isActive
                                  ? 'bg-blue-50 text-blue-600'
                                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                }
                              `}
                            >
                              <item.icon
                                className={`h-6 w-6 shrink-0 ${
                                  isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                                }`}
                                aria-hidden="true"
                              />
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}