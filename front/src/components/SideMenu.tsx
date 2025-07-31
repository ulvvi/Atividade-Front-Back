import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import menu from '../assets/menu.svg';
import user from '../assets/AssetsHome/User.svg'

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClick = () => {navigate("/login")};

  return (
    <div className="">
      <button
        onClick={toggleMenu}
        className="rounded-md z-30"
      >
      <img src={menu} alt="Menu" className="w-[24px] h-[24px]"/>
      </button>

      <div
        className={`${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } absolute left-0 w-[220px] h-screen bg-[#F5F5F5] transition-transform duration-300 z-20`}
      >
        <div className="bg-[#2B2B2B] w-full h-[84px] flex items-center">
          <div className="ml-7 w-full flex">
            <img src={user} alt="Icone usuario" className="w-[34px] h-[34px]"/>
            <p className="text-white font-medium text-[20px] mt-0.5 ml-5">Usuário</p>
          </div>
        </div>

        <div className="w- pl-[7%] pt-[25px] space-y-6 flex flex-col">
          <p className="font-medium">Editar dados</p>
          <hr className="w-6/7 border-[#B9B9B9] border-1"></hr>
          <p className="font-medium mt-">Meus pedidos</p>
          <hr className="w-6/7 border-[#B9B9B9] border-1"></hr>
          <p className="font-medium">Meus produtos</p>
          <hr className=" w-6/7 border-[#B9B9B9] border-1"></hr>
          <p className="font-medium ">Meu carrinho</p>
        </div>
        
        <button className="absolute font-medium pl-[10%] bottom-[8%]" onClick={handleClick} >Sair</button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
