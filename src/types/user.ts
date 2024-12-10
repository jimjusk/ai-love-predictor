export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  gender: 'male' | 'female';
  birthDate: string;
  preferences?: {
    ageRange: [number, number];
    gender: 'male' | 'female' | 'both';
    location?: string[];
  };
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