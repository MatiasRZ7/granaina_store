import Collections from "@/components/Collections";
import Image from "next/image";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <div className="relative h-[500px] md:h-[800px]">
        <Image
          src={"/Rivieratexto.png"}
          alt="banner"
          height={800}
          width={1350}
          className="z-0 w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full z-1 flex flex-col justify-center items-center space-y-1 font-rowdies">
          <div className="absolute bottom-1 right-1 bg-white bg-opacity-20 p-4 rounded backdrop-blur-md transform transition duration-500 hover:scale-110">
            <Image
              src="/LOGO 3 blanco.png"
              alt="Logo Riviera maya tour"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
      <Collections />
      <ProductList />
      <div className="flex items-center justify-center">
        <Image
          src={"/Rivieratexto.png"}
          alt="RivieraTexto"
          height={800}
          width={1350}
          className="z-0 shadow-lg"
        />
      </div>
      <Separator />
      <div className="flex items-center justify-center">
        <Image
          src={"/iconostexto1.png"}
          alt="IconosTexto"
          height={800}
          width={1350}
          className="z-0"
        />
      </div>
      <PreguntasFrecuentes />
      <Footer />
    </div>
  );
}

export const dynamic = "force-dynamic";
