import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./card"
import celular from '../assets/AssetsHome/celular.svg';
import capa from '../assets/AssetsHome/capa.svg';
import carregador from '../assets/AssetsHome/carregador.png';
import mousepad from '../assets/AssetsHome/mousepad.png';
import teclado from '../assets/AssetsHome/teclado.png';
import smarttv from '../assets/AssetsHome/SmartTV.svg';
import monitor from '../assets/AssetsHome/monitor.svg';
import headset from '../assets/AssetsHome/headset.png';
import tablet from '../assets/AssetsHome/tablet.png';
import notebook from '../assets/AssetsHome/notebookCard.png';
import smartphone from '../assets/AssetsHome/smartphone.svg';
import smartwatch from '../assets/AssetsHome/smartwatch.svg';
import mouse from '../assets/AssetsHome/mouse.png';
import fone from '../assets/AssetsHome/foneDeOuvido.png';
import caixa from '../assets/AssetsHome/CaixaDeSom.png';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

export const Carousel1 = () => (
  <div className="mb-3">
    <Carousel responsive={responsive} arrows={false} draggable={true} itemClass="carousel-item" className="pl-[5.2%] h-[200px]">
      <Card image={celular} name={"Celular"} price={"800,00"}/>
      <Card image={capa} name={"Capa"} price={"20,00"}/>
      <Card image={carregador} name={"Carregador"} price={"50,00"}/>
      <Card image={mousepad} name={"Mousepad"} price={"60,00"}/>
      <Card image={teclado} name={"Teclado"} price={"120,00"}/>
    </Carousel>
  </div>
);
 
export const Carousel2 = () => (
  <div className="mb-3">
    <Carousel responsive={responsive} arrows={false} itemClass="carousel-item" className="pl-[5.2%] h-[200px]">
      <Card image={smarttv} name={"Smart TV"} price={"1400,00"}/>
      <Card image={monitor} name={"Monitor"} price={"750,00"}/>
      <Card image={headset} name={"Headset"} price={"250,00"}/>
      <Card image={tablet} name={"Tablet"} price={"300,00"}/>
      <Card image={notebook} name={"Notebook"} price={"900,00"}/>
    </Carousel>
  </div>

);

export const Carousel3 = () => (
  <div className="mb-3">
    <Carousel responsive={responsive} arrows={false} itemClass="carousel-item" className="pl-[5.2%] h-[200px]">
      <Card image={smartphone} name={"Smartphone"} price={"3200,00"}/>
      <Card image={smartwatch} name={"Smartwatch"} price={"900,00"}/>
      <Card image={mouse} name={"Mouse"} price={"50,00"}/>
      <Card image={fone} name={"Fone de ouvido"} price={"50,00"}/>
      <Card image={caixa} name={"Caixa de som"} price={"300,00"}/>
    </Carousel>
  </div>

);

