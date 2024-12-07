import { LinkBoxData } from "../../data/api-data-types";
import AppLinkBoxEntity from "./AppLinkBoxEntity.tsx";

interface LinkSectionProps {
  data: LinkBoxData[];
}

function AppLinkBoxesSection({ data }: LinkSectionProps) {
  return (
    <div className={"flex flex-wrap justify-evenly my-4"}>
      {data.map((link) => (
        <AppLinkBoxEntity key={link.url} link={link} />
      ))}
    </div>
  );
}

export default AppLinkBoxesSection;
