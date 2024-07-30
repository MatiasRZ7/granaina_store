"use client";
import Image from "next/image";
import { useContext, ReactNode } from "react";
import { LanguageContext } from "@/lib/languageContext";
import ImagenesCarousel from "@/components/ImagenesCarousel";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";

interface ClientComponentProps {
  children: ReactNode;
}

const ClientComponent = ({ children }: ClientComponentProps) => {
  const { language } = useContext(LanguageContext);

  const images = {
    banner: language === 'es' ? "/VIVE.png" : "/VIVEENG.png",
    descubreLaMagia: language === 'es' ? "/descubrelamagia1.png" : "/discoverEng.png",
  };

  return (
    <>
      <div className="relative">
        <Image
          src={images.banner}
          alt="Riviera Maya Tour"
          height={800}
          width={1350}
          className="z-0 w-full h-[310px] sm:h-[1000px] md:h-[600px] lg:h-[800px]"
        />
        <div className="absolute top-0 left-0 w-full h-full z-1 flex flex-col justify-center items-center space-y-1 font-rowdies">
          <div className="absolute bottom-1 right-1 bg-white bg-opacity-20 p-4 rounded backdrop-blur-md transform transition duration-500 hover:scale-110">
            <Image
              src="/LOGO 3 blanco.png"
              alt="Logo Riviera Maya Tour"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
      {children}
      <div className="flex items-center justify-center mt-5 mb-2">
        <Image
          src={images.descubreLaMagia}
          alt="RivieraTexto"
          height={800}
          width={1350}
          className="z-0 shadow-lg border"
        />
      </div>
      <ImagenesCarousel />
      <PreguntasFrecuentes />
    </>
  );
};

export default ClientComponent;