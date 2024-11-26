import { get } from "../manager/network-manager.ts";
import {
  apiUrlsHost,
  getApiUrl,
  localizedApiUrlQueues,
} from "../constant/api-urls.ts";

export interface HomePageData {
  title: string;
  content: string[];
  links: HomePageLinksData[];
  portfolioIntroducer: HomePagePortfolioIntroducerData;
  contactIntroducer: HomePageContactIntroducerData;
}

export interface HomePageLinksData {
  label: string;
  url: string;
  icon: string;
  backgroundColor?: string;
}

export interface HomePagePortfolioIntroducerData {
  title: string;
  description: string;
  image: string;
}

export interface HomePageContactIntroducerData {
  title: string;
  description: string;
}

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
