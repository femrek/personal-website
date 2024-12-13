import AppCard from "../common/AppCard.tsx";
import { HomePageContactIntroducerData } from "../../data/api-data-types";

interface ContactIntroducerCardProps {
  data: HomePageContactIntroducerData;
}

function ContactIntroducerCard({ data }: ContactIntroducerCardProps) {
  return (
    <AppCard
      title={data.title}
      description={data.description}
      to={"/contact"}
    />
  );
}

export default ContactIntroducerCard;
