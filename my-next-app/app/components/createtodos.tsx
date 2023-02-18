"use client";
import { useForm } from "react-hook-form";
export default function Todos() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex w-full h-40 m-2 bg-slate-400 p-2 rounded-lg ">
      <form
        className="h-full w-full space-y-4"
        onSubmit={handleSubmit(() => onSubmit)}
      >
        <input
          className=" w-full h-16 outline-none rounded-2xl text-base font-semibold p-1"
          placeholder='Enter your task'
          {...register("your task")}
        />
        <div className="flex w-full justify-between items-center">
          <div className=" h-full">
            <p className="ml-1 font-semibold">set date:</p>
            <input className="outline-none rounded-lg p-1" type="date" />
          </div>
          <button className="btn bg-blue-300 border-none normal-case text-lg"> Create</button>
        </div>
      </form>
    </div>
  );
}
