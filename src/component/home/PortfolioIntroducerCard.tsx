import AppCard from "../common/AppCard.tsx";
import { Link } from "react-router-dom";
import { HomePagePortfolioIntroducerData } from "../../data/api-data-types";

interface PortfolioIntroducerCardProps {
  data: HomePagePortfolioIntroducerData;
}

function PortfolioIntroducerCard({ data }: PortfolioIntroducerCardProps) {
  return (
    <Link to={"/portfolio"}>
      <AppCard {...data} />
    </Link>
  );
}

export default PortfolioIntroducerCard;
