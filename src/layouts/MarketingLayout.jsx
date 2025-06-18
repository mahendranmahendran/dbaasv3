import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { MarketingHeader } from '../components/MarketingHeader';
import { MarketingHeroSection } from '../components/MarketingHeroSection';
import { MarketingFooter } from '../components/MarketingFooter';

export const MarketingLayout = ({ children }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', border: '2px solid blue' }}>
    <MarketingHeader />
    <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
    </Box>
    <MarketingFooter />
  </Box>
);