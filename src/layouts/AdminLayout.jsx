// src/layouts/AdminLayout.jsx
import { Layout, Menu } from 'react-admin';
import { AppBar, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Dashboard as DashboardIcon,
  QueryStats as QueryStatsIcon,
  Code as CodeIcon,
  Person as PersonIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

const CustomAppBar = ({ onMenuClick, dense }) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <span>DBaaS Admin</span>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const AdminMenu = () => {
  return (
    <Menu>
      <Menu.DashboardItem />
      <Menu.Item
        to="/queries"  // Use relative paths with leading slash
        primaryText="Queries"
        leftIcon={<QueryStatsIcon />}
      />
      <Menu.Item
        to="/profile"
        primaryText="Profile"
        leftIcon={<PersonIcon />}
      />
      <Menu.Item
        to="/settings"
        primaryText="Settings"
        leftIcon={<SettingsIcon />}
      />
      <Menu.Item
        to="/sql"
        primaryText="SQL Playground"
        leftIcon={<CodeIcon />}
      />
    </Menu>
  );
};

export const AdminLayout = (props) => (
  <Layout
    {...props}
    appBar={<CustomAppBar />}
    menu={<AdminMenu />}
  />
);