//import { Dashboard } from 'react-admin';
import { Card, Typography } from '@mui/material';

/**
 * React-Admin dashboard showing key metrics
 * Uses default Dashboard component
 */
export const MetricsDashboard = () => (
  <Dashboard>
    <Card sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h6">Active Queries</Typography>
      <Typography variant="h4">0</Typography>
    </Card>
  </Dashboard>
);