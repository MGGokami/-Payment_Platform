import { Outlet } from "react-router-dom";
import { Header } from ".";

export function Layout() {
  return (
    <div className="h-screen select-none flex flex-col dark:bg-gray-600 dark:text-white gap-2">
      <Header />
      <main className="grow container self-center p-2">
        <Outlet />
      </main>

      <footer className="p-2 shadow">Footer</footer>
    </div>
  )
}