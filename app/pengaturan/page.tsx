'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle } from 'lucide-react';
import { mockUserPreferences } from '@/constants/mockData';

export default function PengaturanPage() {
  const [prefs, setPrefs] = useState(mockUserPreferences);

  const handleToggle = (key: keyof typeof prefs) => {
    if (typeof prefs[key] === 'boolean') {
      setPrefs({ ...prefs, [key]: !prefs[key] });
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Pengaturan</h1>
        <p className="text-muted-foreground">Sesuaikan preferensi akun dan notifikasi</p>
      </div>

      {/* Notifications */}
      <Card className="border-border bg-card mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-6">Notifikasi</h2>

          <div className="space-y-4">
            <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <p className="font-semibold text-foreground">Posting limbah baru cocok</p>
                <p className="text-sm text-muted-foreground">Notifikasi saat ada limbah sesuai preferensimu</p>
              </div>
              <Switch
                checked={prefs.notifikasi_posting_limbah}
                onCheckedChange={() => handleToggle('notifikasi_posting_limbah')}
              />
            </div>

            <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <p className="font-semibold text-foreground">Konfirmasi jadwal pickup</p>
                <p className="text-sm text-muted-foreground">Pedagang menerima atau menolak permintaanmu</p>
              </div>
              <Switch
                checked={prefs.notifikasi_jadwal_pickup}
                onCheckedChange={() => handleToggle('notifikasi_jadwal_pickup')}
              />
            </div>

            <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <p className="font-semibold text-foreground">Penginggat pickup hari ini</p>
                <p className="text-sm text-muted-foreground">Penginggat 1 jam sebelum jadwal pickup</p>
              </div>
              <Switch
                checked={prefs.notifikasi_hari_ini}
                onCheckedChange={() => handleToggle('notifikasi_hari_ini')}
              />
            </div>

            <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <p className="font-semibold text-foreground">Rating & ulasan masuk</p>
                <p className="text-sm text-muted-foreground">Pedagang memberi ulasan setelah pickup</p>
              </div>
              <Switch
                checked={prefs.notifikasi_rating}
                onCheckedChange={() => handleToggle('notifikasi_rating')}
              />
            </div>

            <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <p className="font-semibold text-foreground">Update dampak lingkungan</p>
                <p className="text-sm text-muted-foreground">Laporan mingguan kontribusi lingkunganmu</p>
              </div>
              <Switch
                checked={prefs.notifikasi_dampak}
                onCheckedChange={() => handleToggle('notifikasi_dampak')}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Privacy and Security */}
      <Card className="border-border bg-card mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-6">Privasi dan keamanan</h2>

          <div className="space-y-4">
            <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <p className="font-semibold text-foreground">Tampilkan nomor HP ke pedagang</p>
                <p className="text-sm text-muted-foreground">Pedagang bisa menghubungi lewat WhatsApp langsung</p>
              </div>
              <Switch
                checked={prefs.tampilkan_hp}
                onCheckedChange={() => handleToggle('tampilkan_hp')}
              />
            </div>

            <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <p className="font-semibold text-foreground">Profil publik</p>
                <p className="text-sm text-muted-foreground">Pedagang bisa melihat profil dan rating mu</p>
              </div>
              <Switch
                checked={prefs.profil_publik}
                onCheckedChange={() => handleToggle('profil_publik')}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card className="border-border bg-card mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-6">Preferensi website</h2>

          <div className="space-y-6">
            <div>
              <label className="text-sm font-semibold text-foreground block mb-3">Bahasa website</label>
              <Select defaultValue="id">
                <SelectTrigger className="bg-card border-border text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="id">Bahasa Indonesia</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground block mb-3">Satuan jarak</label>
              <Select defaultValue="km">
                <SelectTrigger className="bg-card border-border text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="km">Kilometer (km)</SelectItem>
                  <SelectItem value="m">Meter (m)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground block mb-3">
                Notifikasi pickup otomatis jika dalam jarak
              </label>
              <Select defaultValue="3km">
                <SelectTrigger className="bg-card border-border text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="1km">1 km</SelectItem>
                  <SelectItem value="2km">2 km</SelectItem>
                  <SelectItem value="3km">3 km</SelectItem>
                  <SelectItem value="5km">5 km</SelectItem>
                  <SelectItem value="10km">10 km</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive bg-card border-2">
        <CardContent className="p-6">
          <div className="flex items-start gap-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20 mb-6">
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Zona berbahaya</p>
              <p className="text-sm text-muted-foreground mt-1">Tindakan ini tidak dapat dibatalkan. Harap berhati-hati.</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <p className="font-semibold text-foreground">Nonaktifkan akun sementara</p>
                <p className="text-sm text-muted-foreground">Profil dan listing tidak akan terlihat</p>
              </div>
              <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
                Nonaktifkan
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <p className="font-semibold text-foreground">Hapus akun permanen</p>
                <p className="text-sm text-muted-foreground">Semua data akan dihapus dan tidak bisa dipulihkan</p>
              </div>
              <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
                Hapus akun
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
