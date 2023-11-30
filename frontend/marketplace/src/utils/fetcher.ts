const defaultFetchHeaders = {
  'Accept': 'application/json, text/plain, */*',
};

export const useFetcher = () => {
  const fetcher = {
    get: async (url: string, extraHeaders: HeadersInit) => {
      const headers = {
        ...defaultFetchHeaders,
        ...extraHeaders,
      }

      const response = await fetch(url);
      const data = await response.json();
      return data;
    },
    post: async (url: string, body: any, extraHeaders?: HeadersInit) => {
      const defaultPostHeaders = {
        'Content-Type': 'application/json'
      };

      const headers = {
        ...defaultFetchHeaders,
        ...defaultPostHeaders,
        ...extraHeaders,
      };

      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      const data = await response.json();
      return data;
    }
  }

  return fetcher;
}