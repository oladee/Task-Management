import { useState } from "react";
import crossIcon from "../assets/icon-cross.svg";
import Footer from "./Footer";
function TodoItem({ taskName, lightMode, setTask, task }) {

  let checking = document.getElementById("checking");
  function handleClick() {

  }

  return (
    <>
    <div className="text-white p-3 px-4 flex justify-between border-b border-slate-500 items-center">
      <label htmlFor={taskName} >
      <input type="checkbox" name={taskName} id="" className="cursor-pointer" />
      <span className={lightMode? "text-black px-3" : "text-white px-3"}>{taskName}</span>
      </label>
      <img src={crossIcon} alt="delete icon" className="cursor-pointer" />
    </div>
    </>
  );
}

export default TodoItem;
