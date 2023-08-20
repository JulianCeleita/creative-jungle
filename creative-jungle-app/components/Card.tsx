import { type Post } from "@/typings";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

type Props = Pick<Post, "id" | "title" | "body"> & {
  handleDelete: (id: number) => void;
};

function Card({ id, title, body, handleDelete }: Props) {
  const [isDeleting, setIsDeleting] = useState(false);

  const onDeleteClick = () => {
    setIsDeleting(true);
    setTimeout(() => {
      handleDelete(id);
    }, 300);
  };

  return (
    <div className={`flex flex-col m-3 pb-4 bg-white h-64 rounded-3xl shadow ${
      isDeleting ? "card-fade-out" : ""}`}>
      <div
        id="card-header"
        className="relative flex justify-end h-20 rounded-t-3xl bg-[#1B6B93]"
      >
        <XMarkIcon
          onClick={onDeleteClick}
          className="h-6 bg-white rounded-full mr-3 mt-3 cursor-pointer text-[#1B6B93] hover:scale-110 transition-transform duration-200"
        />
        <div className="absolute mt-14 inset-0 flex items-center justify-center">
          <Image
            width={95}
            height={95}
            className="w-24 h-24 rounded-full mx-auto hover:scale-110 transition-transform duration-200"
            src="/Food.png"
            alt={""}
          />
        </div>
      </div>
      <div className="mt-12 mb-4 px-3 text-center text-cyan-900 text-sm font-medium line-clamp-2">
        {title}
      </div>
      <div className="mx-4 px-3 text-cyan-900 text-xs font-normal line-clamp-4">
        {body}
      </div>
    </div>
  );
}
export default Card;
