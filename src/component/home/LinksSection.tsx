import { HomePageLinksData } from "../../network/repository/home-repository.ts";
import { getImageUrl } from "../../network/constant/image-urls.ts";
import { NavLink } from "react-router-dom";

interface LinkSectionProps {
  data: HomePageLinksData[];
}

function LinksSection({ data }: LinkSectionProps) {
  return (
    <div className={"flex flex-wrap justify-evenly my-4"}>
      {data.map((link) => (
        <LinkEntry key={link.url} link={link} />
      ))}
    </div>
  );
}

interface LinkEntryProps {
  link: HomePageLinksData;
}

function LinkEntry({ link }: LinkEntryProps) {
  return (
    <div className={"p-2"}>
      <NavLink
        key={link.url}
        to={link.url}
        target="_blank"
        rel="noreferrer"
        className={"m-0"}
      >
        <div
          className={"rounded-2xl shadow shadow-black p-2 size-16 bg-black"}
          style={{ backgroundColor: link.backgroundColor }}
        >
          <img
            src={getImageUrl(link.icon)}
            alt={link.label}
            className={"max-h-12 max-w-12"}
          />
        </div>
      </NavLink>
    </div>
  );
}

export default LinksSection;
