import AppCard from "../common/AppCard.tsx";
import { HomePagePortfolioIntroducerData } from "../../data/api-data-types";

interface PortfolioIntroducerCardProps {
  data: HomePagePortfolioIntroducerData;
}

function PortfolioIntroducerCard({ data }: PortfolioIntroducerCardProps) {
  return <AppCard {...data} to={"/portfolio"} />;
}

export default PortfolioIntroducerCard;
