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
