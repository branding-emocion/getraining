// "use client";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   MailIcon,
//   PhoneCallIcon,
//   Youtube,
// } from "lucide-react";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import React, { useRef, useState } from "react";
// import { SendMail } from "../actions";
// import { useToast } from "@/components/ui/use-toast";

// const Contacto = () => {
//   const RefForm = useRef(null);
//   const [Loading, setLoading] = useState(false);
//   const { toast } = useToast();

//   return (
//     <div>
//       <section className="bg-center bg-no-repeat bg-[url('/Banners/ContactoBanner.webp')] bg-cover  bg-[#004f51]/80 bg-blend-multiply">
//         <div className=" mx-auto max-w-screen-xl text-center py-24 lg:py-[10.5rem]">
//           <div className="rounded-xl bg-[#004f51]/50   px-1 py-8  max-w-[30rem] mx-auto">
//             <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
//               CONTÁCTANOS
//             </h1>
//           </div>
//         </div>
//       </section>
//       <section className="container mx-auto  -m-[5rem] pb-8">
//         <Card className=" grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
//           <CardContent>
//             <div className="flex flex-col gap-2 space-y-2 pt-4 lg:pt-0">
//               <section className="flex gap-x-2">
//                 <PhoneCallIcon />
//                 <a className="hover:scale-105" href="tel:+51914125509">
//                   {" "}
//                   +51 914-125-509
//                 </a>
//               </section>

//               <section className="flex gap-x-2">
//                 <MailIcon />
//                 <a
//                   className="text-lg hover:scale-105"
//                   href="mailto:get@getraining.org"
//                 >
//                   get@getraining.org
//                 </a>
//               </section>
//               <section className="flex gap-x-2 justify-center">
//                 <a
//                   className="hover:scale-105"
//                   href="https://www.facebook.com/GETraining.org?mibextid=LQQJ4d"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Facebook"
//                   title="Faceboosk"
//                 >
//                   <Facebook className="w-7 h-6 text-[#004f51]" />
//                 </a>
//                 <a
//                   className="hover:scale-105"
//                   href="https://www.instagram.com/get.peru/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Instagram"
//                   title="Instagram"
//                 >
//                   <Instagram className="w-7 h-6 text-[#004f51]" />
//                 </a>
//                 <a
//                   className="hover:scale-105"
//                   href="https://www.youtube.com/@get-globalexecutivetrainin9805"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Youtube"
//                   title="Youtube"
//                 >
//                   <Youtube className="w-7 h-6 text-[#004f51]" />
//                 </a>
//                 <a
//                   className="hover:scale-105"
//                   href="https://www.linkedin.com/company/global-e-training-get/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Linkeding"
//                   title="Linkeding"
//                 >
//                   <Linkedin className="w-7 h-6 text-[#004f51]" />
//                 </a>
//               </section>
//             </div>
//           </CardContent>
//           <CardContent className="w-full">
//             <form
//               ref={RefForm}
//               action={async (formData) => {
//                 setLoading(true);
//                 const response = await SendMail(formData);
//                 toast({
//                   title: "Notificación",
//                   description: response?.message || "",
//                 });
//                 setLoading(false);
//                 RefForm.current.reset();
//               }}
//               className="w-full px-5 pt-6"
//             >
//               <div className="space-y-1.5 w-full ">
//                 <Label htmlFor="Nombre">Nombre completo</Label>
//                 <Input
//                   name="Nombre"
//                   id="Nombre"
//                   className=""
//                   placeholder="Por favor su nombre completo"
//                   type="text"
//                   required
//                 />
//               </div>
//               <div className="space-y-1.5 w-full ">
//                 <Label htmlFor="Correo">Correo Electrónico</Label>
//                 <Input
//                   type="email"
//                   name="Correo"
//                   id="Correo"
//                   className=""
//                   placeholder="Por favor el correo electrónico"
//                   required
//                 />
//               </div>
//               <div className="mt-1 space-y-1.5 w-full ">
//                 <Label htmlFor="Celular">Celular</Label>

