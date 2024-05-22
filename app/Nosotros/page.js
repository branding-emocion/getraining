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
      <section className="bg-center bg-no-repeat bg-[url('/Banners/Nosotros.webp')] bg-cover bg-gray-100/90 bg-blend-multiply">
        <div className=" mx-auto max-w-screen-xl text-center py-24 lg:py-[10.5rem]">
          <div className="rounded-xl bg-gray-800/50 px-1 py-8 shadow-lg backdrop-blur-md  max-w-sm mx-auto">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
              Nosotros
            </h1>
          </div>
        </div>
      </section>
      <div className="container ">
        <Card className=" shadow-md bg-white grid w-full grid-cols-1 my-auto mt-6 mb-8     gap-6 ">
          <CardContent>
            <div className="flex flex-col justify-center items-center text-base font-normal leading-7 text-gray-600    w-full px-2 lg:px-4 text-grey-900 text-justify  space-y-4">
              <h1 className=" text-xl font-extrabold leading-tight lg:text-2xl text-grey-900 uppercase">
                Global Executive Training (GET){" "}
              </h1>
              <p>
                En el mundo de hoy, los profesionales tienen la necesidad de ser
                cada vez más competitivos, contar con herramientas y habilidades
                que les permitan acceder a mejores oportunidades de crecimiento
                y desarrollo personal y profesional. Global Executive Training
                (GET) ha diseñado programas, capacitaciones y entrenamientos
                para profesionales de los distintos niveles de gestión y
                especialidades, cuyo propósito es ampliar sus conocimientos y
                desarrollar habilidades en las áreas de gestión de personal,
                liderazgo y emprendimiento.
              </p>
              <p>
                Nuestro compromiso es contribuir e incentivar el desarrollo
                personal, cultural y profesional buscando la innovación y el
                empoderamiento, con responsabilidad social. Para ello, contamos
                con una red de alianzas internacionales que garantizan mejorar
                las perspectivas, capacidades y experiencias profesionales,
                accediendo a entrenamientos y capacitaciones a través de sus
                diferentes programas y actividades.
              </p>
              <p>
                Como resultado los participantes de un programa GET, además de
                mejorar su competitividad, se beneficiarán de las oportunidades
                de creación de redes de contacto, convirtiéndose en líderes de
                emprendimiento y de cambio en la sociedad. Te invitamos a ser un
                profesional global, únete a GET.
              </p>
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
          {Data?.map((item) => (
            <div
              key={item.id}
              className="p-8 space-y-3 border-2 border-[#17282f]  rounded-xl shadow-lg bg-white"
            >
              {/* <div className="inline-block text-blue-500  ">
                <Image src={item?.icon} width={48} height={48} alt="Mision" />
              </div> */}
              <h1 className="text-2xl font-semibold text-gray-700 capitalize  ">
                {item.title}
              </h1>
              <p className="text-gray-600  text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
