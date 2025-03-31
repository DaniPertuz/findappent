import { create } from 'zustand';
import { StorageAdapter } from '../adapters/storage-adapter';
import { AuthResponse, AuthStatus } from '../interfaces/app.interface';
import * as AuthUseCases from '../core/use-cases/auth';
import { IUser } from '../core/entities';

export interface AuthState {
  status: AuthStatus;
  authResponse: AuthResponse;
  login: (email: string, password: string) => Promise<AuthResponse | undefined>;
  register: (name: string, email: string, password: string, role: string) => Promise<AuthResponse | undefined>;
  checkUser: (user: IUser | null) => Promise<AuthResponse | undefined>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set) => ({
  status: 'checking',
  authResponse: { token: undefined, user: undefined },

  login: async (email: string, password: string) => {
    const resp = await AuthUseCases.authLoginUseCase(email, password);

    if (!resp || Object.values(resp).every(value => value === undefined)) {
      set({ status: 'unauthenticated', authResponse: { token: undefined, user: undefined } });
      return;
    }

    set({ status: 'authenticated', authResponse: { token: resp.token, user: resp.user } });
    Promise.all([
      StorageAdapter.setItem('token', resp.token!),
      StorageAdapter.setItem('user', JSON.stringify(resp.user)),
    ]);

    return resp;
  },
  register: async (name: string, email: string, password: string, role: string) => {
    const resp = await AuthUseCases.authRegisterUseCase(name, email, password, role);

    if (!resp || Object.values(resp).every(value => value === undefined)) {
      set({ status: 'unauthenticated', authResponse: { token: undefined, user: undefined } });
      return;
    }

    set({ status: 'authenticated', authResponse: { token: resp.token, user: resp.user } });
    Promise.all([
      StorageAdapter.setItem('token', resp.token!),
      StorageAdapter.setItem('user', JSON.stringify(resp.user)),
    ]);

    return resp;
  },
  checkUser: async (user: IUser | null) => {
    const resp = await AuthUseCases.checkAuthUserUseCase(user);

    if (!resp || Object.values(resp).every(value => value === undefined)) {
      set({ status: 'unauthenticated', authResponse: { token: undefined, user: undefined } });
      return;
    }

    set({ status: 'authenticated', authResponse: { token: resp.token, user: resp.user } });
    Promise.all([
      StorageAdapter.setItem('token', resp.token!),
      StorageAdapter.setItem('user', JSON.stringify(resp.user)),
    ]);

    return resp;
  },
  logout: async () => {
    set({ status: 'unauthenticated', authResponse: { token: undefined, user: undefined } });
    await Promise.all([
      StorageAdapter.removeItem('token'),
      StorageAdapter.removeItem('user'),
    ]);
  },
}));
