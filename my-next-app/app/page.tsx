import Header from "./components/header";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="h-screen w-2/5 flex bg-slate-600 rounded-lg">
        <Header/>
      </div>
    </div>
  );
}
