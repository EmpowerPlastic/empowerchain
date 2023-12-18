import { ref, watch, type Ref } from "vue";
import { WEB_ENDPOINT } from "@/config/config";
import { useLogto, type UserInfoResponse } from "@logto/vue";
import { useRedirectAfterLoginUrl } from "@/utils/redirectAfterLoginUrl";

export interface Auth {
  user: Ref<UserInfoResponse | undefined>;
  error: Ref<Error | undefined>;
  isAuthenticated: Ref<boolean>;
  handleSignIn: () => void;
  handleSignOut: () => void;
  fetchUser: () => Promise<UserInfoResponse | undefined>;
  getAccessToken: (resource?: string) => Promise<string | undefined>;
}

export const useAuth = (): Auth => {
  const {
    signIn: logToSignIn,
    signOut: logToSignOut,
    isAuthenticated: logToIsAuthenticated,
    fetchUserInfo: logToFetchUserInfo,
    error: logToError,
    getAccessToken: logToGetAccessToken,
  } = useLogto();

  const error = ref<Ref<Error | undefined>>(logToError);
  const user = ref<UserInfoResponse | undefined>(undefined);
  const isAuthenticated = ref(logToIsAuthenticated);
  const getAccessToken = logToGetAccessToken;

  watch(
    isAuthenticated,
    async (newValue) => {
      if (newValue) {
        user.value = await logToFetchUserInfo();
      } else {
        user.value = undefined;
      }
    },
    { immediate: true },
  );

  const handleSignIn = () => {
    useRedirectAfterLoginUrl().set();
    logToSignIn(`${WEB_ENDPOINT}/callback`);
  };

  const handleSignOut = () => {
    logToSignOut(WEB_ENDPOINT);
  };

  const fetchUser = async (): Promise<UserInfoResponse | undefined> => {
    return await logToFetchUserInfo();
  };

  return {
    user,
    error,
    isAuthenticated,
    handleSignIn,
    handleSignOut,
    fetchUser,
    getAccessToken,
  };
};
