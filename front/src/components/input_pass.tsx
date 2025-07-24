
export type InputProps =  {
    type: string; 
    placeholder: string;
};


export default function InputPassword (props: InputProps) {
    return (
        <div className="flex flex-col mb-4 w-[327px] h-[60px]">
            <text className="text-[16px] font-bold mb-1">
               {props.type}
            </text>
            <input
            type="password"
            placeholder={props.placeholder}
            className="border-b-[2px] border-gray-300 focus:border-black focus:outline-none py-2 placeholder-gray-400"/>
        </div>
    )
}
