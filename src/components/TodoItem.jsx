import React from "react";
import checkIcon from "../assets/icon-check.svg";
import crossIcon from "../assets/icon-cross.svg";
function TodoItem() {
  return (
    <div>
      <div>
        <img src={checkIcon} alt="icon here"></img>
      </div>
      <li>random todo...</li>
      <img src={crossIcon} alt="icon here"></img>
    </div>
  );
}

export default TodoItem;
