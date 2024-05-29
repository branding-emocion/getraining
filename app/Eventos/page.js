import Image from "next/image";
import React from "react";

const Eventos = () => {
  const ListEventos = [
    {
      img: "/Eventos/administracion-estrategica-de-la-marca-personal-y-mentoring-en-desarrollo-profesional.webp",
      name: "Administración estratégica de la marca personal y mentoring en desarrollo profesional.",
    },
    {
      img: "/Eventos/la-nueva-normalidad-de-los-negocios-post-pandemia.webp",
      name: "La nueva normalidad de los negocios pospandemia.",
    },
    {
      img: "/Eventos/i-foro-de-empleabilidad.webp",
      name: "Foro de empleabilidad",
    },
    {
      img: "/Eventos/mentoring-para-el-desarrollo-profesional.webp",
      name: "Mentoring para el desarrollo profesional",
    },
    {
      img: "/Eventos/la-nueva-normalidad.webp",
      name: "La nueva normalidad",
    },
    {
      img: "/Eventos/evento3.webp",
      name: "#Feria #smartcityexpo en #Taipei ",
    },
    {
      img: "/Eventos/cumbrewashingtonsmall.webp",
      name: "Cumbre Washington",
    },
    {
      img: "/Eventos/eventosep2019.webp",
      name: "Work Place Trends 2019",
    },
  ];

  return (
    <div>
      <section className="bg-center bg-no-repeat bg-[url('/Banners/Eventos.webp')] bg-cover bg-[#004f51]/80 bg-blend-multiply">
        <div className=" mx-auto max-w-screen-xl text-center py-24 lg:py-[10.5rem]">
          <div className="rounded-xl bg-gray-800/50 px-1 py-8     max-w-sm mx-auto">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
              Eventos
            </h1>
          </div>
        </div>
      </section>

      <section className="container pt-8 mx-auto grid grid-cols-1  lg:grid-cols-4 gap-6">
        {ListEventos.map((Evento, key) => (
          <div
            key={key}
            className="group pb-24 relative overflow-hidden rounded-lg"
          >
            <div className="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-[#004f51] z-10" />
            <figure className="relative w-full h-[220px]">
              <Image
                src={Evento.img}
                fill
                alt={key}
                style={{
                  objectFit: "cover",
                }}
                className="transition-all group-hover:scale-125 duration-700 mr-4 "
              />
            </figure>

            <div className="bg-[#004f51] absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center">
              <div className="z-20 absolute -top-5 w-full flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="group-hover:bg-white group-hover:text-[#004f51] group-hover:rotate-180 w-10 h-10 bg-black text-white p-2 rounded-full transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <div className="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6">
                <div className="h-6  bg-[#004f51] -rotate-45 transform origin-bottom-right" />
              </div>
              {/* <h2 className="font-bold">{Evento.name}</h2> */}
              <span className="text-white text-center px-2">{Evento.name}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Eventos;
