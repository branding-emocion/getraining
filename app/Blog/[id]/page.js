// app/Blog/[id]/page.js  — SIN "use client", SIN otro componente
import { dbServer } from "@/firebase/firebaseServer";
import { doc, getDoc } from "firebase/firestore";
import ItemBlog from "./ItemBlog";

export async function generateMetadata({ params }) {
  const { id } = params;

  try {
    const docRef = doc(dbServer, "Blog", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const blog = docSnap.data();
      const plainText = blog.ContenidoBLog?.replace(/<[^>]*>/g, "")
        .substring(0, 160)
        .trim();

      return {
        title: `${blog.TituloBlog} | GETraining Blog`,
        description: plainText,
        openGraph: {
          title: blog.TituloBlog,
          description: plainText,
          images: blog.Imagenes?.[0]
            ? [{ url: blog.Imagenes[0], width: 1200, height: 630, alt: blog.TituloBlog }]
            : [],
          type: "article",
          url: `https://www.getraining.org/Blog/${id}`,
          siteName: "Global Executive Training",
        },
        twitter: {
          card: "summary_large_image",
          title: blog.TituloBlog,
          description: plainText,
          images: blog.Imagenes?.[0] ? [blog.Imagenes[0]] : [],
        },
      };
    }
  } catch (error) {
    console.error("Error fetching blog metadata:", error);
  }

  return {
    title: "Blog | GETraining",
    description: "Blog de Global Executive Training",
  };
}

export default function BlogPage({ params }) {
  return <ItemBlog params={params} />;
}