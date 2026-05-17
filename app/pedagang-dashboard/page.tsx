'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { BarChart3, CheckCircle2, TrendingUp, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockUserProfile, mockPickupSchedules, mockActivityLog } from '@/constants/mockData';
import { useAuth } from '@/lib/auth-store';

export default function PedagangDashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated, selectedRole } = useAuth();

  useEffect(() => {
    if (!isAuthenticated || selectedRole !== 'pedagang') {
      router.push('/login');
    }
  }, [isAuthenticated, selectedRole, router]);

  const currentUser = user || mockUserProfile;
  const schedules = mockPickupSchedules;
  const activity = mockActivityLog;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div 
      className="p-4 md:p-8 max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Welcome Section */}
      <motion.div className="mb-8" variants={itemVariants}>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Dashboard Pedagang - {currentUser.nama.split(' ')[0]}
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">Kelola limbah pasar Anda dengan mudah</p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants}>
          <Card className="border-border bg-card hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground text-xs md:text-sm">Limbah terposting</p>
                  <p className="text-2xl md:text-3xl font-bold text-foreground mt-2">37 kg</p>
                </div>
                <BarChart3 className="w-6 md:w-8 h-6 md:h-8 text-accent flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-border bg-card hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground text-xs md:text-sm">Pickup terjadwal</p>
                  <p className="text-2xl md:text-3xl font-bold text-foreground mt-2">1</p>
                </div>
                <CheckCircle2 className="w-6 md:w-8 h-6 md:h-8 text-accent flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-border bg-card hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground text-xs md:text-sm">Total terkirim</p>
                  <p className="text-2xl md:text-3xl font-bold text-foreground mt-2">185 kg</p>
                </div>
                <TrendingUp className="w-6 md:w-8 h-6 md:h-8 text-accent flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-border bg-card hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground text-xs md:text-sm">CO₂ terselamatkan</p>
                  <p className="text-2xl md:text-3xl font-bold text-foreground mt-2">7,4 kg</p>
                </div>
                <Leaf className="w-6 md:w-8 h-6 md:h-8 text-accent flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Pickup Schedule Section */}
      <motion.div className="mb-8" variants={itemVariants}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <h2 className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-5 md:w-6 h-5 md:h-6" />
            Jadwal Pickup Mendatang
          </h2>
          <Button variant="outline" className="text-foreground w-full md:w-auto">Lihat Semua</Button>
        </div>

        <Card className="border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Tanggal</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Jam</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Limbah</th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((schedule) => (
                  <tr key={schedule.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-foreground">{schedule.tanggal}</td>
                    <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-foreground">{schedule.jam}</td>
                    <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-foreground">{schedule.limbah}</td>
                    <td className="px-3 md:px-6 py-4 text-xs md:text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        schedule.status === 'Terjadwal' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {schedule.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>

      {/* Notifications Section */}
      <motion.div variants={itemVariants}>
        <h2 className="text-lg md:text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          🔔 Notifikasi Terbaru
        </h2>

        <div className="space-y-3">
          {activity.slice(0, 4).map((item) => (
            <Card key={item.id} className="border-border bg-card hover:shadow-sm transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-accent flex-shrink-0" />
                      <p className="text-xs md:text-sm text-foreground">{item.aksi}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground ml-4 flex-shrink-0">{item.waktu}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
