import gh from "/icons/github-mark-white.svg";
import { NavLink } from "react-router-dom";
import { useLocalizationContext } from "../../context/localization/localization-context.ts";
import loc from "../../localization/localization-config.ts";
import locKeys from "../../localization/locale-keys.ts";
import { getImageUrl } from "../../network/constant/image-urls.ts";

function AppFooter() {
  const { langData } = useLocalizationContext();

  if (!langData?.currentLang) {
    return null;
  }

  return (
    <footer className="bg-black content-center flex">
      <div className={"flex-1"}></div>

      <div className={"flex-none content-center"}>
        <NavLink
          to={"https://github.com/femrek/personal-website"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={"flex p-4"}>
            <img className={"size-8"} src={getImageUrl(gh)} alt={"GH"} />
            <div className={"px-2 content-center"}>
              {loc.t(locKeys.footer.github)}
            </div>
          </div>
        </NavLink>
      </div>

      <div className={"flex-1"}></div>
    </footer>
  );
}

export default AppFooter;
