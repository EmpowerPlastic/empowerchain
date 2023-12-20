import { ref, watch, type Ref } from "vue";
import { WEB_ENDPOINT } from "@/config/config";
import { useLogto, type UserInfoResponse } from "@logto/vue";
import { useRedirectAfterLoginUrl } from "@/utils/redirectAfterLoginUrl";

interface AuthCustomData {
  walletAddress: string;
}

interface CustomUserInfoResponse extends UserInfoResponse {
  custom_data: AuthCustomData;
}

type Logto = ReturnType<typeof useLogto>;
interface CustomLogto extends Logto {
  fetchUserInfo: () => Promise<CustomUserInfoResponse | undefined>;
}

export interface Auth {
  user: Ref<CustomUserInfoResponse | undefined>;
  error: Ref<Error | undefined>;
  isAuthenticated: Ref<boolean>;
  handleSignIn: () => void;
  handleSignOut: () => void;
  fetchUser: () => Promise<CustomUserInfoResponse | undefined>;
  getAccessToken: (resource?: string) => Promise<string | undefined>;
}

export const useAuth = (): Auth => {
  const {
    signIn: logtoSignIn,
    signOut: logtoSignOut,
    isAuthenticated: logtoIsAuthenticated,
    fetchUserInfo: logtoFetchUserInfo,
    error: logtoError,
    getAccessToken: logtoGetAccessToken,
  } = useLogto() as CustomLogto;

  const error = ref<Ref<Error | undefined>>(logtoError);
  const user = ref<CustomUserInfoResponse | undefined>(undefined);
  const isAuthenticated = ref(logtoIsAuthenticated);
  const getAccessToken = logtoGetAccessToken;

  watch(
    isAuthenticated,
    async (newValue) => {
      if (newValue) {
        user.value = await logtoFetchUserInfo();
      } else {
        user.value = undefined;
      }
    },
    { immediate: true },
  );

  const handleSignIn = () => {
    useRedirectAfterLoginUrl().set();
    logtoSignIn(`${WEB_ENDPOINT}/callback`);
  };

  const handleSignOut = () => {
    logtoSignOut(WEB_ENDPOINT);
  };

  const fetchUser = async (): Promise<CustomUserInfoResponse | undefined> => {
    return await logtoFetchUserInfo();
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
