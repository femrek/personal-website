import SelectLanguage from "./SelectLanguage.tsx";
import { useState } from "react";
import classNames from "classnames";
import { MdMenu } from "react-icons/md";
import AppNavItem from "./AppNavItem.tsx";
import AppNavMenuItem from "./AppNavMenuItem.tsx";
import { useLocalizationContext } from "../../context/localization/localization-context.ts";
import loc from "../../localization/localization-config.ts";

function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { langData } = useLocalizationContext();

  // check if the language data is loaded
  if (!langData?.currentLang) {
    return null;
  }

  // menu open-close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const onNavMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={"sticky top-0 bg-black text-white"}>
      <div className={"app-header flex"}>
        {/* Nav Menu (sm>) */}
        <div className={"visible sm:hidden"}>
          {/* Hamburger Menu Button */}
          <div className={"h-full items-center justify-center flex"}>
            <button
              className={"h-full pr-4 content-center"}
              onClick={toggleMenu}
            >
              <MdMenu className={"size-9"} />
            </button>
          </div>

          {/* Menu Items */}
          <div
            className={classNames(
              "flex flex-col absolute w-full start-0 bg-black",
              {
                hidden: !isMenuOpen,
              },
            )}
          >
            <AppNavMenuItem
              to={"/"}
              name={loc.t("header.nav.home")}
              onClick={onNavMenuItemClick}
            />
            <AppNavMenuItem
              to={"/portfolio"}
              name={loc.t("header.nav.portfolio")}
              onClick={onNavMenuItemClick}
            />
            <AppNavMenuItem
              to={"/contact"}
              name={loc.t("header.nav.contact")}
              onClick={onNavMenuItemClick}
            />
          </div>
        </div>

        {/* The title */}
        <div className={"text-white font-bold text-2xl py-4 sm:pr-4"}>
          {loc.t("appTitle")}
        </div>

        {/* Spacer only when the nav buttons are not in the header */}
        <div className={"visible sm:hidden flex-1"}></div>

        {/* navigation items (md<=) */}
        <div className={"hidden flex-1 sm:visible sm:flex"}>
          <AppNavItem to={"/"} name={loc.t("header.nav.home")} />
          <AppNavItem to={"/portfolio"} name={loc.t("header.nav.portfolio")} />
          <AppNavItem to={"/contact"} name={loc.t("header.nav.contact")} />
        </div>

        {/* Language Section */}
        <SelectLanguage />
      </div>
    </div>
  );
}

export default AppHeader;
