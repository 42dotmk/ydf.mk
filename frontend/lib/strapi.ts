const API_URL =
  process.env.API_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:1337";

const PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL ?? API_URL;

export function strapiMediaUrl(path: string): string {
  if (!path) return "/placeholder.svg";
  if (path.startsWith("http")) return path;
  return `${PUBLIC_API_URL}${path}`;
}

export async function fetchAPI<T>(
  path: string,
  params: Record<string, string> = {},
): Promise<T> {
  const url = new URL(path, API_URL);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  const res = await fetch(url.toString(), { next: { revalidate: 60 } });

  if (!res.ok) {
    throw new Error(`Strapi API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
