// src/components/MarketingHeader.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const MarketingHeader = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box component={Link} to="/">
          <img 
            src="/src/assets/logos/logo-dark.svg" 
            alt="merkuridb Logo" 
            height="50"
          />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Button component={Link} to="/pricing" color="inherit">
          Pricing
        </Button>
        {isAuthenticated ? (
          <Button 
            component={Link}
            to="/admin"
            variant="contained"
            color="primary"
            sx={{ ml: 2 }}
          >
            Dashboard
          </Button>
        ) : (
          <Button 
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
            sx={{ ml: 2 }}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};


