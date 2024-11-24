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
const apiUrlsHost = findHost();

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

export { getApiUrl, localizedApiUrlQueues, apiUrlsHost };
