import { TitleAndParagraphData } from "../../data/api-data-types";
import classNames from "classnames";

function AppTitleAndParagraphComponent({
  data,
}: {
  data: TitleAndParagraphData;
}) {
  return getContent(data, 0);
}

function getContent(data: TitleAndParagraphData, depth: number) {
  const leftPaddingClassNames = classNames(
    { "pl-0": depth == 0 },
    { "pl-2": depth == 1 },
    { "pl-4": depth == 2 },
    { "pl-6": depth > 2 },
  );

  const titleTextSizeClassNames = classNames(
    { "text-2xl": depth == 0 },
    { "text-xl": depth == 1 },
    { "text-l": depth > 1 },
  );

  const titleTopPaddingClassNames = classNames(
    { "pt-4": depth == 0 },
    { "pt-1": depth > 0 },
  );

  const titleBottomPaddingClassNames = classNames(
    { "pb-2": depth == 0 },
    { "pb-1": depth > 0 },
  );

  return (
    <>
      <div
        className={classNames(
          "font-bold",
          titleTextSizeClassNames,
          leftPaddingClassNames,
          titleTopPaddingClassNames,
          titleBottomPaddingClassNames,
        )}
      >
        {data.title}
      </div>
      {data.content.map((content, index) => (
        <div key={index} className={classNames(leftPaddingClassNames)}>
          {typeof content === "string" ? (
            <div className={"pb-3"}>{content}</div>
          ) : (
            getContent(content, depth + 1)
          )}
        </div>
      ))}
    </>
  );
}

export default AppTitleAndParagraphComponent;
