import { Inter } from "next/font/google";
import "./globals.css";
import MenuPrincipal from "./MenuPrincipal";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GETRAINING",
  description:
    "Global Executive Training (GET) ofrece programas y entrenamientos diseñados para potenciar habilidades de gestión, liderazgo y emprendimiento. Únete a GET para acceder a oportunidades únicas de desarrollo profesional y personal hoy mismo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <MenuPrincipal />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
