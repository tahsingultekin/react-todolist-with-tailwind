import React, { useState } from "react";

const EditTodo = ({ item, editTask }) => {
  const [value, setValue] = useState(item.title);

  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        className="w-64 py-2 px-5 my-1 rounded-l-md tracking-wide text-lg outline-none text-black"
        placeholder="Update Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="py-2 px-5 my-1 rounded-r-md tracking-wide text-lg bg-green-600 text-orange-200 text-slate-200"
        onClick={() => editTask(value, item.id)}
      >
        Update Task
      </button>
    </div>
  );
};

export default EditTodo;
