import { useState } from "react";
import crossIcon from "../assets/icon-cross.svg";
import Footer from "./Footer";
function TodoItem({ taskName, id, lightMode, setTask, task, completed }) {

  const [complete,] = useState(completed)

  function toggleComplete() {
    let items = [...task]
    items.map(value => {
      if(value.id === id ){
        value.completed = !complete
      }
    })
    setTask(items)
  }

  function handleDelete(){
    let item = [...task]
    item.filter(value => id === value.id)
    setTask(item)

  }

  return (
    <>
    <div className="text-white p-3 px-4 flex justify-between border-b border-slate-500 items-center">
      <label htmlFor={taskName} >
      <input type="checkbox" name={taskName} id="" className="cursor-pointer" onClick={toggleComplete}/>
      <span className={lightMode? "text-black px-3" : "text-white px-3"}>{taskName}</span>
      </label>
      <img src={crossIcon} alt="delete icon" className="cursor-pointer" onClick={handleDelete} />
    </div>
    </>
  );
}

export default TodoItem;
