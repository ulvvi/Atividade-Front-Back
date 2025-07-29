import { useState, useEffect } from 'react';
import car1 from '../assets/car1.png';


export default function ImageCarousel() {
  const images = [
    car1,
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-[143px] w-[327px] h-[210px]">
      <img
        src={images[currentImg]}
        alt="Carrosel imagem 1"
        className="w-[327px] h-[191px]"
      />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full ${
              currentImg === index ? 'bg-[#2B2B2B]' : 'bg-[#DEDEDE]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
