import { create } from 'zustand';
import { StorageAdapter } from '../adapters/storage-adapter';
import { AuthStatus } from '../interfaces/app.interface';
import * as AuthUseCases from '../core/use-cases/auth';
import { IUser } from '../core/entities';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: IUser;
  login: (email: string, password: string) => Promise<any>;
  register: (name: string, email: string, password: string, role: string) => Promise<any>;
  checkUser: (user: IUser | null) => Promise<any>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set) => ({
  status: 'checking',
  token: undefined,
  user: undefined,

  login: async (email: string, password: string) => {
    const resp = await AuthUseCases.authLoginUseCase(email, password);

    if (!resp) {
      set({ status: 'unauthenticated', token: undefined, user: undefined });
      return;
    }

    resp.error
      ? set({ status: 'unauthenticated', token: undefined, user: undefined })
      : (set({ status: 'authenticated', token: resp.token, user: resp.user }),
        await StorageAdapter.setItem('token', resp.token),
        await StorageAdapter.setItem('user', JSON.stringify(resp.user)));

    return resp;
  },
  register: async (name: string, email: string, password: string, role: string) => {
    const resp = await AuthUseCases.authRegisterUseCase(name, email, password, role);

    resp.error
      ? set({ status: 'unauthenticated', token: undefined, user: undefined })
      : (set({ status: 'authenticated', token: resp.token, user: resp.user }),
        await StorageAdapter.setItem('token', resp.token),
        await StorageAdapter.setItem('user', JSON.stringify(resp.user)));

    return resp;
  },
  checkUser: async (user: IUser | null) => {
    const resp = await AuthUseCases.checkAuthUserUseCase(user);

    (!resp || resp.error)
      ? set({ status: 'unauthenticated', token: undefined, user: undefined })
      : (set({ status: 'authenticated', token: resp.token, user: resp.user }),
        await StorageAdapter.setItem('token', resp.token),
        await StorageAdapter.setItem('user', JSON.stringify(resp.user)));

    return resp;
  },
  logout: async () => {
    set({ status: 'unauthenticated', token: undefined, user: undefined });
    await Promise.all([
      StorageAdapter.removeItem('token'),
      StorageAdapter.removeItem('user'),
    ]);
  },
}));
