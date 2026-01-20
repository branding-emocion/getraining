"use client";
import { db } from "@/firebase/firebaseClient";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ModalImageSee } from "../ModalImage";
import { useLanguage } from "../LanguageContext";

const Eventos = () => {
  const { language } = useLanguage();

  const [Eventos, setEventos] = useState([
    {
      img: "/Eventos/administracion-estrategica-de-la-marca-personal-y-mentoring-en-desarrollo-profesional.webp",
      name:
        language === "es"
          ? "Administración estratégica de la marca personal y mentoring en desarrollo profesional."
          : "Strategic management of personal branding and mentoring in professional development.",
    },
    {
      img: "/Eventos/la-nueva-normalidad-de-los-negocios-post-pandemia.webp",
      name:
        language === "es"
          ? "La nueva normalidad de los negocios pospandemia."
          : "The new normal for post-pandemic businesses.",
    },
    {
      img: "/Eventos/i-foro-de-empleabilidad.webp",
      name: language === "es" ? "Foro de empleabilidad" : "Employability forum",
    },
    {
      img: "/Eventos/mentoring-para-el-desarrollo-profesional.webp",
      name:
        language === "es"
          ? "Mentoring para el desarrollo profesional"
          : "Mentoring for professional development",
    },
    {
      img: "/Eventos/la-nueva-normalidad.webp",
      name: language === "es" ? "La nueva normalidad" : "The new normal",
    },
    {
      img: "/Eventos/evento3.webp",
      name: "#Feria #smartcityexpo en #Taipei ",
    },
    {
      img: "/Eventos/cumbrewashingtonsmall.webp",
      name: language === "es" ? "Cumbre Washington" : "Washington Summit",
    },
    {
      img: "/Eventos/eventosep2019.webp",
      name: "Work Place Trends 2019",
    },
  ]);

  const [ModalImage, setModalImage] = useState({
    Visible: false,
    Nombre: "",
    src: "",
  });

  useEffect(() => {
    const q = query(collection(db, "Eventos"), orderBy("CreatAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const EvenDb = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // 🔍 DEBUG: Ver qué eventos vienen de Firebase
      console.log("Eventos de Firebase:", EvenDb);

      setEventos((arr) => [...EvenDb, ...arr]);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Asegura https://
  const formatLink = (link) => {
    if (!link) return "";
    const clean = String(link).trim();
    if (clean.startsWith("http://") || clean.startsWith("https://")) return clean;
    return `https://${clean}`;
  };

  return (
    <div>
      <ModalImageSee setModalImage={setModalImage} ModalImage={ModalImage} />

      <section className="bg-center bg-no-repeat bg-[url('/Banners/Eventos.webp')] bg-cover bg-[#004f51]/80 bg-blend-multiply">
        <div className=" mx-auto max-w-screen-xl text-center py-24 lg:py-[10.5rem]">
          <div className="rounded-xl bg-[#004f51]/50 px-1 py-8 max-w-sm mx-auto">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
              {language === "es" ? "Eventos" : "Events"}
            </h1>
          </div>
        </div>
      </section>

      <section className="container pt-8 pb-8 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {Eventos?.map((Evento, key) => {
          // 🔍 DEBUG: Ver cada evento
          console.log(`Evento ${key}:`, Evento);
          console.log(`LinkEvento:`, Evento?.LinkEvento);

          const rawLink = Evento?.LinkEvento || "";
          const hasLink = rawLink && String(rawLink).trim().length > 0;

          console.log(`Tiene link:`, hasLink, `Link:`, rawLink);

          return (
            <div key={key}>
              {hasLink ? (
                // ✅ CON LINK - Abre YouTube
                <a
                  href={formatLink(rawLink)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  onClick={() => console.log("Click en link:", formatLink(rawLink))}
                >
                  <div className="group pb-24 relative overflow-hidden rounded-lg">
                    <div className="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-[#004f51] z-10" />

                    <figure className="relative w-full h-[220px]">
                      <Image
                        src={Evento.img || Evento?.Imagenes?.[0]}
                        fill
                        alt={Evento?.name || Evento?.TituloEvento || (language === "es" ? "Evento" : "Event")}
                        style={{ objectFit: "cover" }}
                        className="transition-all group-hover:scale-125 duration-700 mr-4"
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
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </div>
                      <div className="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6">
                        <div className="h-6 bg-[#004f51] -rotate-45 transform origin-bottom-right" />
                      </div>
                      <span className="text-white text-center px-2">
                        {Evento?.name} {Evento?.TituloEvento}
                      </span>
                    </div>
                  </div>
                </a>
              ) : (
                // ❌ SIN LINK - Abre modal
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Click en modal para:", Evento?.name || Evento?.TituloEvento);
                    setModalImage({
                      Visible: true,
                      Nombre: Evento?.name || Evento?.TituloEvento,
                      src: Evento.img || Evento?.Imagenes?.[0],
                    });
                  }}
                  className="group pb-24 relative overflow-hidden rounded-lg cursor-pointer"
                >
                  <div className="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-[#004f51] z-10" />

                  <figure className="relative w-full h-[220px]">
                    <Image
                      src={Evento.img || Evento?.Imagenes?.[0]}
                      fill
                      alt={Evento?.name || Evento?.TituloEvento || (language === "es" ? "Evento" : "Event")}
                      style={{ objectFit: "cover" }}
                      className="transition-all group-hover:scale-125 duration-700 mr-4"
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
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </div>
                    <div className="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6">
                      <div className="h-6 bg-[#004f51] -rotate-45 transform origin-bottom-right" />
                    </div>
                    <span className="text-white text-center px-2">
                      {Evento?.name} {Evento?.TituloEvento}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Eventos;
