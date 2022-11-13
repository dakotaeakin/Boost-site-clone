import { classNames } from "../lib/hooks";

const Dropdown = (props) => {
  return (
    <div
      className={classNames(
        props.display ? "bg-red-300 h-[100px] w-[200px] z-10" : "hidden",
        props.style
      )}
    >
      <div>Dropdown Menu</div>
      {props.components}
    </div>
  );
};

export default Dropdown;
