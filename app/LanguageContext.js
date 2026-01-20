"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  es: {
    // Menú
    inicio: "Inicio",
    nosotros: "Nosotros",
    servicios: "Servicios",
    eventos: "Eventos",
    podcast: "Pódcast",
    contacto: "Contacto",
    blog: "Blog",
    
    // Servicios
    serviciosTitle: "Servicios",
    nuestrosServicios: "Nuestros Servicios",
    paraProfesionales: "Para Profesionales",
    paraEmprendedores: "Para Emprendedores",
    paraEmpresas: "Para Empresas",
    metodosPago: "Métodos de Pago",
    aceptamosPagos: "Aceptamos pagos seguros con PayPal",
    pagarConPaypal: "Pagar con PayPal",
    
    // Nosotros
    mision: "MISIÓN",
    vision: "VISIÓN",
    valores: "VALORES INSTITUCIONALES DE GET",
    queHacemos: "¿Qué hacemos en GET?",
    
    // Eventos
    eventosTitle: "Eventos",
    
    // Podcast
    podcastTitle: "Pódcasts",
    verEnYoutube: "Ver en youtube",
    
    // Blog
    blogTitle: "Blogs",
    leerMas: "Leer más",
    
    // Contacto
    contactanosTitle: "CONTÁCTANOS",
    infoContacto: "Información de Contacto",
    telefonos: "Teléfonos",
    correo: "Correo Electrónico",
    horarios: "Horarios de Atención",
    redesSociales: "Síguenos en Redes Sociales",
    enviarMensaje: "Envíanos un Mensaje",
    nombreCompleto: "Nombre Completo",
    telefono: "Número de Teléfono",
    mensaje: "Mensaje",
    enviar: "Enviar Mensaje",
    enviando: "Enviando...",
  },
  en: {
    // Menu
    inicio: "Home",
    nosotros: "About Us",
    servicios: "Services",
    eventos: "Events",
    podcast: "Podcast",
    contacto: "Contact",
    blog: "Blog",
    
    // Services
    serviciosTitle: "Services",
    nuestrosServicios: "Our Services",
    paraProfesionales: "For Professionals",
    paraEmprendedores: "For Entrepreneurs",
    paraEmpresas: "For Companies",
    metodosPago: "Payment Methods",
    aceptamosPagos: "We accept secure payments with PayPal",
    pagarConPaypal: "Pay with PayPal",
    
    // About
    mision: "MISSION",
    vision: "VISION",
    valores: "GET INSTITUTIONAL VALUES",
    queHacemos: "What do we do at GET?",
    
    // Events
    eventosTitle: "Events",
    
    // Podcast
    podcastTitle: "Podcasts",
    verEnYoutube: "Watch on youtube",
    
    // Blog
    blogTitle: "Blogs",
    leerMas: "Read more",
    
    // Contact
    contactanosTitle: "CONTACT US",
    infoContacto: "Contact Information",
    telefonos: "Phone Numbers",
    correo: "Email",
    horarios: "Business Hours",
    redesSociales: "Follow us on Social Media",
    enviarMensaje: "Send us a Message",
    nombreCompleto: "Full Name",
    telefono: "Phone Number",
    mensaje: "Message",
    enviar: "Send Message",
    enviando: "Sending...",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "es";
    setLanguage(savedLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};