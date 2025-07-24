import arrow from "../assets/arrow.svg"
import ppl from "../assets/ppl.png"


export type HeaderProps =  {
    title: string;
};


export default function Header (props: HeaderProps) {
    return (
        <div className="flex justify-between items-center w-full h-[60px] border-b-[2px] pl-[28px] pr-[28px]" style={{ borderColor: '#d1d1d1' }}>
            <img src={arrow} className="text-black fill-current" height={24} width={24}/>
            <h1 className="text-[24px] font-base mb-0.5">
               {props.title}
            </h1>
            <img src={ppl} className="text-black fill-current" height={24} width={24}/>
        </div>
    )
}
