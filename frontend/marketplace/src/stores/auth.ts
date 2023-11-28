import { ref, watch, type Ref } from 'vue';
import { type ProviderFunction } from './index';
import { useLogto, type UserInfoResponse } from "@logto/vue";

export interface Auth {
  user: Ref<UserInfoResponse | undefined>,
  error: Ref<Error | undefined>,
  isAuthenticated: Ref<boolean>,
  handleSignIn: () => void,
  handleSignOut: () => void,
  fetchUser: () => Promise<UserInfoResponse | undefined>,
}

export const useAuth: ProviderFunction = (): Auth => {
  const {
    signIn: logToSignIn,
    signOut: logToSignOut,
    isAuthenticated: logToIsAuthenticated,
    fetchUserInfo: logToFetchUserInfo,
    error: logToError,
  } = useLogto();
    
  const error = ref<Ref<Error | undefined>>(logToError);
  const user = ref<UserInfoResponse | undefined>(undefined);
  const isAuthenticated = ref(logToIsAuthenticated);

  watch(isAuthenticated, async (newValue) => {
    if (newValue) {
      user.value = await logToFetchUserInfo();
    } else {
      user.value = undefined;
    }
  }, { immediate: true });

  const handleSignIn = () => {
    logToSignIn("http://localhost:5173/callback");
  };

  const handleSignOut = () => {
    logToSignOut("http://localhost:5173");
  }

  const fetchUser = async (): Promise<UserInfoResponse | undefined> => {
    return await logToFetchUserInfo();
  }

  return {
    user,
    error,
    isAuthenticated,
    handleSignIn,
    handleSignOut,
    fetchUser,
  };
}