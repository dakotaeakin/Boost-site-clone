import { classNames } from "../lib/hooks";

const Dropdown = (props) => {
  return (
    <div
      className={classNames(
        props.display ? "bg-red-300 h-[100px] w-[200px] z-10" : "hidden",
        props.style
      )}
    >
      {/* <div class="w-[30px]  right-0 border-solid border-b-black border-b-8 border-x-transparent border-x-8 border-t-0"></div> */}
      <div>Dropdown Menu</div>
      {props.components}
    </div>
  );
};

export default Dropdown;
