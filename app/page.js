"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Rocket, Building2, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/firebaseClient";

const HomePage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const { t, language } = useLanguage();
  
  // Estados para datos de Firestore
  const [banners, setBanners] = useState([]);
  const [aliados, setAliados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Asegurar que el componente está montado (hydration fix)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Cargar Banners activos desde Firestore
  useEffect(() => {
    const qBanners = query(
      collection(db, "Banners"),
      orderBy("orden", "asc")
    );
    
    const unsubBanners = onSnapshot(qBanners, (snapshot) => {
      const bannersData = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((banner) => banner.activo === true);
      
      setBanners(bannersData);
      setLoading(false);
    }, (error) => {
      console.error("Error loading banners:", error);
      setLoading(false);
    });

    return () => unsubBanners();
  }, []);

  // Cargar Aliados activos desde Firestore
  useEffect(() => {
    const qAliados = query(
      collection(db, "Aliados"),
      orderBy("orden", "asc")
    );
    
    const unsubAliados = onSnapshot(qAliados, (snapshot) => {
      console.log("Total documentos en Aliados:", snapshot.docs.length);
      
      const aliadosData = snapshot.docs
        .map((doc) => {
          const data = { id: doc.id, ...doc.data() };
          console.log("Aliado encontrado:", data);
          return data;
        })
        .filter((aliado) => {
          const isActive = aliado.activo === true;
          console.log(`Aliado ${aliado.nombre_es} - Activo: ${isActive}`);
          return isActive;
        });
      
      console.log("Aliados activos filtrados:", aliadosData);
      setAliados(aliadosData);
    }, (error) => {
      console.error("Error loading aliados:", error);
    });

    return () => unsubAliados();
  }, []);

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
      {/* Carrusel de Banners desde Firestore */}
      {loading ? (
        <div className="w-full h-[21rem] sm:h-[476px] bg-gray-200 animate-pulse flex items-center justify-center">
          <p className="text-gray-500">Cargando banners...</p>
        </div>
      ) : banners.length > 0 ? (
        <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false}>
          {banners.map((banner) => (
            <div key={banner.id} className="relative w-full h-[21rem] sm:h-[476px] bg-[#004f51]/80">
              <Image
                src={banner.imagenUrl || "/placeholder.svg"}
                alt={banner.titulo || "Banner"}
                fill
                style={{
                  objectFit: "cover",
                }}
                priority
              />
              <div className="absolute top-0 left-0 bg-[#004f51]/30 w-full h-full" />
              {banner.titulo && (
                <div className="absolute bottom-8 left-0 right-0 text-center">
                  <h2 className="text-white text-2xl sm:text-4xl font-bold drop-shadow-lg">
                    {banner.titulo}
                  </h2>
                </div>
              )}
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="relative w-full h-[21rem] sm:h-[476px] bg-[#004f51]/80">
          <Image
            src={"/Banners/Banner.webp"}
            alt="banner default"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute top-0 left-0 bg-[#004f51]/30 w-full h-full" />
        </div>
      )}

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

        {/* Sección 3: NUESTRAS ALIANZAS desde Firestore */}
        <motion.section
          className="container mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="space-y-4 flex items-center flex-col justify-center mb-6">
                <h1 className="text-xl text-center font-extrabold leading-tight lg:text-3xl text-grey-900 uppercase">
                  {language === "es" ? "NUESTRAS ALIANZAS" : "OUR ALLIANCES"}
                </h1>
              </div>

              {!mounted ? (
                <div className="col-span-full text-center py-12">
                  <div className="animate-pulse flex flex-col items-center gap-4">
                    <div className="h-8 w-48 bg-gray-200 rounded"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
                      <div className="h-80 bg-gray-200 rounded-lg"></div>
                      <div className="h-80 bg-gray-200 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 pb-6">
                  {aliados.length > 0 ? (
                    aliados.map((aliado, index) => (
                      <a
                        href={aliado.link || "#"}
                        key={`${aliado.id}-${index}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full max-w-sm"
                      >
                        <div className="hover:-translate-y-2 shadow-xl border-2 rounded-lg bg-[#004f51] border-[#004f51] transition-transform duration-300 overflow-hidden">
                          <div className="relative w-full h-[18rem] bg-gray-200">
                            {aliado.imagenUrl ? (
                              <Image
                                className="object-cover"
                                src={aliado.imagenUrl}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt={language === "es" ? (aliado.nombre_es || "Aliado") : (aliado.nombre_en || "Ally")}
                                onError={(e) => {
                                  console.error("Error cargando imagen:", aliado.imagenUrl);
                                }}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                                <span className="text-gray-500">Sin imagen</span>
                              </div>
                            )}
                          </div>
                          <div className="p-4 min-h-[8rem] flex items-center justify-center bg-[#004f51]">
                            <h5 className="text-center font-bold text-xl md:text-2xl tracking-tight text-white">
                              {language === "es" ? (aliado.nombre_es || "Aliado sin nombre") : (aliado.nombre_en || "Unnamed Ally")}
                            </h5>
                          </div>
                        </div>
                      </a>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-500 text-lg">
                        {language === "es" ? "No hay alianzas disponibles actualmente" : "No alliances available currently"}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default HomePage;