"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ItemMenu from "./ItemMenu";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

const MenuPrincipal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Scroll, setScroll] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const isElementVisible = window.scrollY > 40;
      if (isElementVisible) {
        setScroll("bg-[#004f51] ");
      } else {
        setScroll("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="fixed bottom-4 right-4 z-[100]">
        <a
          href="https://api.whatsapp.com/send?phone=51914125509&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20"
          target="_blank"
          title="Contacto via whatsapp"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white focus:outline-none"
        >
          <FaWhatsapp className="w-10 h-10" />{" "}
        </a>
      </div>
      <nav
        style={{ filter: "drop-shadow(0px 0px 3px black)" }}
        className={`sticky z-50 top-0 p-2 md:px-20 shadow-sm md:flex md:items-center md:justify-around 2xl:justify-around  ${Scroll}`}
      >
        <div className="  flex justify-between items-  ">
          {/* Escudo Logo "inicio" */}
          <Link href="/">
            <div
              // style={{ filter: "drop-shadow(0px 0px 6px #99C5B5)" }}
              className="cursor-pointer"
            >
              <Image
                title="Ir a inicio"
                src="/Logo.webp"
                width={80}
                height={30}
                alt="Logotype"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </Link>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block text-white">
            <button name="Menu" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="h-10 w-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>{" "}
            </button>
          </span>
        </div>
        <div>
          <div
            className={` text-center  flex flex-col h-screen md:h-auto  md:flex md:flex-row  md:items-center z-[-1] md:z-auto md:static gap-2 absolute text-white md:text-white bg-[#004f51]    md:bg-transparent  w-full left-0 top-full md:w-auto md:py-0  md:pl-0 pl-7 md:opacity-100 opacity-0 right-[-400px] transition-all ease-in  ${
              isOpen ? ` right-0 py-11 opacity-100` : `hidden`
            }`}
          >
            {/*  */}
            <ItemMenu
              ruta="/"
              setIsOpen={setIsOpen}
              border={pathname == "/" ? true : false}
            >
              Inicio
            </ItemMenu>
            <ItemMenu
              ruta="/Nosotros"
              setIsOpen={setIsOpen}
              border={pathname == "/Nosotros" ? true : false}
            >
              Nosotros
            </ItemMenu>
            <ItemMenu
              ruta="/Servicios"
              setIsOpen={setIsOpen}
              border={pathname == "/Servicios" ? true : false}
            >
              Servicios
            </ItemMenu>
            <ItemMenu
              ruta="/Eventos"
              setIsOpen={setIsOpen}
              border={pathname == "/Eventos" ? true : false}
            >
              Eventos
            </ItemMenu>
            <ItemMenu
              ruta="/Podcast"
              setIsOpen={setIsOpen}
              border={pathname == "/Podcast" ? true : false}
            >
              Pódcast
            </ItemMenu>

            <ItemMenu
              ruta="/Contacto"
              setIsOpen={setIsOpen}
              border={pathname == "/Contacto" ? true : false}
            >
              Contacto
            </ItemMenu>
            <ItemMenu
              ruta="/Blog"
              setIsOpen={setIsOpen}
              border={pathname == "/Blog" ? true : false}
            >
              Blog
            </ItemMenu>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuPrincipal;
