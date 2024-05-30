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
      <div className="underline flex flex-col items-center justify-center shadow-md rounded">
        <p className="font-rowdies text-body-medium">Useful Links</p>
        <ul className="list-none mt-5 cursor-pointer p-4">
          <li className="hover:text-red-500 mb-2">
            <a className="no-underline text-black hover:text-red-500">
              About Us
            </a>
          </li>
          <li className="hover:text-red-500 mb-2">
            <a className="no-underline text-black hover:text-red-500">
              Terms and Conditions
            </a>
          </li>
          <li className="hover:text-red-500 mb-2">
            <a className="no-underline text-black hover:text-red-500">
              Return and Refund Policy
            </a>
          </li>
        </ul>
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
          <p className="ml-5 mb-4">rentaldream@support.com</p>
        </div>
        <Image src="/payment.png" alt="payment" width={140} height={100} />
      </div>
    </div>
  );
};

export default Footer;
