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
            <AlertDialogTitle>Additional information on prices</AlertDialogTitle>
            <AlertDialogDescription>
            Children from 4 to 12 years old pay 10 USD less than the adult price.
            Children from 0 to 3 years old do not pay.
              <br />
              For any other questions or queries you can contact us via email or phone number.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="hover:text-azul">Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  
  export default Alerta2;
  