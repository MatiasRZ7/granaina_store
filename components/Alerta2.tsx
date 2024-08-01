import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { useLanguage } from "@/lib/languageContext";

const Alerta2 = () => {
  const { language } = useLanguage();

  const messages: {
    [key: string]: { title: string; description: string; close: string };
  } = {
    en: {
      title: "Additional information on prices",
      description: `Children from 4 to 12 years old pay 10 USD less than the adult price.
                    Children from 0 to 3 years old do not pay.
                    For any other questions or queries you can contact us via email or phone number.`,
      close: "Close",
    },
    es: {
      title: "Información adicional sobre precios",
      description: `Los niños de 4 a 12 años pagan 10 USD menos que el precio de adulto.
                    Los niños de 0 a 3 años no pagan.
                    Para cualquier otra pregunta o consulta puede contactarnos por correo electrónico o número de teléfono.`,
      close: "Cerrar",
    },
  };

  const { title, description, close } = messages[language];

  return (
    <AlertDialog>
      <AlertDialogTrigger className="border shadow-lg rounded-full hover:bg-azul">
        <BsFillInfoSquareFill size={45} />
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-gray-300 text-black">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:text-azul">
            {close}
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alerta2;
