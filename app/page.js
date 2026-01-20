"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Rocket, Building2, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";

const HomePage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const { t, language } = useLanguage();

  const Alianzas = [
    {
      img: "/Aliado1.webp",
      nombre: language === "es" ? "Congreso Hispanoamericano de negocios" : "Hispanic American Business Congress",
      link: "https://congresohispanoamericanodenegocios.com",
    },
    {
      img: "/Aliado3.jpg",
      nombre: language === "es" ? "Red Latinoamericana de conferencistas" : "Latin American Network of Speakers",
      link: "https://redconferencistas.com/",
    },
  ];

  const serviciosInicio = [
    {
      id: 1,
      title: t("paraProfesionales"),
      icon: Briefcase,
      color: "from-[#004f51] to-[#007a7c]",
      description: language === "es" 
        ? "Potencia tus habilidades blandas y construye una carrera con propósito."
        : "Enhance your soft skills and build a purposeful career.",
      items: language === "es" 
        ? [
            "Liderazgo y gestión de equipos",
            "Comunicación efectiva e influencia",
            "Inteligencia emocional y resiliencia",
            "Marca personal y empleabilidad estratégica",
          ]
        : [
            "Leadership and team management",
            "Effective communication and influence",
            "Emotional intelligence and resilience",
            "Personal branding and strategic employability",
          ],
    },
    {
      id: 2,
      title: t("paraEmprendedores"),
      icon: Rocket,
      color: "from-[#007a7c] to-[#00a5a8]",
      description: language === "es"
        ? "Transforma ideas en negocios sostenibles y escalables."
        : "Transform ideas into sustainable and scalable businesses.",
      items: language === "es"
        ? [
            "Mentoría Junior: para quienes desean emprender pero aún no tienen una idea definida",
            "Mentoría Semilla: para validar ideas de negocio en etapas tempranas",
            "Mentoría Pro: para emprendedores en marcha que buscan crecer",
            "Mentoría Expansión: para escalar y profesionalizar proyectos consolidados",
          ]
        : [
            "Junior Mentorship: for those who want to start a business but don't have a defined idea yet",
            "Seed Mentorship: to validate business ideas in early stages",
            "Pro Mentorship: for entrepreneurs in progress looking to grow",
            "Expansion Mentorship: to scale and professionalize established projects",
          ],
    },
    {
      id: 3,
      title: t("paraEmpresas"),
      icon: Building2,
      color: "from-[#00a5a8] to-[#004f51]",
      description: language === "es"
        ? "Desarrolla tu talento humano, mejora tu gestión y fortalece la relación con clientes."
        : "Develop your human talent, improve your management and strengthen customer relationships.",
      items: language === "es"
        ? [
            "Desarrollo del Talento Humano",
            "Consultoría en Marketing y Clientes",
            "Clima organizacional y bienestar laboral",
            "Posicionamiento de marca y fidelización",
          ]
        : [
            "Human Talent Development",
            "Marketing and Customer Consulting",
            "Organizational climate and work wellbeing",
            "Brand positioning and customer loyalty",
          ],
    },
  ];

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="pb-10">
      <Carousel infiniteLoop autoPlay showStatus={false}>
        <div className="relative w-full h-[21rem] sm:h-[476px] bg-[#004f51]/80">
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
        <div className="relative w-full h-[20rem] sm:h-[476px] bg-[#004f51]/80">
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
        <div className="relative w-full h-[20rem] sm:h-[476px] bg-[#004f51]/80">
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
        {/* Sección 1: Global Executive Training (GET) */}
        <motion.section
          className="relative container mx-auto z-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="bg-white shadow-lg">
            <CardContent>
              <div className="space-y-2 pt-6">
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="space-y-4 flex items-start flex-col justify-center">
                    <h1 className="text-xl text-center font-extrabold leading-tight lg:text-3xl text-grey-900 pt-4 uppercase">
                      {language === "es" 
                        ? "Impulsamos talento. Creamos impacto. Transformamos futuros."
                        : "We drive talent. We create impact. We transform futures."}
                    </h1>
                    <p className="text-lg text-justify">
                      {language === "es"
                        ? "En Global Executive Training (GET) ayudamos a profesionales, emprendedores y empresas a crecer con claridad y estrategia. Diseñamos soluciones de consultoría y formación que fortalecen la empleabilidad, el liderazgo, la marca personal y el emprendimiento, alineando el talento con los desafíos del entorno actual."
                        : "At Global Executive Training (GET), we help professionals, entrepreneurs and companies grow with clarity and strategy. We design consulting and training solutions that strengthen employability, leadership, personal branding and entrepreneurship, aligning talent with current challenges."}
                    </p>
                    <p className="text-lg text-justify font-semibold text-[#004f51]">
                      {language === "es"
                        ? "Formamos líderes y emprendedores globales que transforman el mundo con innovación, propósito y responsabilidad social, generando resultados sostenibles para las personas, los negocios y la sociedad."
                        : "We train global leaders and entrepreneurs who transform the world with innovation, purpose and social responsibility, generating sustainable results for people, businesses and society."}
                    </p>
                    <Link href={"/Nosotros"} className="flex">
                      <div
                        aria-label={t("nosotros")}
                        title={t("nosotros")}
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004f51] bg-[#004f51] transition duration-150 ease-in-out hover:bg-[#00a6b6] lg:text-xl lg:font-bold rounded text-white px-4 sm:px-10 border border-[#004f51] py-2 sm:py-4 text-sm"
                      >
                        {language === "es" ? "Más Información" : "More Information"}
                      </div>
                    </Link>
                  </div>
                  <figure className="relative w-full h-[200px] md:h-[400px]">
                    <Image
                      src={"/img/img1.jpeg"}
                      alt="Global Executive Training"
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-md"
                    />
                  </figure>
                </section>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Sección 2: Nuestros servicios */}
        <motion.section
          className="container mx-auto mt-32"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="bg-white shadow-lg">
            <CardContent>
              <div className="space-y-4 flex items-center flex-col justify-center pt-6">
                <h1 className="text-xl text-center font-extrabold leading-tight lg:text-3xl text-grey-900 uppercase">
                  {t("nuestrosServicios")}
                </h1>
              </div>

              <div className="space-y-6 py-6">
                {serviciosInicio.map((servicio) => {
                  const IconComponent = servicio.icon;
                  const isExpanded = expandedService === servicio.id;

                  return (
                    <motion.div
                      key={servicio.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-xl border-2 border-[#004f51] shadow-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleService(servicio.id)}
                        className={`w-full p-6 flex items-center justify-between bg-gradient-to-r ${servicio.color} text-white hover:opacity-90 transition-opacity`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-white/20 rounded-full">
                            <IconComponent size={32} />
                          </div>
                          <div className="text-left">
                            <h3 className="text-2xl font-bold">{servicio.title}</h3>
                            <p className="text-sm opacity-90">{servicio.description}</p>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={32} />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 space-y-3">
                              {servicio.items.map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                                >
                                  <div className="mt-1 w-2 h-2 rounded-full bg-[#004f51] flex-shrink-0" />
                                  <p className="text-gray-700">{item}</p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              <div className="text-center pt-4">
                <Link href={"/Servicios"}>
                  <div
                    title={t("servicios")}
                    aria-label={t("servicios")}
                    className="inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004f51] bg-[#004f51] transition duration-150 ease-in-out hover:bg-[#00a6b6] lg:text-xl lg:font-bold rounded text-white px-4 sm:px-10 border border-[#004f51] py-2 sm:py-4 text-sm"
                  >
                    {language === "es" ? "Ver todos nuestros servicios" : "See all our services"}
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Sección 3: NUESTRAS ALIANZAS */}
        <motion.section
          className="container mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="bg-white shadow-lg">
            <CardContent>
              <div className="space-y-4 flex items-center flex-col justify-center">
                <h1 className="text-xl text-center font-extrabold leading-tight lg:text-3xl text-grey-900 pt-4 uppercase">
                  {language === "es" ? "NUESTRAS ALIANZAS" : "OUR ALLIANCES"}
                </h1>
              </div>
              <motion.div
                className="pt-3 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-x-8 gap-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.2 }}
              >
                {Alianzas.map((alianza, key) => (
                  <motion.a
                    href={alianza.link}
                    key={key}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-72 shadow-lg"
                    variants={cardVariants}
                  >
                    <div className="hover:-translate-y-2 shadow-md border rounded-lg bg-[#004f51] border-[#004f51]">
                      <figure className="relative w-full h-[18rem]">
                        <Image
                          className="rounded-t-lg object-fill p-0.5"
                          src={alianza.img || "/placeholder.svg"}
                          fill
                          alt={alianza.nombre}
                        />
                      </figure>
                      <div className="p-4 h-32">
                        <div>
                          <h5 className="text-center font-bold text-2xl tracking-tight mb-2 text-white">
                            {alianza.nombre}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default HomePage;