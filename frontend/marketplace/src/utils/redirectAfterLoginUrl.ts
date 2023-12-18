const LOCAL_STORAGE_KEY = "redirectAfterLoginUrl";

const writeUrlToLocalStorage = (url: string): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, url);
};

const readAndRemoveUrlFromLocalStorage = (): string | null => {
  const url = localStorage.getItem(LOCAL_STORAGE_KEY);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  return url;
};

const getDefaultRedirectUrl = (): string => {
  const currentUrl = new URL(window.location.href);
  const currentUrlWithoutDomain = currentUrl.pathname + currentUrl.search;
  return currentUrlWithoutDomain;
};

export const useRedirectAfterLoginUrl = () => {
  return {
    set(url?: string) {
      writeUrlToLocalStorage(url || getDefaultRedirectUrl());
    },
    get() {
      return readAndRemoveUrlFromLocalStorage();
    },
  };
};
