import { create } from 'zustand';

export interface User {
  id: string;
  nama: string;
  email: string;
  jenis_pengelola: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  selectedRole: 'pedagang' | 'pengelola' | null;
  login: (user: User) => void;
  logout: () => void;
  setSelectedRole: (role: 'pedagang' | 'pengelola') => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  selectedRole: null,
  login: (user: User) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false, selectedRole: null }),
  setSelectedRole: (role: 'pedagang' | 'pengelola') => set({ selectedRole: role }),
}));
