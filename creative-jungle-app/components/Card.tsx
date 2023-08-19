import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
type Props = Post;

function Card({ id, title, userId, body }: Props) {
  return (
    <div className="flex flex-col m-3 bg-white h-64 rounded-3xl shadow">
      <div
        id="card-header"
        className="relative flex justify-end h-20 rounded-t-3xl bg-[#1B6B93]"
      >
        <XMarkIcon className="h-6 bg-white rounded-full mr-3 mt-3 cursor-pointer text-[#1B6B93]" />
        <div className="absolute mt-14 inset-0 flex items-center justify-center">
          <Image
            width={95}
            height={95}
            className="w-24 h-24 rounded-full mx-auto"
            src="/Food.png"
            alt={""}
          />
        </div>
      </div>
      <div className="w-full mt-12 mb-4  text-center text-cyan-900 text-sm font-medium">
        {title}
      </div>
      <div className="w-full mx-4  text-cyan-900 text-xs font-normal">
        {body}
      </div>
    </div>
  );
}
export default Card;
