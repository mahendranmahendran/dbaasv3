import { Box } from '@mui/material';
import { SqlEditor } from '../components/SqlEditor';

export const SqlPlayground = () => (
  <Box sx={{ p: 2, height: 'calc(100vh - 64px)' }}>
    <SqlEditor />
  </Box>
);