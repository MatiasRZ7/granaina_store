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
import Link from "next/link";

const Alerta3 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <p>Terminos y Condiciones</p>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-gray-300 text-black">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Condiciones generales de contratación
          </AlertDialogTitle>
          <AlertDialogDescription>
            En todos los tipos de pagos hay política de cancelación, se le
            informará por escrito y podrá consultarlo en cualquier momento antes
            y después de realizar su reserva. Para pagos con tarjeta, cualquiera
            de las aceptadas, por STRIPE: <br/> 
            <br/>
             No se permiten cambios a menos de 48
            horas de su excursión. <br/> Cancelaciones con menos de 48 horas a la
            salida de tour se penaliza con el 100% de la tarifa. <br/> No presentarse
            a su excursión a la hora proporcionada se penaliza con el 100% de la
            tarifa. <br/> Deberá enviar vía correo electrónico copia de su pasaporte
            para validar su identidad, después de realizar la compra nosotros se
            lo solicitaremos. <br/> El día de su excursión deberá firmar su asistencia
            al tour mediante un formato que nuestro guía le proporcionará.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:text-azul">
            Cerrar
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alerta3;
