import { FC, useState } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todo from "./models/Todo.model";

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoItemHandler = (inputValue: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), description: inputValue },
    ]);
    // console.log(inputValue);
  };
  const deleteTodoItemHandler = (todoId: string) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todoItem) => todoItem.id !== todoId)
    );
    // console.log(inputValue);
  };
  return (
    <div className="App">
      <header className="w-full h-24 shadow-lg bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center">
        <div className="text-center text-white text-4xl font-bold">
          Minimal Todo List
        </div>
      </header>
      <main>
        <TodoForm addTodoItemHandler={addTodoItemHandler} />
        <TodoList data={todos} deleteTodoItemHandler={deleteTodoItemHandler} />
      </main>
      <footer className="fixed inset-x-0 bottom-0 bg-gray-200 text-center lg:text-left">
        <div className="text-gray-700 text-center p-4 bg-gray-400">
          @ DevenTW
        </div>
      </footer>
    </div>
  );
};

export default App;
