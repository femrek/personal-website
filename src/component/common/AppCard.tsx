import { getApiImageUrl } from "../../network/constant/api-urls.ts";
import { Link } from "react-router-dom";

interface AppCardProps {
  title: string;
  description: string;
  image?: string;
  to?: string;
}

/**
 * AppCard is a component that displays a card with an image, title, and description.
 *
 * The app uses this component to show a card in a standard format. image is optional. If image is provided the height
 * of the widget will be 64, otherwise it will be the height of the text (max 6 lines).
 * @param props.title The title of the card.
 * @param props.description The description of the card. Shown in 6 lines max.
 * @param props.image The image URL of the card. This is optional. The url will be processed by {@link getApiImageUrl}
 * function always.
 * @param props.to The URL to navigate to when the card is clicked. This is optional.
 */
function AppCard(props: AppCardProps) {
  return (
    <>
      <div className={"hidden sm:flex"}>
        <AppCardFullSize {...props} />
      </div>

      <div className={"visible sm:hidden"}>
        <AppCardCompact {...props} />
      </div>
    </>
  );
}

function AppCardFullSize({ title, image, description, to }: AppCardProps) {
  const content = (
    <div
      className={"flex bg-black rounded-2xl mb-8 w-full shadow shadow-black"}
    >
      {image && (
        <img
          className={"aspect-square object-cover rounded-l-2xl size-64"}
          src={getApiImageUrl(image)}
          alt={"Preview Image"}
        />
      )}
      <div className={"flex-auto"}>
        <div className={"flex px-4 py-2"}>
          <div className={"font-bold text-2xl"}>{title}</div>
        </div>
        <div className={"px-4 line-clamp-6"}>{description}</div>
        <div className={"h-2"} />
      </div>
    </div>
  );

  return (
    <div className={"w-full"}>
      {to ? <Link to={to}>{content}</Link> : content}
    </div>
  );
}

function AppCardCompact({ title, image, description, to }: AppCardProps) {
  const content = (
    <div className={"bg-black rounded-2xl mb-8 pb-4 shadow shadow-black"}>
      {image && (
        <div className={"w-full h-64 rounded-t-2xl bg-gray-700"}>
          <img
            className={"w-full h-64 rounded-t-2xl object-cover"}
            src={getApiImageUrl(image)}
            alt={"Preview Image"}
          />
        </div>
      )}
      <div className={"flex px-4 py-4"}>
        <div className={"font-bold text-2xl"}>{title}</div>
      </div>
      <div className={"px-4 line-clamp-6 content-center shrink overflow-clip"}>
        {description}
      </div>
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}

export default AppCard;
