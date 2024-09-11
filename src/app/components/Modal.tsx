"use client";

import {useRouter} from "next/navigation";

export default function Modal({isOpen}: ModalProps) {
  const router = useRouter();

  return (
    <div onClick={() => router.back()} className={`${baseClassName} ${isOpen ? "flex" : "hidden"}`}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Titolo Modale</h2>
        <p className="mb-4">Questo è il contenuto della modale. Puoi aggiungere testo, immagini, form, ecc.</p>
        <button onClick={() => router.back()} className="bg-red-500 text-white py-2 px-4 rounded-lg">
          Chiudi
        </button>
      </div>
    </div>
  );
}

const baseClassName = "fixed inset-0 bg-gray-800 bg-opacity-50 items-center justify-center"

interface ModalProps {
  isOpen: boolean;
}