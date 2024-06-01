"use client";
import React from "react";
import Login from "./Login";
import useAuthState from "@/lib/useAuthState";
import { auth } from "@/firebase/firebaseClient";
import Link from "next/link";
import { BookOpenText, Cake, HomeIcon, MonitorXIcon } from "lucide-react";
import { signOut } from "firebase/auth";
import { FaEvernote } from "react-icons/fa";

const DashboardLayout = ({ children }) => {
  const [{ user, claims }, loading, error] = useAuthState(auth);

  const menu = [
    {
      name: "Blog",
      link: "/Admin/Blog",
      icon: <BookOpenText className="w-6 h-6 text-white" />,
    },
    {
      name: "Eventos",
      link: "/Admin/Eventos",
      icon: <Cake className="w-6 h-6 text-white" />,
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  if (!user) return <Login />;
  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50  text-black ">
        <div className="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-[#004f51] h-full text-white transition-all duration-300 border-none z-10 sidebar">
          <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="px-5 hidden md:block">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-p00 uppercase">
                    Dashboard
                  </div>
                </div>
              </li>
              {menu.map((men, key) => (
                <li key={key}>
                  <Link
                    href={men.link}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      {men.icon}
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      {men.name}
                    </span>
                  </Link>
                </li>
              ))}

              <li>
                <div
                  onClick={() => signOut(auth)}
                  className="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500  pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <MonitorXIcon className="w-6 h-6 text-white" />{" "}
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Cerrar sesión
                  </span>
                </div>
              </li>
            </ul>
            <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
              Copyright @{new Date().getFullYear()} -{" "}
              {new Date().getFullYear() + 1}
            </p>
          </div>
        </div>
        {/* ./Sidebar */}
        <div className=" ml-14  mb-6 md:ml-64 p-4 ">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
