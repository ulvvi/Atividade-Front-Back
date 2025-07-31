import { useState } from 'react';
import menu from '../assets/menu.svg';
import user from '../assets/AssetsHome/User.svg'

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mt-1">
      <button
        onClick={toggleMenu}
        className="rounded-md z-20"
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
      </div>
    </div>
  );
};

export default HamburgerMenu;
