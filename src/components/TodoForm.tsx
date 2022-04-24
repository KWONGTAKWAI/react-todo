import React, { FC, useRef, FormEvent } from "react";

interface TodoFormProps {
  addTodoItemHandler: (inputValue: string) => void;
}

const TodoForm: FC<TodoFormProps> = ({ addTodoItemHandler }) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event?.preventDefault();
    const inputValue = inputRef.current!.value;
    console.log(inputValue);
    addTodoItemHandler(inputValue);
  };
  return (
    <form
      onSubmit={submitHandler}
      className="w-full flex justify-center items-center gap-4 mt-7"
    >
      <input
        className="p-2 border rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        type="text"
        placeholder="Input Your Task"
        ref={inputRef}
      />
      <button
        className="px-4 py-2 rounded font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
