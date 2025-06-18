// import { ProfileEdit } from '../resources/ProfileEdit';
// import profileData from './profileData.json';

// export const MockProfileEdit = () => (
//   <ProfileEdit 
//     id={profileData.profile.id} 
//     resource="profile"
//     // Disable all side effects
//     mutationOptions={{ 
//       onSuccess: () => console.log('Mock save'),
//       mutationFn: async (data) => {
//         console.log('Would save:', data);
//         return data;
//       }
//     }}
//   />
// );

// src/resources/ProfileEdit.jsx
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const ProfileEdit = () => (
  console.log("ProfileEdit is rendering"),
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="full_name" fullWidth />
      <TextInput source="email" fullWidth />
      
      <TextInput label="Organization" source="organization.name" fullWidth />
      <TextInput label="VAT ID" source="organization.vat_id" />
      
      <TextInput label="Address" source="billing_address.line1" fullWidth />
      <TextInput label="City" source="billing_address.city" />
      <TextInput label="Postal Code" source="billing_address.postal_code" />
      <TextInput label="Country" source="billing_address.country" />
    </SimpleForm>
  </Edit>
);