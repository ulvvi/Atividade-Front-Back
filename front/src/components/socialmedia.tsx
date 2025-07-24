import face from "../assets/Group 2.svg"
import gugu from "../assets/Group 3.svg"


export default function Socialmedia(){
    return(
        <div className="w-[326px] h-[90px] flex justify-between absolute top-[134px]">
            <div className="w-[138px] h-[90px] flex justify-center items-start border-b-[2px] border-black">
                <img src={face} height={69} width={69}/>
            </div>
            <div className="w-[138px] h-[90px] flex justify-center items-start border-b-[2px] border-black"> 
                <img src={gugu} height={69} width={69}/>
            </div>
        </div>
    )
}