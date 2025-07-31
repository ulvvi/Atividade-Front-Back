import { useState, useEffect } from 'react';
import car1 from '../assets/car1.png';
import car2 from '../assets/car2.png'
import car3 from '../assets/car3.png'


export default function ImageCarousel() {
  const images = [
    car1,
    car2,
    car3,
  ];

  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {const interval = setInterval(() => {setCurrentImg((prevIndex) => (prevIndex + 1) % images.length);}, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-[143px] w-[327px] h-[210px] flex flex-col items-center">
      <img
        src={images[currentImg]}
        alt="Carrosel imagem 1"
        className="w-[327px] h-[191px]"
      />
      <div className="flex flex-row space-x-2 mt-2">
        <div className={`block w-3 h-3 rounded-full ${currentImg === 0 ? 'bg-[#2B2B2B]' : 'bg-[#DEDEDE]'}`} />
        <div className={`block w-3 h-3 rounded-full ${currentImg === 1 ? 'bg-[#2B2B2B]' : 'bg-[#DEDEDE]'}`} />
        <div className={`block w-3 h-3 rounded-full ${currentImg === 2 ? 'bg-[#2B2B2B]' : 'bg-[#DEDEDE]'}`} />
      </div>
    </div>
  );
}
