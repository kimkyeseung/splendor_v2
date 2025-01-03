type HttpMethod = 'GET' | 'POST' | 'PATCH';

async function request<T>(
  path: string,
  method: HttpMethod,
  body?: Record<string, unknown> | string | FormData,
  init?: RequestInit,
): Promise<T> {
  try {
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      ...init,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${path}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`${method} request failed:`, error);
    throw error;
  }
}

function buildUrlWithQueryParams(
  path: string,
  params: Record<string, string | number>,
) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}${path}`);
  Object.keys(params).forEach((key) => {
    if (params[key] !== undefined) {
      url.searchParams.append(key, String(params[key]));
    }
  });
  return url.toString();
}

export async function get<T>(
  path: string,
  params?: { year?: number; month?: number },
  init?: RequestInit,
): Promise<T> {
  try {
    const url = params
      ? buildUrlWithQueryParams(path, params)
      : `${process.env.NEXT_PUBLIC_API_URL}${path}`;

    return request<T>(url, 'GET', undefined, init);
  } catch (error) {
    console.error(error);
    return { data: [] } as T;
  }
}

export async function post<T>(
  path: string,
  body = {},
  init?: RequestInit,
): Promise<T> {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}${path}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      // 서버 응답이 성공적이지 않을 경우
      console.error(`HTTP error! status: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: T = await response.json();

    return data;
  } catch (error) {
    // 네트워크 에러 또는 다른 에러 발생 시
    console.error('Fetch error:', error);
    throw error;
  }
}

export async function patch<T>(
  path: string,
  body = {},
  init?: RequestInit,
): Promise<T> {
  return request<T>(
    `${process.env.NEXT_PUBLIC_API_URL}${path}`,
    'PATCH',
    body,
    init,
  );
}
