import AppCard from "../common/AppCard.tsx";
import { PortfolioPreviewData } from "../../data/api-data-types";

interface PortfolioEntryProps {
  data: PortfolioPreviewData;
}

function PortfolioEntry({ data }: PortfolioEntryProps) {
  return (
    <AppCard
      title={data.title}
      description={data.description}
      image={data.image}
      to={`/portfolio/${data.slug}`}
    />
  );
}

export default PortfolioEntry;
