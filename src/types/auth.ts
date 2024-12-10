import { User } from './user';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name?: string;
  gender?: 'male' | 'female' | 'other';
  birthDate?: string;
}

export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface AuthError {
  code: string;
  message: string;
}

export type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'unauthenticated'; 