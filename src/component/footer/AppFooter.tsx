import gh from "/github-mark-white.svg";
import { NavLink } from "react-router-dom";

function AppFooter() {
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
            <img className={"size-8"} src={gh} alt={"GH"} />
            <div className={"px-2 content-center"}>Open Source on GitHub</div>
          </div>
        </NavLink>
      </div>

      <div className={"flex-1"}></div>
    </footer>
  );
}

export default AppFooter;
