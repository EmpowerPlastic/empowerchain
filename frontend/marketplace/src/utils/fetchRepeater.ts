import { useFetcher } from "./fetcher";

export async function fetchRepeater(
  url: string,
  next: (response: Response | null) => Promise<boolean>, // TODO: See what api returns and update this logic
  maxAttempts: number = 5,
  timeout: number = 5000,
  options?: RequestInit,
): Promise<Response | null> {
  const { get: getRequest } = useFetcher();
  const controller = new AbortController();
  const signal = controller.signal;

  let response: Response | null = null;
  let attempts = 0;

  const shouldTryAgain = async (response: Response | null) => {
    const shouldContinue = await next(response);
    return shouldContinue;
  };

  while (attempts < maxAttempts) {
    attempts++;
    response = await getRequest(url, { ...(options ?? {}), signal });
    if (!(await shouldTryAgain(response))) {
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, timeout));
    if (!signal.aborted) {
      controller.abort("Timeout");
    }
  }
  return response;
}
