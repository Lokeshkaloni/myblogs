import React from "react";
import { Link } from "react-router-dom";

interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopBar: React.FC<Props> = ({ setDarkMode, darkMode }) => {
  return (
    <div className="w-full h-12 px-2 py-1 space-x-3 flex items-center bg-slate-200 sticky top-0">
      <Link className="text-primary font-sans font-semibold" to={"/home"}>
        Home
      </Link>
      <Link className="text-primary font-sans font-semibold" to={"/blog"}>
        Blog
      </Link>
      <Link className="text-primary font-sans font-semibold" to={"/contact"}>
        Contact
      </Link>
      <div
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className="hover:cursor-pointer text-slate-900 font-sans font-semibold"
      >
        DarkMode
      </div>
    </div>
  );
};
export default React.memo(TopBar);
