import { useFetcher } from "./fetcher";

export async function fetchRepeater(
  url: string,
  next: (responseText: string | undefined) => boolean, // TODO: See what api returns and update this logic
  maxAttempts: number = 5,
  timeout: number = 5000,
  options?: RequestInit
): Promise<Response | null> {
  const { get: getRequest } = useFetcher();
  const controller = new AbortController();
  const signal = controller.signal;

  let response: Response | null = null;
  let attempts = 0;

  const shouldRepeaterAbort = async (response: Response | null) => {
    const responseText = await response?.text();
    return responseText !== null && next(responseText);
  };

  while (attempts < maxAttempts && !(await shouldRepeaterAbort(response))) {
    attempts++;
    response = await getRequest(url, { ...(options ?? {}), signal });
    await new Promise((resolve) => setTimeout(resolve, timeout));
    if (!signal.aborted) {
      controller.abort();
    }
  }

  // if (response === null || response.status !== 200 || !(await response.text()).includes(expectedResponse)) {
  //   throw new Error(`Failed to fetch the expected response within ${maxAttempts} attempts`)
  // }

  return response;
}
