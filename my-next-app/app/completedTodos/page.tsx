"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { use } from "react";
import { completedTodos, deleteTodos, getTodos } from "../pocketbase";
import { useRouter } from "next/navigation";
export default function CompletedTodos() {
  const router = useRouter();
  const record = use(getTodos());
  const completedtodos = record.filter(
    (completed) => completed.completed == true
  );
  return (
    <>
      <div className="flex overflow-auto flex-col w-full h-60 bg-slate-100 rounded-lg p-2">
        {completedtodos.map((todo) => (
          <div key={todo.id} className="flex w-full h-14">
            <ul className="flex w-full h-auto">
              <li className="flex w-full h-10 items-center flex-row shadow">
                <span className="flex flex-row w-full items-center space-x-2">
                  <span className="flex items-center m-1">
                    <input
                      type={"checkbox"}
                      className="checkbox "
                      onClick={
                        (router.refresh(),
                        () => completedTodos(todo.id, todo.completed))
                      }
                    />
                  </span>
                  <span className="flex items-center">{todo.todo}</span>
                </span>
                <span className="flex items-center m-1">
                  <button
                    onClick={(router.refresh(), () => deleteTodos(todo.id))}
                  >
                    <XMarkIcon className="w-5 h-5 " />
                  </button>
                </span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
