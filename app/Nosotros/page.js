// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import React from "react";

// const Nosotros = () => {
//   const Data = [
//     {
//       id: 1,
//       title: "MISIÓN",
//       icon: "/Nosotros/Mision.png",
//       description:
//         "Desarrollar competencias personales y profesionales, convirtiéndonos en socios con nuestros clientes para generar mejora continua en el desarrollo institucional y bienestar de la sociedad. ",
//     },
//     {
//       id: 2,
//       title: "VISIÓN",
//       icon: "/Nosotros/Vision.png",
//       description:
//         "Ser líderes globales en formación y capacitación profesional, promoviendo la innovación, el empoderamiento y la responsabilidad social para crear líderes transformadores en la sociedad.",
//     },
//     {
//       id: 3,
//       title: "OBJETIVO",
//       icon: "/Nosotros/Objetivos.png",
//       description:
//         "Ser líderes globales en formación y capacitación profesional, promoviendo la innovación, el empoderamiento y la responsabilidad social para crear líderes transformadores en la sociedad.",
//     },
//     {
//       id: 4,
//       title: "VALORES",
//       icon: "/Nosotros/Valores.png",
//       description:
//         "En Global Executive Training (GET), valoramos la innovación, el empoderamiento, la responsabilidad social y la excelencia. Fomentamos el aprendizaje continuo, el desarrollo profesional y el liderazgo positivo, comprometidos con prácticas sostenibles y equitativas. La excelencia guía todos nuestros programas y capacitaciones.",
//     },
//   ];
//   return (
//     <section>
//       <section className="bg-center bg-no-repeat bg-[url('/Banners/Nosotros.webp')] bg-cover  bg-[#004f51]/80 bg-blend-multiply">
//         <div className=" mx-auto max-w-screen-xl text-center py-24 lg:py-[10.5rem]">
//           <div className="rounded-xl bg-[#004f51]/50  px-1 py-8   max-w-sm mx-auto">
//             <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
//               Nosotros
//             </h1>
//           </div>
//         </div>
//       </section>
//       <div className="container -mt-[5rem]">
//         <Card className=" border-2 border-[#004f51] bg-white grid w-full grid-cols-1 my-auto mt-6 mb-8 shadow-md gap-6 ">
//           <CardContent className="pt-5">
//             <div className="flex flex-col justify-center items-center text-base font-normal leading-7    w-full px-2 lg:px-4 text-grey-900 text-justify  space-y-4">
//               <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8   ">
//                 <div className="   space-y-4 max-h-[500px] overflow-auto  scrollbar-hide">
//                   <h1 className=" text-xl font-extrabold leading-tight lg:text-2xl text-grey-900 uppercase">
//                     Global Executive Training (GET){" "}
//                   </h1>
//                   <p>
//                     En el mundo actual, los profesionales deben ser más
//                     competitivos y contar con herramientas y habilidades para
//                     acceder a mejores oportunidades de crecimiento personal y
//                     profesional. Global Executive Training (GET) ofrece
//                     programas y capacitaciones para profesionales en distintos
//                     niveles de gestión y especialidades, con el propósito de
//                     ampliar conocimientos y desarrollar habilidades en gestión
//                     de personal, liderazgo y emprendimiento.
//                   </p>
//                   <p>
//                     Nuestro compromiso es fomentar el desarrollo personal,
//                     cultural y profesional, buscando la innovación y el
//                     empoderamiento con responsabilidad social. Contamos con
//                     alianzas internacionales que mejoran las perspectivas y
//                     experiencias profesionales mediante programas y actividades
//                     de capacitación y entrenamiento.
//                   </p>
//                   <p>
//                     Como resultado los participantes de un programa GET, además
//                     de mejorar su competitividad, se beneficiarán de las
//                     oportunidades de creación de redes de contacto,
//                     convirtiéndose en líderes de emprendimiento y de cambio en
//                     la sociedad. Te invitamos a ser un profesional global, únete
//                     a GET.
//                   </p>
//                 </div>
//                 <section className=" w-full h-full">
//                   <figure className="relative w-full h-[200px] md:h-[300px] lg:h-[500px] ">
//                     <Image
//                       src={"/imgNosotros.webp"}
//                       alt="Foto"
//                       fill
//                       style={{
//                         objectFit: "cover",
//                       }}
//                       className="rounded-md"
//                     />
//                   </figure>
//                 </section>
//               </section>
//             </div>
//           </CardContent>
//           {/* <CardContent>
//             <div className="w-full">
//               <img
//                 className="w-full rounded-md"
//                 src="/Banners/Nosotros.webp"
//                 alt="header image"
//               />
//             </div>
//           </CardContent> */}
//         </Card>
//         <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2    ">
//           {Data?.map((item, key) => (
//             <div
//               key={item.id}
//               className={`p-8 space-y-3 border-2 border-[#004f51]  rounded-xl shadow-lg bg-[${
//                 key == 0 || key == 3 ? "#004f51" : "#fff"
//               }] ${key == 0 || key == 3 ? "text-white" : "text-gray-900"}`}
//             >
//               <h1 className="text-2xl font-semibold  capitalize  text-center ">
//                 {item.title}
//               </h1>
//               <p className="  text-justify">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Nosotros;
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Nosotros = () => {
  const Data = [
    {
      id: 1,
      title: "MISIÓN",
      icon: "/Nosotros/Mision.png",
      description:
        "Impulsar el desarrollo de competencias personales y profesionales que empoderen a las personas para liderar su crecimiento, transformar sus organizaciones y generar un impacto positivo en la sociedad. En GET, trabajamos como aliados estratégicos de nuestros clientes, fomentando una cultura de mejora continua, innovación y compromiso con el bienestar colectivo.",
    },
    {
      id: 2,
      title: "VISIÓN",
      icon: "/Nosotros/Vision.png",
      description:
        "Ser una organización líder a nivel global en la formación de profesionales y emprendedores capaces de transformar su entorno, promoviendo la innovación, el empoderamiento y la responsabilidad social como pilares para construir una sociedad más consciente, equitativa y sostenible. En GET soñamos con un mundo donde cada persona tenga las herramientas para liderar su carrera, su emprendimiento y su impacto en el mundo.",
    },
  ];

  const Valores = [
    {
      id: 1,
      title: "Desarrollo Humano Integral",
      description:
        "Creemos en el crecimiento personal como base del crecimiento profesional. Promovemos el autoconocimiento, la inteligencia emocional y el liderazgo con sentido.",
    },
    {
      id: 2,
      title: "Espíritu Emprendedor",
      description:
        "Impulsamos la creatividad, la autonomía y la capacidad de generar valor desde cualquier lugar: una organización, una comunidad o un emprendimiento propio.",
    },
    {
      id: 3,
      title: "Innovación con Propósito",
      description:
        "Fomentamos una actitud de aprendizaje constante y apertura al cambio, integrando nuevas ideas y tecnologías para resolver desafíos reales.",
    },
    {
      id: 4,
      title: "Excelencia y Mejora Continua",
      description:
        "Nos comprometemos con altos estándares de calidad en todo lo que hacemos, impulsando procesos formativos que evolucionan junto a las necesidades del mundo actual.",
    },
    {
      id: 5,
      title: "Responsabilidad Social",
      description:
        "Formamos profesionales y emprendedores conscientes de su impacto, que actúan con ética y compromiso para construir una sociedad más consciente, equitativa y sostenible.",
    },
    {
      id: 6,
      title: "Colaboración y Red de Valor",
      description:
        "Valoramos el trabajo en equipo, la construcción de redes y el intercambio de experiencias como motores del crecimiento colectivo.",
    },
    {
      id: 7,
      title: "Visión Global, Acción Local",
      description:
        "Promovemos una mirada internacional y multicultural, con acciones concretas que generen transformación en contextos locales.",
    },
  ];

  const Servicios = [
    {
      id: 1,
      title: "Para Profesionales",
      subtitle: "Potencia tu empleabilidad y desarrollo personal",
      description:
        "Acompañamos a quienes desean fortalecer su perfil profesional para ser más competitivos en el mercado laboral.",
      items: [
        "Liderazgo y gestión de equipos",
        "Comunicación efectiva e influencia",
        "Inteligencia emocional y resiliencia",
        "Marca personal y empleabilidad estratégica",
      ],
    },
    {
      id: 2,
      title: "Para Emprendedores",
      subtitle: "Mentorías segmentadas por niveles",
      description:
        "Creemos que emprender es una forma de liderar el cambio. Programa de mentorías que responde a las distintas necesidades del ecosistema emprendedor:",
      items: [
        "Mentoría Junior: para quienes desean emprender pero aún no tienen una idea definida",
        "Mentoría Semilla: para validar ideas de negocio en etapas tempranas",
        "Mentoría Pro: para emprendedores en marcha que buscan crecer y mejorar sus resultados",
        "Mentoría Expansión: para escalar y profesionalizar proyectos ya consolidados",
      ],
    },
    {
      id: 3,
      title: "Para Empresas",
      subtitle: "Invierte en tu talento y en tus clientes",
      description:
        "Programas de entrenamiento corporativo y consultoría especializada para desarrollar el potencial de equipos y mejorar la experiencia de clientes.",
      items: [
        "Desarrollo del Talento Humano",
        "Consultoría en Marketing y Clientes",
        "Clima organizacional y bienestar laboral",
        "Posicionamiento de marca y fidelización",
      ],
    },
  ];

  return (
    <section>
      <section className="bg-center bg-no-repeat bg-[url('/Banners/Nosotros.webp')] bg-cover bg-[#004f51]/80 bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl text-center py-24 lg:py-[10.5rem]">
          <div className="rounded-xl bg-[#004f51]/50 px-1 py-8 max-w-sm mx-auto">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Nosotros
            </h1>
          </div>
        </div>
      </section>

      <div className="container -mt-[5rem]">
        <Card className="border-2 border-[#004f51] bg-white grid w-full grid-cols-1 my-auto mt-6 mb-8 shadow-md gap-6">
          <CardContent className="pt-5">
            <div className="flex flex-col justify-center items-center text-base font-normal leading-7 w-full px-2 lg:px-4 text-grey-900 text-justify space-y-4">
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                <div className="space-y-4 max-h-[500px] overflow-auto scrollbar-hide">
                  <h1 className="text-xl font-extrabold leading-tight lg:text-2xl text-grey-900 uppercase">
                    Bienvenido a GET — Donde la Empleabilidad y el
                    Emprendimiento se Transforman en Oportunidad
                  </h1>
                  <p>
                    En un mundo en constante cambio, los profesionales y
                    emprendedores necesitan más que conocimientos: necesitan
                    visión, agilidad y propósito. En Global Executive Training
                    (GET), creemos en el poder de las personas para
                    reinventarse, crecer y liderar el cambio, ya sea desde una
                    organización o creando la propia.
                  </p>
                  <p>
                    Ofrecemos programas de capacitación diseñados para potenciar
                    tu perfil profesional, fortalecer tus habilidades de
                    liderazgo y acompañarte en el desarrollo de tu proyecto
                    personal o empresarial. No importa en qué etapa estés
                    —inicio de carrera, transición profesional o expansión de tu
                    emprendimiento— nuestros programas están pensados para ti.
                  </p>
                  <p>
                    Con más de una década de experiencia, GET se posiciona como
                    un aliado estratégico en el desarrollo del talento. Nuestra
                    red de alianzas internacionales y nuestro enfoque práctico y
                    humano nos permiten ofrecer experiencias formativas con
                    impacto real.
                  </p>
                  <p className="font-semibold text-[#004f51]">
                    Formarte con GET es más que capacitarte: es conectarte con
                    tu propósito, con personas que inspiran y con oportunidades
                    que transforman.
                  </p>
                </div>
                <section className="w-full h-full">
                  <figure className="relative w-full h-[200px] md:h-[300px] lg:h-[500px]">
                    <Image
                      src={"/imgNosotros.webp"}
                      alt="Global Executive Training"
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
        </Card>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 mb-8">
          {Data?.map((item, key) => (
            <div
              key={item.id}
              className={`p-8 space-y-3 border-2 border-[#004f51] rounded-xl shadow-lg ${
                key === 0 ? "bg-[#004f51] text-white" : "bg-white text-gray-900"
              }`}
            >
              <h1 className="text-2xl font-semibold capitalize text-center">
                {item.title}
              </h1>
              <p className="text-justify">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Valores Institucionales */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center text-[#004f51] mb-8">
            VALORES INSTITUCIONALES DE GET
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Valores.map((valor, index) => (
              <div
                key={valor.id}
                className={`p-6 space-y-3 border-2 border-[#004f51] rounded-xl shadow-lg ${
                  index % 2 === 0
                    ? "bg-[#004f51] text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <h3 className="text-lg font-semibold text-center">
                  {valor.title}
                </h3>
                <p className="text-sm text-justify">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Servicios */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center text-[#004f51] mb-4">
            ¿Qué hacemos en GET?
          </h2>
          <p className="text-center text-gray-700 mb-8 max-w-4xl mx-auto">
            En Global Executive Training (GET), diseñamos soluciones formativas
            y de consultoría que impulsan el crecimiento de profesionales,
            emprendedores y organizaciones, alineando el talento con los
            desafíos del entorno actual.
          </p>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {Servicios.map((servicio, index) => (
              <div
                key={servicio.id}
                className="p-6 border-2 border-[#004f51] rounded-xl shadow-lg bg-white"
              >
                <h3 className="text-xl font-bold text-[#004f51] mb-2">
                  {servicio.title}
                </h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {servicio.subtitle}
                </h4>
                <p className="text-gray-700 mb-4 text-justify">
                  {servicio.description}
                </p>
                <ul className="space-y-2">
                  {servicio.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-sm text-gray-600 flex items-start"
                    >
                      <span className="text-[#004f51] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="text-center p-8 bg-[#004f51] text-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            En GET, formamos líderes que se reinventan, emprenden y transforman
          </h2>
          <p className="text-lg mb-4">
            Sea cual sea tu punto de partida, estamos aquí para acompañarte con
            conocimiento, cercanía y visión global.
          </p>
          <p className="text-xl font-semibold">
            Conviértete en el protagonista de tu desarrollo. Crece con GET.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
