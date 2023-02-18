"use client";
import { ArrowLeftOnRectangleIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
export default function Header() {
  return (
    <div className=" flex w-full h-16 items-center justify-between px-4 mt-9 mx-2 rounded-lg">
      <div className="flex items-center w-full">
        <div className="dropdown">
          <label tabIndex={0}>
            <div className="btn">
              <Bars3Icon className="text-white h-9 w-9" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="flex items-center justify-center dropdown-content menu mt-1 p-2 shadow bg-slate-400 rounded-box w-32"
          >
            <li className="flex items-center justify-center w-full">
              <div className="w-full flex items-center justify-center">
                <ArrowLeftOnRectangleIcon className="text-white h-6 w-6" />
                <p className="text-gray-50">Logout</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full items-center justify-end">
        <div className="avatar ">
          <div className="w-16 rounded-full">
            <Image src={""} alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
}
