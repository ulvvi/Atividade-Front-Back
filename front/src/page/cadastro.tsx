import Input from "../components/input.tsx";
import Header from "../components/header.tsx"
import Socialmedia from "../components/socialmedia.tsx";
import Button from "../components/Button.tsx";



export default function Cadastro() {
  return (
    <div className="w-screen h-screen flex flex-row justify-center bg-black">
        <div className="flex flex-col w-[390px] h-[844px] bg-white border-white box-border items-center">
            <Header title="Cadastrar-se"/>
            <Socialmedia/>
            <p className="text-base absolute top-[210px]">ou</p>
            <form className=" w-[327px] h-[440px] flex-col justify-between absolute top-[259px]">
                <Input type="Nome" placeholder="Digite seu nome completo"/>
                <Input type="CPF" placeholder="Digite seu CPF"/>
                <Input type="Telefone" placeholder="Digite seu telefone"/>
                <Input type="E-mail" placeholder="Digite seu E-mail"/>
                <Input type="Senha" placeholder="Digite sua senha"/>
                <Input type="Confirme sua senha" placeholder="Confirme sua senha"/>
            </form>
            <Button title="Cadastrar-se!"/>
        </div>
    </div>
    );
}