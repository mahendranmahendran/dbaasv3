import { Box } from '@mui/material';
import { MarketingHeader } from '../components/MarketingHeader';
import { MarketingFooter } from '../components/MarketingFooter';

export const MarketingLayout = ({ children }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <MarketingHeader />
    <Box component="main" sx={{ flex: 1 }}>
      {children}
    </Box>
    <MarketingFooter />
  </Box>
);