import React from "react";

const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <div >
        <button
          type="submit"
        ></button>
        <input
        className="w-full px-4 py-2 bg-gray-800 mt-10 text-white-500 placeholder-white-500 rounded"
          aria-label="Create a new todo..."
          type="text"
          placeholder="Create a new todo..."
        />
      </div>
    </form>
  );
};

export default Form;
