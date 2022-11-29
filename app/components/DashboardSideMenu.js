import { useState } from "react";
import { classNames } from "../lib/hooks";

const DashboardSideMenu = (props) => {
  const [display, setDisplay] = useState(true);
  return (
    <div
      className={classNames(
        display ? "bg-red-300 h-[500px] w-[200px] z-10" : "hidden",
        props.style
      )}
    >
      <div>Side Menu</div>
      {props.components}
    </div>
  );
};

export default DashboardSideMenu;
