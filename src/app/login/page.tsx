'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { AuthForm } from '../../components/AuthForm';
import { useAuth } from '../../hooks/useAuth';

export default function Login() {
  const router = useRouter();
  const { login, error } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (email: string, password: string) => {
    setLoading(true);
    try {
      await login(email, password);
      router.push('/home');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', py: 4 }}>
      <AuthForm
        title="Login"
        onSubmit={handleSubmit}
        error={error?.message}
        loading={loading}
      />
      
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="body2">
          Don&apos;t have an account?{' '}
          <Link href="/register" style={{ textDecoration: 'none' }}>
            Register
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <Link href="/forgot-password" style={{ textDecoration: 'none' }}>
            Forgot Password?
          </Link>
        </Typography>
      </Box>
    </Box>
  );
} 