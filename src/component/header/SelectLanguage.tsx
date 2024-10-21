import { MdLanguage } from "react-icons/md";
import localizationActionTypes from "../../reducer/localization/localization-action-types.ts";
import { useLocalizationContext } from "../../context/localization/localization-context.ts";

function SelectLanguage() {
  const { langData, langDispatch } = useLocalizationContext();

  if (!langData?.currentLang?.shortName) {
    return null;
  }

  return (
    <button
      onClick={() =>
        langDispatch({ type: localizationActionTypes.toggleLanguage })
      }
    >
      <div className={"bg-transparent content-center mx-4 my-4 flex"}>
        {/* Language icon */}
        <div className={"inline-block flex-1 content-center"}>
          <MdLanguage className={"min-h-7 min-w-7"} />
        </div>

        {/* Language code text */}
        <div
          className={
            "inline-block flex-1 content-center text-center font-bold text-xl min-w-9 select-none"
          }
        >
          {langData.currentLang.shortName}
        </div>
      </div>
    </button>
  );
}

export default SelectLanguage;
