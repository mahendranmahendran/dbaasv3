// src/resources/ProfileEdit.jsx
import { 
  Edit, 
  SimpleForm, 
  TextInput, 
  EmailField,
  useNotify,
  useRedirect,
  useGetIdentity,
  useRecordContext
} from 'react-admin';
import { 
  Box, 
  Typography, 
  Divider, 
  Stack,
  Card,
  CardContent
} from '@mui/material';
import {
  AccountCircle as AccountIcon,
  Business as BusinessIcon,
  CreditCard as CreditCardIcon
} from '@mui/icons-material';

// Conditional imports for mock mode
import mockProfile from '../mocks/profileData.json';

const isDev = import.meta.env.DEV;
const mockData = isDev ? mockProfile.profile : null;

const BillingSection = () => {
  const record = useRecordContext();
  const notify = useNotify();

  return (
    <Card variant="outlined" sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CreditCardIcon /> Payment Methods
        </Typography>
        {record?.payment_methods?.map(method => (
          <Box key={method.id} sx={{ mb: 2, p: 2, border: '1px solid #eee', borderRadius: 1 }}>
            <Typography>
              {method.card_brand?.toUpperCase()} •••• {method.card_last4}
            </Typography>
            <Typography variant="body2">
              Expires {method.card_exp_month}/{method.card_exp_year}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export const ProfileEdit = (props) => {
  console.log("ProfileEdit is rendering");
  const notify = useNotify();
  const redirect = useRedirect();
  const { identity } = useGetIdentity();

  // In dev mode, use mock identity if available
  const currentIdentity = isDev && mockData ? { ...mockData, id: 'mock-id' } : identity;

  const onSuccess = () => {
    notify('Profile updated successfully', { type: 'success' });
    redirect('/');
  };

  if (!currentIdentity) return null;

  return (
    <Edit
      {...props}
      title="My Profile"
      resource="profile"
      id={currentIdentity.id}
      mutationOptions={{ onSuccess }}
      sx={{
        maxWidth: 800,
        mx: 'auto',
        p: 4,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1
      }}
      // Provide mock data in development
      queryOptions={{ 
        placeholderData: isDev ? { data: mockData } : undefined 
      }}
    >
      <SimpleForm defaultValues={currentIdentity}>
        <Stack spacing={4}>
          {/* Personal Section */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccountIcon /> Personal Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <TextInput source="full_name" label="Full Name" fullWidth />
              <EmailField source="email" label="Email" />
            </CardContent>
          </Card>

          {/* Organization Section */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <BusinessIcon /> Organization
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <TextInput 
                source="organization.name" 
                label="Company Name" 
                fullWidth 
              />
              <TextInput 
                source="organization.vat_id" 
                label="Tax ID" 
                fullWidth 
              />
            </CardContent>
          </Card>

          {/* Billing Section */}
          <BillingSection />
        </Stack>
      </SimpleForm>
    </Edit>
  );
};