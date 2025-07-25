import Input from "../components/input.tsx";
import Header from "../components/header.tsx"
import Socialmedia from "../components/socialmedia.tsx";


export default function Login() {
  return (
    <div className="w-screen h-screen flex flex-row justify-center bg-black">
        <div className="flex flex-col w-[390px] h-[844px] bg-white border-white box-border items-center">
            <Header title="Entrar"/>
            <Input
                type="text"
                placeholder="Email"></Input>
            <Socialmedia />
        </div>
    </div>
  );
}