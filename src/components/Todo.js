import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

const Todo = ({ item, toggleComplete, removeTodo, editTodo }) => {
  return (
    <li className="py-2 px-5 my-1 flex justify-between   items-center gap-20 bg-zinc-500 hover:opacity-80 rounded-md tracking-wide text-lg">
      <p
        className={` cursor-pointer capitalize  ${
          item.completed ? "line-through decoration-4 decoration-black" : ""
        }`}
        onClick={() => toggleComplete(item.id)}
      >
        {item.title}
      </p>
      <div className={`flex space-x-6  `}>
        <AiOutlineEdit
          className="edit text-green-300 cursor-pointer"
          onClick={() => editTodo(item.id)}
        />

        <BsFillTrashFill
          className={`trash text-rose-400 cursor-pointer `}
          onClick={() => removeTodo(item.id)}
        />
      </div>
    </li>
  );
};

export default Todo;
