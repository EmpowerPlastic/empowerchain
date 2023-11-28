// auth.js
import { ref } from 'vue';
import { type ProviderFunction } from '.';

export const useAuth: ProviderFunction = (): Record<string, any> => {
  const user = ref(null);
  const error = ref(null);

  const login = async (username, password) => {
    // Implement your login logic here
    // On success, set user.value
    // On failure, set error.value
  };

  const logout = () => {
    // Implement your logout logic here
    // Then set user.value to null
  };

  return {
    user,
    error,
    login,
    logout,
  };
}