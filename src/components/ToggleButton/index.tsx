import classNames from "classnames";
import React from "react";

interface ToggleButtonProps {
  onClick: () => void;
  isButtonOn: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isButtonOn, onClick }) => (
  <div
    onClick={onClick}
    className={classNames(
      "h-5 w-10 rounded-full flex items-center p-0.5",
      isButtonOn ? "bg-primary justify-end" : "bg-gray-03 justify-start"
    )}
  >
    <div className="bg-white h-4 w-4 rounded-full" />
  </div>
);
export default React.memo(ToggleButton);
