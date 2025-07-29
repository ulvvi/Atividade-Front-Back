import { useState } from 'react';
import menu from '../assets/menu.svg';

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
        } absolute left-0 w-64 h-screen bg-[#F5F567] transition-transform duration-300 z-20`}
      >
      </div>
    </div>
  );
};

export default HamburgerMenu;
