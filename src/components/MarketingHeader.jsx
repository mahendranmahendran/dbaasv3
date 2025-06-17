import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const MarketingHeader = () => (
  <AppBar position="static" color="transparent" elevation={0}>
    <Toolbar>
      <Box component={Link} to="/">
        <img 
          src="/src/assets/logos/logo-dark.svg" 
          alt="DBaaS Logo" 
          height="40"
        />
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Button component={Link} to="/pricing" color="inherit">
        Pricing
      </Button>
      <Button 
        component={Link} 
        to="/admin" // Changed to direct to /admin
        variant="contained" 
        color="primary"
        sx={{ ml: 2 }}
      >
        Dashboard
      </Button>
    </Toolbar>
  </AppBar>
);