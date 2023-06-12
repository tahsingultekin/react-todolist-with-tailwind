import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState(getLocalStorage());

  const addTodo = (todo) => {
    const newItems = [
      ...list,
      { id: Date.now(), title: todo, completed: false, isEditing: false },
    ];
    setList(newItems);
    setLocalStorage(newItems);
  };

  const removeTodo = (id) => {
    const newItems = list.filter((item) => item.id !== id);
    setList(newItems);
    setLocalStorage(newItems);
  };

  const toggleComplete = (id) => {
    const newItems = list.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setList(newItems);
    setLocalStorage(newItems);
  };

  const editTodo = (id) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  };

  const editTask = (title, id) => {
    const newItems = list.map((item) =>
      item.id === id ? { ...item, title, isEditing: !item.isEditing } : item
    );
    setList(newItems);
    setLocalStorage(newItems);
  };

  return (
    <div className="App h-screen w-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
      <TodoForm addTodo={addTodo} value={value} setValue={setValue} />

      <TodoList
        removeTodo={removeTodo}
        list={list}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
