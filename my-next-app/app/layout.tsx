import "./globals.css";
import Header from "./components/header";
import Todos from "./components/createtodos";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {" "}
        <div className="flex h-screen w-screen items-center justify-center">
          <div className="h-screen w-2/5 flex flex-col bg-slate-600 rounded-lg space-y-14 px-2 items-center">
            <Header />
            <Todos />
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
