'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Box } from '@mui/material';
import { AuthForm } from '../../components/AuthForm';
import { useAuth } from '../../hooks/useAuth';

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { resetPassword, error } = useAuth();
  const [loading, setLoading] = useState(false);
  const oobCode = searchParams.get('oobCode');

  useEffect(() => {
    if (!oobCode) {
      router.push('/login');
    }
  }, [oobCode, router]);

  const handleSubmit = async (email: string, newPassword: string) => {
    if (!oobCode) return;
    
    setLoading(true);
    try {
      await resetPassword(oobCode, newPassword);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  if (!oobCode) {
    return null;
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', py: 4 }}>
      <AuthForm
        title="Set New Password"
        onSubmit={handleSubmit}
        error={error?.message}
        loading={loading}
        showConfirmPassword
      />
    </Box>
  );
} 