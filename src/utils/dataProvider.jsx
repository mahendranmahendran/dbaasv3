// src/utils/dataProvider.js
import { fetchUtils } from 'react-admin';
import { supabaseClient } from './supabaseClient';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:9090';

/**
 * PSEUDOCODE EXPLANATION:
 * 
 * 1. Create main object with standard CRUD methods:
 *    - getList (for lists/tables)
 *    - getOne (single record)
 *    - create
 *    - update
 *    - delete
 * 
 * 2. Each method will:
 *    a) Get auth token from Supabase
 *    b) Send request to ClickHouse via CHProxy
 *    c) Format response for React-Admin
 */
export const realDataProvider = {
  // Get paginated/filtered list of records
  getList: async (resource) => {
    const token = await getToken();
    const url = `${API_URL}/${resource}`;
    
    const { json } = await fetchJson(url, { 
      headers: authHeader(token) 
    });
    
    return { 
      data: json.data, 
      total: json.total 
    };
  },

  // Get single record by ID
  getOne: async (resource, { id }) => {
    const token = await getToken();
    const url = `${API_URL}/${resource}?id=${id}`;
    
    const { json } = await fetchJson(url, { 
      headers: authHeader(token) 
    });
    
    return { data: json };
  },

  // Create new record
  create: async (resource, { data }) => {
    const token = await getToken();
    const url = `${API_URL}/${resource}`;
    
    const { json } = await fetchJson(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: authHeader(token)
    });
    
    return { data: json };
  },

  // Update existing record
  update: async (resource, { id, data }) => {
    const token = await getToken();
    const url = `${API_URL}/${resource}?id=${id}`;
    
    const { json } = await fetchJson(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: authHeader(token)
    });
    
    return { data: { ...json, id } };
  },

  // Delete record
  delete: async (resource, { id }) => {
    const token = await getToken();
    const url = `${API_URL}/${resource}?id=${id}`;
    
    await fetchJson(url, {
      method: 'DELETE',
      headers: authHeader(token)
    });
    
    return { data: { id } };
  }
};

// Helper: Get Supabase auth token
const getToken = async () => {
  const { data } = await supabaseClient.auth.getSession();
  return data.session?.access_token;
};

// Helper: Create auth headers
const authHeader = (token) => new Headers({
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json'
});

// Helper: Wrapper around fetchUtils.fetchJson
const fetchJson = (url, options) => 
  fetchUtils.fetchJson(url, options);