import React, { useEffect, useState } from "react";

const TodoForm = ({ addTodo, value, setValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !value.trim()) {
      alert("Fill in the blank");
      setValue("");
    } else {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-white tracking-wide flex flex-col justify-center items-center h-48">
        <h1 className=" text-4xl md:text-7xl mb-2 tracking-widest font-mono text-white/30 antialiased hover:subpixel-antialiased ">
          Task List 2023
        </h1>
        <div className="my-1 w-full flex justify-center items-center ">
          <input
            type="text"
            placeholder="What do you have planned ?"
            className="w-80 mt-2 mx-4 px-3 py-2 text-black rounded-lg
            border-solid border-4 border-rose-800 outline-none text-slate-800 tracking-wide "
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            className="w-28 mt-2 py-2 px-1 tracking-wide rounded-lg bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 text-pink-800 tracking-wider text-lg font-semibold active:scale-95"
          >
            Add task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
