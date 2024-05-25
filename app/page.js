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

const HomePage = () => {
  const Alianzas = [
    {
      img: "/Aliado1.webp",
      nombre: "Congreso Hsispanoamericano de negocios",
      link: "https://congresohispanoamericanodenegocios.com",
    },
    {
      img: "/Aliado.webp",
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
            src={"/Banners/Banner2.webp"}
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
      </Carousel>

      <section className="relative container mx-auto  -m-[6rem] pb-8 z-20">
        <Card className="bg-white border-[#004f51] ">
          <CardContent>
            <div className="space-y-2">
              <h1 className=" text-xl text-center  font-extrabold leading-tight lg:text-2xl text-grey-900 pt-4 uppercase">
                Global Executive Training (GET){" "}
              </h1>
              <section className="grid grid-cols-1 lg:grid-cols-1 gap-x-8 gap-y-4">
                <p className="text text-justify">
                  Brindamos Consultoría, asesoría y capacitación en desarrollo
                  personal y profesional. Hemos diseñado programas,
                  capacitaciones y entrenamientos para profesionales de los
                  distintos niveles de gestión y especialidades, cuyo propósito
                  es ampliar sus conocimientos y desarrollar habilidades en las
                  áreas de gestión de personal, liderazgo y emprendimiento.
                </p>
                <figure className="   relative w-full h-[200px] md:h-[400px]  border">
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
            <div className="space-y-3">
              <h1 className="text-xl text-center  font-extrabold leading-tight lg:text-2xl text-grey-900 py-4  uppercase">
                NUESTRAS ALIANZAS
              </h1>
              <div className=" grid  place-items-center grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-x-8 :gap-y-4">
                {Alianzas.map((alianza, key) => (
                  <a
                    href={alianza.link}
                    key={key}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-sm"
                  >
                    <div className=" hover:-translate-y-2 shadow-md border  rounded-lg   bg-[#004f51] border-[#004f51]">
                      <figure className="relative w-full h-[18rem]">
                        <Image
                          className="rounded-t-lg object-fill"
                          src={alianza.img}
                          fill
                          alt={key}
                        />
                      </figure>
                      <div className="p-5">
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
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default HomePage;
