import { useEffect, useState } from "react";
import classNames from "classnames";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useLocalizationContext } from "../../context/localization/localization-context.ts";
import loc from "../../localization/localization-config.ts";
import locKeys from "../../localization/locale-keys.ts";
import { getImageUrl } from "../../network/constant/image-urls.ts";

interface PortfolioImageViewerProps {
  imageUrls: string[];
}

function PortfolioImageViewer({ imageUrls }: PortfolioImageViewerProps) {
  console.assert(
    imageUrls.length > 0,
    "PortfolioImageViewer: imageUrls should not be empty",
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onArrowClick = (directionLeft: boolean) => {
    setCurrentImageIndex(
      (currentImageIndex + (directionLeft ? -1 : 1) + imageUrls.length) %
        imageUrls.length,
    );
  };

  return (
    <div className={"my-4"}>
      <div
        className={"flex justify-center relative items-center  overflow-hidden"}
      >
        <ArrowButton onClick={() => onArrowClick(true)} directionLeft={true} />
        <CurrentImage imageUrl={imageUrls[currentImageIndex]} />
        <ArrowButton
          onClick={() => onArrowClick(false)}
          directionLeft={false}
        />
      </div>
      <div className={"mt-2 flex justify-center"}>
        {imageUrls.map((_, index) => (
          <div
            key={index}
            className={"size-8 cursor-pointer"}
            onClick={() => setCurrentImageIndex(index)}
          >
            <div
              className={classNames("size-4 mx-1 rounded-full", {
                "bg-teal-600": index === currentImageIndex,
                "bg-gray-300": index !== currentImageIndex,
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Component for displaying the current image
 * @param imageUrl - URL of the image to be displayed
 * @constructor
 */
function CurrentImage({ imageUrl }: { imageUrl: string }) {
  const [loading, setLoading] = useState(true);
  const { langData } = useLocalizationContext();

  // When new image is set, set loading to true
  useEffect(() => {
    setLoading(true);
  }, [imageUrl]);

  // When image is loaded, set loading to false for showing the image
  const onImageLoaded = () => {
    setLoading(false);
  };

  // check if the language data is loaded
  if (!langData) {
    return null;
  }

  return (
    <>
      <img
        className={classNames(
          "object-contain overflow-hidden max-h-96",
          loading ? "hidden" : "visible",
        )}
        src={getImageUrl(imageUrl)}
        onLoad={onImageLoaded}
        alt={"Portfolio Image"}
      />
      <div
        className={classNames(
          "h-96 w-full flex content-center",
          loading ? "visible" : "hidden",
        )}
      >
        <div className={"flex-1"} />
        <div className={"content-center"}>
          <div
            className={"animate-pulse bg-gray-300 bg-opacity-20 rounded p-4"}
          >
            {loc.t(locKeys.portfolioPage.imageViewer.loading)}
          </div>
        </div>
        <div className={"flex-1"} />
      </div>
    </>
  );
}

function ArrowButton({
  onClick,
  directionLeft,
}: {
  onClick: () => void;
  directionLeft: boolean;
}) {
  return (
    <button
      className={classNames(
        "bg-gray-400 bg-opacity-70 rounded-full absolute content-center text-center",
        "sm:size-16 size-12",
        "sm:p-4 p-3",
        directionLeft ? "left-2" : "right-2",
      )}
      onClick={onClick}
    >
      {directionLeft ? (
        <MdArrowBackIosNew className={"w-full h-full text-white"} />
      ) : (
        <MdArrowForwardIos className={"w-full h-full text-white"} />
      )}
    </button>
  );
}

export default PortfolioImageViewer;
