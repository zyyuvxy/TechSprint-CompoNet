'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2, Leaf, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export default function LandingPage() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-border">
        <Logo size="md" showText={true} />
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={() => router.push('/login')}
            className="text-foreground border-foreground hover:bg-foreground hover:text-background"
          >
            Login
          </Button>
          <Button 
            onClick={() => router.push('/signup')}
            className="bg-accent hover:bg-accent/90 text-white"
          >
            Sign Up
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        className="px-8 py-20 text-center max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
          variants={itemVariants}
        >
          Ubah <span className="text-accent">sampah organik</span> pasar menjadi ekonomi <span className="text-accent">hijau</span>
        </motion.h1>

        <motion.p 
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          CompoNet menghubungkan pedagang pasar dengan pejabat kompos, peternak maggot, dan urban farming. Kurangi sampah ke TPA, dapatkan manfaat nyata.
        </motion.p>

        <motion.div 
          className="flex gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 text-sm text-foreground">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            +60% sampah organik teralihkan
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            500+ mitra aktif
          </div>
        </motion.div>
      </motion.section>

      {/* Solution Section */}
      <motion.section 
        className="bg-muted/30 px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">Siap menjadi bagian dari solusi?</h2>
          <p className="text-center text-muted-foreground mb-12">Pilih peran Anda dan mulai kolaborasi untuk pasar bersih & lingkungan lestari.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pedagang Pasar Card */}
            <motion.div 
              className="bg-card border-2 border-border rounded-xl p-8 text-center"
              variants={itemVariants}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Pedagang Pasar</h3>
              <p className="text-muted-foreground mb-6">Anda memiliki limbah sayur, buah, sisa dagangan? Salurkan secara bertanggung jawab tanpa biaya.</p>
              <Button 
                onClick={() => router.push('/signup')}
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Daftar sebagai Penjual
              </Button>
            </motion.div>

            {/* Pengelola Limbah Card */}
            <motion.div 
              className="bg-card border-2 border-border rounded-xl p-8 text-center"
              variants={itemVariants}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Pengelola Limbah</h3>
              <p className="text-muted-foreground mb-6">Pejabat kompos, peternak maggot, urban farming. Dapatkan pasokan bahan baku konsisten & terjadwal.</p>
              <Button 
                onClick={() => router.push('/signup')}
                className="w-full bg-accent hover:bg-accent/90 text-white"
              >
                Daftar sebagai Pengelola
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Platform yang menghubungkan & mengelola limbah</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div className="text-center" variants={itemVariants}>
              <div className="mb-4 flex justify-center">
                <TrendingUp className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Posting & Pencarian Limbah</h3>
              <p className="text-muted-foreground">Pedagang memposting real-time. Pengelola filter lokasi, jenis limbah, dan jadwal tersesuaian.</p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <div className="mb-4 flex justify-center">
                <CheckCircle2 className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Penjadwalan Pickup Terintegrasi</h3>
              <p className="text-muted-foreground">Atur jadwal ambil limbah, notifikasi otomatis ke pedagang. Tidak ada limbah terbuang sia-sia.</p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <div className="mb-4 flex justify-center">
                <Leaf className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Dashboard Dampak Lingkungan</h3>
              <p className="text-muted-foreground">Lihat total limbah teralihkan dari TPA, estimasi penurunan emisi CO₂, dan jangkauan mitra aktif.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="bg-muted/30 px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Manfaat untuk setiap pihak</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex gap-2 mb-4">
                <div className="w-1 bg-accent rounded-full"></div>
                <h3 className="font-bold text-foreground">Pedagang Pasar</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Salurkan limbah tanpa biaya tambahan
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Kurangi biaya angkut sampah harian
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Kontribusi nyata lingkungan
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex gap-2 mb-4">
                <div className="w-1 bg-accent rounded-full"></div>
                <h3 className="font-bold text-foreground">Pengelola Limbah</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Pasokan bahan baku konsisten & terjadwal
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Efisiensi waktu dan biaya cari limbah
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Perluas jaringan mitra pasar
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex gap-2 mb-4">
                <div className="w-1 bg-accent rounded-full"></div>
                <h3 className="font-bold text-foreground">Masyarakat & Lingkungan</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Sampah organik ke TPA berkurang drastis
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Turunkan emisi gas metana
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  Dukung ketahanan pangan lokal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Steps Section */}
      <motion.section 
        className="px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Mulai dalam 3 langkah mudah</h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div variants={itemVariants}>
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Daftar</h3>
              <p className="text-muted-foreground">Pilih peran Anda dan mulai kolaborasi untuk pasar bersih & lingkungan lestari.</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Posting/Cari</h3>
              <p className="text-muted-foreground">Informasikan limbah atau kebutuhan Anda dan dapatkan penawaran dari mitra.</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Pickup & Olah</h3>
              <p className="text-muted-foreground">Jadwalkan pengambilan, kelola limbah, dan kelola limbah dengan penuh tanggung jawab.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-border px-8 py-8 text-center text-sm text-muted-foreground">
        <p>CompoNet — Jembatan ekonomi sirkular untuk pasar tradisional</p>
        <p className="mt-2">© 2026 CompoNet | Wujudkan Smart Living & Lingkungan Berkelanjutan</p>
      </footer>
    </div>
  );
}
