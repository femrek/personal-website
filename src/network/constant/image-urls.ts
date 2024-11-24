import { apiUrlsHost } from "./api-urls.ts";

/**
 * Determine the final url of the image. If the URL is a relative path, then it will be prefixed with the API URLs host
 *
 * If fullHost is provided, then the url parameter must be a queue (/api/...) and the fullHost must be the
 * full host (http://example.com). When the url parameter is a queue, then the apiUrlsHost will be ignored will be used
 * as the fullHost parameter by default. It can be specified explicitly by providing the fullHost parameter
 *
 * When the url parameter is an absolute URL, then it will be returned as is without any modification always.
 *
 * @param url the image URL. It can be a relative path or an absolute URL. If it is an absolute URL, then it will be
 * returned as is without any modification. If it is a relative path, then it will be prefixed with the API URLs host
 * or the full host if the fullHost parameter is provided
 * @param fullHost if it is definite the url parameter have to be only the queue (/api/...) and the fullHost parameter
 * have to be the full host (http://example.com)
 * @returns the final image URL with the full host anyway.
 */
function getImageUrl(url: string, fullHost?: string): string {
  const isAbsoluteUrl = url.startsWith("http://") || url.startsWith("https://");

  if (fullHost !== undefined && isAbsoluteUrl) {
    throw new Error("fullHost must be provided only for relative paths");
  }

  if (isAbsoluteUrl) return url;
  if (fullHost) return `${fullHost}${url}`;
  return `${apiUrlsHost}${url}`;
}

export { getImageUrl };
