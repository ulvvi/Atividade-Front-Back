import { useState } from "react";
import Heart from "../assets/heart.svg";

export type ProductCardProps = {
  image: string;
  name: string;
  price: string;
};

export default function Card({ image, name, price }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center bg-[] rounded-lg shadow-md w-[155px] h-[189px] overflow-visible">
        <img src={image} alt={name} className="w-[136px] h-[126px] rounded-md" />
        <div className=" w-[136px] flex flex-row">
            <div className="mt-[12px] ml-[5px]">
                <p className="text-[14px] text-[rgb(43,43,43)]">{name}</p>
                <p className="text-[16px] font-bold text-[#2B2B2B]">R${price}</p>
            </div>
            <button onClick={() => setIsLiked(!isLiked)} className=" p-2 rounded-full">
            <img
                src={Heart}
                width={isLiked? 23 : 23} height={23}
                className="fill-current color-black ml-[10px] mt-[15px]"
            />
            </button>
        </div>
    </div>
  );
}