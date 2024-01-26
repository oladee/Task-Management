import { useState } from "react";

const Form = ({lightMode, setTask, task}) => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDesc, setTaskDesc] = useState('')
  const [dueDate, setDueDate] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    let file = [...task]
    file.push({
      id: new Date().getTime(),
      title: taskTitle,
      Desc: taskDesc,
      dueDate: dueDate,
      completed: false
    })
    console.log(dueDate)
    setTask(file)
    setTaskTitle('')
    setTaskDesc('')
  };

  const normal = "w-1/2 px-4 py-2  mt-10 rounded outline-none"
  const normal2 = "w-3/4 px-4 py-2 rounded outline-none"
  return (
    <form onSubmit={onSubmit} className="mb-5">
      <div >
        <input
        className={lightMode ? `bg-white text-black ${normal} placeholder-black-500 ` : `bg-gray-800 text-white ${normal} placeholder-white-500`}
          aria-label="Enter a TItle..."
          type="text"
          placeholder="Enter a Title..."
          value={taskTitle}
          onChange={(e)=>{
            setTaskTitle(e.target.value)
          }}
          autoComplete="off"
        />
        <div className="flex items-center">
        <input
        className={lightMode ? `bg-white text-black ${normal2} placeholder-black-500 ` : `bg-gray-800 text-white ${normal2} placeholder-white-500`}
        aria-label="Enter a Desc..."
        type="text"
        placeholder="Enter a Desc..."
        value={taskDesc}
        onChange={(e)=>{
          setTaskDesc(e.target.value)
        }}
        autoComplete="off"
        />
        <span className="datepicker-toggle">
        <span className="datepicker-toggle-button"></span>
        <input type="date" className="datepicker-input" value={dueDate} onChange={(e)=>{
          setDueDate(e.target.value)
        }}/>
        </span>
        </div>
        <button></button>
      </div>
    </form>
  );
};

export default Form;
