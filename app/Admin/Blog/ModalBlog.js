import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { formats, modules } from "@/lib/QuillConfig";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const ModalBlog = ({ OpenModal, setOpenModal }) => {
  const [InputValues, setInputValues] = useState({});
  const [Loading, setLoading] = useState(false);
  const { toast } = useToast();
  const closeModal = () => {
    setOpenModal({
      Visible: false,
      InfoEditar: {},
    });
    setInputValues({});
  };

  const HandlerSubmit = () => {};

  const HandlerChange = () => {};
  return (
    <Dialog open={OpenModal?.Visible} onOpenChange={closeModal}>
      <DialogContent className="h-auto w-[90%] md:w-full overflow-auto   sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Agregar o editar blog</DialogTitle>
          <DialogDescription>
            <form onSubmit={HandlerSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="TituloBlog" className="">
                    Titulo del blog{" "}
                  </Label>
                  <Input
                    id="TituloBlog"
                    name="TituloBlog"
                    className="w-full"
                    onChange={HandlerChange}
                    defaultValue={OpenModal?.InfoEditar?.TituloBlog}
                    required
                    autoComplete="off"
                    autoFocus
                  />
                </div>

                <div className="">
                  <Label htmlFor="ContenidoBLog" className="">
                    Contenido
                  </Label>
                  <QuillNoSSRWrapper
                    id="ContenidoBLog"
                    modules={modules}
                    formats={formats}
                    theme="snow"
                    placeholder="Escriba aqui..."
                    onChange={(e) => {
                      setInputValues({
                        ...InputValues,
                        Descripcion: e,
                      });
                    }}
                    // defaultValue={ModalHome?.InfoEditar?.Descripcion}
                  />
                </div>
              </div>

              <Button
                disabled={Loading}
                className="   disabled:cursor-not-allowed disabled:opacity-50"
                type="submit"
              >
                Guardar{" "}
              </Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalBlog;
