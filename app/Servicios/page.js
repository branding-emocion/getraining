"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  BarChart,
  Lightbulb,
  Star,
  Rocket,
} from "lucide-react"; // Importar iconos

const Servicios = () => {
  const ListServices = [
    {
      name: "Outplacement",
      description:
        "Asesoramiento profesional y personal: Incluye coaching, mentoring y herramientas de evaluación de habilidades, intereses y objetivos de carrera. Así como el apoyo emocional.",
      icon: Briefcase,
    },
    {
      name: "Programas De Mentoring Organizacional Y Profesional",
      description:
        "Orientación y apoyo para el desarrollo de habilidades y competencias.",
      icon: Users,
    },
    {
      name: "Diagnóstico De Desempeño Y Desarrollo De Competencias Directivas",
      description:
        "Evaluación integral para identificar áreas de mejora y fortalecer las capacidades de liderazgo.",
      icon: BarChart,
    },
    {
      name: "Talleres En Habilidades Blandas Y De Gestión",
      description:
        "Capacitación en técnicas avanzadas de gestión y liderazgo. Desarrollo de habilidades interpersonales y emocionales esenciales para el éxito profesional.",
      icon: Lightbulb,
    },
    {
      name: "Marca Personal",
      description:
        "Estrategias para construir y fortalecer la imagen profesional.",
      icon: Star,
    },
    {
      name: "Emprendimiento",
      description:
        "Asesoría y formación para el desarrollo de proyectos empresariales.",
      icon: Rocket,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="">
      {/* Sección del banner principal */}
      <section className="bg-center bg-no-repeat bg-[url('/Banners/Servicios.webp')] bg-cover  bg-[#004f51]/80 bg-blend-multiply">
        <div className=" mx-auto max-w-screen-xl text-center py-24 lg:py-[10.5rem]">
          <div className="rounded-xl bg-[#004f51]/50  px-1 py-8   max-w-sm mx-auto">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
              Servicios
            </h1>
          </div>
        </div>
      </section>
      <div className="container -mt-[5rem] pb-8">
        {/* Sección de introducción GETRAINING */}
        <section className="bg-white rounded-xl border-2 border-[#004f51] shadow-md p-6 my-6">
          <div className="flex flex-col justify-center items-center text-base font-normal leading-7 w-full px-2 lg:px-4 text-grey-900 text-justify space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5 pb-2">
              <div className="flex flex-col justify-center items-center gap-4 text-justify">
                <h1 className="text-xl font-semibold leading-tight lg:text-2xl text-grey-900 uppercase">
                  GETRAINING{" "}
                </h1>
                <p>
                  En GET, ofrecemos una amplia gama de servicios de consultoría,
                  asesoría, mentoring y capacitación enfocados en el desarrollo
                  organizacional y profesional. Nuestros programas están
                  diseñados para satisfacer las necesidades específicas de cada
                  organización, brindando soluciones a medida que generan
                  resultados tangibles.
                </p>
                <p>
                  Nuestro compromiso es ofrecer programas, capacitaciones y
                  entrenamientos diseñados específicamente para las necesidades
                  de cada cliente, ajustando los presupuestos a la medida de
                  cada organización.
                </p>
                <p></p>
              </div>
              <div className="w-full h-full">
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
              </div>
            </div>
          </div>
        </section>
        {/* Sección destacada: Marketing & Customer Consulting */}
        <section className="w-full py-8 bg-gradient-to-br from-[#004f51] to-[#007a7c] text-white rounded-lg shadow-xl overflow-hidden my-8">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
            <Image
              src="/images/mentoring-program.png"
              alt="Programa de Mentoría"
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-0 z-0 opacity-50"
            />
            <div className="relative z-10 text-center space-y-4 p-4">
              <h2 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl uppercase">
                PROGRAMA DE MENTORÍA
              </h2>
              <div className="bg-white text-[#004f51] rounded-full px-6 py-3 inline-block text-lg font-semibold shadow-lg">
                Inscríbete y vuelve a tomar el control de tu negocio.
              </div>
            </div>
          </div>
          <div className="relative z-10 p-6 md:p-10 lg:p-12 -mt-16 md:-mt-24 lg:-mt-32">
            <Card className="bg-white text-gray-900 rounded-xl shadow-2xl p-6 md:p-8 lg:p-10">
              <CardContent className="space-y-6">
                <motion.h3
                  className="text-3xl font-bold text-[#004f51] text-center"
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Marketing & Customer Consulting
                </motion.h3>
                <motion.div
                  className="text-center space-y-4"
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="text-xl font-semibold text-[#004f51]">
                    ¿Sabes qué le duele a tu negocio?
                  </h4>
                  <p className="text-lg">
                    Muchos negocios enfrentan síntomas como la caída en ventas,
                    pérdida de clientes, campañas que no generan resultados o un
                    crecimiento que se estanca, pero pocos saben cuál es la
                    causa real del problema.
                  </p>
                  <p className="text-lg">
                    En GET, te ayudamos a diagnosticar con precisión lo que está
                    afectando a tu negocio para que puedas tomar decisiones
                    basadas en datos y no en suposiciones.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </div>
          <div className="p-6 md:p-10 lg:p-12 space-y-8">
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold">
                Diagnóstico e Investigación de Mercados
              </h3>
              <p className="text-lg">
                Tu punto de partida para tomar decisiones estratégicas.
              </p>
              <p className="text-lg">
                Antes de lanzar una campaña, rediseñar tu propuesta de valor o
                invertir en nuevos canales, necesitas comprender a fondo qué
                está pasando con tu mercado, tus clientes y tu marca.
              </p>
              <p className="text-lg">
                En GET, desarrollamos diagnósticos comerciales personalizados
                que incluyen:
              </p>
              <ul className="list-disc space-y-2 pl-8 text-lg">
                <li>Análisis de la experiencia y satisfacción del cliente</li>
                <li>Evaluación del posicionamiento y percepción de marca</li>
                <li>
                  Investigación de hábitos, necesidades y motivaciones del
                  consumidor
                </li>
                <li>Revisión de estrategias de comunicación y fidelización</li>
                <li>Mapeo de la competencia y tendencias de mercado</li>
              </ul>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold">
                ¿Qué podemos resolver contigo?
              </h3>
              <ul className="list-disc space-y-2 pl-8 text-lg">
                <li>¿Tus clientes ya no te eligen como antes?</li>
                <li>¿No sabes cómo diferenciarte en tu mercado?</li>
                <li>¿Inviertes en marketing, pero no ves resultados claros?</li>
                <li>¿Tus canales digitales no conectan con tu público?</li>
                <li>
                  ¿Quieres lanzar un nuevo producto, pero no estás seguro de
                  cómo será recibido?
                </li>
              </ul>
              <p className="text-lg">
                No estás solo. A través de nuestra consultoría en marketing y
                clientes, te acompañamos paso a paso para transformar estos
                retos en oportunidades.
              </p>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold">
                ¿Qué obtienes con nuestro servicio?
              </h3>
              <ul className="list-disc space-y-2 pl-8 text-lg">
                <li>Un diagnóstico claro de la situación real de tu negocio</li>
                <li>Recomendaciones estratégicas y accionables</li>
                <li>Soporte en la toma de decisiones comerciales</li>
                <li>Herramientas para medir el impacto de tus acciones</li>
                <li>
                  Acompañamiento profesional con visión global y enfoque local
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="space-y-4 text-center"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-2xl font-bold">Trabajemos juntos</h3>
              <p className="text-lg">
                En GET, creemos que el conocimiento profundo de tu cliente es la
                base de toda estrategia exitosa.
              </p>
              <p className="text-lg">
                Te invitamos a dar el primer paso con un diagnóstico completo de
                tu situación comercial. Contáctanos hoy y empieza a descubrir lo
                que tu negocio necesita para crecer. Conecta con tus clientes.
                Fortalece tu marca.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Sección de la lista de servicios (las 6 tarjetas) - REDISEÑADA */}
        <section className="bg-white rounded-xl border-2 border-[#004f51] shadow-md p-6 my-6">
          <div className="flex flex-col justify-center items-center text-base font-normal leading-7 w-full px-2 lg:px-4 text-grey-900 text-justify space-y-4">
            <h2 className="text-3xl font-bold text-[#004f51] text-center mb-8">
              Nuestros Servicios Adicionales
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {ListServices?.map((item, key) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={key}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full flex flex-col p-6 space-y-4 border-2 border-[#004f51] rounded-xl shadow-lg bg-white text-gray-900">
                      <CardContent className="flex flex-col items-center text-center p-0">
                        <div className="mb-4 p-3 rounded-full bg-[#004f51] text-white">
                          <IconComponent size={48} />
                        </div>
                        <h1 className="text-2xl font-semibold capitalize mb-2">
                          {item.name}
                        </h1>
                        <p className="text-justify text-base">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Servicios;
