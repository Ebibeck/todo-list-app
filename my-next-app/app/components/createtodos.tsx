"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createTodo } from "../api/pocketbase";
import { useRouter } from "next/navigation";

export default function CreateTodos() {
  const [todo, setTodo] = useState("");
  const { register } = useForm();
  const router = useRouter()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createTodo(todo);
    setTodo("");
    router.refresh()
  };

  return (
    <div className="flex w-full h-40 m-2 bg-slate-400 p-2 rounded-lg ">
      <form className="h-full w-full space-y-3" onSubmit={onSubmit}>
        <input
          className=" w-full h-20 outline-none rounded-2xl text-base font-semibold p-1"
          value={todo}
          placeholder="Enter your task"
          {...register("your task")}
          onChange={(e) => setTodo(e.target.value)}
        />
        <div className="flex w-full justify-end items-center">
          <button
            className="btn bg-blue-300 border-none outline-none normal-case text-lg"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
