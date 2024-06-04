"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { db } from "@/firebase/firebaseClient";
import { query, onSnapshot, collection, orderBy } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css"; // Para el tema 'snow'
import ModalAddComent from "./ModalAddComment";

const ItemBlog = ({ params: { id } }) => {
  const [Blogs, setBlogs] = useState([]);
  const [Isloading, setIsloading] = useState(true);
  const [SeeBlog, setSeeBlog] = useState({});
  const [Comentarios, setComentarios] = useState([]);
  const [OpenModal, setOpenModal] = useState({
    Visible: false,
    idBlog: null,
  });

  console.log("Comentarios", Comentarios);
  useEffect(() => {
    if (id) {
      const q = query(collection(db, "Blog"), orderBy("CreatAt", "desc"));
      const qComentarios = query(
        collection(db, "Blog", `${id}`, "Comentarios"),
        orderBy("CreatAt", "asc")
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        setBlogs(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );

        const FilterBlog = snapshot.docs.find((bloc) => bloc.id == id);
        setSeeBlog(FilterBlog?.data() || {});
        setIsloading(false);
      });
      const commentarios = onSnapshot(qComentarios, (snapshot) => {
        setComentarios(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
        setIsloading(false);
      });

      return () => {
        unsubscribe();
        commentarios();
      };
    }
  }, [id]);

  return (
    <div>
      {OpenModal.Visible && (
        <ModalAddComent OpenModal={OpenModal} setOpenModal={setOpenModal} />
      )}
      <section className="bg-center bg-no-repeat bg-[url('/Banners/Blog.webp')] bg-cover bg-[#004f51]/80 bg-blend-multiply">
        <div className=" mx-auto max-w-screen-xl text-center py-24 lg:py-[10.5rem]">
          <div className="rounded-xl bg-[#004f51]/50 px-1 py-8     max-w-sm mx-auto">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
              Blog
            </h1>
          </div>
        </div>
      </section>
      <div className=" mx-auto">
        <main className="mt-12">
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="mb-4 lg:mb-0  p-4 block lg:col-span-2 text-justify  bg-white shadow-lg rounded-md ">
              <div className="p-5 ">
                <div>
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    {SeeBlog?.TituloBlog}
                  </h5>

                  {SeeBlog?.Imagenes?.length > 0 && (
                    <img
                      className="rounded-t-lg"
                      src={SeeBlog?.Imagenes[0] || ""}
                      alt="imageBlog"
                    />
                  )}
                </div>
                <div
                  className="quill-content   text-justify"
                  dangerouslySetInnerHTML={{ __html: SeeBlog?.ContenidoBLog }}
                />
              </div>
            </div>
            <div className=" space-y-3 px-2 sm:px-0 w-full py-2 sm:col-span-1 rounded-2xl bg-white shadow-md ">
              <div className="w-full">
                <h1 className="text-center  text-xl font-semibold leading-tight lg:text-2xl text-grey-900 uppercase">
                  Más Lectura
                </h1>
                <div className=" max-h-[700px]  overflow-auto shadow-md rounded-md space-y-2">
                  {Blogs?.filter((item, index) => item.id != id)?.map(
                    (blog, index) => (
                      <Link key={blog.id} href={`/Blog/${blog.id}`}>
                        <div className="py-2 mx-auto  max-w-sm sm:w-full flex flex-col md:flex-row mb-4">
                          <figure className="relative min-w-[167px]  w-[167px] h-32 m-4 md:m-0">
                            <Image
                              src={blog.Imagenes[0]}
                              alt="IMG blog"
                              fill
                              className="rounded-md object-cover"
                            />
                          </figure>
                          <div className="bg-white rounded pl-3">
                            <p className=" text-gray-p00 font-semibold text-base mb-2">
                              {blog.TituloBlog}
                            </p>
                            <div
                              className="quill-content   text-justify line-clamp-2"
                              dangerouslySetInnerHTML={{
                                __html: blog?.ContenidoBLog,
                              }}
                            />
                          </div>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>

              <div className=" max-h-[700px] overflow-auto shadow-md rounded-md">
                <div>
                  <h1 className="text-center  text-xl font-semibold leading-tight lg:text-2xl text-grey-900 uppercase">
                    Comentarios
                  </h1>
                  <div>
                    <div className="w-full   bg-white px-4 py-4 shadow rounded-sm">
                      <div className=" max-h-[700px] ">
                        <div className="flex flex-col ">
                          {Comentarios?.map((comment) => (
                            <div className="flex gap-2" key={comment.id}>
                              <div className="flex flex-shrink-0">
                                <Avatar className="h-16 w-16">
                                  <AvatarImage src="https://github.com/shadcn.png" />
                                  <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                              </div>
                              <div className="flex flex-col space-y-2  ">
                                <div className="font-semibold">
                                  <p>{comment?.Nombre}</p>
                                </div>
                                <div className="flex justify-start items-center space-x-2">
                                  <div className="w-auto text-sm leading-none">
                                    <div className="max-h-[400px] h-full w-full  overflow-auto ">
                                      <div
                                        className=" first-letter:   text-justify "
                                        dangerouslySetInnerHTML={{
                                          __html: comment?.Comentario,
                                        }}
                                      />
                                      <p></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => {
                        setOpenModal({
                          Visible: true,
                          idBlog: id,
                        });
                      }}
                      className="w-full h-full bg-[#004f51]"
                    >
                      Agregar Comentario
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* main ends here */}
        {/* footer */}
      </div>
    </div>
  );
};

export default ItemBlog;
