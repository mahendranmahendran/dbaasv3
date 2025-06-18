// src/resources/SettingsEdit.jsx
import { 
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  SelectInput,
  NumberInput,
  useNotify,
  useRedirect,
  required,
  minValue,
  maxValue
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

export const SettingsEdit = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify('Settings updated successfully', { type: 'success' });
    redirect('/admin/settings'); // Correct redirect path
  };
  
  const onError = (error) => {
    notify(`Error: ${error.message || 'Could not save settings'}`, { type: 'error' });
  };

  // Transform the flat fields from the API back to a nested structure for the form
  const transform = (data) => ({
    id: data.id,
    notifications: {
      email: data.notifications_email,
      slack: data.notifications_slack,
      frequency: data.notifications_frequency,
    },
    security: {
      two_factor: data.security_two_factor,
      timeout: data.security_timeout,
    },
    preferences: {
      theme: data.preferences_theme,
      timezone: data.preferences_timezone,
    },
  });

  // Flatten the nested structure for the API
  const transformSubmit = (data) => ({
    id: data.id,
    notifications_email: data.notifications?.email,
    notifications_slack: data.notifications?.slack,
    notifications_frequency: data.notifications?.frequency,
    security_two_factor: data.security?.two_factor,
    security_timeout: data.security?.timeout,
    preferences_theme: data.preferences?.theme,
    preferences_timezone: data.preferences?.timezone,
  });

  return (
    <Edit
      resource="settings"
      title="User Settings"
      mutationOptions={{ 
        onSuccess,
        onError,
      }}
      transform={transformSubmit}
      sx={{
        maxWidth: 800,
        mx: 'auto',
        p: 4,
        bgcolor: 'background.paper',
        borderRadius: 2
      }}
    >
      <SimpleForm>
        <Card variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <NotificationsIcon /> Notifications
            </Typography>
            <Divider sx={{ my: 2 }} />
            <BooleanInput source="notifications_email" label="Email Notifications" />
            <BooleanInput source="notifications_slack" label="Slack Notifications" />
            <SelectInput 
              source="notifications_frequency" 
              label="Frequency" 
              choices={[
                { id: 'realtime', name: 'Real-time' },
                { id: 'hourly', name: 'Hourly' },
                { id: 'daily', name: 'Daily' },
                { id: 'weekly', name: 'Weekly' },
              ]} 
              validate={required()}
            />
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SecurityIcon /> Security
            </Typography>
            <Divider sx={{ my: 2 }} />
            <BooleanInput source="security_two_factor" label="Two-Factor Authentication" />
            <NumberInput 
              source="security_timeout" 
              label="Session Timeout (minutes)" 
              validate={[required(), minValue(5), maxValue(120)]}
            />
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6">
              <SettingsIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              Preferences
            </Typography>
            <Divider sx={{ my: 2 }} />
            <SelectInput 
              source="preferences_theme" 
              label="Theme"
              choices={[
                { id: 'light', name: 'Light' },
                { id: 'dark', name: 'Dark' },
                { id: 'system', name: 'System Default' },
              ]}
            />
            <SelectInput 
              source="preferences_timezone" 
              label="Timezone"
              choices={[
                { id: 'UTC', name: 'UTC' },
                { id: 'America/New_York', name: 'Eastern Time (ET)' },
                { id: 'America/Chicago', name: 'Central Time (CT)' },
                { id: 'America/Denver', name: 'Mountain Time (MT)' },
                { id: 'America/Los_Angeles', name: 'Pacific Time (PT)' },
                { id: 'Europe/London', name: 'London (GMT)' },
                { id: 'Europe/Paris', name: 'Paris (CET)' },
              ]}
            />
          </CardContent>
        </Card>
      </SimpleForm>
    </Edit>
  );
};