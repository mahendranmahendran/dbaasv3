import { Box, Typography, Link } from '@mui/material';

export const MarketingFooter = () => (
  <Box component="footer" sx={{ py: 4, bgcolor: 'background.paper' }}>
    <Typography variant="body2" align="center">
      © {new Date().getFullYear()} DBaaS. All rights reserved.
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
      <Link href="#" sx={{ px: 1 }}>Terms</Link>
      <Link href="#" sx={{ px: 1 }}>Privacy</Link>
    </Box>
  </Box>
);