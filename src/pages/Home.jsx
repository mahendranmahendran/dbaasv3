import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

/**
 * Marketing homepage with CTA
 * No props needed
 */
export const Home = () => (
  <Box sx={{ textAlign: 'center', p: 4 }}>
    <Typography variant="h3" gutterBottom>
      Database-as-a-Service
    </Typography>
    <Button 
      component={Link} 
      to="/sql" 
      variant="contained" 
      size="large"
    >
      Start Querying
    </Button>
  </Box>
);