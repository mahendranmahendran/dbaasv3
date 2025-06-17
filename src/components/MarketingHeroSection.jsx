import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const MarketingHeroSection = () => (
  <Box sx={{ 
    textAlign: 'center',
    py: 10,
    background: 'linear-gradient(to bottom, #f5f7fa 0%, #e4e8eb 100%)'
  }}>
    <Typography variant="h2" component="h1" gutterBottom>
      Modern Database Management
    </Typography>
    <Typography variant="h5" color="text.secondary" paragraph>
      The easiest way to manage your cloud databases
    </Typography>
    <Button
      component={Link}
      to="/admin"
      variant="contained"
      size="large"
      sx={{ mt: 3 }}
    >
      Get Started
    </Button>
  </Box>
);