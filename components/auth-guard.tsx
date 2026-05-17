'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth-store';

const publicRoutes = ['/landing', '/login', '/signup'];

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // If user is not authenticated and trying to access protected route
    if (!isAuthenticated && !publicRoutes.includes(pathname)) {
      router.push('/landing');
    }
  }, [isAuthenticated, pathname, router]);

  // Allow public routes to render without auth
  if (publicRoutes.includes(pathname)) {
    return children;
  }

  // For protected routes, only render if authenticated
  if (!isAuthenticated) {
    return null;
  }

  return children;
}
