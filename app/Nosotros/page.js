import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Nosotros = () => {
  const Data = [
    {
      id: 1,
      title: "MISIÓN",
      icon: "/Nosotros/Mision.png",
      description:
        "Desarrollar competencias personales y profesionales, convirtiéndonos en socios con nuestros clientes para generar mejora continua en el desarrollo institucional y bienestar de la sociedad. ",
    },
    {
      id: 2,
      title: "VISIÓN",
      icon: "/Nosotros/Vision.png",
      description:
        "Ser líderes globales en formación y capacitación profesional, promoviendo la innovación, el empoderamiento y la responsabilidad social para crear líderes transformadores en la sociedad.",
    },
    {
      id: 3,
      title: "OBJETIVO",
      icon: "/Nosotros/Objetivos.png",
      description:
        "Ser líderes globales en formación y capacitación profesional, promoviendo la innovación, el empoderamiento y la responsabilidad social para crear líderes transformadores en la sociedad.",
    },
    {
      id: 4,
      title: "VALORES",
      icon: "/Nosotros/Valores.png",
      description:
        "En Global Executive Training (GET), valoramos la innovación, el empoderamiento, la responsabilidad social y la excelencia. Fomentamos el aprendizaje continuo, el desarrollo profesional y el liderazgo positivo, comprometidos con prácticas sostenibles y equitativas. La excelencia guía todos nuestros programas y capacitaciones.",
    },
  ];
  return (
    <section>
      <section className="bg-center bg-no-repeat bg-[url('/Banners/Nosotros.webp')] bg-cover  bg-[#004f51]/80 bg-blend-multiply">
        <div className=" mx-auto max-w-screen-xl text-center py-24 lg:py-[10.5rem]">
          <div className="rounded-xl bg-gray-800/50  px-1 py-8   max-w-sm mx-auto">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
              Nosotros
            </h1>
          </div>
        </div>
      </section>
      <div className="container -mt-[5rem]">
        <Card className=" border-2 border-[#004f51] bg-white grid w-full grid-cols-1 my-auto mt-6 mb-8 shadow-md gap-6 ">
          <CardContent className="pt-5">
            <div className="flex flex-col justify-center items-center text-base font-normal leading-7    w-full px-2 lg:px-4 text-grey-900 text-justify  space-y-4">
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8   ">
                <div className="   space-y-4 max-h-[500px] overflow-auto  scrollbar-hide">
                  <h1 className=" text-xl font-extrabold leading-tight lg:text-2xl text-grey-900 uppercase">
                    Global Executive Training (GET){" "}
                  </h1>
                  <p>
                    En el mundo actual, los profesionales deben ser más
                    competitivos y contar con herramientas y habilidades para
                    acceder a mejores oportunidades de crecimiento personal y
                    profesional. Global Executive Training (GET) ofrece
                    programas y capacitaciones para profesionales en distintos
                    niveles de gestión y especialidades, con el propósito de
                    ampliar conocimientos y desarrollar habilidades en gestión
                    de personal, liderazgo y emprendimiento.
                  </p>
                  <p>
                    Nuestro compromiso es fomentar el desarrollo personal,
                    cultural y profesional, buscando la innovación y el
                    empoderamiento con responsabilidad social. Contamos con
                    alianzas internacionales que mejoran las perspectivas y
                    experiencias profesionales mediante programas y actividades
                    de capacitación y entrenamiento.
                  </p>
                  <p>
                    Como resultado los participantes de un programa GET, además
                    de mejorar su competitividad, se beneficiarán de las
                    oportunidades de creación de redes de contacto,
                    convirtiéndose en líderes de emprendimiento y de cambio en
                    la sociedad. Te invitamos a ser un profesional global, únete
                    a GET.
                  </p>
                </div>
                <section className=" w-full h-full">
                  <figure className="relative w-full h-[200px] md:h-[300px] lg:h-[500px] ">
                    <Image
                      src={"/imgNosotros.webp"}
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
            </div>
          </CardContent>
          {/* <CardContent>
            <div className="w-full">
              <img
                className="w-full rounded-md"
                src="/Banners/Nosotros.webp"
                alt="header image"
              />
            </div>
          </CardContent> */}
        </Card>
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2    ">
          {Data?.map((item, key) => (
            <div
              key={item.id}
              className={`p-8 space-y-3 border-2 border-[#004f51]  rounded-xl shadow-lg bg-[${
                key == 0 || key == 3 ? "#004f51" : "#fff"
              }] ${key == 0 || key == 3 ? "text-white" : "text-gray-900"}`}
            >
              <h1 className="text-2xl font-semibold  capitalize  text-center ">
                {item.title}
              </h1>
              <p className="  text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
