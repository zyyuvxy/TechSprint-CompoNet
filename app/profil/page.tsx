'use client';

import { Edit3, CheckCircle2, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { mockUserProfile, mockActivityLog } from '@/constants/mockData';

export default function ProfilPage() {
  const user = mockUserProfile;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Profil saya</h1>
          <p className="text-muted-foreground">Informasi akun dan preferensi pengelolaan limbah</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
          <Edit3 className="w-4 h-4" />
          Edit profil
        </Button>
      </div>

      {/* Profile Card */}
      <Card className="border-border bg-card mb-8">
        <CardContent className="p-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-3xl font-bold text-accent-foreground flex-shrink-0">
              BS
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">{user.nama}</h2>
              <p className="text-muted-foreground">{user.lokasi}</p>
              <div className="flex items-center gap-6 mt-4">
                <div>
                  <p className="text-sm text-muted-foreground">Rating</p>
                  <p className="text-lg font-bold text-foreground flex items-center gap-1 mt-1">
                    <Star className="w-5 h-5 fill-accent text-accent" />
                    {user.rating}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pickup</p>
                  <p className="text-lg font-bold text-foreground mt-1">{user.pickup}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Dialihkan</p>
                  <p className="text-lg font-bold text-foreground mt-1">{user.dialihkan}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pasar aktif</p>
                  <p className="text-lg font-bold text-foreground mt-1">{user.pasar_aktif}</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="border-border text-foreground">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Terverifikasi
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Data Diri */}
      <Card className="border-border bg-card mb-8">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-6">Data diri</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-foreground">Nama lengkap</label>
              <Input
                type="text"
                defaultValue={user.nama}
                className="mt-2 bg-muted border-border text-foreground"
                disabled
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">Nomor HP</label>
              <Input
                type="tel"
                defaultValue="0856XXXXXXXX"
                className="mt-2 bg-muted border-border text-foreground"
                disabled
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">Email</label>
              <Input
                type="email"
                className="mt-2 bg-muted border-border text-foreground"
                disabled
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">Kota / kecamatan</label>
              <Input
                type="text"
                defaultValue="Purwokerto"
                className="mt-2 bg-muted border-border text-foreground"
                disabled
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Informasi Pengelolaan */}
      <Card className="border-border bg-card mb-8">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-6">Informasi pengelolaan</h3>

          <div className="mb-6">
            <label className="text-sm font-semibold text-foreground">Jenis pengelola</label>
            <div className="flex flex-wrap gap-2 mt-3">
              {user.jenis_pengelola.map((jenis) => (
                <span key={jenis} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {jenis}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold text-foreground">Limbah yang bisa dikelola</label>
            <div className="flex flex-wrap gap-2 mt-3">
              {user.limbah_bisa_kelola.map((limbah) => (
                <span key={limbah} className="px-4 py-2 bg-muted text-foreground rounded-full text-sm">
                  {limbah}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <label className="text-sm font-semibold text-foreground">Kapasitas pickup per hari</label>
              <Input
                type="number"
                defaultValue={user.kapasitas_harian}
                className="mt-2 bg-muted border-border text-foreground"
                disabled
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">Frekuensi pickup per minggu</label>
              <Input
                type="text"
                defaultValue={user.frekuensi_pickup_per_minggu}
                className="mt-2 bg-muted border-border text-foreground"
                disabled
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">Jangkauan area (km)</label>
              <Input
                type="number"
                defaultValue={user.jangkauan_km}
                className="mt-2 bg-muted border-border text-foreground"
                disabled
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground">Keterangan untuk pedagang</label>
            <Textarea
              defaultValue={user.keterangan}
              className="mt-2 bg-muted border-border text-foreground min-h-24"
              disabled
            />
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Batal
        </Button>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Simpan perubahan
        </Button>
      </div>
    </div>
  );
}
