import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import { Outlet } from "react-router-dom";
import classNames from "classnames";

const MyOutlet: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={classNames(
        "w-full min-h-screen flex flex-col",
        darkMode ? "bg-slate-900 text-white" : ""
      )}
    >
      <TopBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet />
    </div>
  );
};
export default React.memo(MyOutlet);
