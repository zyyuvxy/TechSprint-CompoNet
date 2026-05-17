'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Store, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { useAuth } from '@/lib/auth-store';

export default function RoleSelectionPage() {
  const router = useRouter();
  const { isAuthenticated, setSelectedRole } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transition: { duration: 0.3 },
    },
  };

  const handleSelectRole = (role: 'pedagang' | 'pengelola') => {
    setSelectedRole(role);
    router.push(role === 'pedagang' ? '/pedagang-dashboard' : '/pengelola-dashboard');
  };

  return (
    <div className="min-h-screen bg-[#EAF3E7] flex flex-col items-center justify-center p-4">
      <motion.div
        className="w-full max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div className="flex justify-center mb-12" variants={cardVariants}>
          <Logo size="lg" showText={true} />
        </motion.div>

        {/* Title */}
        <motion.div className="text-center mb-12" variants={cardVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3B2F] mb-4">
            Pilih Peran Anda
          </h1>
          <p className="text-lg text-[#1E3B2F]/70">
            Lanjutkan sebagai Pedagang atau Pengelola Limbah
          </p>
        </motion.div>

        {/* Role Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
        >
          {/* Pedagang Card */}
          <motion.button
            variants={cardVariants}
            whileHover="hover"
            onClick={() => handleSelectRole('pedagang')}
            className="group"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center border-2 border-transparent hover:border-[#EB8A31]">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#EAF3E7] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#EB8A31]/20 transition-colors">
                <Store className="w-10 h-10 md:w-12 md:h-12 text-[#EB8A31]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E3B2F] mb-3">
                Masuk sebagai Pedagang
              </h2>
              <p className="text-[#1E3B2F]/60 mb-8 flex-grow">
                Kelola limbah organik dari toko Anda dan dapatkan pembeli langsung
              </p>
              <Button
                className="w-full bg-[#EB8A31] hover:bg-[#EB8A31]/90 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Lanjutkan sebagai Pedagang
              </Button>
            </div>
          </motion.button>

          {/* Pengelola Card */}
          <motion.button
            variants={cardVariants}
            whileHover="hover"
            onClick={() => handleSelectRole('pengelola')}
            className="group"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center border-2 border-transparent hover:border-[#EB8A31]">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#EAF3E7] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#EB8A31]/20 transition-colors">
                <Leaf className="w-10 h-10 md:w-12 md:h-12 text-[#EB8A31]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E3B2F] mb-3">
                Masuk sebagai Pengelola
              </h2>
              <p className="text-[#1E3B2F]/60 mb-8 flex-grow">
                Kelola pengumpulan limbah organik dan dampak lingkungan Anda
              </p>
              <Button
                className="w-full bg-[#EB8A31] hover:bg-[#EB8A31]/90 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Lanjutkan sebagai Pengelola
              </Button>
            </div>
          </motion.button>
        </motion.div>

        {/* Logout Option */}
        <motion.div className="text-center mt-12" variants={cardVariants}>
          <button
            onClick={() => router.push('/login')}
            className="text-[#1E3B2F]/60 hover:text-[#1E3B2F] underline transition-colors"
          >
            Kembali ke Login
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
