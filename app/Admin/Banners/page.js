"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "@/firebase/firebaseClient";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgePlus, PencilIcon, TrashIcon, PowerIcon } from "lucide-react";
import { deleteObject, ref } from "firebase/storage";
import ModalBanner from "./ModalBanner";

const BannersPage = () => {
  const [openModal, setOpenModal] = useState({ visible: false, info: {} });
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const qb = query(collection(db, "Banners"), orderBy("orden", "asc"));
    const unsub = onSnapshot(qb, (snap) => {
      setBanners(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, []);

  const toggleActivo = async (banner) => {
    await updateDoc(doc(db, "Banners", banner.id), { activo: !banner.activo });
  };

  const eliminar = async (banner) => {
    if (!confirm(`¿Seguro de eliminar el banner: ${banner.titulo || "Sin título"}?`)) return;

    await deleteDoc(doc(db, "Banners", banner.id));

    // Recomendado: guardar banner.storagePath para poder borrar el archivo
    if (banner.storagePath) {
      await deleteObject(ref(storage, banner.storagePath));
    }
  };

  return (
    <>
      {openModal.visible && (
        <ModalBanner openState={openModal} setOpenState={setOpenModal} />
      )}

      <div className="space-y-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Bienvenido a la sección de Banners</CardTitle>
            <CardDescription>
              Aquí puedes crear, editar, eliminar o activar/desactivar banners del Home.
            </CardDescription>

            <div className="pt-2">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenModal({ visible: true, info: {} });
                }}
                className="space-x-2"
              >
                <BadgePlus />
                <span>Agregar nuevo</span>
              </Button>
            </div>
          </CardHeader>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Lista de Banners</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {banners.map((b) => (
                <div key={b.id} className="border rounded-lg overflow-hidden shadow-sm bg-white">
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={b.imagenUrl || "/placeholder.svg"}
                      alt={b.titulo || "Banner"}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    {!b.activo && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">DESACTIVADO</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 space-y-1">
                    <p className="font-semibold">{b.titulo || "Banner"}</p>
                    <p className="text-sm text-gray-600">Orden: {b.orden ?? "-"}</p>

                    <div className="flex gap-2 justify-center pt-3">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenModal({ visible: true, info: b });
                        }}
                        className="bg-blue-500 rounded-lg px-4 py-2 text-white hover:bg-blue-600"
                        title="Editar"
                      >
                        <PencilIcon className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleActivo(b);
                        }}
                        className="bg-amber-500 rounded-lg px-4 py-2 text-white hover:bg-amber-600"
                        title="Activar/Desactivar"
                      >
                        <PowerIcon className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          eliminar(b);
                        }}
                        className="bg-red-500 rounded-lg px-4 py-2 text-white hover:bg-red-600"
                        title="Eliminar"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default BannersPage;
