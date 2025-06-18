// src/mocks/dataProvider.js
import profileData from './profileData.json';

export const mockDataProvider = {
  // For Queries list
  getList: async (resource) => {
    if (resource === 'queries') {
      return { 
        data: [
          { id: 1, query: 'SELECT * FROM users', database: 'main', status: 'running', duration: '2.3s' },
          { id: 2, query: 'UPDATE products SET price=19.99', database: 'inventory', status: 'completed', duration: '0.5s' },
          { id: 3, query: 'CREATE INDEX idx_name ON customers(name)', database: 'analytics', status: 'queued', duration: '' }
        ],
        total: 3
      };
    }
    return { data: [], total: 0 };
  },

  // For Profile view/edit
  getOne: async (resource, params) => {
    if (resource === 'profile') {
      return { data: profileData.profile };
    }
    if (resource === 'settings') {
      return { 
        data: {
          id: 1,
          theme: 'dark',
          notifications: true,
          auto_save: false
        }
      };
    }
    throw new Error(`Resource ${resource} not found`);
  },

  // For Profile/Settings updates
  update: async (resource, params) => {
    if (resource === 'profile') {
      console.log('Would update profile:', params.data);
      return { data: { ...profileData.profile, ...params.data } };
    }
    if (resource === 'settings') {
      console.log('Would update settings:', params.data);
      return { data: params.data };
    }
    throw new Error(`Resource ${resource} not found`);
  },

  // For SQL Playground execution
  create: async (resource, params) => {
    if (resource === 'sql') {
      console.log('Would execute SQL:', params.data.query);
      return {
        data: {
          id: Date.now(),
          query: params.data.query,
          result: 'Mock execution successful',
          columns: ['id', 'name', 'email'],
          rows: [
            { id: 1, name: 'Test User', email: 'test@example.com' }
          ]
        }
      };
    }
    throw new Error(`Resource ${resource} not found`);
  },

  // Add empty implementations for other required methods
  delete: async () => ({ data: {} }),
  getMany: async () => ({ data: [] }),
  getManyReference: async () => ({ data: [], total: 0 })
};