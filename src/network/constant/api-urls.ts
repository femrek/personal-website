import findHost from "../../util/find-host.ts";

/**
 * The data type of the path parameters in the API URLs
 */
export interface ApiUrlParams {
  [key: string]: string;
}

/**
 * The host address of the API URLs
 */
const apiUrlsHost = import.meta.env.VITE_WEBSITE_API_HOST ?? findHost();

/**
 * The localized API URLs
 */
const localizedApiUrlQueues = {
  homePage: "/api/{langCode}/home_page.json",
  portfoliosPage: "/api/{langCode}/portfolios_page.json",
  portfolioPage: "/api/{langCode}/portfolios/{slug}.json",
  contactPage: "/api/{langCode}/contact_page.json",
};

/**
 * Get the localized API URL with given language code
 * @param url the URL template
 * @param langCode the language code
 * @param params the parameters to replace in the URL
 * @returns the localized API URL
 */
function getApiUrl(
  url: string,
  langCode: string,
  params?: ApiUrlParams,
): string {
  // Replace the parameters in the URL
  for (const key in params) {
    url = url.replace(`{${key}}`, params[key]);
  }

  // Replace the language code in the URL
  return url.replace("{langCode}", langCode);
}

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
function getApiImageUrl(url: string, fullHost?: string): string {
  const isAbsoluteUrl = url.startsWith("http://") || url.startsWith("https://");

  if (fullHost !== undefined && isAbsoluteUrl) {
    throw new Error("fullHost must be provided only for relative paths");
  }

  if (isAbsoluteUrl) return url;
  if (fullHost) return `${fullHost}${url}`;
  return `${apiUrlsHost}${url}`;
}

export { getApiUrl, getApiImageUrl, localizedApiUrlQueues, apiUrlsHost };
