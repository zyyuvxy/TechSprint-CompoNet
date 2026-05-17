'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/logo';
import { useAuth } from '@/lib/auth-store';
import { mockUserProfile } from '@/constants/mockData';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock login - accept any email/password
    if (email && password) {
      login({
        id: '1',
        nama: mockUserProfile.nama,
        email,
        jenis_pengelola: mockUserProfile.jenis_pengelola[0],
      });
      router.push('/role-selection');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo size="md" showText={true} />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-foreground mb-2">Selamat Datang Kembali</h1>
        <p className="text-center text-muted-foreground mb-8">
          Belum memiliki akun? <a href="/signup" className="underline text-accent font-semibold">Daftar</a>
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder="Email atau nomor handphone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary text-white placeholder:text-white/70 border-0 rounded-full py-6 text-base"
              required
            />
          </div>

          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-primary text-white placeholder:text-white/70 border-0 rounded-full py-6 text-base"
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="w-4 h-4" />
            <label htmlFor="remember" className="text-sm text-foreground">Ingat saya</label>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-full font-semibold"
          >
            {loading ? 'Memproses...' : 'Masuk'}
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-muted-foreground text-sm">Atau</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        {/* Social Login */}
        <div className="flex gap-4 justify-center">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-border hover:bg-muted transition-colors">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
          </button>
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-border hover:bg-muted transition-colors">
            <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
