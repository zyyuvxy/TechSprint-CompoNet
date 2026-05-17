'use client';

import { Geist } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/sidebar';
import '@/styles/global.css';
import { Logo } from '@/components/logo';
import { useAuth } from '@/lib/auth-store';
import { mockUserProfile } from '@/constants/mockData';

const geist = Geist({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user } = useAuth();

  // Menggunakan data asli jika sudah login, jika belum pakai mock data Balqis Safitri
  const currentUser = user || mockUserProfile;

  // Tentukan halaman luar yang TIDAK BOLEH memunculkan sidebar & header
  const isOuterPage = 
    pathname === '/landing' || 
    pathname === '/login' || 
    pathname === '/signup' || 
    pathname === '/role-selection' ||
    pathname === '/';

  return (
    <html lang="id">
      <body className={`${geist.className} antialiased bg-[#EAF3E7] text-[#1E3B2F]`}>
        {isOuterPage ? (
          // Halaman Luar (Landing Page, Login, dll)
          <main>{children}</main>
        ) : (
          // Halaman Dalam (Dashboard, Rating, dll) dengan Layout Grid/Flex
          <div className="flex min-h-screen">
            
            {/* SIDEBAR FIXED DI KIRI */}
            <div className="w-64 flex-shrink-0 fixed left-0 top-0 h-screen z-50">
              <Sidebar />
            </div>
            
            {/* AREA KANAN (Header Atas + Konten Halaman) */}
            <div className="flex-1 pl-64 flex flex-col min-h-screen">
              
              {/* HEADER ATAS (Logo di Kiri Konten, Profil di Kanan) */}
              <header className="flex items-center justify-between px-6 py-4 border-b border-[#1E3B2F]/10 bg-[#EAF3E7]">
                {/* Logo CompoNet dikunci di sebelah kiri area konten */}
                <div className="flex items-center">
                  <Logo size="md" showText={true} />
                </div>
                
                {/* Bagian Profil User di Pojok Kanan Atas */}
                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-[#1E3B2F]">{currentUser.nama}</p>
                    <p className="text-xs text-[#5A7365]">{currentUser.jenis_pengelola || 'Pegiat kompos'}</p>
                  </div>
                  <div className="w-10 h-10 bg-[#EB8A31] rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm flex-shrink-0">
                    {currentUser.nama.charAt(0) || 'B'}
                  </div>
                </div>
              </header>

              {/* ISI HALAMAN (DashboardPage, RatingPage, dll) */}
              <main className="flex-1 p-6 md:p-8">
                {children}
              </main>

            </div>
          </div>
        )}
      </body>
    </html>
  );
}