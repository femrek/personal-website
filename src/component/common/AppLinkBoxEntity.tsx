import { Tooltip } from "react-tooltip";
import { NavLink } from "react-router-dom";
import { getApiImageUrl } from "../../network/constant/api-urls.ts";
import { LinkBoxData } from "../../data/api-data-types";

interface LinkEntryProps {
  link: LinkBoxData;
}

function AppLinkBoxEntity({ link }: LinkEntryProps) {
  return (
    <div className={"p-2"}>
      <Tooltip id={link.url} />
      <NavLink
        key={link.url}
        to={link.url}
        target="_blank"
        rel="noreferrer"
        className={"m-0"}
        data-tooltip-id={link.url}
        data-tooltip-content={link.label}
      >
        <div
          className={"rounded-2xl shadow shadow-black p-2 size-16 bg-black"}
          style={{ backgroundColor: link.backgroundColor }}
        >
          <img
            src={getApiImageUrl(link.icon)}
            alt={link.label}
            className={"max-h-12 max-w-12 w-full h-full"}
          />
        </div>
      </NavLink>
    </div>
  );
}

export default AppLinkBoxEntity;
