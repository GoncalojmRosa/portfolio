import { ReactElement } from "react";

export interface ModalProps {
  color: string;
  text: ReactElement;
  onClose: () => void; // function provided by parent
}

export default function Modal({ color, text, onClose }: ModalProps) {
  console.log(color);
  return (
    <div
      className={`min-[320px]:mx-5 mt-8 mx-20 flex items-center justify-center flex-col rounded-md border-2 ${color}`}
    >
      <div
        className={`cursor-pointer w-10 m-0 rounded-bl-md border-b-2 border-l-2 text-center ${color} self-end`}
        onClick={() => {
          onClose();
        }}
      >
        {" "}
        x{" "}
      </div>{" "}
      <h2 className="text-xl m-0">{text}</h2>{" "}
    </div>
  );
}
