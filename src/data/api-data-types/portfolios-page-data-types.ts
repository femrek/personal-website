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
