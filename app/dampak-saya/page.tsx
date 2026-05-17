'use client';

import { TrendingUp, BarChart3, Leaf, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockImpactStats } from '@/constants/mockData';

export default function DampakSayaPage() {
  const impact = mockImpactStats;
  const progressPercent = impact.pencapaian_persen;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Dampak Saya</h1>
        <p className="text-muted-foreground">Kontribusi lingkunganmu sejak bergabung</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total limbah dialihkan</p>
                <p className="text-4xl font-bold text-foreground mt-4">{impact.limbah_dialihkan} kg</p>
                <p className="text-xs text-muted-foreground mt-2">Sejak {impact.bulan_ini} 2026</p>
              </div>
              <BarChart3 className="w-10 h-10 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total pickup</p>
                <p className="text-4xl font-bold text-foreground mt-4">{impact.total_pickup}x</p>
                <p className="text-xs text-muted-foreground mt-2">dari 3 pasar berbeda</p>
              </div>
              <TrendingUp className="w-10 h-10 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm">CO₂ berkurang</p>
                <p className="text-4xl font-bold text-foreground mt-4">{impact.co2_berkurang} kg</p>
                <p className="text-xs text-muted-foreground mt-2">Setara 3 pohon per tahun</p>
              </div>
              <Leaf className="w-10 h-10 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Target */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-foreground">Target bulanan</h2>
            <p className="text-sm text-muted-foreground">{impact.limbah_dialihkan} kg dari {impact.target_bulanan} kg</p>
          </div>
          <Target className="w-6 h-6 text-accent" />
        </div>

        <Card className="border-border bg-card p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">{impact.limbah_dialihkan} kg</p>
                <p className="text-sm text-muted-foreground">Tercapai</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">{impact.sisa_target} kg lagi</p>
                <p className="text-sm text-muted-foreground">Sisa target</p>
              </div>
            </div>

            <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{progressPercent}% tercapai</span>
              <span className="text-xs font-semibold text-foreground">{impact.target_bulanan} kg</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Distribution */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Distribusi jenis limbah</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground">Sayuran</span>
                  <span className="text-sm font-semibold text-foreground">68%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground">Buah & ampas</span>
                  <span className="text-sm font-semibold text-foreground">22%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div className="bg-accent h-full rounded-full" style={{ width: '22%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground">Batang & daun</span>
                  <span className="text-sm font-semibold text-foreground">7%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div className="bg-destructive h-full rounded-full" style={{ width: '7%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground">Lainnya</span>
                  <span className="text-sm font-semibold text-foreground">3%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div className="bg-muted-foreground h-full rounded-full" style={{ width: '3%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Riwayat per bulan</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-semibold text-foreground">April 2026</p>
                  <p className="text-xs text-muted-foreground">12 pickup · CO₂ -43</p>
                </div>
                <Button variant="outline" size="sm" className="border-border text-foreground">
                  Berjalan
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-semibold text-foreground">Maret 2026</p>
                  <p className="text-xs text-muted-foreground">9 pickup · CO₂ -19 · bulan pertama</p>
                </div>
                <Button variant="outline" size="sm" className="border-border text-foreground">
                  Selesai
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
