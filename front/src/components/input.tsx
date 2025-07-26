export type InputProps =  {
    type: string; 
    placeholder: string;
};


export default function Input (props: InputProps) {
    return (
        <div className="flex flex-col mb-3 w-[327px] h-[60px]">
            <text className="text-[16px] font-base mb-1 text-[#2B2B2B]">
               {props.type}
            </text>
            <input
            type="text"
            placeholder={props.placeholder}
            className=" border-gray-300 focus:border-black focus:outline-none py-0 placeholder-gray-400 border-b-[2px] text-[#2B2B2B]"/>
        </div>
    )
}
