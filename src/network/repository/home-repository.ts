import { get } from "../manager/network-manager.ts";
import {
  apiUrlsHost,
  localizedApiUrl,
  localizedApiUrlQueues,
} from "../../constant/api-urls.ts";

export interface HomePageData {
  title: string;
  content: string[];
}

/**
 * Get the home page data in form of HomePageData
 */
export async function getHomeData(langCode: string): Promise<HomePageData> {
  const response = await get({
    host: apiUrlsHost,
    queue: localizedApiUrl(localizedApiUrlQueues.homePage, langCode),
  });

  return response as HomePageData;
}
