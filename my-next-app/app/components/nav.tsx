import Navlink from "./navlink";

export default function TodoNav() {
  return (
    <div className="flex w-full h-auto items-center justify-bewteen">
      <div className="flex w-full items-center justify-center">
        <Navlink href="/gettodos">Todos</Navlink>
      </div>
      <div className="flex w-full items-center justify-center">
        <Navlink href="/completedTodos">Completed</Navlink>
      </div>
    </div>
  );
}
