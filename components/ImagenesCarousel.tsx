import { useContext } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { LanguageContext } from "@/lib/languageContext";

const ImagenesCarousel = () => {
  const { language } = useContext(LanguageContext);

  const images = language === 'es' ? [
    { src: "/icono 1.png", alt: "comprometidos con el turismo sostenible" },
    { src: "/icono 2.png", alt: "experiencias y traslados" },
    { src: "/icono 3.png", alt: "grupos pequeños" },
    { src: "/icono 4.png", alt: "calidad y precios insuperables" },
    { src: "/icono 5.png", alt: "vive experiencias sin preocupaciones" },
  ] : [
    { src: "/icono1eng.png", alt: "committed to sustainable tourism" },
    { src: "/icono2eng.png", alt: "experiences and transfers" },
    { src: "/icono3eng.png", alt: "small groups" },
    { src: "/icono4eng.png", alt: "unbeatable quality and prices" },
    { src: "/icono5eng.png", alt: "live worry-free experiences" },
  ];

  return (
    <Carousel>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="flex justify-center items-center relative">
              <Image src={image.src} alt={image.alt} height={200} width={300} />
              <CarouselPrevious className="absolute left-4 lg:left-80 top-1/2 transform -translate-y-1/2" />
              <CarouselNext className="absolute right-4 lg:right-80 top-1/2 transform -translate-y-1/2" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImagenesCarousel;