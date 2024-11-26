import AppCard from "../common/AppCard.tsx";
import { HomePagePortfolioIntroducerData } from "../../network/repository/home-repository.ts";
import { Link } from "react-router-dom";

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
