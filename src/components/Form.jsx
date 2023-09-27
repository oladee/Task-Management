import React, { useState } from "react";

const Form = ({lightMode, setTask, task}) => {

  const [input, setInput] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    let file = [...task]
    file.push({
      id: new Date().getTime(),
      title: input,
      completed: false
    })
    setTask(file)
    setInput('')
  };

  const normal = "w-full px-4 py-2  mt-10 rounded outline-none"
  return (
    <form onSubmit={onSubmit} className="mb-5">
      <div >
        <button
          type="submit"
        ></button>
        <input
        className={lightMode ? `bg-white text-black ${normal} placeholder-black-500 ` : `bg-gray-800 text-white ${normal} placeholder-white-500`}
          aria-label="Create a new todo..."
          type="text"
          placeholder="Create a new todo..."
          value={input}
          onChange={(e)=>{
            setInput(e.target.value)
          }}
          autoComplete="off"
        />
      </div>
    </form>
  );
};

export default Form;
