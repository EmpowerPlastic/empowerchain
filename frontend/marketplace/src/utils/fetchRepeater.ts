import { useFetcher } from './fetcher';

async function fetchRepeater(
  url: string,
  maxAttempts: number = 5,
  timeout: number = 5000,
  expectedResponse: string, // TODO: See what api returns and update this logic
  options?: RequestInit,
): Promise<Response> {
  const { get: getRequest } = useFetcher();
  const controller = new AbortController();
  const signal = controller.signal;

  let response: Response | null = null;
  let attempts = 0;

  while (attempts < maxAttempts && (response === null || response.status !== 200 || !(await response.text()).includes(expectedResponse))) {
    if (attempts > 0 && !signal.aborted) {
      controller.abort()
    }
    attempts++
    response = await getRequest(url, { ...(options ?? {}), signal })
    await new Promise((resolve) => setTimeout(resolve, timeout))
  }

  if (response === null || response.status !== 200 || !(await response.text()).includes(expectedResponse)) {
    throw new Error(`Failed to fetch the expected response within ${maxAttempts} attempts`)
  }

  return response;
}
