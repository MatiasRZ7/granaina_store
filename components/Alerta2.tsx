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
  const Alerta2 = () => {
    return (
      <AlertDialog>
        <AlertDialogTrigger className="border shadow-lg rounded-full hover:bg-azul "><BsFillInfoSquareFill size={45}/></AlertDialogTrigger>
        <AlertDialogContent className="bg-gray-300 text-black">
          <AlertDialogHeader>
            <AlertDialogTitle>Informacion extra sobre los precios</AlertDialogTitle>
            <AlertDialogDescription>
              Niños de 4 a 12 años pagan 10 USD menos que el precio adulto.
              Niños de 0 a 3 años no pagan.
              <br />
              Para cualquier otra duda o consulta puedes contactarnos a traves de nuestro correo electronico o numero de telefono. 
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="hover:text-azul">Cerrar</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  
  export default Alerta2;
  