import React from "react";
import checkIcon from "../assets/icon-check.svg";
import crossIcon from "../assets/icon-cross.svg";
function TodoItem() {
  return (
    <div className="flex list-none px-4 py-2 bg-gray-800  text-white rounded-t mt-6 justify-between items-center">
      <div>
        <img src={checkIcon} alt="icon here" className="mr-2"></img>
      </div>
      <li>random todo...</li>
      <img src={crossIcon} alt="icon here" className="ml-2"></img>
    </div>
  );
}

export default TodoItem;
