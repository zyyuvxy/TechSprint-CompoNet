'use client';

import { useState } from 'react';
import { Bell, LogOut, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './logo';
import { Sidebar } from './sidebar';
import { useAuth } from '@/lib/auth-store';

export function Header() {
  const router = useRouter();
  const { logout, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/landing');
  };

  return (
    <header className="bg-[#EAF3E7] border-b border-border flex items-center px-4 md:px-8 pt-8 pb-4">
      <div className="w-full flex items-center justify-between gap-4">
        {/* Left: Hamburger (Mobile) */}
        <div className="flex lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <Sidebar onClose={() => setIsOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>

        {/* Center/Left: Logo */}
        <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
          <Logo size="sm" showText={true} />
        </div>

        {/* Right: User Controls */}
        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          <Button variant="ghost" size="icon" className="text-foreground relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground flex-shrink-0">
              {user?.nama.charAt(0) || 'U'}
            </div>
            <div className="hidden md:block text-sm">
              <p className="font-semibold text-foreground">{user?.nama || 'User'}</p>
              <p className="text-xs text-muted-foreground">{user?.jenis_pengelola || 'Pengelola'}</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleLogout}
            className="text-foreground hover:text-accent"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
