"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Linkedin,
  MailIcon,
  PhoneCallIcon,
  Youtube,
  Clock,
} from "lucide-react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRef, useState } from "react";
import { SendMail } from "../actions";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "../LanguageContext";

const Contacto = () => {
  const RefForm = useRef(null);
  const [Loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();

  return (
    <div>
      <section className="bg-center bg-no-repeat bg-[url('/Banners/ContactoBanner.webp')] bg-cover bg-[#004f51]/80 bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl text-center py-24 lg:py-[10.5rem]">
          <div className="rounded-xl bg-[#004f51]/50 px-1 py-8 max-w-[30rem] mx-auto">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              {language === "es" ? "CONTÁCTANOS" : "CONTACT US"}
            </h1>
            <p className="text-white/90 text-lg">
              {language === "es"
                ? "Estamos aquí para acompañarte en tu crecimiento profesional"
                : "We are here to support your professional growth"}
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto -m-[5rem] pb-8">
        <Card className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-start shadow-xl border-2 border-[#004f51]/20">
          {/* Información de Contacto */}
          <CardContent className="w-full">
            <div className="pt-6">
              <CardTitle className="text-2xl font-bold text-[#004f51] mb-6 text-center lg:text-left">
                {language === "es" ? "Información de Contacto" : "Contact Information"}
              </CardTitle>

              <div className="space-y-6">
                {/* Teléfonos */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                    <PhoneCallIcon className="w-5 h-5 text-[#004f51]" />
                    {language === "es" ? "Teléfonos" : "Phone Numbers"}
                  </h3>
                  <div className="ml-7 space-y-2">
                    <a
                      className="block hover:scale-105 transition-transform duration-200 text-gray-700 hover:text-[#004f51]"
                      href="tel:+14054121914"
                    >
                      +1 405 412 1914
                    </a>

                    <a
                      className="block hover:scale-105 transition-transform duration-200 text-gray-700 hover:text-[#004f51]"
                      href="tel:+51932067330"
                    >
                      +51 932 067 330
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                    <MailIcon className="w-5 h-5 text-[#004f51]" />
                    {language === "es" ? "Correo Electrónico" : "Email"}
                  </h3>
                  <div className="ml-7">
                    <a
                      className="text-gray-700 hover:text-[#004f51] hover:scale-105 transition-transform duration-200 inline-block"
                      href="mailto:get@getraining.org"
                    >
                      get@getraining.org
                    </a>
                  </div>
                </div>

                {/* Horarios */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#004f51]" />
                    {language === "es" ? "Horarios de Atención" : "Business Hours"}
                  </h3>
                  <div className="ml-7 text-gray-700 space-y-1">
                    <p>
                      {language === "es"
                        ? "Lunes a Viernes: 9:00 AM - 6:00 PM"
                        : "Monday to Friday: 9:00 AM - 6:00 PM"}
                    </p>
                    <p>
                      {language === "es"
                        ? "Sábados: 9:00 AM - 1:00 PM"
                        : "Saturdays: 9:00 AM - 1:00 PM"}
                    </p>
                  </div>
                </div>

                {/* Redes Sociales */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">
                    {language === "es" ? "Síguenos en Redes Sociales" : "Follow us on Social Media"}
                  </h3>
                  <div className="flex gap-4 ml-0 justify-center lg:justify-start">
                    <a
                      className="hover:scale-110 transition-transform duration-200 p-2 rounded-full hover:bg-[#004f51]/10"
                      href="https://www.facebook.com/GETraining.org?mibextid=LQQJ4d"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      title="Facebook"
                    >
                      <Facebook className="w-6 h-6 text-[#004f51]" />
                    </a>

                    <a
                      className="hover:scale-110 transition-transform duration-200 p-2 rounded-full hover:bg-[#004f51]/10"
                      href="https://www.instagram.com/get.peru/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      title="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-[#004f51]" />
                    </a>

                    <a
                      className="hover:scale-110 transition-transform duration-200 p-2 rounded-full hover:bg-[#004f51]/10"
                      href="https://www.youtube.com/@get-globalexecutivetrainin9805"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Youtube"
                      title="Youtube"
                    >
                      <Youtube className="w-6 h-6 text-[#004f51]" />
                    </a>

                    <a
                      className="hover:scale-110 transition-transform duration-200 p-2 rounded-full hover:bg-[#004f51]/10"
                      href="https://www.linkedin.com/company/global-e-training-get/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6 text-[#004f51]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>

          {/* Formulario de Contacto */}
          <CardContent className="w-full">
            <div className="pt-6">
              <CardTitle className="text-2xl font-bold text-[#004f51] mb-6 text-center lg:text-left">
                {language === "es" ? "Envíanos un Mensaje" : "Send us a Message"}
              </CardTitle>

              <form
                ref={RefForm}
                action={async (formData) => {
                  setLoading(true);
                  try {
                    const response = await SendMail(formData);
                    toast({
                      title: language === "es" ? "¡Mensaje Enviado!" : "Message Sent!",
                      description:
                        response?.message ||
                        (language === "es"
                          ? "Tu mensaje ha sido enviado correctamente. Te contactaremos pronto."
                          : "Your message has been sent successfully. We will contact you soon."),
                    });
                    RefForm.current?.reset();
                  } catch (error) {
                    toast({
                      title: language === "es" ? "Error" : "Error",
                      description:
                        language === "es"
                          ? "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente."
                          : "There was a problem sending your message. Please try again.",
                      variant: "destructive",
                    });
                  } finally {
                    setLoading(false);
                  }
                }}
                className="w-full space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="Nombre" className="text-gray-700 font-medium">
                    {language === "es" ? "Nombre Completo *" : "Full Name *"}
                  </Label>
                  <Input
                    name="Nombre"
                    id="Nombre"
                    className="border-gray-300 focus:border-[#004f51] focus:ring-[#004f51]"
                    placeholder={language === "es" ? "Ingresa tu nombre completo" : "Enter your full name"}
                    type="text"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="Correo" className="text-gray-700 font-medium">
                    {language === "es" ? "Correo Electrónico *" : "Email *"}
                  </Label>
                  <Input
                    type="email"
                    name="Correo"
                    id="Correo"
                    className="border-gray-300 focus:border-[#004f51] focus:ring-[#004f51]"
                    placeholder={language === "es" ? "tu@email.com" : "your@email.com"}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="Celular" className="text-gray-700 font-medium">
                    {language === "es" ? "Número de Teléfono *" : "Phone Number *"}
                  </Label>
                  <PhoneInput
                    placeholder={
                      language === "es"
                        ? "Ingresa tu número de teléfono"
                        : "Enter your phone number"
                    }
                    defaultCountry="PE"
                    onChange={() => {
                      return;
                    }}
                    name="Celular"
                    id="Celular"
                    className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:border-[#004f51] focus:outline-none focus:ring-2 focus:ring-[#004f51]/20 transition-colors duration-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="Mensaje" className="text-gray-700 font-medium">
                    {language === "es" ? "Mensaje *" : "Message *"}
                  </Label>
                  <Textarea
                    id="Mensaje"
                    name="Mensaje"
                    placeholder={
                      language === "es"
                        ? "Cuéntanos cómo podemos ayudarte..."
                        : "Tell us how we can help you..."
                    }
                    className="border-gray-300 focus:border-[#004f51] focus:ring-[#004f51] min-h-[120px] resize-none"
                    required
                  />
                </div>

                <Button
                  disabled={Loading}
                  className="w-full mt-6 bg-[#004f51] hover:bg-[#004f51]/90 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                >
                  {Loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      {language === "es" ? "Enviando..." : "Sending..."}
                    </div>
                  ) : (
                    (language === "es" ? "Enviar Mensaje" : "Send Message")
                  )}
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Contacto;
