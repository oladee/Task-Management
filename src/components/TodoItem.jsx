import { useState } from "react";
import crossIcon from "../assets/icon-cross.svg";
import Footer from "./Footer";
function TodoItem({ taskName }) {
  const [checkStatus, setCheckStatus] = useState(false);

  let checking = document.getElementById("checking");
  function handleClick() {}

  return (
    <>
    <div className="text-white p-3 px-4">
      <label htmlFor={taskName} >
      <input type="checkbox" name={taskName} id="" />
      <span className="px-3">{taskName}</span>
      </label>
    </div>
    </>
  );
}

export default TodoItem;
