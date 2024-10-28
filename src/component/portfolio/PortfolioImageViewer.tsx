import { useState } from "react";
import classNames from "classnames";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

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
        <img
          className={"object-contain overflow-hidden max-h-96"}
          src={imageUrls[currentImageIndex]}
          alt={"Portfolio Image"}
        />
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
