import { LinkBoxData } from "./common/link-box-data.ts";

export interface HomePageData {
  title: string;
  content: string[];
  links: LinkBoxData[];
  portfolioIntroducer: HomePagePortfolioIntroducerData;
  contactIntroducer: HomePageContactIntroducerData;
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
