import profileData from './profileData.json';

export const mockDataProvider = {
  getOne: async (resource, params) => {
    if (resource === 'profile') {
      return { data: profileData.profile };
    }
    throw new Error(`Resource ${resource} not found`);
  },
  
  update: async (resource, params) => {
    if (resource === 'profile') {
      // In a real app, this would update Supabase
      console.log('Would update:', params.data);
      return { data: { ...profileData.profile, ...params.data } };
    }
    throw new Error(`Resource ${resource} not found`);
  },
  
  // Add other methods as needed
  getList: async () => ({ data: [], total: 0 })
};