import { PortfolioPreviewData } from "../../network/repository/portfolio-repository.ts";
import { Link } from "react-router-dom";
import AppCard from "../common/AppCard.tsx";

interface PortfolioEntryProps {
  data: PortfolioPreviewData;
}

function PortfolioEntry({ data }: PortfolioEntryProps) {
  return (
    <Link to={`/portfolio/${data.slug}`}>
      <AppCard
        title={data.title}
        description={data.description}
        image={data.image}
      />
    </Link>
  );
}

export default PortfolioEntry;
