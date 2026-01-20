"use client";
import { CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

const Nosotros = () => {
  const { language } = useLanguage();

  const Data = [
    {
      id: 1,
      title: language === "es" ? "MISIÓN" : "MISSION",
      icon: "/Nosotros/Mision.png",
      description:
        language === "es"
          ? "Impulsar el desarrollo de competencias personales y profesionales que empoderen a las personas para liderar su crecimiento, transformar sus organizaciones y generar un impacto positivo en la sociedad. En GET, trabajamos como aliados estratégicos de nuestros clientes, fomentando una cultura de mejora continua, innovación y compromiso con el bienestar colectivo."
          : "Drive the development of personal and professional competencies that empower people to lead their growth, transform their organizations and generate a positive impact on society. At GET, we work as strategic allies of our clients, fostering a culture of continuous improvement, innovation and commitment to collective wellbeing.",
    },
    {
      id: 2,
      title: language === "es" ? "VISIÓN" : "VISION",
      icon: "/Nosotros/Vision.png",
      description:
        language === "es"
          ? "Ser una organización líder a nivel global en la formación de profesionales y emprendedores capaces de transformar su entorno, promoviendo la innovación, el empoderamiento y la responsabilidad social como pilares para construir una sociedad más consciente, equitativa y sostenible. En GET soñamos con un mundo donde cada persona tenga las herramientas para liderar su carrera, su emprendimiento y su impacto en el mundo."
          : "Be a global leading organization in training professionals and entrepreneurs capable of transforming their environment, promoting innovation, empowerment and social responsibility as pillars to build a more conscious, equitable and sustainable society. At GET we dream of a world where everyone has the tools to lead their career, their entrepreneurship and their impact on the world.",
    },
  ];

  const Valores = [
    {
      id: 1,
      title: language === "es" ? "Desarrollo Humano Integral" : "Integral Human Development",
      description:
        language === "es"
          ? "Creemos en el crecimiento personal como base del crecimiento profesional. Promovemos el autoconocimiento, la inteligencia emocional y el liderazgo con sentido."
          : "We believe in personal growth as the basis of professional growth. We promote self-knowledge, emotional intelligence and meaningful leadership.",
    },
    {
      id: 2,
      title: language === "es" ? "Espíritu Emprendedor" : "Entrepreneurial Spirit",
      description:
        language === "es"
          ? "Impulsamos la creatividad, la autonomía y la capacidad de generar valor desde cualquier lugar: una organización, una comunidad o un emprendimiento propio."
          : "We promote creativity, autonomy and the ability to generate value from anywhere: an organization, a community or your own entrepreneurship.",
    },
    {
      id: 3,
      title: language === "es" ? "Innovación con Propósito" : "Innovation with Purpose",
      description:
        language === "es"
          ? "Fomentamos una actitud de aprendizaje constante y apertura al cambio, integrando nuevas ideas y tecnologías para resolver desafíos reales."
          : "We foster an attitude of constant learning and openness to change, integrating new ideas and technologies to solve real challenges.",
    },
    {
      id: 4,
      title: language === "es" ? "Excelencia y Mejora Continua" : "Excellence and Continuous Improvement",
      description:
        language === "es"
          ? "Nos comprometemos con altos estándares de calidad en todo lo que hacemos, impulsando procesos formativos que evolucionan junto a las necesidades del mundo actual."
          : "We are committed to high quality standards in everything we do, driving training processes that evolve alongside current world needs.",
    },
    {
      id: 5,
      title: language === "es" ? "Responsabilidad Social" : "Social Responsibility",
      description:
        language === "es"
          ? "Formamos profesionales y emprendedores conscientes de su impacto, que actúan con ética y compromiso para construir una sociedad más consciente, equitativa y sostenible."
          : "We train professionals and entrepreneurs aware of their impact, who act with ethics and commitment to build a more conscious, equitable and sustainable society.",
    },
    {
      id: 6,
      title: language === "es" ? "Colaboración y Red de Valor" : "Collaboration and Value Network",
      description:
        language === "es"
          ? "Valoramos el trabajo en equipo, la construcción de redes y el intercambio de experiencias como motores del crecimiento colectivo."
          : "We value teamwork, network building and the exchange of experiences as engines of collective growth.",
    },
    {
      id: 7,
      title: language === "es" ? "Visión Global, Acción Local" : "Global Vision, Local Action",
      description:
        language === "es"
          ? "Promovemos una mirada internacional y multicultural, con acciones concretas que generen transformación en contextos locales."
          : "We promote an international and multicultural perspective, with concrete actions that generate transformation in local contexts.",
    },
  ];

  const Servicios = [
    {
      id: 1,
      title: language === "es" ? "Para Profesionales" : "For Professionals",
      subtitle:
        language === "es"
          ? "Potencia tu empleabilidad y desarrollo personal"
          : "Enhance your employability and personal development",
      description:
        language === "es"
          ? "Acompañamos a quienes desean fortalecer su perfil profesional para ser más competitivos en el mercado laboral."
          : "We support those who want to strengthen their professional profile to be more competitive in the job market.",
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
    },
    {
      id: 2,
      title: language === "es" ? "Para Emprendedores" : "For Entrepreneurs",
      subtitle: language === "es" ? "Mentorías segmentadas por niveles" : "Mentorships segmented by levels",
      description:
        language === "es"
          ? "Creemos que emprender es una forma de liderar el cambio. Programa de mentorías que responde a las distintas necesidades del ecosistema emprendedor:"
          : "We believe that entrepreneurship is a way to lead change. Mentorship program that responds to the different needs of the entrepreneurial ecosystem:",
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
    },
    {
      id: 3,
      title: language === "es" ? "Para Empresas" : "For Companies",
      subtitle:
        language === "es" ? "Invierte en tu talento y en tus clientes" : "Invest in your talent and your customers",
      description:
        language === "es"
          ? "Programas de entrenamiento corporativo y consultoría especializada para desarrollar el potencial de equipos y mejorar la experiencia de clientes."
          : "Corporate training programs and specialized consulting to develop team potential and improve customer experience.",
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
    },
  ];

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
    <section>
      <section className="bg-center bg-no-repeat bg-[url('/Banners/Nosotros.webp')] bg-cover bg-[#004f51]/80 bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl text-center py-24 lg:py-[10.5rem]">
          <div className="rounded-xl bg-[#004f51]/50 px-1 py-8 max-w-sm mx-auto">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              {language === "es" ? "Nosotros" : "About Us"}
            </h1>
          </div>
        </div>
      </section>
      <div className="container -mt-[5rem]">
        {/* Sección principal de bienvenida a GET */}
        <motion.div
          className="border-2 border-[#004f51] bg-white grid w-full grid-cols-1 my-auto mt-6 mb-8 shadow-md gap-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <CardContent className="pt-5">
            <div className="flex flex-col justify-center items-center text-base font-normal leading-7 w-full px-2 lg:px-4 text-grey-900 text-justify space-y-4">
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                <div className="space-y-4 max-h-[500px] overflow-auto scrollbar-hide">
                  <h1 className="text-xl font-extrabold leading-tight lg:text-2xl text-grey-900 uppercase">
                    {language === "es"
                      ? "Bienvenido a GET — Donde la Empleabilidad y el Emprendimiento se Transforman en Oportunidad"
                      : "Welcome to GET — Where Employability and Entrepreneurship Transform into Opportunity"}
                  </h1>
                  <p>
                    {language === "es"
                      ? "En un mundo en constante cambio, los profesionales y emprendedores necesitan más que conocimientos: necesitan visión, agilidad y propósito. En Global Executive Training (GET), creemos en el poder de las personas para reinventarse, crecer y liderar el cambio, ya sea desde una organización o creando la propia."
                      : "In a constantly changing world, professionals and entrepreneurs need more than knowledge: they need vision, agility and purpose. At Global Executive Training (GET), we believe in people's power to reinvent themselves, grow and lead change, either from within an organization or by creating their own."}
                  </p>
                  <p>
                    {language === "es"
                      ? "Ofrecemos programas de capacitación diseñados para potenciar tu perfil profesional, fortalecer tus habilidades de liderazgo y acompañarte en el desarrollo de tu proyecto personal o empresarial. No importa en qué etapa estés —inicio de carrera, transición profesional o expansión de tu emprendimiento— nuestros programas están pensados para ti."
                      : "We offer training programs designed to enhance your professional profile, strengthen your leadership skills and support you in developing your personal or business project. No matter what stage you're at —career start, professional transition or entrepreneurship expansion— our programs are designed for you."}
                  </p>
                  <p>
                    {language === "es"
                      ? "Con más de una década de experiencia, GET se posiciona como un aliado estratégico en el desarrollo del talento. Nuestra red de alianzas internacionales y nuestro enfoque práctico y humano nos permiten ofrecer experiencias formativas con impacto real."
                      : "With more than a decade of experience, GET positions itself as a strategic ally in talent development. Our network of international alliances and our practical and human approach allow us to offer training experiences with real impact."}
                  </p>
                  <p className="font-semibold text-[#004f51]">
                    {language === "es"
                      ? "Formarte con GET es más que capacitarte: es conectarte con tu propósito, con personas que inspiran y con oportunidades que transforman."
                      : "Training with GET is more than getting qualified: it's connecting with your purpose, with people who inspire and with opportunities that transform."}
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
        </motion.div>

        {/* Misión y Visión */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {Data?.map((item, key) => (
            <motion.div
              key={item.id}
              className={`p-8 space-y-3 border-2 border-[#004f51] rounded-xl shadow-lg ${
                key === 0 ? "bg-[#004f51] text-white" : "bg-white text-gray-900"
              }`}
              variants={cardVariants}
            >
              <h1 className="text-2xl font-semibold capitalize text-center">
                {item.title}
              </h1>
              <p className="text-justify">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Valores Institucionales */}
        <motion.div
          className="mb-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center text-[#004f51] mb-8">
            {language === "es" ? "VALORES INSTITUCIONALES DE GET" : "GET INSTITUTIONAL VALUES"}
          </h2>
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {Valores.map((valor, index) => (
              <motion.div
                key={valor.id}
                className={`p-6 space-y-3 border-2 border-[#004f51] rounded-xl shadow-lg ${
                  index % 2 === 0
                    ? "bg-[#004f51] text-white"
                    : "bg-white text-gray-900"
                }`}
                variants={cardVariants}
              >
                <h3 className="text-lg font-semibold text-center">
                  {valor.title}
                </h3>
                <p className="text-sm text-justify">{valor.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Servicios */}
        <motion.div
          className="mb-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center text-[#004f51] mb-4">
            {language === "es" ? "¿Qué hacemos en GET?" : "What do we do at GET?"}
          </h2>
          <p className="text-center text-gray-700 mb-8 max-w-4xl mx-auto">
            {language === "es"
              ? "En Global Executive Training (GET), diseñamos soluciones formativas y de consultoría que impulsan el crecimiento de profesionales, emprendedores y organizaciones, alineando el talento con los desafíos del entorno actual."
              : "At Global Executive Training (GET), we design training and consulting solutions that drive the growth of professionals, entrepreneurs and organizations, aligning talent with current challenges."}
          </p>
          <motion.div
            className="grid grid-cols-1 gap-8 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {Servicios.map((servicio) => (
              <motion.div
                key={servicio.id}
                className="p-6 border-2 border-[#004f51] rounded-xl shadow-lg bg-white"
                variants={cardVariants}
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action Final */}
        <motion.div
          className="text-center p-8 bg-[#004f51] text-white rounded-xl shadow-lg"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4">
            {language === "es"
              ? "En GET, formamos líderes que se reinventan, emprenden y transforman"
              : "At GET, we train leaders who reinvent themselves, start businesses and transform"}
          </h2>
          <p className="text-lg mb-4">
            {language === "es"
              ? "Sea cual sea tu punto de partida, estamos aquí para acompañarte con conocimiento, cercanía y visión global."
              : "Whatever your starting point, we are here to support you with knowledge, closeness and global vision."}
          </p>
          <p className="text-xl font-semibold">
            {language === "es"
              ? "Conviértete en el protagonista de tu desarrollo. Crece con GET."
              : "Become the protagonist of your development. Grow with GET."}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Nosotros;