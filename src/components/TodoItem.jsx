import { useState } from "react";
import crossIcon from "../assets/icon-cross.svg";
import checkIcon from '../assets/icon-check.svg'
// import Footer from "./Footer";
function TodoItem({ taskName, id, lightMode, setTask, task, completed, taskDesc, dueDate }) {


  const [complete,setComplete] = useState(completed)
  const [latereview, setLateReview] = useState('')

  let dueDateMili = new Date(dueDate)
  let todayDate = new Date()
  let noOfDateLeft = Math.ceil((dueDateMili - todayDate)/(1000*60*60*24))

  if (noOfDateLeft < 2)
  {
    
  }

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
      <label htmlFor={taskName} className="flex items-center w-[60%] md:w-[70%]" >
      {
        complete ?
        (<span className="checker flex"><img src={checkIcon} alt="" onClick={toggleComplete} /></span>) : (<label className="switch border border-gray-400 " onClick={toggleComplete}>
        </label>)
      }
      {
        complete ?
        (<div className={lightMode? "text-black px-3 line-through" : "text-white px-3 line-through"}>
          <h1>{taskName}</h1>
          <p>{taskDesc}</p>
        </div>) : 
        (<div className={lightMode? "text-black px-3 flex flex-col" : "text-white px-3"}>
          <h1>{taskName}</h1>
        <p>{taskDesc}</p>
        </div>)
      }
      </label>
      <div className="flex items-center gap-2">
      <div className={lightMode? "text-black text-xs md:text-base" : "text-white ml-auto text-xs md:text-base"}>
        <div className=" flex flex-col bg-red-400 p-1 md:px-2 md:py-3 rounded-lg">
        due Date
        <p>{dueDate}</p>
        </div>
      </div>
      <img src={crossIcon} alt="delete icon" className="cursor-pointer" onClick={handleDelete} />
      </div>
    </div>
    </>
  );
}

export default TodoItem;