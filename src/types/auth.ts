export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
  gender: 'male' | 'female';
  birthDate: string;
}

export interface AuthResponse {
  user: User;
  token: string;
} 