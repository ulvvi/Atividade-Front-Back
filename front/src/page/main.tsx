import cart from '../assets/cart.svg';
import menu from '../assets/menu.svg';
import logo from '../assets/Logo Elektro.svg';
import cutscene from '../assets/cutscene.svg';
import Category from '../components/category';

//imgaes//
import celulares from '../assets/celulares.svg';


export default function Login() {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center bg-black">
        <div className="flex flex-col w-[390px] h-[1589px] bg-white border-white box-border items-center">
            <div className="flex flex-row fixed items-center justify-between 
                w-[390px] h-[71px] bg-[#2B2B2B] rounded-b-2xl pl-[32px] pr-[32px] z-10">
                    <img src={menu} alt="Menu" className="w-[24px] h-[24px]"/>
                    <img src={cart} alt="Menu" className="w-[24px] h-[24px]"/>
            </div>
            <img src={logo} alt="Logo" 
                className="w-[42px] h-[42px] relative top-[91px] right-[143px]"/>
            <h2 className="absolute top-[94px] ml-3 text-[24px] w-[256px] h-[29px] text-[#FF8F0E] text-center font-russo">
                Bem-vindo à Elektro!</h2>
            <img src={cutscene} alt="Cutscene" className="absolute top-[148px] w-[327px] h-[210px]"/>
            <hr className="absolute top-[376px] w-[326px] border-[#B9B9B9] border-1"></hr>
            <p className="absolute top-[393px] mr-[180px] font-medium">Categorias Elektro</p>
            <div className="absolute top-[425px] w-[326px] h-[72px] flex flex-row justify-between items-center">
                <Category title={"Celulares"} image={celulares} imgAlt={"Categoria celulares"}/>
                <Category title={"Notebooks"} image={celulares} imgAlt={"Categoria celulares"}/>
                <Category title={"Tablets"} image={celulares} imgAlt={"Categoria celulares"}/>
                <Category title={"Periféricos"} image={celulares} imgAlt={"Categoria celulares"}/>
            </div>
            <div className="absolute top-[513px] w-[326px] h-[72px] flex flex-row justify-between items-center mr-1">
                <Category title={"TVs"} image={celulares} imgAlt={"Categoria celulares"}/>
                <Category title={"Acessórios"} image={celulares} imgAlt={"Categoria celulares"}/>
                <Category title={"PCs"} image={celulares} imgAlt={"Categoria celulares"}/>
                <Category title={""} image= {celulares} imgAlt={""}/>
                <h1 className=" absolute w-[] h-[p17x] text-[14px] text-[#2B2B2B] left-[241px] top-[51px]">Smartwatches</h1>
            </div>
            
        </div>
    </div>
  );
}