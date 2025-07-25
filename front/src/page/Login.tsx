import Header from "../components/header.tsx"
import Elektro from "../assets/Logo Elektro.svg";
import Socialmedia from "../components/socialmedia_inverse.tsx";
import Button from "../components/Button.tsx";
import LoginForm from "../components/login_form.tsx";



export default function Login() {
  return (
    <div className="w-screen h-screen flex flex-row justify-center bg-black">
        <div className="flex flex-col w-[390px] h-[844px] bg-white border-white box-border items-center">
            <Header title="Entrar"/>
            <img src={Elektro} className="absolute top-[95px] " height={330} width={330}/>
            <LoginForm />
            <div className="flex flex-column absolute top-[525px] w-[390px] pl-[32px] pr-[32px] justify-end align-top">
              <a href="#" className="text-[14px] font-400 text-[#000000] underline">Esqueci minha senha</a>
            </div>
            <Button title="Entrar"/>
            <a href="#" className="text-[14px] font-400 text-[#0271A0] underline absolute top-[766px]">Não possui cadastro? Cadastre-se!</a>
            <Socialmedia/>
            <p className="text-base absolute top-[627px]">ou</p>
          </div>
    </div>
  );
}