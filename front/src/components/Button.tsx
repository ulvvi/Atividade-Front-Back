import { useNavigate } from 'react-router-dom'



export type ButtonProps = {
    title: string;
    path: string
};  


            
export default function Button (props: ButtonProps) {
    const navigate = useNavigate()
    const handleClick = () => {navigate(props.path)};
    
    return (
        <button className="w-[188px] h-[40px] bg-[#2B2B2B] text-white 
        p-10px rounded-[16px] text-[14px] hover:bg-black absolute"
        onClick={handleClick}>
            {props.title}
        </button>
    )
}