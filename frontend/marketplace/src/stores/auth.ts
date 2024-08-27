import { type Ref, ref, watch, computed } from "vue";
import { WEB_ENDPOINT } from "@/config/config";
import { type UserInfoResponse, useLogto } from "@logto/vue";
import { useRedirectAfterLoginUrl } from "@/utils/redirectAfterLoginUrl";
import tracking from "@/utils/analytics";

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
  walletAddress: Ref<string | undefined>;
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
  const walletAddress = computed<string | undefined>(() => {
    if (user.value) {
      try {
        return user.value.custom_data.walletAddress;
      } catch (error) {
        throw new Error("User does not have wallet address");
      }
    }
    return undefined;
  });

  watch(user, (newUser, oldUser) => {
    if (newUser?.sub && newUser?.sub !== oldUser?.sub) {
      const { sub: userId, ...restProps } = newUser;
      tracking.identify(newUser.sub, {
        id: userId,
        ...restProps,
      });
    }
  });

  watch(
    isAuthenticated,
    async (newValue, oldValue) => {
      if (newValue && newValue !== oldValue) {
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
    walletAddress,
  };
};
