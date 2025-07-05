"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClipboardListIcon, ListChecks, UsersRound } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  const Alianzas = [
    {
      img: "/Aliado1.webp",
      nombre: "Congreso Hsispanoamericano de negocios",
      link: "https://congresohispanoamericanodenegocios.com",
    },
    {
      img: "/Aliado3.jpg",
      nombre: "Red Latinoamericana de conferencistas",
      link: "https://redconferencistas.com/",
    },
  ];
  return (
    <div className="pb-10">
      <Carousel infiniteLoop autoPlay showStatus={false}>
        <div className="relative w-full h-[21rem]  sm:h-[476px] bg-[#004f51]/80">
          <Image
            src={"/Banners/Banner.webp"}
            alt="banner1"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute top-0 left-0 bg-[#004f51]/30 w-full h-full" />
        </div>
        <div className="relative w-full h-[20rem]  sm:h-[476px] bg-[#004f51]/80">
          <Image
            src={"/Banners/Banner3.webp"}
            alt="banner1"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute top-0 left-0 bg-[#004f51]/30 w-full h-full" />
        </div>
        <div className="relative w-full h-[20rem]  sm:h-[476px] bg-[#004f51]/80">
          <Image
            src={"/Banners/Banner4.webp"}
            alt="banner1"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute top-0 left-0 bg-[#004f51]/30 w-full h-full" />
        </div>
      </Carousel>

      <div className="space-y-10 -mt-[6rem]">
        <section className="relative container mx-auto   z-20">
          <Card className="bg-white  shadow-lg  ">
            <CardContent>
              <div className="space-y-2 pt-6">
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="space-y-4 flex items-start flex-col  justify-center">
                    <h1 className=" text-xl ztext-center  font-extrabold leading-tight lg:text-3xl text-grey-900 pt-4 uppercase">
                      Global Executive Training (GET){" "}
                    </h1>
                    <p className="text-lg text-justify">
                      Brindamos Consultoría, asesoría y capacitación en
                      desarrollo personal y profesional. Hemos diseñado
                      programas, capacitaciones y entrenamientos para
                      profesionales de los distintos niveles de gestión y
                      especialidades, cuyo propósito es ampliar sus
                      conocimientos y desarrollar habilidades en las áreas de
                      gestión de personal, liderazgo y emprendimiento.
                    </p>
                    <Link href={"/Nosotros"} className="flex  ">
                      <div
                        aria-label="Nosotros"
                        title="Nosotros"
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004f51] bg-[#004f51] transition duration-150 ease-in-out hover:bg-[#00a6b6] lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-[#004f51] py-2 sm:py-4 text-sm"
                      >
                        Más Información{" "}
                      </div>
                    </Link>
                  </div>
                  <figure className="   relative w-full h-[200px] md:h-[400px]   ">
                    <Image
                      src={"/home.webp"}
                      alt="Foto"
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      className="rounded-md"
                    />
                  </figure>
                </section>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="  container mx-auto mt-32   ">
          <Card className=" bg-white shadow-lg  ">
            <CardContent>
              <div className="space-y-4 flex items-center flex-col  justify-center">
                <h1 className=" text-xl ztext-center  font-extrabold leading-tight lg:text-3xl text-grey-900 pt-4 uppercase">
                  Nuestros servicios
                </h1>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-x-8 gap-y-4">
                <div className="pt-4">
                  <Carousel
                    infiniteLoop
                    autoPlay
                    showThumbs={false}
                    showStatus={false}
                  >
                    <div className=" rounded-md w-full h-full max-h-[346px] ">
                      <Image
                        className="rounded-md"
                        src={"/slider/s1.jpg"}
                        alt="banner1"
                        width={601}
                        height={436}
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className=" rounded-md w-full h-full  max-h-[346px]">
                      <Image
                        className="rounded-md"
                        src={"/slider/s2.jpg"}
                        alt="banner1"
                        width={450}
                        height={450}
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className=" rounded-md w-full h-full max-h-[346px]">
                      <Image
                        className="rounded-md"
                        src={"/slider/s3.jpg"}
                        alt="banner1"
                        width={450}
                        height={450}
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </Carousel>
                </div>
                <div>
                  <ul className="space-y-5">
                    <li className="flex justify-start  items-center">
                      <UsersRound className="w-10 text-[#004f51] h-14 " />
                      <p className="pl-4 text-lg font-medium">
                        Desarrollo Profesional Desarrollo del Talento Humano -
                        Mentoring Organizacional y
                      </p>
                    </li>
                    <li className="flex justify-start  items-center">
                      <ClipboardListIcon className="w-10 text-[#004f51] h-14 " />
                      <p className="pl-3 text-lg font-medium">
                        Empleabilidad y Emprendimiento
                      </p>
                    </li>
                    <li className="flex justify-start  items-center">
                      <ListChecks className="w-10 text-[#004f51] h-14 " />
                      <p className="pl-3 text-lg font-medium">Marca personal</p>
                    </li>

                    <li className="flex justify-start  items-center">
                      <Link href={"/Servicios"}>
                        <div
                          title="Servicios"
                          aria-label="Servicios"
                          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004f51] bg-[#004f51] transition duration-150 ease-in-out hover:bg-[#00a6b6] lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-[#004f51] py-2 sm:py-4 text-sm"
                        >
                          Más Información{" "}
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="  container mx-auto ">
          <Card className=" bg-white shadow-lg  ">
            <CardContent>
              <div className="space-y-4 flex items-center flex-col  justify-center">
                <h1 className=" text-xl ztext-center  font-extrabold leading-tight lg:text-3xl text-grey-900 pt-4 uppercase">
                  NUESTRAS ALIANZAS
                </h1>
              </div>
              <div className=" pt-3 grid  place-items-center grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-x-8 :gap-y-4">
                {Alianzas.map((alianza, key) => (
                  <a
                    href={alianza.link}
                    key={key}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-72 shadow-lg"
                  >
                    <div className=" hover:-translate-y-2 shadow-md border  rounded-lg   bg-[#004f51] border-[#004f51]">
                      <figure className="relative w-full h-[18rem]   ">
                        <Image
                          className="rounded-t-lg object-fill  p-0.5"
                          src={alianza.img}
                          fill
                          alt={key}
                        />
                      </figure>
                      <div className="p-4 h-32">
                        <div>
                          <h5 className=" text-center  font-bold text-2xl tracking-tight mb-2 text-white">
                            {alianza.nombre}{" "}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
