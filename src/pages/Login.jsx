import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Button, TextField, Typography, Paper, Alert } from '@mui/material';
import LogoLight from '../assets/logos/logo-light.png';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate network request
    setTimeout(() => {
      try {
        if (username === 'admin' && password === 'admin123') {
          localStorage.setItem('isAuthenticated', 'true');
          // Redirect to intended path or default admin dashboard
          const from = location.state?.from?.pathname || "/admin";
          navigate(from, { replace: true });
        } else {
          throw new Error('Invalid credentials (try admin/admin123)');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <Box sx={{ 
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: '#f5f5f5'
    }}>
      <Paper elevation={3} sx={{ 
        maxWidth: 400,
        width: '100%', 
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <img src={LogoLight} alt="Logo" style={{ height: 40 }} />
          <Typography variant="h5" sx={{ mt: 2 }}>Admin Login</Typography>
        </Box>
        
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
            autoFocus
            inputProps={{ 'data-testid': 'username-input' }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            inputProps={{ 'data-testid': 'password-input' }}
          />
          
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
            data-testid="login-button"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
          
          <Typography variant="body2" align="center" color="textSecondary">
            For demo purposes: Username: admin, Password: admin123
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};