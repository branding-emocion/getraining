"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

import { db, storage } from "@/firebase/firebaseClient";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const ModalAliado = ({ openState, setOpenState }) => {
  const isEdit = Object.keys(openState?.info || {}).length > 0;

  const [values, setValues] = useState({
    nombre_es: openState?.info?.nombre_es || "",
    nombre_en: openState?.info?.nombre_en || "",
    link: openState?.info?.link || "",
    orden: openState?.info?.orden ?? 1,
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const closeModal = () => setOpenState({ visible: false, info: {} });
  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const uploadImage = async (aliadoIdOrTemp) => {
    if (!file) return { imagenUrl: openState?.info?.imagenUrl || "", storagePath: openState?.info?.storagePath || "" };

    const storagePath = `Aliados/${aliadoIdOrTemp}.jpg`;
    const imageRef = ref(storage, storagePath);

    await uploadBytes(imageRef, file);
    const imagenUrl = await getDownloadURL(imageRef);

    return { imagenUrl, storagePath };
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (isEdit) {
        const updateRef = doc(db, "Aliados", openState.info.id);
        const { imagenUrl, storagePath } = await uploadImage(openState.info.id);

        await updateDoc(updateRef, {
          ...values,
          orden: Number(values.orden),
          imagenUrl,
          storagePath,
          updatedAt: serverTimestamp(),
        });
      } else {
        const docRef = await addDoc(collection(db, "Aliados"), {
          ...values,
          orden: Number(values.orden),
          activo: true,
          imagenUrl: "",
          storagePath: "",
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });

        const { imagenUrl, storagePath } = await uploadImage(docRef.id);
        await updateDoc(doc(db, "Aliados", docRef.id), { imagenUrl, storagePath });
      }

      setLoading(false);
      closeModal();
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast({
        title: "Error",
        description: "Ocurrió un error al guardar el aliado.",
      });
    }
  };

  return (
    <Dialog open={openState.visible} onOpenChange={closeModal}>
      <DialogContent className="w-[95%] sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Editar" : "Agregar"} Aliado</DialogTitle>
          <DialogDescription>
            <form onSubmit={onSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="nombre_es">Nombre (ES) *</Label>
                <Input id="nombre_es" name="nombre_es" value={values.nombre_es} onChange={onChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nombre_en">Nombre (EN) *</Label>
                <Input id="nombre_en" name="nombre_en" value={values.nombre_en} onChange={onChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="link">Link *</Label>
                <Input id="link" name="link" value={values.link} onChange={onChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="orden">Orden</Label>
                <Input id="orden" name="orden" type="number" value={values.orden} onChange={onChange} />
              </div>

              <div className="space-y-2">
                <Label>Imagen</Label>
                <Input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                {!isEdit && <p className="text-sm text-gray-600">Para crear, la imagen es obligatoria.</p>}
              </div>

              <Button disabled={loading || (!isEdit && !file)} type="submit" className="disabled:opacity-50">
                Guardar
              </Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAliado;
