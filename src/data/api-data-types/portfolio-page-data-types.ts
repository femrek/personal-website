import { TitleAndParagraphData } from "./common/title-and-paragraph-data.ts";
import { LinkBoxData } from "./common/link-box-data.ts";

export interface PortfolioPageData {
  title: string;
  links: LinkBoxData[];
  description: (string | TitleAndParagraphData)[];
  images: string[];
}
