const defaultFetchHeaders = {
  Accept: "application/json, text/plain, */*",
};

const handleResponse = (response: Response) => {
  if (!response.ok) {
    return response.text().then((text) => {
      let errorMessage = response.statusText || response.status.toString();
      try {
        const errorData = JSON.parse(text);
        errorMessage = errorData.message || errorMessage;
      } catch (error) {
        // The response text could not be parsed as JSON, use the default error message
      }
      return Promise.reject(errorMessage);
    });
  }
  return response;
};

const useAbortController = (timeout: number) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const cancel = () => {
    clearTimeout(id);
  };
  return { signal: controller.signal, cancel };
};

type RequestInitWithTimeout = RequestInit & { timeout?: number };

export const useFetcher = () => {
  const fetcher = {
    get: (url: string, options?: RequestInitWithTimeout): Promise<any> => {
      const {
        timeout = 5000,
        headers: extraHeaders,
        ...optionsWithoutHeaders
      } = options ?? {};
      const headers = {
        ...defaultFetchHeaders,
        ...(extraHeaders ?? {}),
      };

      const newOptions = {
        ...(optionsWithoutHeaders ?? {}),
        headers,
      };

      const { cancel, signal } = useAbortController(timeout);

      return fetch(url, {
        ...newOptions,
        method: "GET",
        signal: signal,
      })
        .then(handleResponse)
        .catch((error) => {
          throw new Error(error);
        })
        .finally(cancel);
    },
    post: (
      url: string,
      body: any,
      options?: RequestInitWithTimeout,
    ): Promise<any> => {
      const {
        timeout = 5000,
        headers: extraHeaders,
        ...optionsWithoutHeaders
      } = options ?? {};

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

      const { cancel, signal } = useAbortController(timeout);

      return fetch(url, {
        ...newOptions,
        method: "POST",
        body: JSON.stringify(body),
        signal: signal,
      })
        .then(handleResponse)
        .catch((error) => {
          throw new Error(error);
        })
        .finally(cancel);
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
