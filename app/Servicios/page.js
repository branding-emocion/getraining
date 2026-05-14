"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, Briefcase, Rocket, Building2, CreditCard } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "../LanguageContext";

// ── Carousel images (add/remove as needed) ──
const carouselImages = [
  { src: "/slider/img4.webp", alt: "GET Training 1" },
  { src: "/slider/img5.webp", alt: "GET Training 2" },
  { src: "/slider/img6.webp", alt: "GET Training 3" },
];

const Servicios = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const { language } = useLanguage();

  // ── Carousel state ──
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  }, []);

  const goToSlide = useCallback(
    (index) => {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    },
    [currentSlide]
  );

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const serviciosData = [
    {
      id: 1,
      title: language === "es" ? "Para Profesionales" : "For Professionals",
      subtitle:
        language === "es"
          ? "Potencia tu empleabilidad y desarrollo personal"
          : "Enhance your employability and personal development",
      icon: Briefcase,
      color: "from-[#004f51] to-[#007a7c]",
      description:
        language === "es"
          ? "Acompañamos a quienes desean fortalecer su perfil profesional para ser más competitivos en el mercado laboral. Potenciamos habilidades blandas y ayudamos a construir carreras con propósito."
          : "We support those who want to strengthen their professional profile to be more competitive in the job market. We enhance soft skills and help build purposeful careers.",
      items:
        language === "es"
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
      detailedContent: null,
    },
    {
      id: 2,
      title: language === "es" ? "Para Emprendedores" : "For Entrepreneurs",
      subtitle: language === "es" ? "Mentorías segmentadas por niveles" : "Mentorships segmented by levels",
      icon: Rocket,
      color: "from-[#007a7c] to-[#00a5a8]",
      description:
        language === "es"
          ? "Creemos que emprender es una forma de liderar el cambio. Transformamos ideas en negocios sostenibles y escalables. Programa de mentorías que responde a las distintas necesidades del ecosistema emprendedor:"
          : "We believe that entrepreneurship is a way to lead change. We transform ideas into sustainable and scalable businesses. Mentorship program that responds to the different needs of the entrepreneurial ecosystem:",
      items:
        language === "es"
          ? [
              "Mentoría Junior: para quienes desean emprender pero aún no tienen una idea definida",
              "Mentoría Semilla: para validar ideas de negocio en etapas tempranas",
              "Mentoría Pro: para emprendedores en marcha que buscan crecer y mejorar sus resultados",
              "Mentoría Expansión: para escalar y profesionalizar proyectos ya consolidados",
            ]
          : [
              "Junior Mentorship: for those who want to start a business but don't have a defined idea yet",
              "Seed Mentorship: to validate business ideas in early stages",
              "Pro Mentorship: for entrepreneurs in progress looking to grow and improve their results",
              "Expansion Mentorship: to scale and professionalize already established projects",
            ],
      detailedContent: null,
    },
    {
      id: 3,
      title: language === "es" ? "Para Empresas" : "For Companies",
      subtitle:
        language === "es"
          ? "Invierte en tu talento y en tus clientes"
          : "Invest in your talent and your customers",
      icon: Building2,
      color: "from-[#00a5a8] to-[#004f51]",
      description:
        language === "es"
          ? "Programas de entrenamiento corporativo y consultoría especializada para desarrollar el potencial de equipos y mejorar la experiencia de clientes. Desarrollamos talento humano, mejoramos gestión y fortalecemos la relación con clientes."
          : "Corporate training programs and specialized consulting to develop team potential and improve customer experience. We develop human talent, improve management and strengthen customer relationships.",
      items:
        language === "es"
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
      detailedContent: null,
    },
  ];

  return (
    <div className="">
      {/* Banner principal */}
      <section className="bg-center bg-no-repeat bg-[url('/Banners/Servicios.webp')] bg-cover bg-[#004f51]/80 bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl text-center py-24 lg:py-[10.5rem]">
          <div className="rounded-xl bg-[#004f51]/50 px-1 py-8 max-w-sm mx-auto">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              {language === "es" ? "Servicios" : "Services"}
            </h1>
          </div>
        </div>
      </section>

      <div className="container -mt-[5rem] pb-8">
        {/* Introducción GET */}
        <section className="bg-white rounded-xl border-2 border-[#004f51] shadow-md p-6 my-6">
          <div className="flex flex-col justify-center items-center text-base font-normal leading-7 w-full px-2 lg:px-4 text-gray-900 text-justify space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5 pb-2">
              <div className="flex flex-col justify-center items-center gap-4 text-justify">
                <h1 className="text-xl font-semibold leading-tight lg:text-2xl text-gray-900 uppercase">
                  GETRAINING
                </h1>

                <p>
                  {language === "es"
                    ? "En Global Executive Training (GET) impulsamos el crecimiento de profesionales, emprendedores y empresas a través de consultoría, capacitación, mentorías y programas de desarrollo enfocados en resultados reales."
                    : "At Global Executive Training (GET) we drive the growth of professionals, entrepreneurs and companies through consulting, training, mentorships and development programs focused on real results."}
                </p>

                <p>
                  {language === "es"
                    ? "Diseñamos soluciones estratégicas que fortalecen la empleabilidad, el liderazgo, la marca personal y el espíritu emprendedor, alineando el talento con los desafíos del entorno actual."
                    : "We design strategic solutions that strengthen employability, leadership, personal branding and entrepreneurial spirit, aligning talent with current challenges."}
                </p>

                <div className="w-full space-y-3 bg-[#004f51] text-white p-4 rounded-lg">
                  <h3 className="font-bold text-lg">
                    {language === "es" ? "Acompañamos a:" : "We support:"}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00a6b6] font-bold">•</span>
                      <span>
                        <strong>{language === "es" ? "Profesionales:" : "Professionals:"}</strong>{" "}
                        {language === "es"
                          ? "a potenciar sus habilidades blandas y construir carreras con propósito."
                          : "to enhance their soft skills and build purposeful careers."}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00a6b6] font-bold">•</span>
                      <span>
                        <strong>{language === "es" ? "Emprendedores:" : "Entrepreneurs:"}</strong>{" "}
                        {language === "es"
                          ? "a transformar ideas en negocios sostenibles y escalables."
                          : "to transform ideas into sustainable and scalable businesses."}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00a6b6] font-bold">•</span>
                      <span>
                        <strong>{language === "es" ? "Empresas:" : "Companies:"}</strong>{" "}
                        {language === "es"
                          ? "a desarrollar su talento humano, mejorar su gestión y fortalecer su relación con clientes."
                          : "to develop their human talent, improve their management and strengthen their customer relationships."}
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="font-semibold text-[#004f51] text-center">
                  {language === "es"
                    ? "En GET no solo formamos: diagnosticamos, acompañamos y transformamos personas, proyectos y organizaciones para que generen impacto y crecimiento sostenible."
                    : "At GET we don't just train: we diagnose, support and transform people, projects and organizations to generate impact and sustainable growth."}
                </p>
              </div>

              {/* ── CAROUSEL ── */}
              <div className="w-full h-full">
                <div className="relative w-full h-[200px] md:h-[300px] lg:h-[500px] rounded-md overflow-hidden group">
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                      key={currentSlide}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={carouselImages[currentSlide].src}
                        alt={carouselImages[currentSlide].alt}
                        fill
                        className="rounded-md object-cover"
                        priority={currentSlide === 0}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Arrows — visible on hover */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#004f51]/70 hover:bg-[#004f51] text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#004f51]/70 hover:bg-[#004f51] text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "bg-white scale-110"
                            : "bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galería de Fotos */}
        <section className="my-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-[#004f51] mb-3">
              {language === "es" ? "GET en Acción" : "GET in Action"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === "es"
                ? "Conoce cómo transformamos carreras y negocios a través de nuestros programas de capacitación y mentoría"
                : "Discover how we transform careers and businesses through our training and mentorship programs"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-[350px] w-full">
                <Image
                  src="/ser1.jpeg"
                  alt="GET Training Session"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004f51]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-semibold text-lg">
                  {language === "es" ? "Capacitación Profesional" : "Professional Training"}
                </p>
                <p className="text-sm opacity-90">
                  {language === "es"
                    ? "Desarrollo de habilidades y liderazgo"
                    : "Skills and leadership development"}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-[350px] w-full">
                <Image
                  src="/ser2.jpeg"
                  alt="GET Workshops"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004f51]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-semibold text-lg">
                  {language === "es" ? "Talleres Especializados" : "Specialized Workshops"}
                </p>
                <p className="text-sm opacity-90">
                  {language === "es"
                    ? "Marca personal y empoderamiento"
                    : "Personal branding and empowerment"}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-[350px] w-full">
                <Image
                  src="/img3.jpg"
                  alt="GET Business Consulting"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004f51]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-semibold text-lg">
                  {language === "es" ? "Consultoría Empresarial" : "Business Consulting"}
                </p>
                <p className="text-sm opacity-90">
                  {language === "es"
                    ? "Estrategias de mercado y análisis"
                    : "Market strategies and analysis"}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Secciones Expandibles */}
        <section className="space-y-6 my-8">
          <h2 className="text-3xl font-bold text-center text-[#004f51] mb-8">
            {language === "es" ? "Nuestros Servicios" : "Our Services"}
          </h2>

          {serviciosData.map((servicio) => {
            const IconComponent = servicio.icon;
            const isExpanded = expandedSection === servicio.id;

            return (
              <motion.div
                key={servicio.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl border-2 border-[#004f51] shadow-lg overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleSection(servicio.id)}
                  className={`w-full p-6 flex items-center justify-between bg-gradient-to-r ${servicio.color} text-white hover:opacity-90 transition-opacity`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-full">
                      <IconComponent size={32} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold">{servicio.title}</h3>
                      <p className="text-sm opacity-90">{servicio.subtitle}</p>
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
                      <div className="p-6 space-y-6">
                        <p className="text-gray-700 text-lg text-justify">
                          {servicio.description}
                        </p>

                        <div className="space-y-3">
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

                        {/* Sección de PayPal Mejorada */}
                        <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-2 border-blue-200">
                          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                              <div className="p-3 bg-white rounded-full shadow-md">
                                <CreditCard className="text-[#0070ba]" size={32} />
                              </div>
                              <div>
                                <h4 className="text-xl font-bold text-gray-800 mb-1">
                                  💳 {language === "es" ? "Métodos de Pago" : "Payment Methods"}
                                </h4>
                                <p className="text-gray-600">
                                  {language === "es"
                                    ? "Aceptamos pagos seguros con PayPal y Tarjetas"
                                    : "We accept secure payments with PayPal and Cards"}
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-8">
                                {/* Código QR */}
                                <div className="text-center">
                                    <div className="bg-white p-2 rounded-lg shadow-sm mb-2">
                                        <Image
                                            src="/qr-code.png"
                                            alt="PayPal QR Code"
                                            width={120}
                                            height={120}
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="text-xs font-bold text-[#0070ba] uppercase">Scan & Pay</p>
                                </div>

                                {/* Botón y Logo */}
                                <div className="flex flex-col items-center gap-3">
                                    <Image
                                        src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
                                        alt="PayPal Logo"
                                        width={111}
                                        height={69}
                                        className="object-contain"
                                    />

                                    <a
                                        href="https://www.paypal.com/ncp/payment/D78DRWYX9EP78"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#0070ba] hover:bg-[#005ea6] text-white px-8 py-2 rounded-full font-semibold transition-colors shadow-md whitespace-nowrap"
                                    >
                                        {language === "es" ? "Pagar ahora" : "Pay now"}
                                    </a>
                                </div>
                            </div>
                          </div>
                        </div>

                        {servicio.detailedContent && (
                          <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                            {servicio.detailedContent}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-[#004f51] to-[#007a7c] text-white rounded-xl shadow-xl p-8 my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === "es"
              ? "¿Listo para transformar tu carrera o negocio?"
              : "Ready to transform your career or business?"}
          </h2>
          <p className="text-lg mb-6">
            {language === "es"
              ? "Contáctanos y descubre cómo podemos ayudarte a alcanzar tus objetivos"
              : "Contact us and discover how we can help you achieve your goals"}
          </p>

          <a
            href="/Contacto"
            className="inline-block bg-white text-[#004f51] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            {language === "es" ? "Contáctanos" : "Contact Us"}
          </a>
        </section>
      </div>
    </div>
  );
};

export default Servicios;