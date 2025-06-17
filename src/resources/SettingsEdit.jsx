// src/resources/SettingsEdit.jsx
import { 
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  useNotify,
  useRedirect
} from 'react-admin';
import { 
  Box, 
  Typography, 
  Divider,
  Card,
  CardContent
} from '@mui/material';
import {
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon
} from '@mui/icons-material';

// Mock data - would be imported from ../mocks in real usage
const mockSettings = {
  id: 'mock-settings',
  notifications: {
    email: true,
    slack: false,
    frequency: 'daily'
  },
  security: {
    two_factor: false,
    timeout: 30
  },
  preferences: {
    theme: 'light',
    timezone: 'UTC'
  }
};

export const SettingsEdit = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify('Settings updated successfully', { type: 'success' });
    redirect('/');
  };

  return (
    <Edit
      resource="settings"
      id={mockSettings.id}
      title="User Settings"
      mutationOptions={{ onSuccess }}
      sx={{
        maxWidth: 800,
        mx: 'auto',
        p: 4,
        bgcolor: 'background.paper',
        borderRadius: 2
      }}
      // Disable all data fetching
      queryOptions={{ enabled: false }}
    >
      <SimpleForm defaultValues={mockSettings}>
        <Card variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <NotificationsIcon /> Notifications
            </Typography>
            <Divider sx={{ my: 2 }} />
            <BooleanInput source="notifications.email" label="Email Notifications" />
            <BooleanInput source="notifications.slack" label="Slack Notifications" />
            <TextInput source="notifications.frequency" label="Frequency" />
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SecurityIcon /> Security
            </Typography>
            <Divider sx={{ my: 2 }} />
            <BooleanInput source="security.two_factor" label="Two-Factor Authentication" />
            <TextInput source="security.timeout" label="Session Timeout (minutes)" />
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6">
              <SettingsIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              Preferences
            </Typography>
            <Divider sx={{ my: 2 }} />
            <TextInput source="preferences.theme" label="Theme" />
            <TextInput source="preferences.timezone" label="Timezone" />
          </CardContent>
        </Card>
      </SimpleForm>
    </Edit>
  );
};