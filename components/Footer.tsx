import { LocalPhone, Email } from "@mui/icons-material";
import Image from "next/image";
import Alerta from "./Alerta";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-12 p-2 lg:p-8">
      <div className="max-w-xs shadow-md rounded-full transition-all duration-500 hover:bg-gradient-to-r hover:from-amarillo hover:to-verde-claro hover:rounded-full">
        <a href="/">
          <Image
            src="/LOGO 3 (2).png"
            alt="logo"
            width={90}
            height={90}
            className="max-w-xs mb-5"
          />
        </a>
      </div>
      
      <Alerta />
      <div className="max-w-xs shadow-md rounded p-3">
        <h3 className="mb-5 text-center">Contact</h3>
        <a href="tel:+529841364144">
          <div className="flex text-lg">
            <FaWhatsapp size={30} />
            <p className="ml-5 mb-4">+52 984 136 4144</p>
          </div>
        </a>
        <div className="flex">
          <Email />
          <a href="mailto:rivieramayatour24@gmail.com" className="ml-5 mb-4">
            rivieramayatour24@gmail.com
          </a>
        </div>
        <Image src="/payment.png" alt="payment" width={140} height={100} />
      </div>
    </div>
  );
};

export default Footer;
