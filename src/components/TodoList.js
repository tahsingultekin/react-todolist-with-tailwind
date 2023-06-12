import React, { useState } from "react";
import EditTodo from "./EditTodo";
import Todo from "./Todo";

const TodoList = ({ removeTodo, list, toggleComplete, editTodo, editTask }) => {
  return (
    <div className="w-full h-auto flex justify-center">
      <ul className="text-white">
        {list.map((item) => {
          return item.isEditing ? (
            <EditTodo item={item} editTask={editTask} key={item.id} />
          ) : (
            <Todo
              key={item.id}
              item={item}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
