"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ModalShowComment = ({ ModalSeeBlog, setModalSeeBlog }) => {
  const closeModal = () => {
    setModalSeeBlog({
      Visible: false,
      Info: {},
    });
  };
  return (
    <div>
      <Dialog open={ModalSeeBlog?.Visible} onOpenChange={closeModal}>
        <DialogContent className="h-auto  w-[90%] md:w-full max-h-[95vh] overflow-auto   sm:max-w-4xl">
          <DialogHeader className="w-full h-full">
            <DialogTitle>{ModalSeeBlog?.Info?.Nombre}</DialogTitle>
            <DialogDescription>
              <div
                className=" w-full h-full  text-justify "
                dangerouslySetInnerHTML={{
                  __html: ModalSeeBlog?.Info?.Comentario,
                }}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalShowComment;
