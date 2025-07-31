import { useState } from "react";
import Heart from "../assets/heart.svg";
import Filled from "../assets/filled heart.svg";

export type ProductCardProps = {
  image: string;
  name: string;
  price: string;
};

export default function Card({ image, name, price }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center bg-[] rounded-lg shadow-md w-[155px] h-[189px] overflow-hidden">
        <img src={image} alt={name} className="w-[136px] h-[126px] rounded-md" />
        <div className=" w-[136px] flex flex-row">
            <div className="mt-[12px] ml-[5px] w-20">
                <p className="relative text-[14px] text-[rgb(43,43,43)]">{name}</p>
                <p className="relative text-[16px] font-bold text-[#2B2B2B]">R${price}</p>
            </div>
              <div className="relative mt-7 ml-7">
              <button onClick={() => setIsLiked(!isLiked)} className="rounded-full">
              <img src={isLiked ? Filled : Heart} width={23} height={23} className="fill-current color-black"/>
              </button>
            </div>
        </div>
    </div>
  );
}