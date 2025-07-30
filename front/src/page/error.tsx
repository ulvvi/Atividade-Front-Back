import Erro from "../assets/Error.svg";
import back from "../assets/back.svg";

export default function Login() {
  return (
    <div className="w-screen h-screen flex flex-row justify-center bg-black">
        <div className="flex flex-col w-full bg-white border-white box-border items-center justify-center">
            <div className="absolute top-[177px] w-[342px] h-[441px] flex flex-col items-center justify-center">
                <h1 className="absolute top-0 text-[32px] text-center w-[143px] h-[40px] ">Opsss..</h1>
                <div className=" absolute bottom-[35px] w-[342px] h-[346px] flex flex-col items-center">
                  <img src={Erro} height={280} width={280} alt="erro 404"/>
                  <p className="absolute bottom-0.5 w-[322] h-[40] text-[#2B2B2B] text-center">
                    Infelizmente, parece que não encontramos o produto desejado.</p>
                </div>
            </div>
            <div className="absolute top-[759px] w-[325px] flex flex-row justify-end">
              <img src={back} height={49} width={49}/>
            </div>
        </div>
    </div>
  )
}