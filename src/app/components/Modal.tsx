import Link from "next/link";

export default function Modal({isOpen}: ModalProps) {
  return (
    <div className={`${baseClassName} ${isOpen ? "flex" : "hidden"}`}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Titolo Modale</h2>
        <p className="mb-4">Questo è il contenuto della modale. Puoi aggiungere testo, immagini, form, ecc.</p>
        <Link href="/" className="bg-red-500 text-white py-2 px-4 rounded-lg">
          Chiudi
        </Link>
      </div>
    </div>
  );
}

const baseClassName = "fixed inset-0 bg-gray-800 bg-opacity-50 items-center justify-center"

interface ModalProps {
  isOpen: boolean;
}