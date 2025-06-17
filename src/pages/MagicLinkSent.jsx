// src/pages/MagicLinkSent.jsx
import { Box, Typography, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

/**
 * Magic Link Confirmation Page
 * 
 * Displays after user requests a magic link login
 * Key Features:
 * - Clear visual feedback
 * - Instructions for next steps
 * - Fallback actions
 * - Brand-consistent styling
 */
export const MagicLinkSent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        p: 3,
        backgroundColor: 'background.paper'
      }}
    >
      <CheckCircleOutlineIcon 
        color="success" 
        sx={{ fontSize: 80, mb: 3 }} 
      />
      
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Check Your Email
      </Typography>
      
      <EmailIcon 
        color="primary" 
        sx={{ fontSize: 60, my: 3 }} 
      />
      
      <Typography variant="body1" paragraph>
        We've sent a magic link to your email address.
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ maxWidth: 500 }}>
        Click the link in the email to securely log in to your DBaaS dashboard. 
        You can close this window - the link will bring you back automatically.
      </Typography>
      
      <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
        <Button
          variant="outlined"
          component={RouterLink}
          to="/"
          sx={{ px: 4 }}
        >
          Back to Home
        </Button>
        
        <Button
          variant="contained"
          component={Link}
          href="mailto:"
          sx={{ px: 4 }}
        >
          Open Email App
        </Button>
      </Box>
      
      <Typography variant="body2" sx={{ mt: 4, color: 'text.secondary' }}>
        Didn't receive it?{' '}
        <Link 
          component={RouterLink} 
          to="/login" 
          color="primary"
        >
          Try again
        </Link>
      </Typography>
    </Box>
  );
};