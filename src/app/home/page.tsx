'use client';

import { useRouter } from 'next/navigation';
import { Box, Typography, Button, Container } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';

export default function Home() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          py: 8
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Your Dashboard
        </Typography>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" gutterBottom>
            Email: {user?.email}
          </Typography>
          <Typography variant="body1" gutterBottom>
            User ID: {user?.uid}
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="error"
          onClick={handleLogout}
          sx={{ mt: 2 }}
        >
          Log Out
        </Button>
      </Box>
    </Container>
  );
} 