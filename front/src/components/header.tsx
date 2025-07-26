import arrow from "../assets/arrow.svg"
import ppl from "../assets/ppl.png"


export type HeaderProps =  {
    title: string;
};


export default function Header (props: HeaderProps) {
    return (
        <div className="flex justify-between items-center w-full h-[60px] border-b-[2px] pl-[28px] pr-[28px]" style={{ borderColor: '#d1d1d1' }}>
            <img src={arrow} className="color-[#2B2B2B] fill-current" height={24} width={24}/>
            <h1 className="text-[24px] text-[#2B2B2B] font-medium mb-0.5">
               {props.title}
            </h1>
            <img src={ppl} className="color-[#2B2B2B] fill-current" height={24} width={24}/>
        </div>
    )
}
