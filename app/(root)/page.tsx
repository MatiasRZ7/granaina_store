import ClientComponent from "@/components/ClientComponent";
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Footer from "@/components/Footer";

const MainPage = () => {
  return (
    <div>
      <ClientComponent>
        <Collections />
        <ProductList />
        <Separator />
      </ClientComponent>
      <div className="flex items-center justify-center mt-5 mb-2">
        <Image
          src={"/rivieramayatour.png"}
          alt="RivieraTexto"
          height={800}
          width={1350}
          className="z-0 shadow-lg border transform transition duration-1000 hover:scale-95"
        />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;