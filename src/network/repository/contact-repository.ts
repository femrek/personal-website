import { get } from "../manager/network-manager.ts";
import {
  apiUrlsHost,
  getApiUrl,
  localizedApiUrlQueues,
} from "../constant/api-urls.ts";
import { ContactPageData } from "../../data/api-data-types";

/**
 * Get the contact page data in form of ContactPageData
 */
export async function getContactPageData(
  langCode: string,
): Promise<ContactPageData> {
  const response = await get({
    host: apiUrlsHost,
    queue: getApiUrl(localizedApiUrlQueues.contactPage, langCode),
  });

  return response as ContactPageData;
}
