import { LoginCredentials, RegisterData, AuthResponse } from '@/types/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('登录失败');
  }

  return response.json();
}

export async function register(data: RegisterData): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('注册失败');
  }

  return response.json();
}

export async function logout(): Promise<void> {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

export function getToken(): string | null {
  return localStorage.getItem('token');
}

export function setToken(token: string): void {
  localStorage.setItem('token', token);
}

export function isAuthenticated(): boolean {
  return !!getToken();
} 