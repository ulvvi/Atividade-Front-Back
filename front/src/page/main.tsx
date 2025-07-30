import cart from '../assets/cart.svg';
import logo from '../assets/Logo Elektro.svg';
import Category from '../components/category';
import Card from '../components/card';
import Carrosel from '../components/Carrosel';
import socialmediaframe from '../assets/socialmediaframe.svg';
import SideMenu from '../components/SideMenu.tsx';

//imgaes//
import celulares from '../assets/AssetsHome/celulares.svg';
import notebooks from '../assets/AssetsHome/notebooks.svg';
import tvs from '../assets/AssetsHome/TVs.svg';
import acessorios from '../assets/AssetsHome/acessorios.svg';
import tablets from '../assets/AssetsHome/Tablets.svg';
import PCs from '../assets/AssetsHome/PCs.svg';
import perifericos from '../assets/AssetsHome/Perifericos.svg';
import smartwatches from '../assets/AssetsHome/Smartwatches.svg';


//card images//
import celular from '../assets/AssetsHome/celular.svg';
import capa from '../assets/AssetsHome/capa.svg';
import smarttv from '../assets/AssetsHome/SmartTV.svg';
import monitor from '../assets/AssetsHome/monitor.svg';
import smartphone from '../assets/AssetsHome/smartphone.svg';
import smartwatch from '../assets/AssetsHome/smartwatch.svg';


export default function Login() {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center bg-black">
        <div className="flex flex-col w-full h-[1600px] bg-[#F5F5F5] border-white box-border items-center overflow-y-auto">
            <div className="flex flex-row fixed items-center justify-between 
                w-full h-[71px] bg-[#2B2B2B] rounded-b-2xl pl-[32px] pr-[32px] z-10">
                    <SideMenu/>
                    <img src={cart} alt="Menu" className="w-[24px] h-[24px]"/>
            </div>
            <img src={logo} alt="Logo" 
                className="w-[42px] h-[42px] relative top-[91px] right-[143px]"/>
            <h2 className="absolute top-[92px] ml-3 text-[24px] w-[256px] h-[29px] text-[#FF8F0E] text-center font-russo">
                Bem-vindo à Elektro!</h2>
            <Carrosel/>

            <hr className="absolute top-[373px] w-[326px] border-[#B9B9B9] border-1"></hr>
            <p className="absolute top-[390px] mr-[180px] font-medium">Categorias Elektro</p>
            <div className="absolute top-[425px] w-[326px] h-[72px] flex flex-row justify-between items-center">
                <Category title={"Celulares"} image={celulares} imgAlt={"Categoria celulares"}/>
                <Category title={"Notebooks"} image={notebooks} imgAlt={"Categoria celulares"}/>
                <Category title={"Tablets"} image={tablets} imgAlt={"Categoria celulares"}/>
                <Category title={"Periféricos"} image={perifericos} imgAlt={"Categoria celulares"}/>
            </div>
            <div className="absolute top-[513px] w-[326px] h-[72px] flex flex-row justify-between items-center mt-1">
                <Category title={"TVs"} image={tvs} imgAlt={"Categoria celulares"}/>
                <Category title={"Acessórios"} image={acessorios} imgAlt={"Categoria celulares"}/>
                <Category title={"PCs"} image={PCs} imgAlt={"Categoria celulares"}/>
                <Category title={""} image= {smartwatches} imgAlt={""}/>
                <h1 className=" absolute text-[14px] text-[#2B2B2B] left-[241px] top-[51px]">Smartwatches</h1>
            </div>


            <div className="absolute top-[605px] h-[731px] flex flex-col items-center">
                <div>
                    <hr className="w-[326px] border-[#B9B9B9] border-1"></hr>
                    <p className="top-[390px] left-0 font-medium mt-4 mb-2">Para você</p>
                </div>
                <div className="relative flex flex-row justify-between items-center space-x-5">
                    <Card image={celular} name={"Celular"} price={"800,00"}/>
                    <Card image={capa} name={"Capa"} price={"20,00"}/>
                </div>
                <div>
                    <hr className="w-[326px] border-[#B9B9B9] border-1 mt-7"></hr>
                    <p className="font-medium mt-4 mb-2">Produtos em destaque</p>
                </div>
                <div className="relative flex flex-row justify-between items-center space-x-5">
                    <Card image={smarttv} name={"Smart TV"} price={"1400,00"}/>
                    <Card image={monitor} name={"Monitor"} price={"750,00"}/>
                </div>
                <div>
                    <hr className="w-[326px] border-[#B9B9B9] border-1 mt-7"></hr>
                    <p className="font-medium mt-4 mb-2">Mais vendidos</p>
                </div>
                <div className="relative flex flex-row justify-between items-center space-x-5">
                    <Card image={smartphone} name={"Smartphone"} price={"3200,00"}/>
                    <Card image={smartwatch} name={"Smartwatch"} price={"900,00"}/>
                </div>
            </div>
            <div className="absolute top-[1418px] bg-[#FFAE50] w-full h-[182px] border-box flex justify-center items-center flex-col pb-5 space-y-2">
                <p className="text-[#2B2B2B] text-[16px]">Siga-nos nas redes sociais!</p>
                <img src={socialmediaframe} alt="Social Media Frame" className="w-[152px] h-[24px]"/>


            </div>
        </div>
    </div>
  );
}