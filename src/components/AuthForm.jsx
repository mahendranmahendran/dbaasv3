import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNotify } from 'react-admin';

/**
 * Handles magic link authentication
 * Props: None
 * Usage: Used in login flow
 */
export const AuthForm = () => {
  const [email, setEmail] = useState('');
  const notify = useNotify();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual auth provider call
      notify('Magic link sent to your email!', { type: 'success' });
    } catch (error) {
      notify(error.message, { type: 'error' });
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 10, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Send Magic Link
        </Button>
      </form>
    </Box>
  );
};