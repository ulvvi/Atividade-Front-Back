            
export type ButtonProps = {
    title: string;
};  
            
export default function Button (props: ButtonProps) {
    return (
        <button className="w-[188px] h-[40px] bg-[#2B2B2B] text-white 
        p-10px rounded-[16px] text-[14px] hover:bg-black
        absolute top-[563px]">
            {props.title}
        </button>
    )
}