import { useState } from 'react';
import { login } from '@/lib/auth';
import { redirect } from 'next/navigation';
import LoginForm from '@/components/login-form';

const Login = () => {
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      redirect('/'); // Giriş başarılıysa anasayfaya yönlendir
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <LoginForm
        {handleSubmit()}
    />
  );
};

export default Login;
