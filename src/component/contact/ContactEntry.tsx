import { ContactEntryData } from "../../data/api-data-types";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useLocalizationContext } from "../../context/localization/localization-context.ts";
import loc from "../../localization/localization-config.ts";
import locKeys from "../../localization/locale-keys.ts";
import copyToClipboard from "../../util/copy-to-clipboard.ts";

interface ContactEntryProps {
  data: ContactEntryData;
}

function ContactEntry({ data }: ContactEntryProps) {
  const [isCopied, setIsCopied] = useState(false);
  const { langData } = useLocalizationContext();

  // the function that copies the text to the clipboard. Shows a mark in the ui when the text is copied. after a while
  // the mark is removed.
  const onCopyClick = () => {
    copyToClipboard(data.value).then(() => {
      setIsCopied(true);
      const timer = setTimeout(() => {
        setIsCopied(false);
        clearTimeout(timer);
      }, 1500);
    });
  };

  // Reset the copied state when the language is changed. removes the mark that shows the copied text in the ui.
  useEffect(() => {
    setIsCopied(false);
  }, [langData]);

  return (
    <div
      className={"flex bg-black rounded-2xl mb-4 px-4 py-2 cursor-pointer"}
      onClick={onCopyClick}
    >
      <div className={"flex-auto"}>
        <div className={"flex"}>
          <div className={"font-bold text-2xl"}>{data.title}</div>
        </div>
        <div className={"flex mt-1"}>
          <div className={classNames("mr-2", { "text-teal-300": isCopied })}>
            {data.value}
          </div>
          <div
            className={classNames("content-center font-bold", {
              hidden: !isCopied,
            })}
          >
            {loc.t(locKeys.contactPage.contactEntry.copied)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactEntry;
