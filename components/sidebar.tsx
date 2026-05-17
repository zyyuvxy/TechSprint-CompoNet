'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ShoppingCart, Calendar, Star, TrendingUp, User, Settings, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/lib/auth-store';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { mockUserProfile } from '@/constants/mockData';

const menuItems = [
  { href: '/pedagang-dashboard', label: 'Dashboard', icon: LayoutDashboard }, // Sesuaikan dengan rute dashboard aktifmu
  { href: '/cari-limbah', label: 'Cari Limbah', icon: ShoppingCart },
  { href: '/jadwal-saya', label: 'Jadwal Saya', icon: Calendar },
  { href: '/rating-ulasan', label: 'Rating & Ulasan', icon: Star },
  { href: '/dampak-saya', label: 'Dampak Saya', icon: TrendingUp },
];

const accountItems = [
  { href: '/profil', label: 'Profil', icon: User },
  { href: '/pengaturan', label: 'Pengaturan', icon: Settings },
];

export function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  const { user } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const currentUser = user || mockUserProfile;

  const handleNavClick = () => {
    onClose?.();
  };

  return (
    <aside className={cn(
      'bg-[#1E3B2F] text-[#EAF3E7] flex flex-col border-r border-[#EAF3E7]/10 transition-all duration-300 ease-in-out h-screen w-full',
      isCollapsed ? 'max-w-20' : 'max-w-64'
    )}>
      
      {/* Header Menu / Tombol Collapse */}
      <div className={cn(
        'border-b border-[#EAF3E7]/10 flex items-center justify-between transition-all duration-300 py-4',
        isCollapsed ? 'px-4' : 'px-6'
      )}>
        {!isCollapsed && <p className="text-xs font-bold text-[#EAF3E7]/50 tracking-wider uppercase">MENU</p>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-[#EAF3E7] hover:bg-[#EB8A31]/20 ml-auto"
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <ChevronLeft className={cn(
            'w-5 h-5 transition-transform duration-300',
            isCollapsed ? 'rotate-180' : ''
          )} />
        </Button>
      </div>

      {/* Rute Navigasi Menu */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        <div>
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={handleNavClick}
                    className={cn(
                      'flex items-center gap-3 rounded-xl font-medium transition-colors justify-start p-3 text-sm',
                      isActive
                        ? 'bg-[#EB8A31] text-white shadow-sm' // Aktif warna oranye aksen
                        : 'text-[#EAF3E7]/80 hover:bg-[#EAF3E7]/10 hover:text-white'
                    )}
                    title={isCollapsed ? item.label : ''}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bagian Akun */}
        <div className="pt-4 border-t border-[#EAF3E7]/10">
          {!isCollapsed && <p className="text-xs font-bold text-[#EAF3E7]/50 tracking-wider mb-3 px-3 uppercase">AKUN</p>}
          <ul className="space-y-1">
            {accountItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={handleNavClick}
                    className={cn(
                      'flex items-center gap-3 rounded-xl font-medium transition-colors justify-start p-3 text-sm',
                      isActive
                        ? 'bg-[#EB8A31] text-white shadow-sm'
                        : 'text-[#EAF3E7]/80 hover:bg-[#EAF3E7]/10 hover:text-white'
                    )}
                    title={isCollapsed ? item.label : ''}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Footer User Mini (Tetap di dalam Sidebar) */}
      <div className={cn(
        'border-t border-[#EAF3E7]/10 transition-all duration-300',
        isCollapsed ? 'p-2' : 'p-4'
      )}>
        <div className={cn(
          'flex items-center gap-3 bg-[#EAF3E7]/5 rounded-xl transition-all duration-300',
          isCollapsed ? 'p-2 justify-center' : 'p-3'
        )}>
          <div className="w-9 h-9 bg-[#EB8A31] rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
            {currentUser.nama.charAt(0) || 'B'}
          </div>
          {!isCollapsed && (
            <div className="text-xs min-w-0 text-[#EAF3E7]">
              <p className="font-bold truncate">{currentUser.nama}</p>
              <p className="text-[#EAF3E7]/60 truncate">{currentUser.jenis_pengelola || 'Pegiat kompos'}</p>
            </div>
          )}
        </div>
      </div>

    </aside>
  );
}