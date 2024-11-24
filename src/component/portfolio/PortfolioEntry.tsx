import { PortfolioPreviewData } from "../../network/repository/portfolio-repository.ts";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../network/constant/image-urls.ts";

interface PortfolioEntryProps {
  data: PortfolioPreviewData;
}

function PortfolioEntry({ data }: PortfolioEntryProps) {
  return (
    <Link to={`/portfolio/${data.slug}`}>
      <div className={"hidden sm:flex"}>
        <PortfolioEntryFullSize data={data} />
      </div>

      <div className={"visible sm:hidden"}>
        <PortfolioEntryCompact data={data} />
      </div>
    </Link>
  );
}

function PortfolioEntryFullSize({ data }: PortfolioEntryProps) {
  return (
    <div className={"flex bg-black rounded-2xl mb-8"}>
      <img
        className={"aspect-square object-cover rounded-l-2xl size-64"}
        src={getImageUrl(data.image)}
        alt={"Preview Image"}
      />
      <div className={"flex-auto"}>
        <div className={"flex px-4 py-2"}>
          <div className={"font-bold text-2xl"}>{data.title}</div>
        </div>
        <div className={"px-4 line-clamp-6"}>{data.description}</div>
      </div>
    </div>
  );
}

function PortfolioEntryCompact({ data }: PortfolioEntryProps) {
  return (
    <div className={"bg-black rounded-2xl mb-8 pb-4"}>
      <div className={"w-full h-64 rounded-t-2xl bg-gray-700"}>
        <img
          className={"w-full h-64 rounded-t-2xl"}
          src={getImageUrl(data.image)}
          alt={"Preview Image"}
        />
      </div>
      <div className={"flex px-4 py-4"}>
        <div className={"font-bold text-2xl"}>{data.title}</div>
      </div>
      <div className={"px-4 line-clamp-6 content-center shrink overflow-clip"}>
        {data.description}
      </div>
    </div>
  );
}

export default PortfolioEntry;
