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
          aria-label="Create a new todo..."
          type="text"
          placeholder="Create a new todo..."
        />
      </div>
    </form>
  );
};

export default Form;
