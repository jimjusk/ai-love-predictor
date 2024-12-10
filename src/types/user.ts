export interface User {
  id: string;
  name?: string;
  email?: string;
  avatar?: string;
  gender: 'male' | 'female' | 'other';
  birthDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile extends Omit<User, 'id' | 'email'> {
  bio?: string;
  interests?: string[];
  occupation?: string;
  education?: string;
  photos?: string[];
} 