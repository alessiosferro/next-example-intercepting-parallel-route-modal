import Bar from "@/app/components/Bar";

export default function Modal({isOpen}: ModalProps) {
  return (
    <div className={`${baseClassName} ${isOpen ? "flex" : "hidden"}`}>
      <div className="bg-white py-9 px-6 rounded-lg shadow-lg w-full max-w-xl flex flex-col gap-10">
        <Bar/>
      </div>
    </div>
  );
}

const baseClassName = "fixed inset-0 bg-gray-800 bg-opacity-50 items-center justify-center"

interface ModalProps {
  isOpen: boolean;
}