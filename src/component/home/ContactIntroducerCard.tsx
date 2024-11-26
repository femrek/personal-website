import { HomePageContactIntroducerData } from "../../network/repository/home-repository.ts";
import AppCard from "../common/AppCard.tsx";
import { Link } from "react-router-dom";

interface ContactIntroducerCardProps {
  data: HomePageContactIntroducerData;
}

function ContactIntroducerCard({ data }: ContactIntroducerCardProps) {
  return (
    <Link to={"/contact"}>
      <AppCard title={data.title} description={data.description} />
    </Link>
  );
}

export default ContactIntroducerCard;
