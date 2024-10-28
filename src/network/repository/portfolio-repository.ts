import {
  ApiUrlParams,
  apiUrlsHost,
  getApiUrl,
  localizedApiUrlQueues,
} from "../constant/api-urls.ts";
import { get } from "../manager/network-manager.ts";

export interface PortfolioPreviewData {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export interface PortfoliosPageData {
  title: string;
  portfolios: PortfolioPreviewData[];
}

export interface PortfolioPageData {
  title: string;
  description: string[];
  images: string[];
}

interface PortfolioParams extends ApiUrlParams {
  slug: string;
}

/**
 * Get the portfolio page data in form of PortfolioPageData
 */
export async function getPortfoliosPageData(
  langCode: string,
): Promise<PortfoliosPageData> {
  const response = await get({
    host: apiUrlsHost,
    queue: getApiUrl(localizedApiUrlQueues.portfoliosPage, langCode),
  });

  return response as PortfoliosPageData;
}

/**
 * Get the portfolio data in form of PortfolioData by its id
 */
export async function getPortfolioPageData(
  langCode: string,
  slug: string,
): Promise<PortfolioPageData> {
  const params = { slug: slug } as PortfolioParams;

  const response = await get({
    host: apiUrlsHost,
    queue: getApiUrl(localizedApiUrlQueues.portfolioPage, langCode, params),
  });

  return response as PortfolioPageData;
}
