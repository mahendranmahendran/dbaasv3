import { ProfileEdit } from '../resources/ProfileEdit';
import profileData from './profileData.json';

export const MockProfileEdit = () => (
  <ProfileEdit 
    id={profileData.profile.id} 
    resource="profile"
    // Disable all side effects
    mutationOptions={{ 
      onSuccess: () => console.log('Mock save'),
      mutationFn: async (data) => {
        console.log('Would save:', data);
        return data;
      }
    }}
  />
);