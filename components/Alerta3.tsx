import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useLanguage } from "@/lib/languageContext";
import Link from "next/link";

const Alerta3 = () => {
  const { language } = useLanguage();

  const messages: {
    [key: string]: {
      trigger: string;
      title: string;
      description: string;
      close: string;
    };
  } = {
    en: {
      trigger: "Terms and Conditions",
      title: "General contracting conditions",
      description: `All types of payments have a cancellation policy, you will be informed in writing and you can consult it at any time before and after making your reservation. For card payments, any of the accepted ones, by STRIPE:\n\nNo changes are allowed less than 48 hours before your excursion. Cancellations less than 48 hours before the tour departure are penalized with 100% of the rate. Not showing up for your excursion at the provided time is penalized with 100% of the rate. You must send a copy of your passport via email to validate your identity, after making the purchase we will request it. On the day of your excursion, you must sign your attendance at the tour using a form that our guide will provide.`,
      close: "Close",
    },
    es: {
      trigger: "Términos y Condiciones",
      title: "Condiciones generales de contratación",
      description: `En todos los tipos de pagos hay política de cancelación, se le informará por escrito y podrá consultarlo en cualquier momento antes y después de realizar su reserva. Para pagos con tarjeta, cualquiera de las aceptadas, por STRIPE:\n\nNo se permiten cambios a menos de 48 horas de su excursión. Cancelaciones con menos de 48 horas a la salida de tour se penaliza con el 100% de la tarifa. No presentarse a su excursión a la hora proporcionada se penaliza con el 100% de la tarifa. Deberá enviar vía correo electrónico copia de su pasaporte para validar su identidad, después de realizar la compra nosotros se lo solicitaremos. El día de su excursión deberá firmar su asistencia al tour mediante un formato que nuestro guía le proporcionará.`,
      close: "Cerrar",
    },
  };

  const { trigger, title, description, close } = messages[language];

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <p>{trigger}</p>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-gray-300 text-black">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            <div style={{ whiteSpace: "pre-line" }}>{description}</div>
          </AlertDialogDescription>
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

export default Alerta3;