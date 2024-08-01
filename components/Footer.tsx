"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faTiktok,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Alerta3 from "./Alerta3";
import { useLanguage } from "@/lib/languageContext";

export default function Footer() {
  const { language } = useLanguage();

  const messages: { [key: string]: { customerService: string; getInTouch: string; copyright: string } } = {
    en: {
      customerService: "Customer Service",
      getInTouch: "Get in Touch",
      copyright: "© Riviera Maya Tour 2024. All rights reserved.",
    },
    es: {
      customerService: "Servicio al Cliente",
      getInTouch: "Contáctanos",
      copyright: "© Riviera Maya Tour 2024. Todos los derechos reservados.",
    },
  };

  const { customerService, getInTouch, copyright } = messages[language];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div>
            <div className="mb-4">
              <h2 className="text-base-medium font-semibold">
                {customerService}
              </h2>
            </div>
            <ul className="space-y-2">
              <Alerta3 />
            </ul>
          </div>
        </div>
        <div>
          <div className="text-center">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">{getInTouch}</h2>
            </div>
            <div className="flex sm:items-center sm:justify-center md:items-start md:justify-start mt-3">
              <a
                href="https://wa.me/529842079149?text=Hola%20Riviera%20Maya%20Tour,%20me%20gustaria%20preguntar%20sobre%20el%20%20tour..."
                title="WhatsApp"
                target="_blank"
                rel="nofollow"
                className="hover:text-gray-400 flex sm:flex-col md:flex-row justify-between w-full items-center flex-col"
              >
                <div className="flex justify-center items-center gap-16 sm:gap-4 md:gap-20">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <FontAwesomeIcon icon={faWhatsapp} style={{ width: '100%', height: 'auto' }} />
                  </div>
                </div>
              </a>
              <a
                href="mailto:rivieramayatour24@gmail.com"
                title="Email"
                target="_blank"
                rel="nofollow"
                className="hover:text-gray-400 flex sm:flex-col md:flex-row justify-between w-full items-center flex-col"
              >
                <div className="flex justify-center items-center gap-16 sm:gap-4 md:gap-20">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} style={{ width: '100%', height: 'auto' }} />
                  </div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/rivieramaya_tour/"
                title="Instagram"
                target="_blank"
                rel="nofollow"
                className="hover:text-gray-400 flex sm:flex-col md:flex-row justify-between w-full items-center flex-col"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <FontAwesomeIcon icon={faInstagram} style={{ width: '100%', height: 'auto' }} />
                </div>
              </a>
              <a
                href="https://tiktok.com/@rivieramayatour?_t=8nAfh5aGnrc&_r=1"
                title="Tiktok"
                target="_blank"
                rel="nofollow"
                className="hover:text-gray-400 flex sm:flex-col md:flex-row justify-between w-full items-center flex-col"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <FontAwesomeIcon icon={faTiktok} style={{ width: '100%', height: 'auto' }} />
                </div>
              </a>
              <a
                href="https://maps.app.goo.gl/SVNe3EfyKZuiRyLp7"
                title="Google"
                target="_blank"
                rel="nofollow"
                className="hover:text-gray-400 flex sm:flex-col md:flex-row justify-between w-full items-center flex-col"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <FontAwesomeIcon icon={faGoogle} style={{ width: '100%', height: 'auto' }} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <Link href="/">
              <Image
                src="/LOGO 3 blanco.png"
                width={100}
                height={100}
                alt="Riviera Maya Tour"
                className="mx-auto"
              />
            </Link>
          </div>
          <div>
            <Image
              src="/sello.png"
              width={80}
              height={80}
              alt="Safe Travels"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <div className="mb-4">
          <span>{copyright}</span>
        </div>
        <div>
        </div>
      </div>
    </footer>
  );
}