import { supabaseClient } from './utils/supabaseClient';

/**
 * React-Admin auth provider for magic links
 * Implements all required auth methods
 */
export const authProvider = {
  login: async ({ email }) => {
    const { error } = await supabaseClient.auth.signInWithOtp({ email });
    if (error) throw error;
    return { redirectTo: 'admin/link-sent' };
  },
  logout: async () => {
    await supabaseClient.auth.signOut();
    return Promise.resolve();
  },
  checkAuth: async () => {
    const { data } = await supabaseClient.auth.getSession();
    return data.session ? Promise.resolve() : Promise.reject();
  },
  checkError: (error) => Promise.resolve(),
  getIdentity: async () => {
    const { data } = await supabaseClient.auth.getUser();
    return data.user;
  },
  getPermissions: () => Promise.resolve(),
};