//                 <PhoneInput
//                   placeholder="Por favor ingresa tu número de celular"
//                   defaultCountry="PE"
//                   onChange={() => {
//                     return;
//                   }}
//                   name="Celular"
//                   id="Celular"
//                   className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-[#0d1a2e]  focus:outline-none focus:ring focus:ring-opacity-40"
//                 />
//               </div>
//               <div className="space-y-1.5 w-full ">
//                 <Label htmlFor="Mensaje">Envianos un mensaje</Label>
//                 <Textarea
//                   id="Mensaje"
//                   name="Mensaje"
//                   placeholder="Escriba aquí ..."
//                   required
//                 />
//               </div>

//               <Button
//                 disabled={Loading}
//                 className="mt-2 disabled:cursor-not-allowed bg-[#17282f]"
//                 type="submit"
//               >
//                 Enviar
//               </Button>
//             </form>
//           </CardContent>
//         </Card>

//         {/* <div className="container mx-auto my-4 px-4 lg:px-20">
//           <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
//             <div className="flex">
//               <h1 className="font-bold uppercase text-5xl">
//                 Send us a <br /> message
//               </h1>
//             </div>
//             <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
//               <input
//                 className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                 type="text"
//                 placeholder="First Name*"
//               />
//               <input
//                 className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                 type="text"
//                 placeholder="Last Name*"
//               />
//               <input
//                 className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                 type="email"
//                 placeholder="Email*"
//               />
//               <input
//                 className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                 type="number"
//                 placeholder="Phone*"
//               />
//             </div>
//             <div className="my-4">
//               <textarea
//                 placeholder="Message*"
//                 className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                 defaultValue={""}
//               />
//             </div>
//             <Button>Enviar</Button>
//           </div>
//         </div> */}
//       </section>
//     </div>
//   );
// };

// export default Contacto;

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

const Contacto = () => {
  const RefForm = useRef(null);
  const [Loading, setLoading] = useState(false);
  const { toast } = useToast();

  return (
    <div>
      <section className="bg-center bg-no-repeat bg-[url('/Banners/ContactoBanner.webp')] bg-cover bg-[#004f51]/80 bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl text-center py-24 lg:py-[10.5rem]">
          <div className="rounded-xl bg-[#004f51]/50 px-1 py-8 max-w-[30rem] mx-auto">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              CONTÁCTANOS
            </h1>
            <p className="text-white/90 text-lg">
              Estamos aquí para acompañarte en tu crecimiento profesional
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
                Información de Contacto
              </CardTitle>

              <div className="space-y-6">
                {/* Teléfonos */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                    <PhoneCallIcon className="w-5 h-5 text-[#004f51]" />
                    Teléfonos
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
                    Correo Electrónico
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
                    Horarios de Atención
                  </h3>
                  <div className="ml-7 text-gray-700 space-y-1">
                    <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p>Sábados: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>

                {/* Redes Sociales */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">
                    Síguenos en Redes Sociales
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
                Envíanos un Mensaje
              </CardTitle>

              <form
                ref={RefForm}
                action={async (formData) => {
                  setLoading(true);
                  try {
                    const response = await SendMail(formData);
                    toast({
                      title: "¡Mensaje Enviado!",
                      description:
                        response?.message ||
                        "Tu mensaje ha sido enviado correctamente. Te contactaremos pronto.",
                    });
                    RefForm.current?.reset();
                  } catch (error) {
                    toast({
                      title: "Error",
                      description:
                        "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.",
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
                    Nombre Completo *
                  </Label>
                  <Input
                    name="Nombre"
                    id="Nombre"
                    className="border-gray-300 focus:border-[#004f51] focus:ring-[#004f51]"
                    placeholder="Ingresa tu nombre completo"
                    type="text"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="Correo" className="text-gray-700 font-medium">
                    Correo Electrónico *
                  </Label>
                  <Input
                    type="email"
                    name="Correo"
                    id="Correo"
                    className="border-gray-300 focus:border-[#004f51] focus:ring-[#004f51]"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="Celular"
                    className="text-gray-700 font-medium"
                  >
                    Número de Teléfono *
                  </Label>
                  <PhoneInput
                    placeholder="Ingresa tu número de teléfono"
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
                  <Label
                    htmlFor="Mensaje"
                    className="text-gray-700 font-medium"
                  >
                    Mensaje *
                  </Label>
                  <Textarea
                    id="Mensaje"
                    name="Mensaje"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
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
                      Enviando...
                    </div>
                  ) : (
                    "Enviar Mensaje"
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
