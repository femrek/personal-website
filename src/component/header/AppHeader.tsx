import AppNavItem from "./AppNavItem.tsx";
import SelectLanguage from "./SelectLanguage.tsx";

function AppHeader() {
  return (
    <div className={"sticky top-0"}>
      <div className={"bg-black text-white flex"}>
        {/* The title */}
        <div className={"text-white font-bold text-2xl px-4 py-4"}>Title</div>

        {/* navigation items */}
        <AppNavItem to={"/"} name={"Home"} />
        <AppNavItem to={"/contact"} name={"Contact"} />
        <AppNavItem to={"/portfolio"} name={"Portfolio"} />

        {/* spacer */}
        <div className={"flex-1"}></div>

        {/* Language Section */}
        <SelectLanguage languages={["tr", "en"]} />
      </div>
    </div>
  );
}

export default AppHeader;
