import React from "react";
import { FC } from "react";
import TodoItem from "./TodoItem";

interface TodoItemProps {
  data: {
    id: string;
    description: string;
  }[],
  deleteTodoItemHandler: (todoId: string) => void;
}

const TodoList: FC<TodoItemProps> = ({ data, deleteTodoItemHandler }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 mt-4">
      {data.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          id={todoItem.id}
          text={todoItem.description}
          deleteTodoItemHandler={deleteTodoItemHandler}
        />
      ))}
    </div>
  );
};

export default TodoList;
