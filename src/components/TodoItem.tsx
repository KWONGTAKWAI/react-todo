import React, { FC } from "react";
import { ImCancelCircle } from "react-icons/im";

interface TodoItemProps {
  id:string;
  text: string;
  deleteTodoItemHandler: (todoId:string)=>void;

}

const TodoItem: FC<TodoItemProps> = ({ id,text,deleteTodoItemHandler }) => {
  return (
    <div className="w-64 px-4 py-2 bg-blue-500 flex rounded justify-between items-center ">
      <div className="text-white font-bold ">{text}</div>
       <ImCancelCircle className="text-white   hover:text-blue-600 " onClick={deleteTodoItemHandler.bind(null,id)}/>
    </div>
  );
};

export default TodoItem;
