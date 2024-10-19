import { get } from "../manager/network-manager.ts";
import ApiUrls from "../../constant/api-urls.ts";

export interface HomePageData {
  title: string;
  content: string[];
}

/**
 * Get the home page data in form of HomePageData
 */
export async function getHomeData(): Promise<HomePageData> {
  const response = await get({
    queue: ApiUrls.homePage,
  });

  return response as HomePageData;
}
