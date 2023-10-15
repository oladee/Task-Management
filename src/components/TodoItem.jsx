<<<<<<< HEAD
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
    item.map((value,index) => {
      if(value.id == id){
        return item.splice(index,1)
      }
    })
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
=======
import { useState } from "react";
import crossIcon from "../assets/icon-cross.svg";
import checkIcon from '../assets/icon-check.svg'
import Footer from "./Footer";
function TodoItem({ taskName, id, lightMode, setTask, task, completed }) {


  const [complete,setComplete] = useState(completed)

  function toggleComplete() {
    let items = [...task]
    items.map(value => {
      if(value.id === id ){
        value.completed = !complete
        setComplete(value.completed)
      }
      
    })
    
    setTask(items)
  }

  function handleDelete(){
    let item = [...task]
    item.map((value,index) => {
      if(value.id == id){
        return item.splice(index,1)
      }
    })
    setTask(item)

  }

  return (
    <>
    <div className="text-white p-3 px-4 flex justify-between border-b border-slate-500 items-center">
      <label htmlFor={taskName} className="flex items-center" >
      {
        complete ?
        (<span className="checker flex"><img src={checkIcon} alt="" onClick={toggleComplete} /></span>) : (<label className="switch border border-gray-400 " onClick={toggleComplete}>
        </label>)
      }
      <span className={lightMode? "text-black px-3" : "text-white px-3"}>{taskName}</span>
      </label>
      <img src={crossIcon} alt="delete icon" className="cursor-pointer" onClick={handleDelete} />
    </div>
    </>
  );
}

export default TodoItem;
>>>>>>> 2f8af0a39c6d6a3fe5ef01705275fbecbfa5e78e
