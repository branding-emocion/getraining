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
  return (
    <div>
      <Carousel infiniteLoop autoPlay showStatus={false}>
        <div className="relative w-full h-[21rem]  sm:h-[535px] bg-[#004f51]/80">
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
        <div className="relative w-full h-[20rem]  sm:h-[535px] bg-[#004f51]/80">
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
        <div className="relative w-full h-[20rem]  sm:h-[535px] bg-[#004f51]/80">
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

      <section className="relative container mx-auto  -m-[5rem] pb-8 z-[9999]">
        <Card className=" ">
          <CardContent>
            <div>
              <h1 className=" text-xl font-extrabold leading-tight lg:text-2xl text-grey-900 pt-4 uppercase">
                Global Executive Training (GET){" "}
              </h1>
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-3">
                <p>
                  Brindamos Consultoría, asesoría y capacitación en desarrollo
                  personal y profesional. Hemos diseñado programas,
                  capacitaciones y entrenamientos para profesionales de los
                  distintos niveles de gestión y especialidades, cuyo propósito
                  es ampliar sus conocimientos y desarrollar habilidades en las
                  áreas de gestión de personal, liderazgo y emprendimiento.
                </p>
                <figure className="relative w-full h-[200px] ">
                  <Image
                    src={"/home.webp"}
                    alt="Foto"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </figure>
              </section>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default HomePage;
