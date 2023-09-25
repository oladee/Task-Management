import { useState } from "react";
import crossIcon from "../assets/icon-cross.svg";
function TodoItem({ taskName }) {
  const [checkStatus, setCheckStatus] = useState(false);

  let checking = document.getElementById("checking");
  function handleClick() {}

  return (
    <div>
      <label htmlFor="">
      <input type="checkbox" name="" id="" />
      {taskName}
      </label>
    </div>
  );
}

export default TodoItem;
