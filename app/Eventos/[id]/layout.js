import { dbAdmin } from "@/firebase/firebaseAdmin";
import getBriefDescription from "@/lib/convertHtml";

export const metadata = {};

const LayoutEvento = async ({ children, params: { id } }) => {
  const eventoRef = dbAdmin.collection("Eventos").doc(`${id}`);
  const doc = await eventoRef.get();
  const evento = doc.data();
  console.log("evento", evento);

  //Titleevento en el metadata
  //authors   authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  metadata.title = evento.TituloEvento || "Evento de Getraining";
  metadata.description = "Evento de Getraining";
  metadata.authors = [{ name: "Miryam Roncal" }];
  metadata.openGraph = {
    title: evento.TituloEvento || "Evento de Getraining",
    description: "Evento de Getraining",
    siteName: "getraining.org",
    images: [
      {
        url: evento.Imagenes[0], // Asegúrate de que `Imagenevento` sea la URL de la imagen
        width: 600, // Ajusta el tamaño según sea necesario
        height: 600, // Ajusta el tamaño según sea necesario
        alt: evento.TituloEvento || "Evento de Getraining", // Descripción alternativa para la imagen
      },
    ],
    locale: "es_PE",
    type: "article",
  };
  metadata.twitter = {
    title: evento.TituloEvento || "Evento de Getraining",
    description: "Evento de Getraining",
    creator: "@getraining",
    images: evento?.Imagenes,
  };
  return <div>{children}</div>;
};

export default LayoutEvento;
