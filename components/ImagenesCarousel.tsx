import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ImagenesCarousel = () => {
  const images = [
    { src: "/icono 1.png", alt: "comprometidos con el turismo sostenible" },
    { src: "/icono 2.png", alt: "experiencias y traslados" },
    { src: "/icono 3.png", alt: "grupos pequeños" },
    { src: "/icono 4.png", alt: "calidad y precios insuperables" },
    { src: "/icono 5.png", alt: "vive experiencias sin preocupaciones" },
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
