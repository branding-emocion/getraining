import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Servicios = () => {
  const ListServices = [
    {
      name: "Outplacement",
      description:
        "Asesoramiento profesional y personal: Incluye coaching, mentoring y herramientas de evaluación de habilidades, intereses y objetivos de carrera. Así como el apoyo emocional.",
    },
    {
      name: "Programas de Mentoring Organizacional y Profesional",
      description:
        "Orientación y apoyo para el desarrollo de habilidades y competencias.",
    },
    {
      name: "Diagnóstico de Desempeño y Desarrollo de Competencias Directivas",
      description:
        "Evaluación integral para identificar áreas de mejora y fortalecer las capacidades de liderazgo.",
    },
    {
      name: "Talleres en Habilidades Blandas y de Gestión",
      description:
        "Capacitación en técnicas avanzadas de gestión y liderazgo. Desarrollo de habilidades interpersonales y emocionales esenciales para el éxito profesional.",
    },

    {
      name: "Marca Personal",
      description:
        "Estrategias para construir y fortalecer la imagen profesional.",
    },
    {
      name: "Emprendimiento",
      description:
        "Asesoría y formación para el desarrollo de proyectos empresariales.",
    },
    {
      name: "Empoderamiento",
      description:
        "Programas que promueven la autoconfianza y la capacidad de liderazgo.",
    },
    {
      name: "Empleabilidad y Networking",
      description:
        "Técnicas para mejorar la búsqueda de empleo y la creación de redes de contactos.",
    },
    {
      name: "Evaluación y Selección de Personal",
      description:
        "Proceso riguroso para identificar y reclutar el talento adecuado.",
    },
    {
      name: "Gestión de Calidad en el Servicio y Atención al Cliente",
      description:
        "Estrategias para mejorar la satisfacción del cliente y la eficiencia del servicio.",
    },
    {
      name: "Planes de Seguimiento y Training In-House",
      description:
        "Además, ofrecemos planes de seguimiento y formación In-House en áreas clave como gestión del personal, emprendimiento y liderazgo. Estos programas tienen un impacto directo en los resultados y el clima laboral de la organización.",
    },
    {
      name: "Metodología",
      description:
        "Nuestros programas y talleres son altamente interactivos, integrando tres capacidades de comunicación en los participantes: visual, auditiva y kinestésica. Utilizamos presentaciones participativas, dinámicas de alto impacto y videos de soporte para asegurar una experiencia de aprendizaje efectiva y enriquecedora.",
    },
  ];

  return (
    <div className="">
      <section className="bg-center bg-no-repeat bg-[url('/Banners/Servicios.webp')] bg-cover  bg-[#004f51]/80 bg-blend-multiply">
        <div className=" mx-auto max-w-screen-xl text-center py-24 lg:py-[10.5rem]">
          <div className="rounded-xl bg-[#004f51]/50  px-1 py-8   max-w-sm mx-auto">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
              Servicios
            </h1>
          </div>
        </div>
      </section>
      <div className="container -mt-[5rem]">
        <Card className=" border-2 border-[#004f51] bg-white grid w-full grid-cols-1 my-auto mt-6 mb-8 shadow-md gap-6 ">
          <CardContent className="pt-5">
            <div className="flex flex-col justify-center items-center text-base font-normal leading-7    w-full px-2 lg:px-4 text-grey-900 text-justify  space-y-4">
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5 pb-2   ">
                <div className=" flex flex-col justify-center items-center  gap-4  text-justify">
                  <h1 className=" text-xl font-semibold leading-tight lg:text-2xl text-grey-900 uppercase">
                    GETRAINING{" "}
                  </h1>
                  <p>
                    En GET, ofrecemos una amplia gama de servicios de
                    consultoría, asesoría, mentoring y capacitación enfocados en
                    el desarrollo organizacional y profesional. Nuestros
                    programas están diseñados para satisfacer las necesidades
                    específicas de cada organización, brindando soluciones a
                    medida que generan resultados tangibles.
                  </p>
                  <p>
                    Nuestro compromiso es ofrecer programas, capacitaciones y
                    entrenamientos diseñados específicamente para las
                    necesidades de cada cliente, ajustando los presupuestos a la
                    medida de cada organización.
                  </p>
                  <p></p>
                </div>
                <section className=" w-full h-full">
                  <figure className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] ">
                    <Image
                      src={"/slider/img4.webp"}
                      alt="Foto"
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      className="rounded-md"
                    />
                  </figure>
                </section>
              </section>
              <section className="space-y-4">
                <ul className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2    ">
                  {ListServices?.map((item, key) => (
                    <li
                      key={key}
                      className={`p-8 space-y-3 border-2 border-[#004f51]  rounded-xl shadow-lg bg-white text-gray-900`}
                    >
                      <h1 className="text-xl font-semibold  capitalize  text-center ">
                        {item.name}
                      </h1>
                      <p className="  text-justify">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Servicios;
