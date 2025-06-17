import { Layout, Menu, useTheme } from 'react-admin';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoLight from '../assets/logos/logo-light.svg';

const AdminMenu = () => {
  const theme = useTheme();
  return (
    <Menu sx={{
      '& .RaMenu-item': {
        borderRadius: '4px',
        margin: '4px 8px',
        '&:hover': {
          backgroundColor: theme.palette.action.hover
        }
      }
    }}>
      <Menu.DashboardItem />
      <Menu.Item to="/admin/queries" primaryText="Queries" leftIcon={<span>📊</span>} />
      <Menu.Item to="/admin/profile" primaryText="Profile" leftIcon={<span>👤</span>} />
      <Menu.Item to="/admin/settings" primaryText="Settings" leftIcon={<span>⚙️</span>} />
      <Menu.Item to="/admin/sql" primaryText="SQL Playground" leftIcon={<span>💻</span>} />
    </Menu>
  );
};

export const AdminLayout = (props) => (
  <Layout
    {...props}
    menu={AdminMenu}
    sx={{
      '& .RaLayout-appFrame': {
        marginTop: '64px'
      }
    }}
  >
    <AppBar position="fixed" sx={{ 
      background: 'linear-gradient(to right, #2563EB, #1E40AF)',
      zIndex: (theme) => theme.zIndex.drawer + 1
    }}>
      <Toolbar>
        <Box component={Link} to="/admin" sx={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={LogoLight} 
            alt="Admin Logo" 
            height="30"
            style={{ marginRight: '16px' }}
          />
          <Typography variant="h6" noWrap sx={{ color: 'white' }}>
            DBaaS Admin
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  </Layout>
);