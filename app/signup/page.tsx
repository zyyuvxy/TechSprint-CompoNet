'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/logo';
import { useAuth } from '@/lib/auth-store';

export default function SignupPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [role, setRole] = useState<'pedagang' | 'pengelola' | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!role) return;

    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock signup - create user
    if (email && password && role) {
      login({
        id: '1',
        nama: 'User Baru',
        email,
        jenis_pengelola: role === 'pedagang' ? 'Pedagang' : 'Pengelola',
      });
      router.push('/');
    }

    setLoading(false);
  };

  if (!role) {
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
          <h1 className="text-4xl font-bold text-center text-foreground mb-2">Selamat Datang</h1>
          <p className="text-center text-muted-foreground mb-8">
            Sudah memiliki akun? <a href="/login" className="underline text-accent font-semibold">Masuk</a>
          </p>

          {/* Role Selection */}
          <div className="space-y-4">
            <motion.button
              onClick={() => setRole('pedagang')}
              className="w-full p-6 border-2 border-border rounded-lg hover:border-accent transition-colors text-left group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/80 transition-colors">
                <span className="text-xl">🛒</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">Pedagang Pasar</h3>
              <p className="text-sm text-muted-foreground mt-1">Anda memiliki limbah sayur, buah, sisa dagangan? Salurkan secara bertanggung jawab tanpa biaya.</p>
            </motion.button>

            <motion.button
              onClick={() => setRole('pengelola')}
              className="w-full p-6 border-2 border-border rounded-lg hover:border-accent transition-colors text-left group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center mb-3 group-hover:bg-accent/80 transition-colors">
                <span className="text-xl">♻️</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">Pengelola Limbah</h3>
              <p className="text-sm text-muted-foreground mt-1">Pejabat kompos, peternak maggot, urban farming. Dapatkan pasokan bahan baku konsisten & terjadwal.</p>
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

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

        {/* Back Button */}
        <button 
          onClick={() => setRole(null)}
          className="mb-6 text-accent hover:underline text-sm font-semibold"
        >
          ← Kembali
        </button>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-foreground mb-2">
          Daftar sebagai {role === 'pedagang' ? 'Pedagang' : 'Pengelola'}
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Sudah memiliki akun? <a href="/login" className="underline text-accent font-semibold">Masuk</a>
        </p>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-6">
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
            <input type="checkbox" id="agree" className="w-4 h-4" required />
            <label htmlFor="agree" className="text-sm text-foreground">Saya setuju dengan Kebijakan Privasi dan Persyaratan Layanan</label>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-full font-semibold"
          >
            {loading ? 'Memproses...' : 'Daftar'}
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-muted-foreground text-sm">Atau</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        {/* Social Signup */}
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
