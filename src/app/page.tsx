'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';

export default function Home() {
  const { user } = useAuth();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 64px)',
          textAlign: 'center',
          py: 8
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Auth App
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          A secure authentication system built with Next.js, Firebase, and Material-UI
        </Typography>
        <Box sx={{ mt: 4 }}>
          {user ? (
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/home"
            >
              Go to Dashboard
            </Button>
          ) : (
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/login"
            >
              Get Started
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
} 