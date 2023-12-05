const defaultFetchHeaders = {
  Accept: "application/json, text/plain, */*",
};

export const useFetcher = () => {
  const fetcher = {
    get: async (url: string, options?: RequestInit) => {
      const { headers: extraHeaders, ...optionsWithoutHeaders } = options ?? {};
      const headers = {
        ...defaultFetchHeaders,
        ...(extraHeaders ?? {}),
      };

      const newOptions = {
        ...(optionsWithoutHeaders ?? {}),
        headers,
      };
      const response = await fetch(url, {
        ...newOptions,
        method: "GET",
      });
      return response;
    },
    post: async (url: string, body: any, options?: RequestInit) => {
      const { headers: extraHeaders, ...optionsWithoutHeaders } = options ?? {};

      const defaultPostHeaders = {
        "Content-Type": "application/json",
      };

      const headers = {
        ...defaultFetchHeaders,
        ...defaultPostHeaders,
        ...(extraHeaders ?? {}),
      };

      const newOptions = {
        ...(optionsWithoutHeaders ?? {}),
        headers,
      };

      const response = await fetch(url, {
        ...newOptions,
        method: "POST",
        body: JSON.stringify(body),
      });

      // const data = await response.json();
      return response;
    },
  };

  return fetcher;
};

export const authHeader = (
  accessToken: string | undefined,
): { Authorization: string } | {} => {
  if (accessToken) {
    return {
      Authorization: "Bearer " + accessToken,
    };
  } else {
    return {};
  }
};
