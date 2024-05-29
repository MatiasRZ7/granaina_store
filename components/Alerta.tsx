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
const Alerta = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="border shadow-lg rounded-full hover:bg-azul "><BsFillInfoSquareFill size={45}/></AlertDialogTrigger>
      <AlertDialogContent className="bg-gray-300 text-black">
        <AlertDialogHeader>
          <AlertDialogTitle>Informacion extra</AlertDialogTitle>
          <AlertDialogDescription>
            *CONSULTE PRECIOS ESPECIALES POR PARQUES DEL GRUPO XCARET. *CONSULTE
            PRECIOS ESPECIALES POR PAQUETES DE TOURS. *MANEJAMOS TOURS EN
            PRIVADO, CONSULTE PRECIOS. *DESCUENTOS ESPECIALES CON LA COMPRA DE 2
            TOURS (10% DE DESCUENTO), CON LA COMPRA DE 3 TOURS (15% DE
            DESCUENTO) Y CON LA COMPRA DE 4 TOURS O MÁS (20% DE DESCUENTO).
            *TRASLADOS AEROPUERTO-HOTEL Y HOTEL-AEROPUERTO DESDE 50 USD HASTA 4
            PASAJEROS. *TOUR DE COMPRAS PARA RECORRER CENTROS COMERCIALES EN
            ZONA HOTELERA CANUCN, TULUM CENTRO, PLAYA DEL CARMEN CENTRO…
            (DURANTE 6 HORAS) CONSULTE PRECIOS DEPENDIENDO DEL HOTEL.
            *TRANSPORTE PRIVADO PARA RECORRER LA RIVIERA MAYA (DURANTE 6 HORAS),
            CONSULTE PRECIOS DEPENDIENDO DEL HOTEL.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:text-azul">Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alerta;
