"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgePlus } from "lucide-react";
import React, { useState } from "react";
import ModalBlog from "./ModalBlog";

const Blog = () => {
  const [OpenModal, setOpenModal] = useState({
    Visible: false,
    Item: {},
  });
  return (
    <>
      {OpenModal.Visible && (
        <ModalBlog OpenModal={OpenModal} setOpenModal={setOpenModal} />
      )}
      <div className="space-y-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Bienvenido al Blog</CardTitle>

            <CardDescription>
              En esta sección, puedes ver y modificar las publicaciones del blog
              de la página.
            </CardDescription>
            <CardFooter>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  console.log(e);
                  setOpenModal({
                    Visible: true,
                  });
                }}
                className="space-x-2"
              >
                <BadgePlus />
                <p>Agregar nuevo </p>
              </Button>
            </CardFooter>
          </CardHeader>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Lista de blogs</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Blog;
