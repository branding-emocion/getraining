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
import ModalAliado from "./ModalAliado";

const AliadosPage = () => {
  const [openModal, setOpenModal] = useState({ visible: false, info: {} });
  const [aliados, setAliados] = useState([]);

  useEffect(() => {
    const qa = query(collection(db, "Aliados"), orderBy("orden", "asc"));
    const unsub = onSnapshot(qa, (snap) => {
      setAliados(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, []);

  const toggleActivo = async (aliado) => {
    await updateDoc(doc(db, "Aliados", aliado.id), { activo: !aliado.activo });
  };

  const eliminar = async (aliado) => {
    if (!confirm(`¿Seguro de eliminar el aliado: ${aliado.nombre_es || "Sin nombre"}?`)) return;

    await deleteDoc(doc(db, "Aliados", aliado.id));

    if (aliado.storagePath) {
      await deleteObject(ref(storage, aliado.storagePath));
    }
  };

  return (
    <>
      {openModal.visible && (
        <ModalAliado openState={openModal} setOpenState={setOpenModal} />
      )}

      <div className="space-y-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Bienvenido a la sección de Aliados</CardTitle>
            <CardDescription>
              Aquí puedes crear, editar, eliminar o activar/desactivar aliados del Home.
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
            <CardTitle>Lista de Aliados</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {aliados.map((a) => (
                <div key={a.id} className="border rounded-lg overflow-hidden shadow-sm bg-white">
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={a.imagenUrl || "/placeholder.svg"}
                      alt={a.nombre_es || "Aliado"}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    {!a.activo && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">DESACTIVADO</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 space-y-1">
                    <p className="font-semibold">{a.nombre_es || "Aliado"}</p>
                    <p className="text-sm text-gray-600 truncate">{a.link}</p>
                    <p className="text-sm text-gray-600">Orden: {a.orden ?? "-"}</p>

                    <div className="flex gap-2 justify-center pt-3">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenModal({ visible: true, info: a });
                        }}
                        className="bg-blue-500 rounded-lg px-4 py-2 text-white hover:bg-blue-600"
                        title="Editar"
                      >
                        <PencilIcon className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleActivo(a);
                        }}
                        className="bg-amber-500 rounded-lg px-4 py-2 text-white hover:bg-amber-600"
                        title="Activar/Desactivar"
                      >
                        <PowerIcon className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          eliminar(a);
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

export default AliadosPage;
