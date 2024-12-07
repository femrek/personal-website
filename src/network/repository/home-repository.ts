import { get } from "../manager/network-manager.ts";
import {
  apiUrlsHost,
  getApiUrl,
  localizedApiUrlQueues,
} from "../constant/api-urls.ts";
import { HomePageData } from "../../data/api-data-types";

/**
 * Get the home page data in form of HomePageData
 */
export async function getHomeData(langCode: string): Promise<HomePageData> {
  const response = await get({
    host: apiUrlsHost,
    queue: getApiUrl(localizedApiUrlQueues.homePage, langCode),
  });

  return response as HomePageData;
}
