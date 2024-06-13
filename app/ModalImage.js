import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export function ModalImageSee({ setModalImage, ModalImage }) {
  console.log(ModalImage);
  return (
    <Dialog
      open={ModalImage?.Visible}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setModalImage({
            Visible: false,
          });
        }
      }}
    >
      <DialogContent className="max-h-[90vh] w-full overflow-auto max-w-3xl">
        <DialogHeader>
          <DialogTitle className="uppercase">
            <h1 className="text-center px-4">Imagen {ModalImage.Nombre}</h1>
          </DialogTitle>
          <DialogDescription>
            <div>
              <img src={ModalImage.src} alt={ModalImage.Nombre} />
            </div>
            {/* <div>
              <figure className="relative w-full h-auto">
                <Image
                  fill
                  src={ModalImage.src}
                  alt={ModalImage.Nombre}
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </figure>
            </div> */}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
