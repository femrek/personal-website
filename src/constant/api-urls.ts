import findHost from "../util/find-host.ts";

/**
 * The host address of the API URLs
 */
const apiUrlsHost = findHost();

/**
 * The localized API URLs
 */
const localizedApiUrlQueues = {
  homePage: "/api/{}/home_page.json",
};

/**
 * Get the localized API URL with given language code
 * @param url the URL template
 * @param langCode the language code
 */
function localizedApiUrl(url: string, langCode: string): string {
  return url.replace("{}", langCode);
}

export { localizedApiUrl, localizedApiUrlQueues, apiUrlsHost };
