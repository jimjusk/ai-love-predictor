import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { register as registerUser } from '@/lib/auth';
import { useUser } from '@/contexts/UserContext';

const registerSchema = z.object({
  email: z.string().email('请输入有效的邮箱地址'),
  password: z.string().min(6, '密码至少6个字符'),
  name: z.string().min(2, '名字至少2个字符'),
  gender: z.enum(['male', 'female']),
  birthDate: z.string().refine(date => {
    const age = new Date().getFullYear() - new Date(date).getFullYear();
    return age >= 18 && age <= 100;
  }, '年龄必须在18-100岁之间'),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const router = useRouter();
  const { setUser } = useUser();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await registerUser(data);
      setUser(response.user);
      localStorage.setItem('token', response.token);
      router.push('/onboarding');
    } catch (error) {
      console.error('Registration failed:', error);
      // 这里可以添加错误提示
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          邮箱
        </label>
        <input
          {...register('email')}
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          姓名
        </label>
        <input
          {...register('name')}
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
          性别
        </label>
        <select
          {...register('gender')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
          <option value="">请选择</option>
          <option value="male">男</option>
          <option value="female">女</option>
        </select>
        {errors.gender && (
          <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
          出生日期
        </label>
        <input
          {...register('birthDate')}
          type="date"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
        {errors.birthDate && (
          <p className="mt-1 text-sm text-red-600">{errors.birthDate.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          密码
        </label>
        <input
          {...register('password')}
          type="password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        {isSubmitting ? '注册中...' : '注册'}
      </button>
    </form>
  );
} 